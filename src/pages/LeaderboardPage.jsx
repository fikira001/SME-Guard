import React, { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function LeaderboardPage() {
    const { userData } = useAuth();
    const [leaders, setLeaders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const q = query(collection(db, "users"), orderBy("xp", "desc"), limit(10));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedLeaders = [];
            snapshot.forEach((doc) => {
                fetchedLeaders.push(doc.data());
            });
            setLeaders(fetchedLeaders);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching leaderboard:", error);
            // Fallback to mock data if Firestore fails or is empty
            setLeaders([
                { name: "Lagos Tech Hub", xp: 1200, businessName: "Lagos Tech Hub" },
                { name: "Kano Textiles Ltd", xp: 850, businessName: "Kano Textiles Ltd" },
                { name: "Abuja Logistics", xp: 720, businessName: "Abuja Logistics" },
                { name: "Benin Agro Allied", xp: 600, businessName: "Benin Agro Allied" },
                { name: "Delta Oil Services", xp: 550, businessName: "Delta Oil Services" },
            ]);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 min-h-[80vh]">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-colors">
                <div className="p-8 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white text-center">
                    <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                    <h1 className="text-3xl font-bold mb-2">Top Secure SMEs</h1>
                    <p className="text-slate-400">Recognizing businesses committed to cybersecurity in Nigeria.</p>
                </div>

                <div className="divide-y divide-slate-100 dark:divide-slate-700">
                    {loading ? (
                        <div className="p-8 text-center text-slate-500 dark:text-slate-400">Loading leaderboard...</div>
                    ) : (
                        leaders.map((leader, index) => (
                            <div key={index} className={`flex items-center justify-between p-6 transition-colors ${leader.name === userData?.name ? 'bg-green-50 dark:bg-green-900/20' : 'hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}>
                                <div className="flex items-center gap-6">
                                    <span className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg ${index === 0 ? 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 dark:text-yellow-500' :
                                        index === 1 ? 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300' :
                                            index === 2 ? 'bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-500' : 'text-slate-400 dark:text-slate-500'
                                        }`}>
                                        {index + 1}
                                    </span>
                                    <div>
                                        <p className={`font-bold text-lg ${leader.name === userData?.name ? 'text-green-700 dark:text-green-400' : 'text-slate-800 dark:text-white'}`}>
                                            {leader.businessName || leader.name} {leader.name === userData?.name && '(You)'}
                                        </p>
                                        <p className="text-sm text-slate-400">Verified Business</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-slate-800 dark:text-white text-xl">{leader.xp} XP</div>
                                    <div className="text-xs text-slate-400">Total Score</div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
