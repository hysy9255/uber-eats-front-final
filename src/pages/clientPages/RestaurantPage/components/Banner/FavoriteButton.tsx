import { Heart } from "lucide-react";

interface FavoriteButtonProps {
  className?: string;
  isSelected: boolean;
  onClick: () => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  className,
  isSelected,
  onClick,
}) => {
  return (
    <button
      className={`
        ${className}
        
      bg-white rounded-full p-2
      hover:cursor-pointer
        `}
      onClick={onClick}
    >
      <Heart
        className={`w-4 h-4  ${
          isSelected ? "text-red-400 fill-red-400" : "text-gray-700"
        }`}
      />
    </button>
  );
};

export default FavoriteButton;
