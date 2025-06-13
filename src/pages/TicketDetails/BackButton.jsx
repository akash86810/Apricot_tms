import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // you can also use an SVG/icon of your choice

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/MyTickets"); // instant navigation
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center"
      style={{
        width: "81px",
        height: "32px",
        top: "102px",
        left: "39px",
        borderRadius: "8px",
        gap: "8px",
        paddingTop: "6px",
        paddingRight: "10px",
        paddingBottom: "6px",
        paddingLeft: "10px",
        borderWidth: "1px",
        border: "1px solid #E7E7E7",
        backgroundColor: "#ffffff", // optional white background
        fontFamily: "Inter",
        fontSize: "14px",
        fontWeight: "500",
        color: "#5D5D5D",
        lineHeight: "18px",
        cursor: "pointer",
      }}
    >
      <ArrowLeft size={16} color="#3AA6B9"/> Back
    </button>
  );
};

export default BackButton;
