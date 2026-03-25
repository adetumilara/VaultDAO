# Security Policy

## Supported Versions

VaultDAO is currently in **Beta (Open Source MVP)**. We are focusing our security efforts on the latest major versions.

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |
| < 0.1   | :x:                |

## Reporting a Vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

If you discover a potential security vulnerability in VaultDAO, please report it via private disclosure. We take security seriously and will work with you to address the issue promptly.

### Disclosure Process

1.  **Email**: Send a detailed report to **security@vaultdao.dev** with the subject line `[SECURITY] VaultDAO Vulnerability Report`.
2.  **Details**: Include:
    - A clear description of the vulnerability
    - Steps to reproduce the issue
    - Potential impact and severity assessment
    - Any proof-of-concept code (if applicable)
    - Your contact information for follow-up
3.  **Acknowledgement**: We will acknowledge receipt of your report within 48 hours and provide an initial assessment.
4.  **Coordination**: We will work with you to understand the vulnerability and develop a fix. We may request additional information or clarification.
5.  **Fix & Verification**: Once a fix is developed, we will verify it thoroughly before release.
6.  **Disclosure Timeline**: We aim to release a patched version within 30 days of receiving a valid report. For critical vulnerabilities, we will expedite the process.
7.  **Public Disclosure**: After a patch is released, we will publish a security advisory. You will be credited as the reporter unless you prefer to remain anonymous.

## Public Issue Reporting

For **non-security bugs** and **feature requests**, please use the standard GitHub issue tracker:

- [GitHub Issues](https://github.com/Emmanuelluxury/VaultDAO/issues)
- Use the appropriate issue template (Bug Report or Feature Request)
- Provide clear reproduction steps and expected behavior

**Do not include sensitive information** (private keys, wallet addresses, or transaction details) in public issues.

## Security Considerations for VaultDAO

VaultDAO handles treasury funds, making security our highest priority. The following measures are implemented:

- **Rust for Memory Safety**: The smart contract is written in Rust to prevent common vulnerabilities like buffer overflows, use-after-free, and integer overflows.
- **Soroban Sandboxing**: The contract runs in the Soroban host environment, which enforces strict resource limits, deterministic execution, and security boundaries.
- **Multi-Signature Logic**: Critical actions (like transfers or configuration changes) require M-of-N signatures from authorized signers. No single key can unilaterally execute sensitive operations.
- **Timelocks**: Large transfers exceeding the configured threshold are delayed for a specified period (e.g., 24 hours), allowing admins to detect and cancel unauthorized or accidental proposals.
- **RBAC (Role-Based Access Control)**: Granular permissions ensure only authorized roles (Admin, Treasurer) can perform sensitive actions. All sensitive functions enforce `require_auth()` checks.
- **Spending Limits**: Daily and weekly spending limits cap the maximum amount that can be transferred within a time window, mitigating the impact of key compromise.
- **Deterministic Execution**: Soroban's deterministic environment ensures contract behavior is predictable and auditable across all nodes.

## Known Limitations

- **Beta Status**: VaultDAO is currently in **Beta (Open Source MVP)**. While security is a priority, the platform is still under active development.
- **No Formal Audit**: VaultDAO has **not yet undergone a formal third-party security audit**. Users should interact with the platform at their own risk and avoid depositing significant funds until an audit is completed.
- **Testnet Only**: Currently, VaultDAO is deployed on Stellar Testnet. Mainnet deployment will follow after security hardening and community review.

## Audit Roadmap

We plan to engage professional security auditors once the core feature set is finalized and the codebase reaches production readiness. Audit results will be published publicly to ensure transparency.

## Security Best Practices for Users

When using VaultDAO, follow these best practices:

1. **Key Management**: Store private keys securely. Use hardware wallets or secure key management solutions.
2. **Multi-Sig Setup**: Configure an appropriate M-of-N threshold. Higher N values increase security but reduce operational efficiency.
3. **Timelock Configuration**: Set timelock delays appropriate for your organization's risk tolerance.
4. **Spending Limits**: Configure daily and weekly limits based on your treasury's operational needs.
5. **Regular Audits**: Periodically review vault configuration, active proposals, and transaction history.
6. **Testing**: Test all workflows on Testnet before moving to Mainnet.
7. **Monitoring**: Monitor vault activity and set up alerts for unusual transactions.

## Responsible Disclosure Policy

We follow responsible disclosure principles:

- **No Public Disclosure**: We will not publicly disclose vulnerability details until a patch is available.
- **Coordinated Release**: We coordinate with reporters to ensure patches are released simultaneously with public disclosure.
- **Credit & Recognition**: Security researchers who responsibly disclose vulnerabilities will be credited in our security advisory and release notes (unless they prefer anonymity).
- **No Bounty Program (Currently)**: VaultDAO does not currently offer a bug bounty program, but we deeply appreciate security research and will recognize contributors appropriately.

## Contact & Support

- **Security Issues**: security@vaultdao.dev
- **General Questions**: [GitHub Discussions](https://github.com/Emmanuelluxury/VaultDAO/discussions)
- **Bug Reports**: [GitHub Issues](https://github.com/Emmanuelluxury/VaultDAO/issues)
- **Contributing**: See [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines.
