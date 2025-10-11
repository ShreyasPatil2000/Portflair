import apiClient from "@/lib/api";
import FormFooter from "@/component/FormFooter/page";
import { ArrowRight, Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { RESET_FORGOTTEN_PASSWORD_ROUTE } from "@/utils/constants";
import { useParams } from "react-router-dom";

const ResetForgottenPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();

  const [formData, setFormData] = useState({
    password: "",
  });

  // Note this for multiple State inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const { password } = formData;
    try {
      e.preventDefault();
      const response = await apiClient.post(
        RESET_FORGOTTEN_PASSWORD_ROUTE,
        { token, password },
        { withCredentials: true }
      );
      toast.success(response.data.user?.name + " has successfully reset the password.");
      navigate("/auth");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Auth error:", error.response?.data || error.message);
      toast.error("Application wasn't able to reset the password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Main Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Reset Password</h1>
            <p className="text-slate-400">Re-enter new password to login</p>
          </div>
          {/* Email Field */}
          <div className="space-y-6">
            {/* Password Field */}
            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              title="Submit for forget password"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-200 flex items-center justify-center group cursor-pointer"
            >
              Set Password
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
        <FormFooter />
      </div>
    </div>
  );
};

export default ResetForgottenPassword;
