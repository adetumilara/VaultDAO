export interface BackendEnv {
  readonly port: number;
  readonly host: string;
  readonly nodeEnv: string;
  readonly stellarNetwork: string;
  readonly sorobanRpcUrl: string;
  readonly horizonUrl: string;
  readonly contractId: string;
  readonly websocketUrl: string;
}

function readNumber(name: string, fallback: number): number {
  const value = process.env[name];
  if (!value) return fallback;

  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`Invalid numeric environment variable: ${name}`);
  }

  return parsed;
}

function readString(name: string, fallback: string): string {
  return process.env[name]?.trim() || fallback;
}

export function loadEnv(): BackendEnv {
  return {
    port: readNumber("PORT", 8787),
    host: readString("HOST", "0.0.0.0"),
    nodeEnv: readString("NODE_ENV", "development"),
    stellarNetwork: readString("STELLAR_NETWORK", "testnet"),
    sorobanRpcUrl: readString(
      "SOROBAN_RPC_URL",
      "https://soroban-testnet.stellar.org",
    ),
    horizonUrl: readString(
      "HORIZON_URL",
      "https://horizon-testnet.stellar.org",
    ),
    contractId: readString(
      "CONTRACT_ID",
      "CDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    ),
    websocketUrl: readString("VITE_WS_URL", "ws://localhost:8080"),
  };
}
