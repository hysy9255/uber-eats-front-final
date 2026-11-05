import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";

import { getToken } from "@/shared/utils/getToken";
import { NoImagePlaceholder } from "@/shared/components/NoImagePlaceHolder/NoImagePlaceHolder";
import { capitalizeWords } from "@/shared/utils/capitalizeWords";

import { increaseItemQuantity } from "../../api/increaseItemQuantity";
import { decreaseItemQuantity } from "../../api/decreaseItemQuantity";
import { useCart } from "../../../shared/context/cart/useCart";

const CartTable = () => {
  const { cart, loadMyCart } = useCart();

  const incrementQuantity = async (dishId: string) => {
    try {
      const token = getToken();
      if (!token) throw new Error("No token");

      await increaseItemQuantity(token, dishId);
      await loadMyCart();
    } catch (error) {
      console.error("Failed to increase quantity", error);
    }
  };

  const decrementQuantity = async (dishId: string) => {
    try {
      const token = getToken();
      if (!token) throw new Error("No token");

      await decreaseItemQuantity(token, dishId);
      await loadMyCart();
    } catch (error) {
      console.error("Failed to decrease quantity", error);
    }
  };

  const restaurantId = cart?.restaurantInfo?.restaurantId;

  return (
    <div className="w-full min-w-0">
      {/* Desktop Header */}
      <div className="hidden min-[1200px]:grid min-[1200px]:grid-cols-[minmax(0,1fr)_90px_120px_90px] gap-4 border-b border-gray-200 px-3 py-3 text-[11px] font-semibold tracking-wide text-gray-400">
        <span>PRODUCT DETAILS</span>
        <span>PRICE</span>
        <span className="text-center">QUANTITY</span>
        <span className="text-right">TOTAL</span>
      </div>

      {/* Cart Items */}
      <div className="divide-y divide-gray-100">
        {cart?.items.map((item) => (
          <div
            key={item.dishId}
            className="
              grid min-w-0 grid-cols-1
              gap-4 px-1 py-5
              sm:px-3
              min-[1200px]:grid-cols-[minmax(0,1fr)_90px_120px_90px]
              min-[1200px]:items-center
              min-[1200px]:gap-4
            "
          >
            {/* Product */}
            <div className="flex min-w-0 items-start gap-3 sm:gap-4">
              <Link
                to={`/restaurants/${restaurantId}/dishes/${item.dishId}`}
                className="block h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-24 sm:w-24"
              >
                {item.dishImg ? (
                  <img
                    src={item.dishImg}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <NoImagePlaceholder compact />
                )}
              </Link>

              <div className="min-w-0 flex-1">
                <Link
                  to={`/restaurants/${restaurantId}/dishes/${item.dishId}`}
                  className="inline-block max-w-full"
                >
                  <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-gray-950 hover:text-green-700 sm:text-base">
                    {capitalizeWords(item.name)}
                  </h3>
                </Link>

                <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                  {item.description}
                </p>

                {/* Mobile Unit Price */}
                <p className="mt-2 text-sm font-medium text-gray-600 min-[1200px]:hidden">
                  ${Number(item.unitPrice).toFixed(2)} each
                </p>
              </div>
            </div>

            {/* Desktop Unit Price */}
            <div className="hidden text-sm text-gray-600 min-[1200px]:block">
              ${Number(item.unitPrice).toFixed(2)}
            </div>

            {/* Quantity Control */}
            <div className="flex items-center justify-between gap-3 min-[1200px]:justify-center">
              <span className="text-xs font-medium text-gray-500 min-[1200px]:hidden">
                Quantity
              </span>

              <div className="inline-flex shrink-0 items-center rounded-lg border border-gray-200 bg-gray-50 p-1">
                <button
                  type="button"
                  onClick={() => decrementQuantity(item.dishId)}
                  aria-label={
                    item.quantity === 1
                      ? `Remove ${item.name} from cart`
                      : `Decrease quantity of ${item.name}`
                  }
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-white hover:text-gray-900 hover:shadow-sm"
                >
                  {item.quantity === 1 ? (
                    <Trash2 className="h-4 w-4" />
                  ) : (
                    <Minus className="h-4 w-4" />
                  )}
                </button>

                <span className="w-8 text-center text-sm font-semibold tabular-nums text-gray-900">
                  {item.quantity}
                </span>

                <button
                  type="button"
                  onClick={() => incrementQuantity(item.dishId)}
                  aria-label={`Increase quantity of ${item.name}`}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-white hover:text-gray-900 hover:shadow-sm"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Line Total */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-3 min-[1200px]:block min-[1200px]:border-0 min-[1200px]:pt-0 min-[1200px]:text-right">
              <span className="text-xs font-medium text-gray-500 min-[1200px]:hidden">
                Subtotal
              </span>

              <span className="text-base font-bold tabular-nums text-gray-950 min-[1200px]:text-sm">
                ${Number(item.lineTotalPrice).toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartTable;
