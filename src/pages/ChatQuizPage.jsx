import React from 'react';
import { useLocation, Navigate, Link } from 'react-router-dom';
import Quiz from '../components/Modules/Quiz';
import { ChevronRight } from 'lucide-react';

export default function ChatQuizPage() {
    const location = useLocation();
    const chatHistory = location.state?.chatHistory;

    // Redirect if accessed directly without chat history
    if (!chatHistory) {
        return <Navigate to="/dashboard" replace />;
    }

    // Create a "Virtual" Module based on the chat
    const virtualModule = {
        id: 'chat-quiz-' + Date.now(), // Unique ID to force re-render
        title: "Security Chat Assessment",
        description: "A personalized quiz based on your recent conversation with the AI Security Expert.",
        icon: null, // Quiz component handles null icon gracefully or ignores it
        xpReward: 50, // Smaller reward for ad-hoc quizzes
        resource: {
            title: "Your Chat Session",
            content: `### Quiz Context\n\nThis quiz is generated based on the specific security advice you just received.\n\n**Conversation Reference:**\n\n${chatHistory}`
        },
        questions: [] // Empty, relying on AI generation
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 min-h-[80vh]">
            <Link to="/dashboard" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-6 transition">
                <ChevronRight className="w-5 h-5 rotate-180" /> Back to Dashboard
            </Link>

            <div className="bg-gradient-to-r from-purple-900 to-indigo-900 p-8 rounded-2xl text-white mb-8 shadow-xl">
                <h1 className="text-3xl font-bold mb-2">Personalized Quiz</h1>
                <p className="text-purple-200">Testing your understanding of the recent advice.</p>
            </div>

            <Quiz module={virtualModule} onBack={() => window.history.back()} />
        </div>
    );
}
