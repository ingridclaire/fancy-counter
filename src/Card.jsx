import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";
import { useEffect, useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Space" && !locked) {
        setCount(count + 1);
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [count]);

  return (
    <div className="card">
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer setCount={setCount} locked={locked} />
    </div>
  );
}
