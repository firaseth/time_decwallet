
import React from 'react';
import { Token, Network } from '../types';
import { INITIAL_TOKENS, MOCK_WALLET_ADDRESS } from '../constants';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', val: 4000 },
  { name: 'Tue', val: 3000 },
  { name: 'Wed', val: 5000 },
  { name: 'Thu', val: 4500 },
  { name: 'Fri', val: 6000 },
  { name: 'Sat', val: 5500 },
  { name: 'Sun', val: 7000 },
];

const Dashboard: React.FC = () => {
  const totalBalance = INITIAL_TOKENS.reduce((acc, token) => acc + (token.balance * token.priceUsd), 0);

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Portfolio Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass rounded-3xl p-8 border border-slate-700/50">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Total Balance</p>
              <h1 className="text-5xl font-bold text-white mt-1">
                ${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </h1>
            </div>
            <div className="flex gap-2">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-xl font-semibold transition-colors flex items-center gap-2">
                <i className="fa-solid fa-arrow-up"></i> Send
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-colors flex items-center gap-2">
                <i className="fa-solid fa-arrow-down"></i> Receive
              </button>
            </div>
          </div>
          
          <div className="h-48 mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                  itemStyle={{ color: '#f8fafc' }}
                />
                <Area type="monotone" dataKey="val" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass rounded-3xl p-6 border border-slate-700/50 flex flex-col">
          <h3 className="text-white font-semibold mb-4">Security Status</h3>
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <i className="fa-solid fa-shield-check text-emerald-500 text-3xl"></i>
            </div>
            <div>
              <p className="text-emerald-400 font-bold text-lg">Your Wallet is Secure</p>
              <p className="text-slate-400 text-sm mt-1">AI Guard is actively monitoring all transaction attempts.</p>
            </div>
            <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300 text-sm font-medium transition-colors">
              View Threat Report
            </button>
          </div>
        </div>
      </div>

      {/* Assets Table */}
      <div className="glass rounded-3xl overflow-hidden border border-slate-700/50">
        <div className="p-6 border-b border-slate-700/50 flex justify-between items-center">
          <h3 className="text-white font-bold text-lg">Assets</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-slate-800 rounded-lg text-xs text-slate-300 border border-slate-700">All Networks</button>
            <button className="px-3 py-1 bg-transparent hover:bg-slate-800 rounded-lg text-xs text-slate-400">Hide 0 Balance</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 text-xs uppercase tracking-wider">
                <th className="px-8 py-4 font-semibold">Token</th>
                <th className="px-8 py-4 font-semibold">Network</th>
                <th className="px-8 py-4 font-semibold">Balance</th>
                <th className="px-8 py-4 font-semibold">Price</th>
                <th className="px-8 py-4 font-semibold">Value</th>
                <th className="px-8 py-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {INITIAL_TOKENS.map((token) => (
                <tr key={`${token.network}-${token.symbol}`} className="hover:bg-slate-800/30 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <img src={token.logo} className="w-8 h-8 rounded-full" alt={token.symbol} />
                      <div>
                        <p className="text-white font-semibold">{token.symbol}</p>
                        <p className="text-slate-400 text-xs">{token.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-slate-400 text-sm">{token.network}</span>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-white font-medium">{token.balance.toLocaleString()} {token.symbol}</p>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-slate-400 text-sm">${token.priceUsd.toLocaleString()}</p>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-white font-bold">${(token.balance * token.priceUsd).toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-indigo-500/20 text-indigo-400 rounded-lg"><i className="fa-solid fa-repeat"></i></button>
                      <button className="p-2 hover:bg-slate-700 text-slate-400 rounded-lg"><i className="fa-solid fa-ellipsis-vertical"></i></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
