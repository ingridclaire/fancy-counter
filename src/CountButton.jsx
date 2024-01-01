import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount, locked }) {
  function handleClick(e) {
    setCount((prev) =>
      type === "minus" && prev > 0 ? prev - 1 : type === "plus" ? prev + 1 : 0
    );
    e.currentTarget.blur();
  }
  return (
    <button disabled={locked} className="count-btn" onClick={handleClick}>
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
