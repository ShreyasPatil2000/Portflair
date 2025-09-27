import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import UserMenu from "../UserMenu/page";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Navigation Header */}
      <nav className="bg-slate-800/50 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center logo cursor-pointer" title="Home" onClick={() => navigate("/")}>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-white">Portflair</span>
            </div>

            {/* User Menu */}
            <UserMenu />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
