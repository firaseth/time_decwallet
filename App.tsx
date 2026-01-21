
import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Bridge from './components/Bridge';
import SecurityGuard from './components/SecurityGuard';
import History from './components/History';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'bridge':
        return <Bridge />;
      case 'security':
        return <SecurityGuard />;
      case 'history':
        return <History />;
      default:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center p-8">
            <i className="fa-solid fa-hammer text-slate-700 text-6xl mb-6"></i>
            <h2 className="text-2xl font-bold text-slate-500">Under Construction</h2>
            <p className="text-slate-600 mt-2">The {activeTab} module is currently being optimized for high-security performance.</p>
            <button 
               onClick={() => setActiveTab('dashboard')}
               className="mt-6 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all"
            >
              Back to Dashboard
            </button>
          </div>
        );
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default App;
