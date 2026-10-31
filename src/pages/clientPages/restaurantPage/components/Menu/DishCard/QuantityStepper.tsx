import { Minus, Plus } from "lucide-react";

interface QuantityStepperProps {
  onDecrease: () => void;
  onIncrease: () => void;
  quantity: number;
}

export const QuantityStepper: React.FC<QuantityStepperProps> = ({
  onDecrease,
  onIncrease,
  quantity,
}) => {
  return (
    <div
      className="
        flex
        items-center
        overflow-hidden
        rounded-full
        bg-green-600
        text-white
        shadow-sm
      "
    >
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onDecrease();
        }}
        className="
          flex
          p-1
          items-center
          justify-center
          transition
          hover:bg-green-700
          hover:cursor-pointer
        "
      >
        <Minus className="h-3 w-3" />
      </button>
      <div
        className="
          min-w-[20px]
          text-center
          text-sm          
        "
      >
        {quantity}
      </div>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onIncrease();
        }}
        className="
          flex
          p-1
          items-center
          justify-center
          transition
          hover:bg-green-700
          hover:cursor-pointer
        "
      >
        <Plus className="h-3 w-3" />
      </button>
    </div>
  );
};
