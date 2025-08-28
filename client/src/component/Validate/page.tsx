export const useAuthValidation = () => {
  const validateLogin = (email: string, password: string) => {
    if (!email.length) {
      console.log("Email is required.");
      return false;
    }
    if (!password.length) {
      console.log("Password is required.");
      return false;
    }
    return true;
  };

  const validateSignup = (email: string, password: string, confirmPassword: string) => {
    if (!email.length) {
      console.log("Email is required.");
      return false;
    }
    if (!password.length) {
      console.log("Password is required.");
      return false;
    }
    if (password.length < 10) {
      console.log("Password needs to be at least 10 characters long.");
      return false;
    }
    if (password.search(/[a-z]/i) < 0) {
      console.log("Password must contain at least 1 lowercase letter.");
      return false;
    }
    if (password.search(/[A-Z]/i) < 0) {
      console.log("Password must contain at least 1 uppercase letter.");
      return false;
    }
    if (password.search(/[!@#$%^&*(),.?":{}|<>]/) < 0) {
      console.log("Password must contain at least 1 special character.");
      return false;
    }
    if (password !== confirmPassword) {
      console.log("Password and Confirmation Password should be the same.");
      return false;
    }
    return true;
  };

  return { validateLogin, validateSignup };
};