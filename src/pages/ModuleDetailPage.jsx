import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';
import { useData } from '../context/DataContext';
import Quiz from '../components/Modules/Quiz';

export default function ModuleDetailPage() {
    const { id } = useParams();
    const { modules } = useData();
    const [showQuiz, setShowQuiz] = useState(false);

    const module = modules.find(m => m.id === parseInt(id));

    if (!module) return <div>Module not found</div>;

    if (showQuiz) {
        return <Quiz module={module} onBack={() => setShowQuiz(false)} />;
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 min-h-[80vh]">
            <Link to="/modules" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-6 transition">
                <ChevronRight className="w-5 h-5 rotate-180" /> Back to Modules
            </Link>

            <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 mb-8 transition-colors">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100 dark:border-slate-700">
                    <BookOpen className="w-8 h-8 text-green-600 dark:text-green-500" />
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">{module.resource.title}</h1>
                        <p className="text-slate-500 dark:text-slate-400">Module: {module.title}</p>
                    </div>
                </div>
                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                    {module.resource.content}
                </div>
            </div>

            <div className="flex justify-between items-center bg-slate-900 dark:bg-slate-800 text-white p-6 rounded-xl border dark:border-slate-700">
                <div>
                    <p className="font-bold text-lg">Ready to test your knowledge?</p>
                    <p className="text-slate-400 text-sm">Earn {module.xpReward} XP by passing the quiz.</p>
                </div>
                <button
                    onClick={() => setShowQuiz(true)}
                    className="px-6 py-3 bg-green-500 text-slate-900 font-bold rounded-lg hover:bg-green-400 transition flex items-center gap-2"
                >
                    Start Quiz <ChevronRight />
                </button>
            </div>
        </div>
    );
}
