# VaultDAO Backend

This backend is a lightweight support service for VaultDAO. It does not replace the Soroban contract and does not need to modify contract logic to be useful.

## Goals

- provide a clean place for future indexing and notification work
- support websocket, keeper, and alert features later
- keep local quality checks enforced with Husky before bad code is pushed

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run test
npm run build
```

## Environment

Copy the example file and adjust the values for your local environment:

```bash
cp backend/.env.example backend/.env
```

## Current Endpoints

- `GET /health`
- `GET /api/v1/status`
