import { ArrowRight, Lock, Mail } from "lucide-react";
import { useState } from "react";
import BackButtonForm from "@/component/BackButtonForm/page";
import apiClient from "@/lib/api";
import { FORGOT_PASSWORD_ROUTE } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import FormFooter from "@/component/FormFooter/page";
import LoadingIcon from "@/component/LoadingPage/LoadingIcon/page";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  // Note this for multiple State inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const { email } = formData;
    try {
      e.preventDefault();
      setLoading(true);
      const response = await apiClient.post(FORGOT_PASSWORD_ROUTE, { email });
      console.log(response.data);
      if (response.data) {
        toast.success("Check your registered email for password recovery link");
      }
      navigate("/auth");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Auth error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Main Card */}
        {loading ? (
          <LoadingIcon />
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-8"
          >
            <BackButtonForm />
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Forgot Password</h1>
              <p className="text-slate-400">Re-enter new password to login</p>
            </div>
            <div className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                    required
                  />
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
        )}
        <FormFooter />
      </div>
    </div>
  );
};

export default ForgotPassword;
