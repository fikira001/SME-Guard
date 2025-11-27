import React, { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

export default function LeaderboardPage() {
    const { userData } = useAuth();
    const [leaders, setLeaders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchLeaderboard() {
            try {
                const q = query(collection(db, "users"), orderBy("xp", "desc"), limit(10));
                const querySnapshot = await getDocs(q);
                const fetchedLeaders = [];
                querySnapshot.forEach((doc) => {
                    fetchedLeaders.push(doc.data());
                });
                setLeaders(fetchedLeaders);
            } catch (error) {
                console.error("Error fetching leaderboard:", error);
                // Fallback to mock data if Firestore fails or is empty
                setLeaders([
                    { name: "Lagos Tech Hub", xp: 1200, businessName: "Lagos Tech Hub" },
                    { name: "Kano Textiles Ltd", xp: 850, businessName: "Kano Textiles Ltd" },
                    { name: "Abuja Logistics", xp: 720, businessName: "Abuja Logistics" },
                    { name: "Benin Agro Allied", xp: 600, businessName: "Benin Agro Allied" },
                    { name: "Delta Oil Services", xp: 550, businessName: "Delta Oil Services" },
                ]);
            } finally {
                setLoading(false);
            }
        }

        fetchLeaderboard();
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 min-h-[80vh]">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                <div className="p-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
                    <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                    <h1 className="text-3xl font-bold mb-2">Top Secure SMEs</h1>
                    <p className="text-slate-400">Recognizing businesses committed to cybersecurity in Nigeria.</p>
                </div>

                <div className="divide-y divide-slate-100">
                    {loading ? (
                        <div className="p-8 text-center text-slate-500">Loading leaderboard...</div>
                    ) : (
                        leaders.map((leader, index) => (
                            <div key={index} className={`flex items-center justify-between p-6 ${leader.name === userData?.name ? 'bg-green-50' : 'hover:bg-slate-50'}`}>
                                <div className="flex items-center gap-6">
                                    <span className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg ${index === 0 ? 'bg-yellow-100 text-yellow-600' :
                                            index === 1 ? 'bg-slate-100 text-slate-600' :
                                                index === 2 ? 'bg-orange-100 text-orange-600' : 'text-slate-400'
                                        }`}>
                                        {index + 1}
                                    </span>
                                    <div>
                                        <p className={`font-bold text-lg ${leader.name === userData?.name ? 'text-green-700' : 'text-slate-800'}`}>
                                            {leader.businessName || leader.name} {leader.name === userData?.name && '(You)'}
                                        </p>
                                        <p className="text-sm text-slate-400">Verified Business</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-slate-800 text-xl">{leader.xp} XP</div>
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
