
export enum Network {
  ETHEREUM = 'Ethereum',
  POLYGON = 'Polygon',
  ARBITRUM = 'Arbitrum',
  OPTIMISM = 'Optimism',
  BASE = 'Base'
}

export interface Token {
  symbol: string;
  name: string;
  balance: number;
  priceUsd: number;
  logo: string;
  network: Network;
}

export interface Transaction {
  id: string;
  type: 'send' | 'receive' | 'bridge' | 'swap';
  amount: number;
  symbol: string;
  from: string;
  to: string;
  timestamp: number;
  status: 'confirmed' | 'pending' | 'failed';
  network: Network;
}

export interface SecurityScanResult {
  isSecure: boolean;
  score: number; // 0-100
  threats: string[];
  recommendation: string;
  analysis: string;
}
