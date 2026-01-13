import React from 'react';
import { Shield, Star, BookOpen, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import LevelProgress from '../components/Gamification/LevelProgress';
import BadgeList from '../components/Gamification/BadgeList';
import ShareButton from '../components/Common/ShareButton';

export default function DashboardPage() {
    const { userData } = useAuth();
    const { modules } = useData();

    const completedCount = userData?.completedModules?.length || 0;
    const totalModules = modules.length;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 min-h-[80vh]">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 mb-8 text-white relative overflow-hidden shadow-xl animate-fade-in-up">
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold mb-2">Welcome back, {userData?.name?.split(' ')[0]}! 👋</h1>
                    <p className="text-slate-300 mb-6 max-w-2xl">
                        You have completed <span className="text-green-400 font-bold">{completedCount}</span> out of <span className="font-bold">{totalModules}</span> modules.
                        Keep going to secure <span className="text-white font-bold">{userData?.businessName}</span>.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/modules" className="bg-green-500 text-slate-900 px-6 py-2 rounded-lg font-bold hover:bg-green-400 transition">Continue Training</Link>
                        <Link to="/leaderboard" className="bg-slate-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-600 transition">View Leaderboard</Link>
                        <ShareButton
                            text={`I'm learning cybersecurity on SME-Guard! I've reached Level ${userData?.xp > 200 ? '2' : '1'} and earned ${userData?.xp} XP. #SMEGuard #CyberSecurity`}
                        />
                    </div>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10">
                    <Shield className="w-64 h-64 -mb-12 -mr-12" />
                </div>
            </div>

            {/* Stats Grid */}
            {/* Gamification Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2 space-y-6 animate-fade-in-up delay-100">
                    <LevelProgress xp={userData?.xp || 0} />

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-3 transition-colors">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400"><BookOpen className="w-6 h-6" /></div>
                            <div>
                                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase">Modules</p>
                                <p className="text-xl font-bold text-slate-800 dark:text-white">{completedCount}/{totalModules}</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-3 transition-colors">
                            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400"><Star className="w-6 h-6" /></div>
                            <div>
                                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase">Total XP</p>
                                <p className="text-xl font-bold text-slate-800 dark:text-white">{userData?.xp || 0}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 animate-fade-in-up delay-200">
                    <BadgeList userData={userData || {}} />
                </div>
            </div>

            {/* Recent Modules (Preview) */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">Recommended Modules</h2>
                <Link to="/modules" className="text-green-600 dark:text-green-400 font-medium hover:underline">View All</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up delay-300">
                {modules.slice(0, 3).map(module => (
                    <Link key={module.id} to={`/modules/${module.id}`} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="mb-4 relative z-10 transform group-hover:scale-110 transition duration-300">{module.icon}</div>
                        <h3 className="font-bold text-slate-800 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition relative z-10">{module.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 relative z-10">{module.description}</p>
                    </Link>
                ))}
            </div>
        </div >
    );
}
