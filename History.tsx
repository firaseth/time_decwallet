
import React from 'react';
import { MOCK_TRANSACTIONS } from '../constants';

const History: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">Transaction History</h2>
        <button className="text-indigo-400 hover:text-white text-sm transition-colors">Export CSV</button>
      </div>

      <div className="space-y-4">
        {MOCK_TRANSACTIONS.map((tx) => (
          <div key={tx.id} className="glass rounded-2xl p-6 border border-slate-700/50 hover:bg-slate-800/40 transition-colors group">
            <div className="flex items-center gap-6">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                tx.type === 'receive' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-indigo-500/10 text-indigo-500'
              }`}>
                <i className={`fa-solid ${tx.type === 'receive' ? 'fa-arrow-down-long' : 'fa-arrow-up-long'} text-lg`}></i>
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="text-white font-bold text-lg capitalize">
                    {tx.type} {tx.symbol}
                  </h4>
                  <p className="text-white font-black">
                    {tx.type === 'receive' ? '+' : '-'}{tx.amount} {tx.symbol}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 text-xs">{new Date(tx.timestamp).toLocaleString()}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                    <span className="text-xs text-slate-400 font-mono">{tx.type === 'receive' ? `From: ${tx.from}` : `To: ${tx.to}`}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">{tx.status}</span>
                  </div>
                </div>
              </div>
              
              <button className="p-2 text-slate-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                 <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>
        ))}

        {MOCK_TRANSACTIONS.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-ghost text-slate-600 text-2xl"></i>
            </div>
            <p className="text-slate-400">No transactions found on this network.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
