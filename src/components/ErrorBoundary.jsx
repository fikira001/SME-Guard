import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-red-50 p-4">
                    <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg w-full border border-red-200">
                        <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
                        <p className="text-slate-600 mb-4">The application encountered an unexpected error.</p>
                        <pre className="bg-slate-100 p-4 rounded text-xs overflow-auto text-red-800 font-mono mb-4">
                            {this.state.error && this.state.error.toString()}
                        </pre>
                        <button
                            onClick={() => window.location.reload()}
                            className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                        >
                            Reload Application
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
