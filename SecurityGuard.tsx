
import React, { useState } from 'react';
import { scanUrlForSecurity } from '../services/geminiService';
import { SecurityScanResult } from '../types';

const SecurityGuard: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SecurityScanResult | null>(null);

  const handleScan = async () => {
    if (!url) return;
    setLoading(true);
    const res = await scanUrlForSecurity(url);
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 time-gradient rounded-3xl mx-auto flex items-center justify-center rotate-3 shadow-xl">
          <i className="fa-solid fa-shield-halved text-white text-3xl"></i>
        </div>
        <h1 className="text-4xl font-bold text-white">Time AI Guard</h1>
        <p className="text-slate-400 max-w-md mx-auto">
          Scan any website, dApp link, or smart contract before connecting your wallet. Our AI detects phishing, drainers, and malicious scripts in real-time.
        </p>
      </div>

      <div className="glass p-8 rounded-3xl border border-slate-700/50">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <i className="fa-solid fa-link absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"></i>
            <input 
              type="text"
              placeholder="https://pancakeswap-scam.net ..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-slate-600 focus:border-indigo-500 outline-none transition-all"
            />
          </div>
          <button 
            onClick={handleScan}
            disabled={loading || !url}
            className="px-8 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold rounded-2xl transition-all flex items-center gap-2"
          >
            {loading ? <i className="fa-solid fa-spinner animate-spin"></i> : <i className="fa-solid fa-magnifying-glass"></i>}
            Scan Site
          </button>
        </div>

        {result && (
          <div className={`mt-8 p-6 rounded-2xl border animate-in slide-in-from-top-4 duration-300 ${result.isSecure ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-rose-500/5 border-rose-500/20'}`}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${result.isSecure ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}`}>
                <i className={`fa-solid ${result.isSecure ? 'fa-shield-check' : 'fa-triangle-exclamation'} text-xl`}></i>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className={`text-xl font-bold ${result.isSecure ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {result.isSecure ? 'Site Appears Secure' : 'Warning: High Risk Detected'}
                  </h3>
                  <div className="text-2xl font-black opacity-30">
                    {result.score}/100
                  </div>
                </div>
                <p className="text-slate-300 mb-4">{result.analysis}</p>
                
                {result.threats.length > 0 && (
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">Identified Risks:</p>
                    <div className="flex flex-wrap gap-2">
                      {result.threats.map((threat, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-rose-300 border border-rose-500/30">
                          {threat}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                  <p className="text-sm font-bold text-white mb-1">AI Recommendation:</p>
                  <p className="text-sm text-slate-400">{result.recommendation}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="glass p-6 rounded-2xl border border-slate-700/50">
            <i className="fa-solid fa-bug text-indigo-400 mb-4 text-2xl"></i>
            <h4 className="text-white font-bold mb-2">Spyware Protection</h4>
            <p className="text-slate-400 text-sm">Automatically block scripts that attempt to access your clipboard or keystrokes while using Web3 dApps.</p>
         </div>
         <div className="glass p-6 rounded-2xl border border-slate-700/50">
            <i className="fa-solid fa-code text-indigo-400 mb-4 text-2xl"></i>
            <h4 className="text-white font-bold mb-2">Pre-execution Audit</h4>
            <p className="text-slate-400 text-sm">Every smart contract interaction is simulated. We show you exactly what will happen to your funds before you sign.</p>
         </div>
      </div>
    </div>
  );
};

export default SecurityGuard;
