
import { Network, Token, Transaction } from './types';

export const INITIAL_TOKENS: Token[] = [
  {
    symbol: 'ETH',
    name: 'Ethereum',
    balance: 1.45,
    priceUsd: 2650.42,
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    network: Network.ETHEREUM
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    balance: 1250.00,
    priceUsd: 1.00,
    logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
    network: Network.ETHEREUM
  },
  {
    symbol: 'MATIC',
    name: 'Polygon',
    balance: 450.20,
    priceUsd: 0.68,
    logo: 'https://cryptologos.cc/logos/polygon-matic-logo.png',
    network: Network.POLYGON
  },
  {
    symbol: 'ARB',
    name: 'Arbitrum',
    balance: 85.00,
    priceUsd: 1.15,
    logo: 'https://cryptologos.cc/logos/arbitrum-arb-logo.png',
    network: Network.ARBITRUM
  }
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    type: 'receive',
    amount: 0.5,
    symbol: 'ETH',
    from: '0x71C...4f2',
    to: '0xTIME...WALLET',
    timestamp: Date.now() - 3600000,
    status: 'confirmed',
    network: Network.ETHEREUM
  },
  {
    id: '2',
    type: 'send',
    amount: 100,
    symbol: 'USDC',
    from: '0xTIME...WALLET',
    to: '0x32A...8b1',
    timestamp: Date.now() - 86400000,
    status: 'confirmed',
    network: Network.ETHEREUM
  }
];

export const MOCK_WALLET_ADDRESS = "0x56aD2B121f1C3f0b2138eC35a4dFe548079C1f9B";
