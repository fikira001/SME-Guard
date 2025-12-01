import React from 'react';
import { Share2, Twitter, Linkedin, MessageCircle } from 'lucide-react';

export default function ShareButton({ title, text, url }) {
    const shareData = {
        title: title || "SME-Guard",
        text: text || "Check out my progress on SME-Guard!",
        url: url || window.location.href,
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error("Error sharing:", err);
            }
        } else {
            // Fallback for desktop if Web Share API not supported
            const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`;
            window.open(twitterUrl, '_blank');
        }
    };

    return (
        <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition font-medium text-sm"
        >
            <Share2 className="w-4 h-4" />
            Share Progress
        </button>
    );
}
