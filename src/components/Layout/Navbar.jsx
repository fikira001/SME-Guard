import React, { useState } from 'react';
import { Shield, LogOut, Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar() {
    const { currentUser, userData, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
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
        <nav className="bg-white dark:bg-slate-900 border-b dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 cursor-pointer">
                        <Shield className="w-8 h-8 text-green-600" />
                        <span className="font-bold text-xl text-slate-900 dark:text-white">SME-Guard</span>
                    </Link>

                    {/* Desktop Navigation */}
                    {currentUser && (
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/dashboard" className={`text-sm font-medium transition ${isActive('/dashboard') ? 'text-green-600' : 'text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-500'}`}>Dashboard</Link>
                            <Link to="/resources" className={`text-sm font-medium transition ${isActive('/resources') ? 'text-green-600' : 'text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-500'}`}>Resources</Link>
                            <Link to="/modules" className={`text-sm font-medium transition ${isActive('/modules') ? 'text-green-600' : 'text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-500'}`}>Modules</Link>
                            <Link to="/leaderboard" className={`text-sm font-medium transition ${isActive('/leaderboard') ? 'text-green-600' : 'text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-500'}`}>Leaderboard</Link>
                        </div>
                    )}

                    {/* User Profile & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        {currentUser ? (
                            <>
                                <div className="hidden md:flex items-center gap-3 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full transition-colors">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                                        {userData?.name?.charAt(0) || 'U'}
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-bold text-slate-800 dark:text-white leading-none">{userData?.name?.split(' ')[0] || 'User'}</p>
                                        <p className="text-green-600 dark:text-green-400 text-xs font-bold">{userData?.xp || 0} XP</p>
                                    </div>
                                </div>
                                <button onClick={handleLogout} className="hidden md:block text-slate-400 hover:text-red-500" title="Logout">
                                    <LogOut className="w-5 h-5" />
                                </button>
                            </>
                        ) : (
                            <div className="hidden md:flex gap-4">
                                <Link to="/login" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition-colors">Login</Link>
                                <Link to="/signup" className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition">Sign Up</Link>
                            </div>
                        )}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden p-2 text-slate-600 dark:text-slate-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 p-4 space-y-4 shadow-lg absolute w-full">
                    {currentUser ? (
                        <>
                            <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left font-medium text-slate-700 dark:text-slate-200">Dashboard</Link>
                            <Link to="/resources" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left font-medium text-slate-700 dark:text-slate-200">Resources</Link>
                            <Link to="/modules" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left font-medium text-slate-700 dark:text-slate-200">Modules</Link>
                            <Link to="/leaderboard" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left font-medium text-slate-700 dark:text-slate-200">Leaderboard</Link>
                            <div className="pt-4 border-t dark:border-slate-800 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                                        {userData?.name?.charAt(0) || 'U'}
                                    </div>
                                    <span className="font-bold text-slate-800 dark:text-white">{userData?.name || 'User'}</span>
                                </div>
                                <button onClick={handleLogout} className="text-red-500 flex items-center gap-1 font-medium">
                                    Logout <LogOut className="w-4 h-4" />
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left font-medium text-slate-700 dark:text-slate-200">Login</Link>
                            <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left font-medium text-slate-700 dark:text-slate-200">Sign Up</Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}
