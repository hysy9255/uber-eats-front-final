import { X } from "lucide-react";

interface XButtonProps {
  onClick: () => void;
}

const XButton: React.FC<XButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
      flex
      h-8
      w-8
      items-center
      justify-center
      rounded-lg
      text-gray-400
      hover:bg-gray-100
      hover:text-gray-700
      hover:cursor-pointer
    "
    >
      <X className="h-4 w-4" />
    </button>
  );
};

export default XButton;
