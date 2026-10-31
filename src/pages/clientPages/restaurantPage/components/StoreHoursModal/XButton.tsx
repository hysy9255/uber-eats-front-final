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
        hover:cursor-pointer
        flex
        size-10
        items-center
        justify-center
        rounded-full
        border
        border-gray-200
        text-gray-500
        transition
        hover:bg-gray-50
        hover:text-gray-800
      "
    >
      <X className="size-5" />
    </button>
  );
};

export default XButton;
