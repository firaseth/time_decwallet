
import React, { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { id: 'dashboard', icon: 'fa-house', label: 'Dashboard' },
    { id: 'bridge', icon: 'fa-bridge', label: 'Bridge' },
    { id: 'security', icon: 'fa-shield-halved', label: 'AI Guard' },
    { id: 'history', icon: 'fa-clock-rotate-left', label: 'History' },
    { id: 'settings', icon: 'fa-gear', label: 'Settings' }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#020617]">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 glass flex flex-col h-full border-r border-slate-800`}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 time-gradient rounded-lg flex items-center justify-center">
            <i className="fa-solid fa-hourglass-half text-white text-sm"></i>
          </div>
          {isSidebarOpen && <span className="font-bold text-xl tracking-tight text-white">TIME</span>}
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group ${
                activeTab === item.id 
                  ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' 
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              <i className={`fa-solid ${item.icon} w-6 text-lg`}></i>
              {isSidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
           <button 
             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
             className="w-full flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800"
           >
             <i className={`fa-solid ${isSidebarOpen ? 'fa-angles-left' : 'fa-angles-right'}`}></i>
           </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Top Header */}
        <header className="h-16 glass border-b border-slate-800 flex items-center justify-between px-8 z-20">
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-700">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
               <span className="text-sm font-medium text-slate-300">Ethereum Mainnet</span>
             </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-slate-900 border border-slate-700 rounded-full px-4 py-1.5 flex items-center gap-2">
               <span className="text-xs text-slate-400 font-mono">0x56aD...1f9B</span>
               <button className="text-slate-500 hover:text-white">
                 <i className="fa-solid fa-copy text-xs"></i>
               </button>
            </div>
            <button className="w-8 h-8 rounded-full overflow-hidden border border-indigo-500/50">
              <img src="https://picsum.photos/32/32?seed=wallet" alt="Avatar" />
            </button>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
