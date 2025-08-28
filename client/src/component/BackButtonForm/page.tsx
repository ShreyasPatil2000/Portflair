import { useNavigate } from "react-router-dom";

const BackButtonForm = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      title="Go Back"
      className="absolute top-4 left-4 flex items-center gap-1 text-gray-300 hover:text-white text-sm font-medium transition-colors cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Back
    </button>
  );
};

export default BackButtonForm;
