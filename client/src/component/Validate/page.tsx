import { toast } from "sonner";

export const useAuthValidation = () => {
  const validateLogin = (email: string, password: string) => {
    if (!email.length) {
      toast.error("Email is required.");
      return false;
    }
    if (!password.length) {
      toast.error("Password is required.");
      return false;
    }
    return true;
  };

  const validateSignup = (email: string, password: string, confirmPassword: string) => {
    if (!email.length) {
      toast.error("Email is required.");
      return false;
    }
    if (!password.length) {
      toast.error("Password is required.");
      return false;
    }
    if (password.length < 10) {
      toast.error("Password needs to be at least 10 characters long.");
      return false;
    }
    if (password.search(/[a-z]/i) < 0) {
      toast.error("Password must contain at least 1 lowercase letter.");
      return false;
    }
    if (password.search(/[A-Z]/i) < 0) {
      toast.error("Password must contain at least 1 uppercase letter.");
      return false;
    }
    if (password.search(/[!@#$%^&*(),.?":{}|<>]/) < 0) {
      toast.error("Password must contain at least 1 special character.");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Password and Confirmation Password should be the same.");
      return false;
    }
    return true;
  };

  return { validateLogin, validateSignup };
};
