import type { BackendEnv } from "../config/env.js";

export interface JsonResponse {
  readonly statusCode: number;
  readonly body: string;
}

export function buildHealthResponse(env: BackendEnv): JsonResponse {
  return {
    statusCode: 200,
    body: JSON.stringify({
      ok: true,
      service: "vaultdao-backend",
      network: env.stellarNetwork,
      contractId: env.contractId,
      timestamp: new Date().toISOString(),
    }),
  };
}

export function buildStatusResponse(env: BackendEnv): JsonResponse {
  return {
    statusCode: 200,
    body: JSON.stringify({
      service: "vaultdao-backend",
      environment: env.nodeEnv,
      rpcUrl: env.sorobanRpcUrl,
      horizonUrl: env.horizonUrl,
      websocketUrl: env.websocketUrl,
    }),
  };
}
