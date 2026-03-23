import { createServer } from "node:http";

import type { BackendEnv } from "./config/env.js";
import { buildHealthResponse, buildStatusResponse } from "./routes/health.js";

export function createAppServer(env: BackendEnv) {
  return createServer((request, response) => {
    const url = new URL(
      request.url || "/",
      `http://${request.headers.host || "localhost"}`,
    );

    response.setHeader("Content-Type", "application/json; charset=utf-8");

    if (request.method === "GET" && url.pathname === "/health") {
      const payload = buildHealthResponse(env);
      response.writeHead(payload.statusCode);
      response.end(payload.body);
      return;
    }

    if (request.method === "GET" && url.pathname === "/api/v1/status") {
      const payload = buildStatusResponse(env);
      response.writeHead(payload.statusCode);
      response.end(payload.body);
      return;
    }

    response.writeHead(404);
    response.end(JSON.stringify({ ok: false, error: "Not Found" }));
  });
}
