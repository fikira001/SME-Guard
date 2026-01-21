import React from 'react';
import { Shield, ChevronRight, User, Trophy, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Layout/Footer';
import { useAuth } from '../context/AuthContext';

export default function LandingPage() {
    const { currentUser } = useAuth();

    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col">
            {/* Note: Navbar is handled in Layout */}

            <main className="flex-1 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden py-20">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
                <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>

                <div className="relative z-10 animate-fade-in-up">

                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                        Secure Your Business <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Against Cyber Threats</span>
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
                        The #1 Gamified Cybersecurity Awareness Platform for Nigerian SMEs.
                        Learn to spot fake alerts, secure your POS, and protect your staff.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {currentUser ? (
                            <Link to="/dashboard" className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-green-900/20">
                                Go to Dashboard <ChevronRight />
                            </Link>
                        ) : (
                            <Link to="/signup" className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-green-900/20">
                                Start Free Training <ChevronRight />
                            </Link>
                        )}
                        <Link to="/modules" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 hover:border-slate-600 rounded-xl text-lg font-medium transition-all">
                            View Modules
                        </Link>
                    </div>
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl text-left z-10 w-full animate-fade-in-up delay-200">
                    <div className="p-8 bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition duration-300 group">
                        <div className="w-14 h-14 bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                            <User className="w-8 h-8 text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Role-Based Learning</h3>
                        <p className="text-slate-400 leading-relaxed">Tailored content for business owners, accountants, and general staff members.</p>
                    </div>
                    <div className="p-8 bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition duration-300 group">
                        <div className="w-14 h-14 bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                            <Trophy className="w-8 h-8 text-yellow-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Gamified XP System</h3>
                        <p className="text-slate-400 leading-relaxed">Earn badges, climb the leaderboard, and compete with other SMEs.</p>
                    </div>
                    <div className="p-8 bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition duration-300 group">
                        <div className="w-14 h-14 bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                            <Lock className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Nigerian Context</h3>
                        <p className="text-slate-400 leading-relaxed">Specific modules on Fake Alerts, POS Fraud, BVN Security and more.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
