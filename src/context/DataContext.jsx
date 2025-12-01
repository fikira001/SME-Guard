import React, { createContext, useContext, useState, useEffect } from 'react';
import { MODULES_DATA } from '../lib/data';
import { useAuth } from './AuthContext';
import { doc, updateDoc, arrayUnion, increment } from 'firebase/firestore';
import { db } from '../lib/firebase';

const DataContext = createContext();

export function useData() {
    return useContext(DataContext);
}

export function DataProvider({ children }) {
    const { currentUser, userData } = useAuth();
    const [modules, setModules] = useState(MODULES_DATA || []);

    async function completeModule(moduleId, xpEarned) {
        if (!currentUser) return;

        // Update local state is handled by AuthContext's userData usually, 
        // but we can optimistically update or wait for real-time listener.
        // For now, we'll just write to Firestore.

        const userRef = doc(db, "users", currentUser.uid);

        // Check if already completed to avoid double counting if called incorrectly
        if (userData?.completedModules?.includes(moduleId)) return;

        await updateDoc(userRef, {
            completedModules: arrayUnion(moduleId),
            xp: increment(xpEarned)
        });
    }

    const value = {
        modules,
        completeModule
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}
