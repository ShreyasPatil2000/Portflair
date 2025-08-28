import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./pages/auth/page";
import HomePage from "./pages/home/page";
import Profile from "./pages/profile/page";
import ForgotPassword from "./pages/auth/forgotpassword/page";
import ResetPassword from "./pages/auth/resetpassword/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthForm />} />
      <Route path="/profile/:userId" element={<Profile />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
