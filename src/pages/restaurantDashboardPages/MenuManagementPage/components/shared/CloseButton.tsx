import { X } from "lucide-react";

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
    w-9
    h-9
    rounded-lg
    flex
    items-center
    justify-center
    text-gray-500
    hover:bg-gray-100
    hover:cursor-pointer
  "
    >
      <X className="w-5 h-5" />
    </button>
  );
};

export default CloseButton;
