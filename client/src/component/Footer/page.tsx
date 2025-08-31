import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800/50 backdrop-blur-xl border-t border-slate-700/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-80">
          {/* Logo Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center logo cursor-pointer" onClick={() => navigate("/")}>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-white">Portflair</span>
            </div>
            <p className="mt-4 text-slate-400 text-md">Create and showcase your professional portfolio with style.</p>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("/about")}
                  className="text-slate-400 hover:text-purple-400 transition-colors text-sm cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/contact")}
                  className="text-slate-400 hover:text-purple-400 transition-colors text-sm cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Features Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="text-slate-400 hover:text-purple-400 transition-colors text-sm cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/profile")}
                  className="text-slate-400 hover:text-purple-400 transition-colors text-sm cursor-pointer"
                >
                  Profile
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-700/50 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© {currentYear} Portflair. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <button
                onClick={() => navigate("/terms")}
                className="text-slate-400 hover:text-purple-400 transition-colors text-sm cursor-pointer"
              >
                Terms of Service
              </button>
              <button
                onClick={() => navigate("/privacy")}
                className="text-slate-400 hover:text-purple-400 transition-colors text-sm cursor-pointer"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;