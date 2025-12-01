import React from 'react';
import { Shield, Zap, BookOpen, Award, Lock } from 'lucide-react';

const BADGES = [
    { id: 'first_step', title: "First Step", description: "Completed 1st Module", icon: <BookOpen className="w-5 h-5" />, condition: (user) => user.completedModules?.length >= 1 },
    { id: 'quiz_master', title: "Quiz Master", description: "Earned 500+ XP", icon: <Zap className="w-5 h-5" />, condition: (user) => user.xp >= 500 },
    { id: 'dedicated', title: "Dedicated", description: "Completed 5 Modules", icon: <Shield className="w-5 h-5" />, condition: (user) => user.completedModules?.length >= 5 },
    { id: 'guardian', title: "Guardian", description: "Reached 1000 XP", icon: <Award className="w-5 h-5" />, condition: (user) => user.xp >= 1000 },
];

export default function BadgeList({ userData }) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 transition-colors">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-500" /> Achievements
            </h3>

            <div className="grid grid-cols-2 gap-4">
                {BADGES.map((badge) => {
                    const isUnlocked = badge.condition(userData);
                    return (
                        <div key={badge.id} className={`p-3 rounded-lg border flex items-center gap-3 transition-colors ${isUnlocked ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-700 opacity-60'}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isUnlocked ? 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>
                                {isUnlocked ? badge.icon : <Lock className="w-4 h-4" />}
                            </div>
                            <div>
                                <p className={`text-sm font-bold ${isUnlocked ? 'text-slate-800 dark:text-white' : 'text-slate-500 dark:text-slate-500'}`}>{badge.title}</p>
                                <p className="text-xs text-slate-400 leading-tight">{badge.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
