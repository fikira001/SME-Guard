import React from 'react';
import { Trophy, Star } from 'lucide-react';

const RANKS = [
    { minXp: 0, title: "Cyber Rookie", color: "text-slate-600" },
    { minXp: 200, title: "Security Analyst", color: "text-blue-600" },
    { minXp: 500, title: "Defense Specialist", color: "text-purple-600" },
    { minXp: 1000, title: "Cyber Expert", color: "text-orange-600" },
    { minXp: 2000, title: "SME Guardian", color: "text-green-600" }
];

export default function LevelProgress({ xp }) {
    // Determine current rank
    let currentRank = RANKS[0];
    let nextRank = RANKS[1];

    for (let i = 0; i < RANKS.length; i++) {
        if (xp >= RANKS[i].minXp) {
            currentRank = RANKS[i];
            nextRank = RANKS[i + 1] || { minXp: xp * 1.5, title: "Legend" }; // Fallback for max level
        }
    }

    const xpForCurrentLevel = nextRank.minXp - currentRank.minXp;
    const xpProgressInLevel = xp - currentRank.minXp;
    const progressPercentage = Math.min(100, Math.max(0, (xpProgressInLevel / xpForCurrentLevel) * 100));

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 transition-colors">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Current Rank</h3>
                    <p className={`text-2xl font-bold ${currentRank.color}`}>{currentRank.title}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-500">
                    <Trophy className="w-6 h-6" />
                </div>
            </div>

            <div className="mb-2 flex justify-between text-xs font-bold text-slate-500">
                <span>{xp} XP</span>
                <span>{nextRank.minXp} XP (Next Level)</span>
            </div>

            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div
                    className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
            <p className="text-xs text-slate-400 mt-2 text-center">
                Earn {nextRank.minXp - xp} more XP to become a {nextRank.title}!
            </p>
        </div>
    );
}
