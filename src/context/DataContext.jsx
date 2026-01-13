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
    const { currentUser, userData, updateLocalUserData } = useAuth();
    const [modules, setModules] = useState(MODULES_DATA || []);

    async function completeModule(moduleId, xpEarned) {
        if (!currentUser) return;

        // Check if already completed to avoid double counting
        if (userData?.completedModules?.includes(moduleId)) return;

        // --- OPTIMISTIC UPDATE START ---
        // Immediately reflect changes in UI (Dashboard, Header, etc)
        const newXP = (userData?.xp || 0) + xpEarned;
        const newModules = [...(userData?.completedModules || []), moduleId];

        updateLocalUserData({
            xp: newXP,
            completedModules: newModules
        });
        // --- OPTIMISTIC UPDATE END ---

        const userRef = doc(db, "users", currentUser.uid);

        try {
            await updateDoc(userRef, {
                completedModules: arrayUnion(moduleId),
                xp: increment(xpEarned)
            });
        } catch (error) {
            console.error("Error updating module completion:", error);
            if (error.code === 'permission-denied') {
                console.warn("Firestore Write Failed (Permission Denied). XP will revert on refresh.");
                // We keep the local state so the user SESSION feels good.
            }
        }
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
