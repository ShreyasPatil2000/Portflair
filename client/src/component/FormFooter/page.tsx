import { useNavigate } from "react-router-dom";

const FormFooter = () => {
  const navigate = useNavigate();
  return (
    // FormFooter
    <div className="text-center mt-8">
      <p className="text-slate-500 text-sm">
        By continuing, you agree to our{" "}
        <button
          onClick={() => navigate("/terms")}
          className="text-purple-400 hover:text-purple-300 transition-colors underline cursor-pointer"
          title="Read the Terms of Service"
        >
          Terms of Service
        </button>{" "}
        and{" "}
        <button
          onClick={() => navigate("/privacy")}
          className="text-purple-400 hover:text-purple-300 transition-colors underline cursor-pointer"
          title="Read the Privacy Policy"
        >
          Privacy Policy
        </button>
      </p>
    </div>
  );
};

export default FormFooter;
