import React from 'react';
import { FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

export default function ResourcesPage() {
    const { modules } = useData();

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 min-h-[80vh]">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900">Resource Library</h1>
                <p className="text-slate-500">Read articles and guides to improve your cybersecurity knowledge.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {modules.map((module) => (
                    <Link key={module.id} to={`/modules/${module.id}`} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4 hover:border-green-500 transition cursor-pointer">
                        <div className="shrink-0 pt-1">
                            <FileText className="w-8 h-8 text-slate-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 mb-1">{module.resource.title}</h3>
                            <p className="text-xs text-green-600 font-bold mb-2 uppercase tracking-wide">{module.title}</p>
                            <p className="text-sm text-slate-500 line-clamp-2">{module.resource.content}</p>
                            <span className="text-green-600 text-sm font-medium mt-3 inline-flex items-center gap-1">Read Article <ChevronRight className="w-4 h-4" /></span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
