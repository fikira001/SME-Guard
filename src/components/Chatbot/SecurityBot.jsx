import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Shield, Bot } from 'lucide-react';
import { MODULES_DATA } from '../../lib/data';

export default function SecurityBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm your SME-Guard Assistant. Ask me anything about cybersecurity (e.g., 'How do I stop phishing?', 'What is 2FA?').", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // User Message
        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Bot Logic (Simple Keyword Search)
        setTimeout(() => {
            const lowerInput = input.toLowerCase();
            let foundAnswer = null;

            // Search through modules
            for (const module of MODULES_DATA) {
                if (module.title.toLowerCase().includes(lowerInput) ||
                    module.description.toLowerCase().includes(lowerInput) ||
                    module.resource.content.toLowerCase().includes(lowerInput)) {

                    foundAnswer = {
                        text: `Here's what I found in the "${module.title}" module:\n\n${module.resource.keyTakeaways[0]}\n\nCheck out the full module for more!`,
                        link: `/modules/${module.id}`
                    };
                    break;
                }
            }

            const botMsg = {
                id: Date.now() + 1,
                text: foundAnswer ? foundAnswer.text : "I'm not sure about that one yet. Try asking about 'passwords', 'phishing', or 'ransomware', or check our Resources page.",
                sender: 'bot',
                link: foundAnswer?.link
            };
            setMessages(prev => [...prev, botMsg]);
        }, 1000);
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
                        <button onClick={() => setIsOpen(false)} className="hover:bg-green-700 p-1 rounded">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                        ? 'bg-green-600 text-white rounded-tr-none'
                                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border dark:border-slate-700 rounded-tl-none shadow-sm'
                                    }`}>
                                    <p className="whitespace-pre-wrap">{msg.text}</p>
                                    {msg.link && (
                                        <a href={msg.link} className="block mt-2 text-xs underline font-bold opacity-90 hover:opacity-100">
                                            Go to Module &rarr;
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSend} className="p-3 bg-white dark:bg-slate-900 border-t dark:border-slate-800 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask a security question..."
                            className="flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                        />
                        <button type="submit" className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition disabled:opacity-50" disabled={!input.trim()}>
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
