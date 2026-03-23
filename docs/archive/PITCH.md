# 🏦 VaultDAO: The "Gnosis Safe" of Stellar

### The Mission
To bring institutional-grade treasury management to the Stellar Soroban ecosystem.

### The Problem
Stellar organizations currently lack a unified, programmable interface for managing shared funds. Multi-sig accounts exist at the protocol level, but they lack the rich features needed for modern operations: **Daily Limits**, **Role-Based Permissions**, and **Time-Delayed Execution**.

### The Solution: VaultDAO
VaultDAO is a Soroban-native smart contract suite that solves this. It is **not** just a multi-sig wallet; it is a programmable treasury OS.

**Key Differentiators:**
1.  **Soroban-Native Safety**: Built entirely in **Rust**, leveraging the memory safety and type guarantees that make Soroban distinct from EVM-based peers.
2.  **Flexible Storage Economics**: Utilizing Soroban's **Temporary Storage** for spending limits reduces ledger rent costs significantly compared to permanent state bloat.
3.  **Enterprise-Ready**: Timelocks prevent "rug pulls" by enforcing a 24-hour delay on large transfers, giving stakeholders time to react.

### Status
-   ✅ **Contract Core**: Complete (Multi-sig, RBAC, Limits, Timelocks)
-   ✅ **Frontend**: Scaffolding Complete (React, Tailwind, Freighter)
-   ✅ **Testing**: Unit Tests Passed
-   🚧 **Audits**: Pending

Join us in building the financial foundation of the Stellar network.
