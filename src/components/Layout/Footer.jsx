import React from 'react';
import { Shield, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Shield className="w-6 h-6 text-green-400" />
                        <span className="text-xl font-bold">SME-Guard</span>
                    </div>
                    <p className="text-slate-400 text-sm">Empowering Nigerian SMEs with gamified cybersecurity training and awareness.</p>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-green-400">Platform</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
                        <li><Link to="/modules" className="hover:text-white">Modules</Link></li>
                        <li><Link to="/leaderboard" className="hover:text-white">Leaderboard</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-green-400">Resources</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><button className="hover:text-white">Help Center</button></li>
                        <li><button className="hover:text-white">Privacy Policy</button></li>
                        <li><button className="hover:text-white">Terms of Service</button></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-green-400">Connect</h4>
                    <div className="flex gap-4">
                        <Twitter className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                        <Linkedin className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                        <Instagram className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                © 2024 SME-Guard Nigeria. All rights reserved.
            </div>
        </footer>
    );
}
