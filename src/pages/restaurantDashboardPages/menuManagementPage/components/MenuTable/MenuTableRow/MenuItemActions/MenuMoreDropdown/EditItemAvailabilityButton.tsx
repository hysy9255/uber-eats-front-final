import { Circle, CircleOff } from "lucide-react";

interface EditItemAvailabilityButtonProps {
  onClick: () => void;
  isAvailable: boolean;
}

const EditItemAvailabilityButton: React.FC<EditItemAvailabilityButtonProps> = ({
  onClick,
  isAvailable,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex
        w-full
        items-center
        gap-2
        rounded-lg
        px-3
        py-2
        text-sm
        text-gray-700
        hover:bg-gray-50
        hover:cursor-pointer
      "
    >
      {isAvailable ? (
        <CircleOff className="h-4 w-4" />
      ) : (
        <Circle className="h-4 w-4" />
      )}

      {isAvailable ? "Mark unavailable" : "Mark available"}
    </button>
  );
};

export default EditItemAvailabilityButton;
