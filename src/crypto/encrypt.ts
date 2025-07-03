/**
 * Encrypts a plaintext string using the recipient's public RSA key.
 * @param publicKey - The RSA public key (CryptoKey) for encryption.
 * @param message - The plaintext message to encrypt.
 * @returns A Promise that resolves to an ArrayBuffer containing the ciphertext.
 */
export async function encrypt(
  publicKey: CryptoKey,
  message: string
): Promise<ArrayBuffer> {
  const encoded = new TextEncoder().encode(message);

  return crypto.subtle.encrypt(
    { name: "RSA-OAEP" },
    publicKey,
    encoded
  );
}