// CardFlip.js
import { useState } from "react";
// import "./CardFlip.css"; // Import the CSS for styling

const CardFlip = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardFlip}
    >
      <div className="card-content front">{frontContent}</div>
      <div className="card-content back">{backContent}</div>
    </div>
  );
};

export default CardFlip;
