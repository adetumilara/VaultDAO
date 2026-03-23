import test from "node:test";
import assert from "node:assert/strict";

import { buildHealthResponse, buildStatusResponse } from "./health.js";

const mockEnv = {
  port: 8787,
  host: "0.0.0.0",
  nodeEnv: "test",
  stellarNetwork: "testnet",
  sorobanRpcUrl: "https://soroban-testnet.stellar.org",
  horizonUrl: "https://horizon-testnet.stellar.org",
  contractId: "CDTEST",
  websocketUrl: "ws://localhost:8080",
};

test("builds a healthy service response", () => {
  const response = buildHealthResponse(mockEnv);
  const payload = JSON.parse(response.body) as {
    ok: boolean;
    service: string;
    network: string;
    contractId: string;
  };

  assert.equal(response.statusCode, 200);
  assert.equal(payload.ok, true);
  assert.equal(payload.service, "vaultdao-backend");
  assert.equal(payload.network, "testnet");
  assert.equal(payload.contractId, "CDTEST");
});

test("builds a status response", () => {
  const response = buildStatusResponse(mockEnv);
  const payload = JSON.parse(response.body) as {
    service: string;
    environment: string;
    rpcUrl: string;
  };

  assert.equal(response.statusCode, 200);
  assert.equal(payload.service, "vaultdao-backend");
  assert.equal(payload.environment, "test");
  assert.match(payload.rpcUrl, /soroban-testnet/);
});
