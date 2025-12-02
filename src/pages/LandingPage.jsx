import React from 'react';
import { Shield, ChevronRight, User, Trophy, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Layout/Footer';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col">
            {/* Note: Navbar is handled in Layout */}

            <main className="flex-1 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden py-20">
                {/* Decorative Background Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight z-10">
                    Secure Your Business <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Against Cyber Threats</span>
                </h1>
                <p className="text-slate-400 text-xl max-w-2xl mb-10 z-10 leading-relaxed">
                    The #1 Gamified Cybersecurity Awareness Platform for Nigerian SMEs.
                    Learn to spot fake alerts, secure your POS, and protect your staff.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 z-10">
                    <Link to="/signup" className="px-8 py-4 bg-green-500 hover:bg-green-600 text-slate-900 font-bold rounded-lg text-lg flex items-center justify-center gap-2 transition transform hover:scale-105">
                        Start Free Training <ChevronRight />
                    </Link>
                    <Link to="/modules" className="px-8 py-4 border border-slate-700 hover:border-green-400 rounded-lg text-lg font-medium transition">
                        View Modules
                    </Link>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl text-left z-10">
                    <div className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-green-500/50 transition">
                        <User className="w-10 h-10 text-green-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Role-Based Learning</h3>
                        <p className="text-slate-400">Tailored content for business owners, accountants, and general staff members.</p>
                    </div>
                    <div className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-yellow-500/50 transition">
                        <Trophy className="w-10 h-10 text-yellow-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Gamified XP System</h3>
                        <p className="text-slate-400">Earn badges, climb the leaderboard, and compete with other SMEs.</p>
                    </div>
                    <div className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-500/50 transition">
                        <Lock className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Nigerian Context</h3>
                        <p className="text-slate-400">Specific modules on Fake Alerts, POS Fraud, BVN Security and more.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
