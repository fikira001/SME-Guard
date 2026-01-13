import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../lib/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function signup(email, password, name, businessName) {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(result.user, { displayName: name });

        // Create user document in Firestore
        const userDoc = {
            uid: result.user.uid,
            name,
            businessName,
            email,
            xp: 0,
            completedModules: [],
            createdAt: new Date().toISOString()
        };

        try {
            await setDoc(doc(db, "users", result.user.uid), userDoc);
            setUserData(userDoc);
        } catch (error) {
            console.error("Error writing user to Firestore:", error);
            // If permission denied (common in expired test projects), 
            // set local state anyway so user can enter.
            if (error.code === 'permission-denied') {
                console.warn("Firestore Permission Denied. User data will not persist on refresh.");
                setUserData(userDoc);
            } else {
                throw error; // Re-throw other errors
            }
        }
        return result;
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        let unsubscribeSnapshot = null;

        const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
            setCurrentUser(user);
            if (user) {
                // Real-time listener for user data
                const docRef = doc(db, "users", user.uid);
                unsubscribeSnapshot = onSnapshot(docRef, (docSnap) => {
                    if (docSnap.exists()) {
                        setUserData(docSnap.data());
                    }
                });
            } else {
                setUserData(null);
                if (unsubscribeSnapshot) unsubscribeSnapshot();
            }
            setLoading(false);
        });

        return () => {
            unsubscribeAuth();
            if (unsubscribeSnapshot) unsubscribeSnapshot();
        };
    }, []);

    function updateLocalUserData(newData) {
        setUserData(prev => ({ ...prev, ...newData }));
    }

    const value = {
        currentUser,
        userData,
        updateLocalUserData, // Exposed for optimistic updates
        signup,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {loading ? (
                <div className="min-h-screen flex items-center justify-center bg-slate-50">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-slate-600 font-medium">Loading SME-Guard...</p>
                    </div>
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
}
