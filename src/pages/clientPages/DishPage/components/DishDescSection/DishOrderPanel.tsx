import { Heart, Minus, Plus } from "lucide-react";
import { useState } from "react";

interface DishOrderPanelProps {
  handleDecrease: () => void;
  handleIncrease: () => void;
  quantity?: number;
  price?: string;
  onClickAddToCart: () => void;
}

const DishOrderPanel: React.FC<DishOrderPanelProps> = ({
  handleDecrease,
  handleIncrease,
  quantity,
  price,
  onClickAddToCart,
}) => {
  const [favorited, setFavorited] = useState<boolean>(false);
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="text-xl font-bold">${price}</div>

      <div className="mt-8 flex items-center justify-between">
        <span className="font-semibold text-gray-700 text-sm">Quantity</span>

        <div className="flex items-center rounded-xl bg-gray-50">
          <button
            type="button"
            onClick={handleDecrease}
            className="flex h-8 w-8 items-center justify-center rounded-xl hover:bg-gray-100 hover:cursor-pointer"
          >
            <Minus className="h-3 w-3" />
          </button>

          <span className="w-10 text-center font-semibold text-sm">
            {quantity}
          </span>

          <button
            type="button"
            onClick={handleIncrease}
            className="flex h-8 w-8 items-center justify-center rounded-xl hover:bg-gray-100 hover:cursor-pointer"
          >
            <Plus className="h-3 w-3" />
          </button>
        </div>
      </div>

      <button
        onClick={onClickAddToCart}
        className="hover:cursor-pointer mt-5 w-full text-sm rounded-md bg-green-600 py-2 font-semibold text-white transition hover:bg-green-700"
      >
        Add to cart
      </button>

      <button
        type="button"
        onClick={() => setFavorited((prev) => !prev)}
        className="hover:cursor-pointer mt-4 flex w-full text-sm items-center justify-center gap-3 rounded-md border border-gray-200 py-2 font-medium text-gray-700 transition hover:bg-gray-50"
      >
        <Heart
          className={`h-5 w-5 ${favorited ? "fill-red-500 text-red-500" : ""}`}
        />
        Add to favorites
      </button>
    </div>
  );
};

export default DishOrderPanel;
