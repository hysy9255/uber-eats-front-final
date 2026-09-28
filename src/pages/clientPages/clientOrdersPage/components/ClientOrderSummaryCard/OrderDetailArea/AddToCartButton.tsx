import { ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  onAddToCart: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onAddToCart }) => {
  return (
    <button
      onClick={onAddToCart}
      className="flex items-center justify-center border border-gray-300 rounded-md w-10 hover:cursor-pointer"
    >
      <ShoppingCart className="w-4 h-4" />
    </button>
  );
};

export default AddToCartButton;
