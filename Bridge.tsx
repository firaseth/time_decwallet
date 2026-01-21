
import React, { useState } from 'react';
import { Network, Token } from '../types';
import { INITIAL_TOKENS } from '../constants';

const Bridge: React.FC = () => {
  const [fromNetwork, setFromNetwork] = useState<Network>(Network.ETHEREUM);
  const [toNetwork, setToNetwork] = useState<Network>(Network.POLYGON);
  const [amount, setAmount] = useState<string>('');
  const [isBridging, setIsBridging] = useState(false);
  const [step, setStep] = useState(0);

  const selectedToken = INITIAL_TOKENS.find(t => t.network === fromNetwork && t.symbol === 'ETH') || INITIAL_TOKENS[0];

  const handleBridge = () => {
    if (!amount) return;
    setIsBridging(true);
    let s = 0;
    const interval = setInterval(() => {
      s++;
      setStep(s);
      if (s === 4) {
        clearInterval(interval);
        setTimeout(() => {
          setIsBridging(false);
          setStep(0);
          setAmount('');
          alert("Bridge transaction successful! Funds will appear on the destination network shortly.");
        }, 1500);
      }
    }, 2000);
  };

  const swapNetworks = () => {
    setFromNetwork(toNetwork);
    setToNetwork(fromNetwork);
  };

  return (
    <div className="max-w-xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="glass rounded-3xl p-8 border border-slate-700/50 shadow-2xl relative overflow-hidden">
        {isBridging && (
          <div className="absolute inset-0 z-50 glass flex flex-col items-center justify-center p-8 text-center animate-in fade-in">
             <div className="w-20 h-20 mb-6 relative">
               <div className="absolute inset-0 rounded-full border-4 border-indigo-500/20"></div>
               <div className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fa-solid fa-bridge text-indigo-400 text-2xl"></i>
               </div>
             </div>
             <h2 className="text-2xl font-bold text-white mb-2">
               {step === 1 && "Verifying Security..."}
               {step === 2 && "Locking Assets on Source..."}
               {step === 3 && "Relaying Message..."}
               {step === 4 && "Finalizing on Destination..."}
             </h2>
             <p className="text-slate-400 max-w-xs">
                Time Bridge utilizes 100% secure relayer nodes and ZK-proofs for verification.
             </p>
          </div>
        )}

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">Secure Bridge</h2>
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            POWERED BY TIME AI
          </div>
        </div>

        <div className="space-y-4">
          {/* Source Network */}
          <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50">
            <label className="text-xs text-slate-500 font-medium uppercase mb-2 block">From</label>
            <div className="flex justify-between items-center">
              <select 
                value={fromNetwork}
                onChange={(e) => setFromNetwork(e.target.value as Network)}
                className="bg-transparent text-white font-bold text-lg outline-none cursor-pointer"
              >
                {Object.values(Network).map(n => <option key={n} value={n} className="bg-slate-900">{n}</option>)}
              </select>
              <div className="text-right">
                <span className="text-xs text-slate-500">Balance: {selectedToken.balance} {selectedToken.symbol}</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <input 
                type="number" 
                placeholder="0.0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent text-3xl font-bold text-white w-full outline-none"
              />
              <span className="text-xl font-bold text-slate-400">ETH</span>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center -my-6 relative z-10">
            <button 
              onClick={swapNetworks}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-indigo-400 hover:text-white hover:border-indigo-500 transition-all border border-slate-700"
            >
              <i className="fa-solid fa-repeat rotate-90"></i>
            </button>
          </div>

          {/* Destination Network */}
          <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50">
            <label className="text-xs text-slate-500 font-medium uppercase mb-2 block">To</label>
            <div className="flex justify-between items-center">
              <select 
                value={toNetwork}
                onChange={(e) => setToNetwork(e.target.value as Network)}
                className="bg-transparent text-white font-bold text-lg outline-none cursor-pointer"
              >
                {Object.values(Network).map(n => <option key={n} value={n} className="bg-slate-900">{n}</option>)}
              </select>
            </div>
            <div className="mt-4 text-slate-500 text-sm">
               Receive estimated: <span className="text-white font-bold">{amount || '0.0'} ETH</span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Bridge Fee</span>
            <span className="text-white font-medium">0.001 ETH</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Estimated Arrival</span>
            <span className="text-white font-medium">~ 5 Minutes</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Security Audit</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <i className="fa-solid fa-circle-check"></i> Passed
            </span>
          </div>
        </div>

        <button 
          disabled={!amount || fromNetwork === toNetwork}
          onClick={handleBridge}
          className="w-full mt-8 py-4 time-gradient rounded-2xl font-bold text-white shadow-lg shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-95 transition-all"
        >
          {fromNetwork === toNetwork ? 'Select Different Networks' : 'Bridge Assets'}
        </button>
      </div>

      <div className="glass rounded-2xl p-6 border border-slate-700/50">
        <h4 className="text-white font-bold flex items-center gap-2 mb-2">
          <i className="fa-solid fa-circle-info text-indigo-400"></i>
          Time Bridge Protocol
        </h4>
        <p className="text-slate-400 text-xs leading-relaxed">
          Our bridge utilizes decentralized relayers and 100% secure liquidity pools. Unlike traditional custodial bridges, Time Wallet never holds your private keys during transit. Every transaction is pre-scanned by Gemini-3 AI for potential malicious contract calls.
        </p>
      </div>
    </div>
  );
};

export default Bridge;
