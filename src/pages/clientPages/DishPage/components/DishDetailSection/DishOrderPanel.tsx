import { Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface DishOrderPanelProps {
  onDecreaseQuantity: () => void;
  onIncreaseQuantity: () => void;
  onAddToCart: () => void;
  quantity: number;
  price: string;
}

const DishOrderPanel = ({
  onDecreaseQuantity,
  onIncreaseQuantity,
  onAddToCart,
  quantity,
  price,
}: DishOrderPanelProps) => {
  const [favorited, setFavorited] = useState(false);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.035)] sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-5">
        {/* Price */}
        <div>
          <p className="text-[11px] font-semibold tracking-[1.5px] text-stone-400 uppercase">
            Your total
          </p>

          <p className="mt-1 text-[32px] leading-none font-bold tracking-tight text-stone-950 sm:text-[36px]">
            ${price}
          </p>
        </div>

        {/* Quantity */}
        <div className="flex flex-col items-end gap-2">
          <span className="text-xs font-medium text-stone-500">Quantity</span>

          <div className="flex items-center rounded-xl border border-stone-200 bg-stone-50">
            <button
              type="button"
              onClick={onDecreaseQuantity}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
              className="flex h-10 w-10 items-center justify-center rounded-l-xl text-stone-700 transition-colors enabled:cursor-pointer enabled:hover:bg-stone-100 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <Minus className="h-4 w-4" />
            </button>

            <span className="w-9 text-center text-sm font-semibold tabular-nums text-stone-900">
              {quantity}
            </span>

            <button
              type="button"
              onClick={onIncreaseQuantity}
              aria-label="Increase quantity"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-r-xl text-stone-700 transition-colors hover:bg-stone-100"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={onAddToCart}
          className="flex min-h-12 min-w-0 flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-green-700 px-4 text-sm font-semibold text-white transition-colors hover:bg-green-800 active:bg-green-900"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to cart
        </button>

        <button
          type="button"
          onClick={() => setFavorited((prev) => !prev)}
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={favorited}
          className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-600 transition-colors hover:bg-stone-50"
        >
          <Heart
            className={`h-5 w-5 ${
              favorited ? "fill-red-500 text-red-500" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default DishOrderPanel;
