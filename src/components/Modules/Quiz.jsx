import React, { useState, useEffect } from 'react';
import { ChevronRight, Trophy, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { generateQuizQuestions } from '../../services/aiService';

export default function Quiz({ module, onBack }) {
    const { completeModule } = useData();
    const [activeQuizIndex, setActiveQuizIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    // AI Integration State
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [selectedOption, setSelectedOption] = useState(null);
    const [answers, setAnswers] = useState({}); // Store answers for all questions

    useEffect(() => {
        const fetchQuestions = async () => {
            setIsLoading(true);
            try {
                // Determine if we should try AI generation
                // Only try if we have an API key (handled in service) and content available
                const aiQuestions = await generateQuizQuestions(module.resource.content);

                if (aiQuestions && Array.isArray(aiQuestions) && aiQuestions.length > 0) {
                    setQuestions(aiQuestions);
                } else {
                    // Fallback to static questions
                    setQuestions(module.questions);
                }
            } catch (error) {
                console.error("Quiz generation failed:", error);
                setQuestions(module.questions);
            } finally {
                setIsLoading(false);
            }
        };

        if (module) {
            fetchQuestions();
        }
    }, [module]);

    const handleOptionSelect = (optionIndex) => {
        setSelectedOption(optionIndex);
        setAnswers(prev => ({ ...prev, [activeQuizIndex]: optionIndex }));
    };

    const handleNext = () => {
        const nextQuestion = activeQuizIndex + 1;
        if (nextQuestion < questions.length) {
            setActiveQuizIndex(nextQuestion);
            setSelectedOption(answers[nextQuestion] ?? null);
        } else {
            finishQuiz();
        }
    };

    const handlePrev = () => {
        const prevQuestion = activeQuizIndex - 1;
        if (prevQuestion >= 0) {
            setActiveQuizIndex(prevQuestion);
            setSelectedOption(answers[prevQuestion]);
        }
    };

    const finishQuiz = () => {
        let calculatedScore = 0;
        questions.forEach((q, index) => {
            if (answers[index] === q.correct) {
                calculatedScore += 1;
            }
        });

        setScore(calculatedScore);
        setShowScore(true);

        const xpEarned = Math.round((calculatedScore / questions.length) * module.xpReward);
        if (calculatedScore > 0) {
            completeModule(module.id, xpEarned);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 space-y-4">
                <Loader2 className="w-12 h-12 text-green-500 animate-spin" />
                <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Generating Quiz...</h3>
                    <p className="text-slate-500 dark:text-slate-400">Our AI is crafting unique questions just for you.</p>
                </div>
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
                <p className="text-red-500">Failed to load questions. Please try again.</p>
                <button onClick={onBack} className="mt-4 px-4 py-2 bg-slate-200 rounded-lg">Go Back</button>
            </div>
        );
    }

    if (showScore) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-10 text-center animate-in fade-in zoom-in duration-300 border border-slate-200 dark:border-slate-700 max-w-2xl w-full transition-colors">
                    <div className="w-24 h-24 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Trophy className="w-12 h-12 text-yellow-500" />
                    </div>
                    <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">Module Complete!</h2>
                    <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg">You scored {score} out of {questions.length}</p>

                    <div className="grid grid-cols-2 gap-6 mb-10">
                        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl">
                            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">XP Earned</p>
                            <p className="text-3xl font-bold text-green-600 dark:text-green-400">+{Math.round((score / questions.length) * module.xpReward)}</p>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl">
                            <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Accuracy</p>
                            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{Math.round((score / questions.length) * 100)}%</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Link
                            to="/modules"
                            className="flex-1 py-3 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition block text-center"
                        >
                            Modules List
                        </Link>
                        <Link
                            to="/dashboard"
                            className="flex-1 py-3 bg-slate-900 dark:bg-green-600 text-white font-bold rounded-lg hover:bg-slate-800 dark:hover:bg-green-700 transition block text-center"
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
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700 transition-colors">
                    <div className="bg-slate-900 dark:bg-slate-950 p-6 flex justify-between items-center text-white">
                        <span className="text-slate-400 font-medium">Question {activeQuizIndex + 1}/{questions.length}</span>
                        <span className="text-green-400 font-bold">{module.title}</span>
                    </div>

                    <div className="p-8">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-8 leading-snug">
                            {questions[activeQuizIndex].q}
                        </h3>

                        <div className="space-y-3">
                            {questions[activeQuizIndex].options.map((option, idx) => {
                                const letters = ['A', 'B', 'C', 'D'];
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionSelect(idx)}
                                        className={`w-full text-left p-5 rounded-xl border transition group flex items-center justify-between ${selectedOption === idx
                                            ? 'border-green-500 bg-green-50 dark:bg-green-900/20 ring-1 ring-green-500'
                                            : 'border-slate-200 dark:border-slate-700 hover:border-green-500 dark:hover:border-green-500 hover:bg-slate-50 dark:hover:bg-slate-800'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${selectedOption === idx
                                                ? 'bg-green-500 text-white'
                                                : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 group-hover:bg-green-100 dark:group-hover:bg-green-900/40 group-hover:text-green-600 dark:group-hover:text-green-400'
                                                }`}>
                                                {letters[idx]}
                                            </span>
                                            <span className={`font-medium ${selectedOption === idx ? 'text-green-700 dark:text-green-400' : 'text-slate-700 dark:text-slate-300'}`}>{option}</span>
                                        </div>
                                        {selectedOption === idx && <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0"></div>}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="flex justify-between mt-8">
                            <button
                                onClick={handlePrev}
                                disabled={activeQuizIndex === 0}
                                className="px-6 py-2 rounded-lg font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
                            >
                                Previous
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={selectedOption === null}
                                className="px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2"
                            >
                                {activeQuizIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <div className="h-2 bg-slate-100 dark:bg-slate-700">
                        <div
                            className="h-full bg-green-500 transition-all duration-300"
                            style={{ width: `${((activeQuizIndex) / questions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
