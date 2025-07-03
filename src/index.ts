// Exporting core crypto operations from modular files
export { generateKeyPair } from "./crypto/keys";
export { encrypt } from "./crypto/encrypt";
export { decrypt } from "./crypto/decrypt";

/**
 * Kapsule JS SDK – Entry Point
 *
 * This file serves as the main export hub for the Kapsule JavaScript SDK.
 * Developers can import functions like generateKeyPair, encrypt, and decrypt
 * directly from this single module:
 *
 * Example:
 * ts
 * import { generateKeyPair, encrypt, decrypt } from "kapsule-js";
 * 
 *
 * These functions are powered by WebCrypto and designed to be WASM-ready
 * for future integration with liboqs.
 */