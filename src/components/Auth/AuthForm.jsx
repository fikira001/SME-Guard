import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function AuthForm({ type }) {
    const { login, signup } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            if (type === 'signup') {
                const fullname = e.target.fullname.value;
                const business = e.target.business.value;
                await signup(email, password, fullname, business);
            } else {
                await login(email, password);
            }
            navigate('/dashboard');
        } catch (err) {
            setError('Failed to ' + (type === 'login' ? 'log in' : 'create account') + ': ' + err.message);
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <div className="bg-slate-800 p-8 md:p-10 rounded-2xl border border-slate-700 w-full max-w-md shadow-2xl z-10">
                <div className="flex justify-center mb-6">
                    <div className="bg-slate-700 p-3 rounded-full">
                        <Shield className="w-10 h-10 text-green-400" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-white text-center mb-2">
                    {type === 'login' ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p className="text-slate-400 text-center mb-8">
                    {type === 'login' ? 'Enter your details to access your dashboard' : 'Join thousands of secure SMEs in Nigeria'}
                </p>

                {error && <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg mb-4 text-sm">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-5">
                    {type === 'signup' && (
                        <>
                            <div>
                                <label className="block text-slate-300 mb-2 text-sm font-medium">Full Name</label>
                                <input name="fullname" type="text" required placeholder="Enter your full name" className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none transition" />
                            </div>
                            <div>
                                <label className="block text-slate-300 mb-2 text-sm font-medium">Business Name</label>
                                <input name="business" type="text" required placeholder="e.g. Lagos Ventures" className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none transition" />
                            </div>
                        </>
                    )}

                    <div>
                        <label className="block text-slate-300 mb-2 text-sm font-medium">Email Address</label>
                        <input name="email" type="email" required placeholder="name@company.com" className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none transition" />
                    </div>
                    <div>
                        <label className="block text-slate-300 mb-2 text-sm font-medium">Password</label>
                        <input name="password" type="password" required placeholder="••••••••" className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none transition" />
                    </div>

                    <button disabled={loading} type="submit" className="w-full py-4 bg-green-500 hover:bg-green-600 text-slate-900 font-bold rounded-lg transition shadow-lg shadow-green-900/20 mt-4 disabled:opacity-50">
                        {loading ? 'Processing...' : (type === 'login' ? 'Sign In' : 'Create Account')}
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-slate-400 text-sm">
                        {type === 'login' ? "Don't have an account? " : "Already have an account? "}
                        <Link to={type === 'login' ? '/signup' : '/login'} className="text-green-400 hover:text-green-300 font-bold transition">
                            {type === 'login' ? 'Sign Up' : 'Log In'}
                        </Link>
                    </p>
                </div>
                <div className="mt-4 text-center">
                    <Link to="/" className="text-slate-500 text-sm hover:text-slate-300">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}
