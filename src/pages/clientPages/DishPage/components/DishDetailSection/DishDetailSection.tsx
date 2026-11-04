import { Link, useParams } from "react-router-dom";
import { Star, Trophy } from "lucide-react";

import DishOrderPanel from "./DishOrderPanel";
import DefaultRestaurantLogoImg from "@/shared/components/DefaultRestaurantLogoImg/DefaultRestaurantLogoImg";
import CartErrorModal from "@/shared/components/CartErrorModal/CartErrorModal";
import { capitalizeWords } from "@/shared/utils/capitalizeWords";

import { useDishDetail } from "./hooks/useDishDetail";
import { useQuantity } from "./hooks/useQuantity";
import { useAddToCart } from "./hooks/useAddToCart";
import { NoImagePlaceholder } from "../../../../../shared/components/NoImagePlaceHolder/NoImagePlaceHolder";

export const DishDetailSection = () => {
  const { dishId, restaurantId } = useParams();

  const { dishDetail } = useDishDetail(restaurantId, dishId);
  const { quantity, increment, decrement } = useQuantity();

  const {
    addToCartError,
    setAddToCartError,
    handleAddToCart,
    handleAddAnyway,
  } = useAddToCart(restaurantId, dishId, quantity);

  const totalPrice = dishDetail
    ? (dishDetail.price * quantity).toFixed(2)
    : "0.00";

  return (
    <>
      <div
        className="
          grid min-w-0 grid-cols-1
          gap-6
          lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
          lg:gap-8
        "
      >
        {/* Dish Image */}
        <section className="min-w-0">
          <div
            className="
              relative h-[260px] w-full
              overflow-hidden rounded-2xl bg-gray-100
              sm:h-[340px]
              lg:h-[400px]
              xl:h-[420px]
            "
          >
            {dishDetail?.dishImg ? (
              <img
                src={dishDetail?.dishImg}
                alt={dishDetail?.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <NoImagePlaceholder />
            )}
          </div>
        </section>

        {/* Right Content */}
        <section className="flex min-w-0 flex-col">
          {/* Restaurant */}
          {dishDetail && (
            <Link
              to={`/restaurants/${dishDetail.restaurantId}`}
              className="group inline-flex w-fit max-w-full items-center gap-2.5"
            >
              {dishDetail.logo ? (
                <img
                  src={dishDetail.logo}
                  alt={dishDetail.restaurantName}
                  className="h-8 w-8 shrink-0 rounded-full border border-gray-200 object-cover"
                />
              ) : (
                <DefaultRestaurantLogoImg className="h-8 w-8 shrink-0 rounded-full border border-gray-200" />
              )}

              <span className="truncate text-sm font-semibold text-gray-800 group-hover:text-green-700">
                {capitalizeWords(dishDetail.restaurantName)}
              </span>
            </Link>
          )}

          {/* Dish Information */}
          <div className="mt-4">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                <Trophy className="h-3.5 w-3.5" />
                Best Seller
              </span>

              {dishDetail &&
                dishDetail.avgRating &&
                dishDetail.avgRating > 0 && (
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-gray-700">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    {dishDetail.avgRating.toFixed(1)}
                  </span>
                )}
            </div>

            <h1 className="text-[28px] font-bold leading-tight tracking-tight text-gray-950 sm:text-[32px] xl:text-[36px]">
              {dishDetail?.name ? capitalizeWords(dishDetail.name) : ""}
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-[15px]">
              {dishDetail?.description}
            </p>
          </div>

          {/* Order Panel */}
          <div className="mt-6">
            <DishOrderPanel
              onDecreaseQuantity={decrement}
              onIncreaseQuantity={increment}
              quantity={quantity}
              price={totalPrice}
              onAddToCart={handleAddToCart}
            />
          </div>
        </section>
      </div>

      {addToCartError && (
        <CartErrorModal
          onClose={() => setAddToCartError(null)}
          onAddAnyway={handleAddAnyway}
        />
      )}
    </>
  );
};
