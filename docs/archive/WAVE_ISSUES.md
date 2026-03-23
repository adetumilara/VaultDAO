# 🌊 Stellar Drips Wave - Contributor Issues

This document contains 10 prepared GitHub Issues for the upcoming Drips Wave. You can copy-paste these directly into your repository's Issues tab.

## 👋 Welcome Comment Template
*Post this as the first comment on every issue to guide contributors.*

```markdown
### 👋 Welcome to VaultDAO!

This issue is part of the **Stellar Drips Wave**. We are building the "Gnosis Safe of Stellar" and are excited to have you contribute!

**How to Apply:**
1.  Read the description and Acceptance Criteria carefully.
2.  Comment **"I would like to work on this!"** below.
3.  Go to the [Drips Platform](https://docs.drips.network/wave/) and apply for this specific task ID.
4.  Wait for assignment before starting code.

**Resources:**
-   [Soroban Documentation](https://soroban.stellar.org/docs)
-   [Freighter Wallet API](https://docs.freighter.app/)
-   [React + Tailwind](https://tailwindcss.com/docs)
```

---

## 🟢 Trivial Issues (100 Points)
*Good for beginners to get familiar with the codebase.*

### 1. UI: Create `StatusBadge` Component
**Description:**
We need a reusable Badge component to display the status of proposals (Pending, Approved, Rejected, Executed) with distinct colors.
**Acceptance Criteria:**
- Create `src/components/StatusBadge.tsx`.
- Support variants: `Pending` (Yellow), `Approved` (Green), `Rejected` (Red), `Expired` (Gray).
- Use Tailwind CSS for styling (rounded-full, font-medium, correct padding).
- Implement a story/demo in a temporary page or screenshot.
**Resources:**
- [Tailwind Badges](https://v1.tailwindcss.com/components/badges)

### 2. UI: Add Copy-to-Clipboard for Addresses
**Description:**
The dashboard displays wallet addresses. Add a "Copy" icon button next to the truncated address in the Sidebar/Header that copies the full address to the clipboard.
**Acceptance Criteria:**
- Use `navigator.clipboard.writeText`.
- Show a tooltip or toast notification "Copied!" upon click.
- Icon should change briefly (e.g., from `Copy` to `Check` icon).
**Resources:**
- [Lucide Icons](https://lucide.dev/icons/copy)

### 3. Docs: Add `TESTING.md` Guide
**Description:**
Create a dedicated `docs/TESTING.md` file explaining how to run the smart contract tests and what the current test coverage includes.
**Acceptance Criteria:**
- Explain `cargo test` command.
- Briefly describe the 3 main test tests in `src/test.rs` (Multisig, RBAC, Timelocks).
- Explain how to mock the environment using `soroban-sdk`.
**Resources:**
- [Soroban TestingUtils](https://soroban.stellar.org/docs/reference/rust/testutils)

---

## 🟡 Medium Issues (150 Points)
*Requires knowledge of React hooks and basic RPC interaction.*

### 4. Frontend: Implement `approveProposal` in Hook
**Description:**
The `useVaultContract` hook currently only supports `proposeTransfer`. Add support for `approveProposal`.
**Acceptance Criteria:**
- Update `frontend/src/hooks/useVaultContract.ts`.
- Add `approveProposal(proposalId: number)` function.
- Construct the transaction invoking `approve_proposal` on the smart contract.
- Sign with Freighter and Submit.
- Handle "Threshold not met" errors gracefully using `errorParser`.
**Resources:**
- [Stellar SDK TransactionBuilder](https://stellar.github.io/js-stellar-sdk/TransactionBuilder.html)

### 5. Frontend: Fetch Vault Balance
**Description:**
The Overview page currently shows "$0.00". Implement a function to fetch the Vault Contract's balance of a specific token (e.g., Native XLM) and display it.
**Acceptance Criteria:**
- Use `server.getAccount` or a contract call to check the balance of the Vault Address.
- specific logic: Fetch balance of the Contract ID or a managed token account.
- Update `Overview.tsx` to display the real value (or a raw token amount).
**Resources:**
- [Soroban RPC getLedgerEntry](https://soroban.stellar.org/api/methods/getLedgerEntry)

### 6. Frontend: Create `NewProposalModal` Form
**Description:**
Clicking "New Proposal" should open a Modal with a form.
**Acceptance Criteria:**
- Create `NewProposalModal.tsx` using a React Portal or simple absolute positioning overlay.
- Fields: `Recipient Address` (validate Stellar address), `Amount` (number), `Token Address` (text), `Memo` (text).
- "Submit" button should be disabled if fields are invalid.
**Resources:**
- [Stellar Address Validation](https://stellar.github.io/js-stellar-sdk/StrKey.html)

---

## 🔴 High Issues (200 Points)
*Significant integration work or features.*

### 7. Frontend: Integrate "Propose Transfer" Flow
**Description:**
Connect the `NewProposalModal` (Issue #6) to the `useVaultContract` hook (Issue #4).
**Acceptance Criteria:**
- When form acts, call `proposeTransfer`.
- Show "Signing..." loading state.
- Handle success: Close modal + Show Success Toast + Refresh List (optional).
- Handle error: Show error message from `errorParser`.
**Resources:**
- See existing `src/hooks/useVaultContract.ts`

### 8. Frontend: Render Real Proposals List
**Description:**
The `Proposals` page is static. Fetch the list of proposals from the contract storage and render them.
**Acceptance Criteria:**
- You may need to modify the contract to allow "listing" proposals (e.g., iterate IDs) OR use an Indexer. *For this issue, assume we iterate IDs 1..5 for demo or check `get_proposal`.*
- Render a card for each proposal showing: ID, Proposer, Amount, Status, Unlock Time.
- Use `StatusBadge` (Issue #1).
**Resources:**
- [Soroban Client Bindings](https://soroban.stellar.org/docs/how-to-guides/invoke-contract/typescript-bindings)

### 9. Feature: Implement `executeProposal` Hook & UI
**Description:**
Once a proposal is Approved and Timelock passed, it must be Executed.
**Acceptance Criteria:**
- Add `executeProposal(proposalId: number)` to `useVaultContract.ts`.
- Add "Execute" button to the Proposal Card which only appears if `Status === Approved` AND `UnlockTime < CurrentTime`.
- Handle `TimelockNotExpired` errors clearly.
**Resources:**
- `src/lib.rs` (execute_proposal function logic)

### 10. SDK: Generate TypeScript Bindings
**Description:**
Initialize the `sdk/` package and generate official bindings using `stellar-cli`.
**Acceptance Criteria:**
- Initialize `sdk/package.json`.
- run `stellar contract bindings typescript ...` pointing to the WASM.
- Export the bindings so the frontend can import them (replacing the manual hook eventually).
**Resources:**
- [Stellar CLI Bindings](https://github.com/stellar/stellar-cli)
