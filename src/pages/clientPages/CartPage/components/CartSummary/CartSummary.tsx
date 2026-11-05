import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import CartTable from "./CartTable";
import { AddMenuButton } from "./AddMenuButton";
import { useCart } from "../../../shared/context/cart/useCart";
import DefaultRestaurantLogoImg from "../../../../../shared/components/DefaultRestaurantLogoImg/DefaultRestaurantLogoImg";
import { capitalizeWords } from "../../../../../shared/utils/capitalizeWords";

const CartSummary = () => {
  const { cart } = useCart();

  const restaurantPath = `/restaurants/${cart?.restaurantInfo?.restaurantId}`;

  return (
    <section className="min-w-0 bg-white p-5">
      {/* Header */}
      <header className="flex min-w-0 items-center justify-between gap-4 border-b border-gray-200 pb-5">
        {/* Restaurant */}
        <Link
          to={restaurantPath}
          className="group flex min-w-0 items-center gap-3"
        >
          {cart?.restaurantInfo?.restaurantLogo ? (
            <img
              src={cart.restaurantInfo.restaurantLogo}
              alt={cart.restaurantInfo.restaurantName}
              className="h-10 w-10 shrink-0 rounded-full border border-gray-100 object-cover sm:h-11 sm:w-11"
            />
          ) : (
            <DefaultRestaurantLogoImg className="h-10 w-10 shrink-0 rounded-full border border-gray-200 sm:h-11 sm:w-11" />
          )}

          <div className="min-w-0">
            <p className="text-[11px] font-medium text-gray-400 sm:text-xs">
              Your order from
            </p>

            <div className="flex min-w-0 items-center gap-1.5">
              <h1 className="truncate text-base font-bold text-gray-950 sm:text-xl">
                {capitalizeWords(cart?.restaurantInfo?.restaurantName)}
              </h1>

              <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-400 transition-colors group-hover:text-green-600" />
            </div>
          </div>
        </Link>

        {/* Item Count */}
        <div className="shrink-0 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 sm:px-4 sm:py-2 sm:text-sm">
          {cart?.items.length ?? 0} Items
        </div>
      </header>

      {/* Cart Items */}
      <div className="min-w-0 pt-4">
        <div className="w-full overflow-x-auto">
          <CartTable />
        </div>
      </div>

      {/* Add More Items */}
      <div className="mt-5 flex justify-end border-t border-gray-100 pt-5">
        <Link to={restaurantPath} className="inline-flex">
          <AddMenuButton />
        </Link>
      </div>
    </section>
  );
};

export default CartSummary;
