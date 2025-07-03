/**
 * Decrypts ciphertext using the recipient's private RSA key.
 * @param privateKey - The RSA private key (CryptoKey) for decryption.
 * @param ciphertext - The encrypted data as an ArrayBuffer.
 * @returns A Promise that resolves to the original plaintext string.
 */
export async function decrypt(
  privateKey: CryptoKey,
  ciphertext: ArrayBuffer
): Promise<string> {
  const decrypted = await crypto.subtle.decrypt(
    { name: "RSA-OAEP" },
    privateKey,
    ciphertext
  );

  return new TextDecoder().decode(decrypted);
}