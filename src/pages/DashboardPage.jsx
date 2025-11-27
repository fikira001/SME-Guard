import React from 'react';
import { Shield, Star, BookOpen, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';

export default function DashboardPage() {
    const { userData } = useAuth();
    const { modules } = useData();

    const completedCount = userData?.completedModules?.length || 0;
    const totalModules = modules.length;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 min-h-[80vh]">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 mb-8 text-white relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold mb-2">Welcome back, {userData?.name?.split(' ')[0]}! 👋</h1>
                    <p className="text-slate-300 mb-6 max-w-2xl">
                        You have completed <span className="text-green-400 font-bold">{completedCount}</span> out of <span className="font-bold">{totalModules}</span> modules.
                        Keep going to secure <span className="text-white font-bold">{userData?.businessName}</span>.
                    </p>
                    <div className="flex gap-4">
                        <Link to="/modules" className="bg-green-500 text-slate-900 px-6 py-2 rounded-lg font-bold hover:bg-green-400 transition">Continue Training</Link>
                        <Link to="/leaderboard" className="bg-slate-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-600 transition">View Leaderboard</Link>
                    </div>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10">
                    <Shield className="w-64 h-64 -mb-12 -mr-12" />
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-lg text-green-600"><Star className="w-8 h-8" /></div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Total XP</p>
                        <p className="text-3xl font-bold text-slate-800">{userData?.xp || 0}</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600"><BookOpen className="w-8 h-8" /></div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Modules Done</p>
                        <p className="text-3xl font-bold text-slate-800">{completedCount}/{totalModules}</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-yellow-100 rounded-lg text-yellow-600"><Trophy className="w-8 h-8" /></div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Current Rank</p>
                        <p className="text-3xl font-bold text-slate-800">#4</p>
                    </div>
                </div>
            </div>

            {/* Recent Modules (Preview) */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-800">Recommended Modules</h2>
                <Link to="/modules" className="text-green-600 font-medium hover:underline">View All</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {modules.slice(0, 3).map(module => (
                    <Link key={module.id} to={`/modules/${module.id}`} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition cursor-pointer group">
                        <div className="mb-4">{module.icon}</div>
                        <h3 className="font-bold text-slate-800 mb-2 group-hover:text-green-600 transition">{module.title}</h3>
                        <p className="text-sm text-slate-500 line-clamp-2">{module.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
