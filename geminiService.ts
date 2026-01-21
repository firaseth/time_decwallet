
import { GoogleGenAI, Type } from "@google/genai";
import { SecurityScanResult } from "../types";

// Safety check for process.env in browser environments to prevent build crashes
const getApiKey = () => {
  try {
    return process.env.API_KEY || '';
  } catch (e) {
    return '';
  }
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

export async function scanUrlForSecurity(url: string): Promise<SecurityScanResult> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Audit the following URL for Web3 security risks (phishing, drainers, malicious smart contracts, spyware). Provide a JSON response evaluating its safety for a crypto wallet user.
      URL: ${url}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isSecure: { type: Type.BOOLEAN },
            score: { type: Type.NUMBER, description: "Safety score from 0 (dangerous) to 100 (safe)" },
            threats: { type: Type.ARRAY, items: { type: Type.STRING } },
            recommendation: { type: Type.STRING },
            analysis: { type: Type.STRING }
          },
          required: ["isSecure", "score", "threats", "recommendation", "analysis"]
        }
      }
    });

    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Security scan failed:", error);
    return {
      isSecure: false,
      score: 50,
      threats: ["Service unavailable"],
      recommendation: "Proceed with extreme caution. Unable to verify site security.",
      analysis: "The automated security analysis failed. Manual verification is required."
    };
  }
}

export async function auditTransaction(details: string): Promise<string> {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `As a Web3 Security Auditor, explain what this transaction does in simple terms and identify potential risks. Details: ${details}`,
    config: {
        thinkingConfig: { thinkingBudget: 1000 }
    }
  });
  return response.text;
}
