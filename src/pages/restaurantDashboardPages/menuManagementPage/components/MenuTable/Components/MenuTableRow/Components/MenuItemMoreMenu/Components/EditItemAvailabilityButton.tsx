import { CircleOff } from "lucide-react";

interface EditItemAvailabilityButtonProps {
  onClick: () => void;
  isActive: boolean;
}

const EditItemAvailabilityButton: React.FC<EditItemAvailabilityButtonProps> = ({
  onClick,
  isActive,
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
      <CircleOff className="h-4 w-4" />

      {isActive ? "Mark unavailable" : "Mark available"}
    </button>
  );
};

export default EditItemAvailabilityButton;
