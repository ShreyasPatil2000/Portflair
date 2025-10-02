import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./pages/auth/page";
import HomePage from "./pages/home/page";
import Profile from "./pages/profile/page";
import ForgotPassword from "./pages/auth/forgotpassword/page";
import ResetPassword from "./pages/auth/resetpassword/page";
import Terms from "./pages/terms/page";
import PrivacyPolicy from "./pages/privacypolicy/page";
import About from "./pages/about/page";
import Contact from "./pages/contact/page";
import { Toaster } from "sonner";
import { Navigate } from "react-router-dom";
import { useUser } from "@/Context/UserContext";
import LoadingPage from "./component/LoadingPage/page";
import ResetForgottenPassword from "./pages/auth/resetforgottenpassword/page";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useUser();
  if (loading) return <LoadingPage />;
  return user ? children : <Navigate to="/auth" />;
}

function AuthRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useUser();
  if (loading) return <LoadingPage />;
  return user ? <Navigate to="/" /> : children;
}

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Auth Routes(blocked if logged in) */}
        <Route
          path="/auth"
          element={
            <AuthRoute>
              <AuthForm />
            </AuthRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <AuthRoute>
              <ForgotPassword />
            </AuthRoute>
          }
        />
        <Route
          path="/reset-password"
          element={
            <AuthRoute>
              <ResetPassword />
            </AuthRoute>
          }
        />
        <Route
          path="/reset-forgotten-password"
          element={
            <AuthRoute>
              <ResetForgottenPassword />
            </AuthRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/:userId"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
      </Routes>
      <Toaster richColors position="top-right" />
    </>
  );
}

export default App;
