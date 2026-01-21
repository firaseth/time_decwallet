# ⌛ Time Wallet - AI-Powered Decentralized Finance

Time Wallet is a next-generation decentralized Ethereum wallet interface designed with a focus on security and cross-chain interoperability. It leverages the **Google Gemini API** to provide real-time security auditing for dApp links and transaction simulations.

![Time Wallet Preview](https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000)

## ✨ Features

- **📊 Intelligent Dashboard**: Track your portfolio across multiple Ethereum-compatible networks with real-time price data and growth visualizations.
- **🛡️ AI Guard (Gemini Powered)**: A proactive security layer that scans URLs and smart contracts for phishing, drainers, and malicious code before you interact.
- **🌉 Secure Bridge**: A conceptual interface for cross-chain asset transfers using ZK-proof verification simulations.
- **📜 Transaction History**: Clean, organized history of all your on-chain activities.
- **💎 Premium Aesthetics**: A high-performance, glassmorphic UI built with Tailwind CSS for a modern Web3 experience.

## 🚀 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **AI Engine**: @google/genai (Gemini 3 Flash Preview)
- **Charts**: Recharts
- **Icons**: Font Awesome 6

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+)
- A Google Gemini API Key (Get one at [ai.google.dev](https://ai.google.dev/))

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/time-wallet.git
   cd time-wallet
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add your Gemini API key:
   ```env
   API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Add the `API_KEY` to the **Environment Variables** section in the Vercel project settings.
4. Click **Deploy**.

## 🔒 Security Note

This is a frontend demonstration of a decentralized wallet interface. Always ensure you are using audited protocols and never share your seed phrases or private keys with any third-party application. The AI Guard provides a recommendation layer but should not be the sole factor in your security decisions.

---

*Built with ❤️ for the decentralized future.*
