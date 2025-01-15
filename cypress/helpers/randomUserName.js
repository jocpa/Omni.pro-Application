const crypto = require('crypto');

// Function to generate a unique and random password
export function generateUniquePassword() {
  // Generate a random value (16 bytes for high entropy)
  const randomBytes = crypto.randomBytes(16).toString('hex');

  // Hash the random value
  const hash = crypto.createHash('sha256');
  hash.update(randomBytes);
  const passwordHash = hash.digest('hex');

  return passwordHash;
}

