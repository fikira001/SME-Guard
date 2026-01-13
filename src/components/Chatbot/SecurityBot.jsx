import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useAuth } from '../../context/AuthContext';
import { chatWithSecurityBot } from '../../services/aiService';
import { MODULES_DATA } from '../../lib/data';

export default function SecurityBot() {
    const { userData } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm your SME-Guard Assistant. I'm powered by AI to help you secure your business. Ask me anything!", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isThinking, setIsThinking] = useState(false);
    const messagesEndRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isThinking]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || isThinking) return;

        // 1. Add User Message
        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsThinking(true);

        // 2. Prepare Context with User Details
        const currentPath = location.pathname;
        const availableModules = MODULES_DATA.map(m => m.title).join(", ");

        const userName = userData?.fullName || "Business Administrator";
        const businessName = userData?.businessName || "SME";
        const userXP = userData?.xp || 0;

        const context = `
        User Name: ${userName}
        Business Name: ${businessName}
        Current XP: ${userXP}
        Current URL: "${currentPath}"
        Available Modules: [${availableModules}]
        `;

        // 3. Call AI Service
        const responseText = await chatWithSecurityBot(userMsg.text, context);

        // 4. Add Bot Message
        const botMsg = {
            id: Date.now() + 1,
            text: responseText,
            sender: 'bot'
        };

        setMessages(prev => [...prev, botMsg]);
        setIsThinking(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white dark:bg-slate-900 border dark:border-slate-700 rounded-2xl shadow-2xl w-80 md:w-96 mb-4 overflow-hidden flex flex-col h-[500px] transition-colors duration-300">
                    {/* Header */}
                    <div className="bg-green-600 p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            <Bot className="w-6 h-6" />
                            <span className="font-bold">Security Assistant</span>
                        </div>
                        <div className="flex gap-2">
                            {messages.length > 2 && (
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        // Pass specific history to quiz
                                        const chatHistory = messages
                                            .filter(m => m.id !== 1) // Remove welcome message
                                            .map(m => `${m.sender.toUpperCase()}: ${m.text}`)
                                            .join('\n\n');

                                        navigate('/chat-quiz', { state: { chatHistory } });
                                    }}
                                    className="bg-white/20 hover:bg-white/30 text-white text-xs px-2 py-1 rounded"
                                    title="Generate Quiz from this conversation"
                                >
                                    Take Quiz
                                </button>
                            )}
                            <button onClick={() => setIsOpen(false)} className="hover:bg-green-700 p-1 rounded">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                    ? 'bg-green-600 text-white rounded-tr-none text-left'
                                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border dark:border-slate-700 rounded-tl-none shadow-sm text-left'
                                    }`}>
                                    {msg.sender === 'user' ? (
                                        <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                                    ) : (
                                        <div className="prose prose-sm dark:prose-invert max-w-none">
                                            <ReactMarkdown>{msg.text}</ReactMarkdown>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Thinking Indicator */}
                        {isThinking && (
                            <div className="flex justify-start">
                                <div className="bg-white dark:bg-slate-800 border dark:border-slate-700 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 text-green-600 animate-spin" />
                                    <span className="text-xs text-slate-500 font-medium">Thinking...</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggestion Chips - Only show when input is empty & no thinking */}
                    {!isThinking && messages.length < 4 && (
                        <div className="px-4 pb-2 flex gap-2 flex-wrap justify-end">
                            {["Spot Phishing", "Secure Business", "Passwords"].map((text) => (
                                <button
                                    key={text}
                                    onClick={() => setInput(text)}
                                    className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full hover:bg-green-100 transition"
                                >
                                    {text}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input */}
                    <form onSubmit={handleSend} className="p-3 bg-white dark:bg-slate-900 border-t dark:border-slate-800 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask specific security questions..."
                            disabled={isThinking}
                            className="flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-sm disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!input.trim() || isThinking}
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center"
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </button>
        </div>
    );
}
