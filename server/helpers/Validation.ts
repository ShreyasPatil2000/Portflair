export const validatePassword = (password: string): { valid: boolean; error?: string } => {
  if (!password || password.length < 10) {
    return { valid: false, error: "Password must be at least 10 characters" };
  }
  if (!/[A-Z]/.test(password)) {
    return { valid: false, error: "Password must contain at least one uppercase letter" };
  }
  if (!/[a-z]/.test(password)) {
    return { valid: false, error: "Password must contain at least one lowercase letter" };
  }
  if (!/[0-9]/.test(password)) {
    return { valid: false, error: "Password must contain at least one number" };
  }
  // Add special character check if needed
  return { valid: true };
};
