import React, { useState } from 'react';
import { Shield, LogOut, Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
    const { currentUser, userData, logout } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bg-white border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 cursor-pointer">
                        <Shield className="w-8 h-8 text-green-600" />
                        <span className="font-bold text-xl text-slate-900">SME-Guard</span>
                    </Link>

                    {/* Desktop Navigation */}
                    {currentUser && (
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/dashboard" className={`text-sm font-medium transition ${isActive('/dashboard') ? 'text-green-600' : 'text-slate-600 hover:text-green-600'}`}>Dashboard</Link>
                            <Link to="/modules" className={`text-sm font-medium transition ${isActive('/modules') ? 'text-green-600' : 'text-slate-600 hover:text-green-600'}`}>Modules</Link>
                            <Link to="/leaderboard" className={`text-sm font-medium transition ${isActive('/leaderboard') ? 'text-green-600' : 'text-slate-600 hover:text-green-600'}`}>Leaderboard</Link>
                            <Link to="/resources" className={`text-sm font-medium transition ${isActive('/resources') ? 'text-green-600' : 'text-slate-600 hover:text-green-600'}`}>Resources</Link>
                        </div>
                    )}

                    {/* User Profile & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        {currentUser ? (
                            <>
                                <div className="hidden md:flex items-center gap-3 bg-slate-100 px-3 py-1.5 rounded-full">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                                        {userData?.name?.charAt(0) || 'U'}
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-bold text-slate-800 leading-none">{userData?.name?.split(' ')[0] || 'User'}</p>
                                        <p className="text-green-600 text-xs font-bold">{userData?.xp || 0} XP</p>
                                    </div>
                                </div>
                                <button onClick={handleLogout} className="hidden md:block text-slate-400 hover:text-red-500" title="Logout">
                                    <LogOut className="w-5 h-5" />
                                </button>
                            </>
                        ) : (
                            <div className="hidden md:flex gap-4">
                                <Link to="/login" className="text-slate-600 hover:text-slate-900 font-medium">Login</Link>
                                <Link to="/signup" className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition">Sign Up</Link>
                            </div>
                        )}

                        {/* Mobile Menu Button */}
                        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t p-4 space-y-4 shadow-lg absolute w-full">
                    {currentUser ? (
                        <>
                            <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left font-medium text-slate-700">Dashboard</Link>
                            <Link to="/modules" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left font-medium text-slate-700">Modules</Link>
                            <Link to="/leaderboard" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left font-medium text-slate-700">Leaderboard</Link>
                            <Link to="/resources" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left font-medium text-slate-700">Resources</Link>
                            <div className="pt-4 border-t flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                                        {userData?.name?.charAt(0) || 'U'}
                                    </div>
                                    <span className="font-bold text-slate-800">{userData?.name || 'User'}</span>
                                </div>
                                <button onClick={handleLogout} className="text-red-500 flex items-center gap-1 font-medium">
                                    Logout <LogOut className="w-4 h-4" />
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left font-medium text-slate-700">Login</Link>
                            <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left font-medium text-slate-700">Sign Up</Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}
