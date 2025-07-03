
// Importing modular crypto functions from the src directory
import { generateKeyPair } from "../src/crypto/keys";
import { encrypt } from "../src/crypto/encrypt";
import { decrypt } from "../src/crypto/decrypt";

/**
 * Main test runner function for validating the encryption and decryption workflow.
 */
async function main() {
  // Step 1: Generate a new RSA key pair (public + private)
  const { publicKey, privateKey } = await generateKeyPair();
  console.log("🔑 Public Key:", publicKey);
  console.log("🔐 Private Key:", privateKey);

  // Step 2: Define a test message to encrypt
  const message = "Hello from Kapsule JS!";

  // Step 3: Encrypt the message using the public key
  const ciphertext = await encrypt(publicKey, message);
  console.log("📦 Ciphertext (ArrayBuffer):", ciphertext);

  // Step 4: Decrypt the ciphertext using the private key
  const decrypted = await decrypt(privateKey, ciphertext);
  console.log("✅ Decrypted:", decrypted);

  // Step 5: Assert output matches original message (primitive test)
  if (decrypted === message) {
    console.log("🧪 Test Passed: Decrypted message matches original ✅");
  } else {
    console.error("❌ Test Failed: Output mismatch");
  }
}

// Execute the main function and catch any thrown errors
main().catch((err) => {
  console.error("❗ Unexpected Error:", err);
});