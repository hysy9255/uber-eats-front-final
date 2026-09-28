import { MoreVertical } from "lucide-react";

interface MoreVerticalButtonProps {
  onClick: () => void;
}

const MoreVerticalButton: React.FC<MoreVerticalButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
      w-8
      h-8
      rounded-lg
      flex
      items-center
      justify-center
      text-gray-400
      hover:bg-gray-100
      hover:text-gray-700
      hover:cursor-pointer
    "
    >
      <MoreVertical className="w-4 h-4" />
    </button>
  );
};

export default MoreVerticalButton;
