# Kapsule JS – Lightweight PQ-Ready Encryption Library

Kapsule JS is a JavaScript/TypeScript library offering a simplified, hybrid-friendly encryption layer built with Web Crypto APIs. Designed to mimic post-quantum workflows, it's a frontend-ready companion to [Kapsule CLI](https://github.com/anilnimmagadda/kapsule-cli).

---

## 🚀 Quickstart

```bash
npm install
npx tsx tests/test.ts

🔐 Features
RSA-OAEP encryption (placeholder for PQC)

Modular design (keygen, encrypt, decrypt)

Future-ready for WASM-based PQC engines

Clean TypeScript interface

🧪 Example

import { generateKeyPair, encrypt, decrypt } from "./src/crypto";

const { publicKey, privateKey } = await generateKeyPair();
const ciphertext = await encrypt(publicKey, "Hello from Kapsule JS!");
const plaintext = await decrypt(privateKey, ciphertext);

📦 Folder Structure

kapsule-js/
├── src/
│   ├── crypto.ts
│   ├── keygen.ts
│   ├── encrypt.ts
│   └── decrypt.ts
├── tests/
│   └── test.ts⚠️ Note on PQC
This SDK uses standard Web Crypto as a scaffold for future post-quantum modules (via WASM). It is not yet secure against quantum attacks.

📄 License
MIT – free to use, modify, and build on.

🔗 Related Projects

Kapsule CLI
├── package.json
├── tsconfig.json
└── README.md