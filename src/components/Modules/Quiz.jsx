import React, { useState } from 'react';
import { ChevronRight, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';

export default function Quiz({ module, onBack }) {
    const { completeModule } = useData();
    const [activeQuizIndex, setActiveQuizIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswer = (optionIndex) => {
        const isCorrect = optionIndex === module.questions[activeQuizIndex].correct;
        if (isCorrect) setScore(score + 1);

        const nextQuestion = activeQuizIndex + 1;
        if (nextQuestion < module.questions.length) {
            setActiveQuizIndex(nextQuestion);
        } else {
            setShowScore(true);
            // Calculate XP: if correct, add bonus? Logic from original code:
            // const xpEarned = isCorrect ? (score + 1) * 10 : score * 10; 
            // Wait, score isn't updated yet in state for the last question.
            // Let's fix the logic.
            const finalScore = isCorrect ? score + 1 : score;
            const xpEarned = Math.round((finalScore / module.questions.length) * module.xpReward);

            // Only award XP if passed? Or just give XP based on score?
            // Original code: const xpEarned = isCorrect ? (score + 1) * 10 : score * 10;
            // And it adds to user.xp.
            // Let's assume we give full reward if score > 70%? Or just proportional?
            // Let's stick to proportional for now or just fixed reward if completed.
            // Original code logic was a bit weird with * 10.
            // Let's just give the module.xpReward if they finish, maybe?
            // Or better: give module.xpReward * (score/total).

            if (finalScore > 0) {
                completeModule(module.id, xpEarned);
            }
        }
    };

    if (showScore) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl p-10 text-center animate-in fade-in zoom-in duration-300 border border-slate-200 max-w-2xl w-full">
                    <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Trophy className="w-12 h-12 text-yellow-500" />
                    </div>
                    <h2 className="text-4xl font-bold text-slate-800 mb-2">Module Complete!</h2>
                    <p className="text-slate-500 mb-10 text-lg">You scored {score} out of {module.questions.length}</p>

                    <div className="grid grid-cols-2 gap-6 mb-10">
                        <div className="bg-slate-50 p-6 rounded-2xl">
                            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">XP Earned</p>
                            <p className="text-3xl font-bold text-green-600">+{Math.round((score / module.questions.length) * module.xpReward)}</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl">
                            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Accuracy</p>
                            <p className="text-3xl font-bold text-blue-600">{Math.round((score / module.questions.length) * 100)}%</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Link
                            to="/modules"
                            className="flex-1 py-3 bg-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-300 transition block text-center"
                        >
                            Modules List
                        </Link>
                        <Link
                            to="/dashboard"
                            className="flex-1 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition block text-center"
                        >
                            Back to Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-2xl">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                    <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
                        <span className="text-slate-400 font-medium">Question {activeQuizIndex + 1}/{module.questions.length}</span>
                        <span className="text-green-400 font-bold">{module.title}</span>
                    </div>

                    <div className="p-8">
                        <h3 className="text-xl font-bold text-slate-800 mb-8 leading-snug">
                            {module.questions[activeQuizIndex].q}
                        </h3>

                        <div className="space-y-3">
                            {module.questions[activeQuizIndex].options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(idx)}
                                    className="w-full text-left p-5 rounded-xl border border-slate-200 hover:border-green-500 hover:bg-green-50 transition group flex items-center justify-between"
                                >
                                    <span className="text-slate-700 font-medium group-hover:text-green-700">{option}</span>
                                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-green-500 opacity-0 group-hover:opacity-100 transition" />
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="h-2 bg-slate-100">
                        <div
                            className="h-full bg-green-500 transition-all duration-300"
                            style={{ width: `${((activeQuizIndex) / module.questions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
