import React from 'react';
import { CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';

export default function ModulesPage() {
    const { modules } = useData();
    const { userData } = useAuth();
    const completedModules = userData?.completedModules || [];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 min-h-[80vh]">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900">Training Modules</h1>
                <p className="text-slate-500">Complete modules to earn XP and secure your business.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module) => {
                    const isCompleted = completedModules.includes(module.id);
                    return (
                        <div key={module.id} className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition p-6 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-slate-100 rounded-lg">
                                    {module.icon}
                                </div>
                                {isCompleted && <CheckCircle className="w-6 h-6 text-green-500" />}
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2">{module.title}</h3>
                            <p className="text-slate-500 text-sm mb-6 flex-1">{module.description}</p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-xs font-bold text-orange-500 flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-current" /> {module.xpReward} XP
                                </span>
                                <Link
                                    to={`/modules/${module.id}`}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition inline-block text-center ${isCompleted
                                            ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                            : 'bg-green-600 text-white hover:bg-green-700'
                                        }`}
                                >
                                    {isCompleted ? 'Review' : 'Start Module'}
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
