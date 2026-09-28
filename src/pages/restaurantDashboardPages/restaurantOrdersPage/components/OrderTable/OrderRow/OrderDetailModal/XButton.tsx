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
    h-9
    w-9
    items-center
    justify-center
    rounded-lg
    text-gray-400
    hover:bg-gray-100
  "
    >
      <X className="h-5 w-5" />
    </button>
  );
};

export default XButton;
