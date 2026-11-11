import React from "react";
import { Link, useParams } from "react-router-dom";
import PopularTag from "./PopularTag";
import FavoriteButton from "./FavoriteButton";
import AddToCartButton from "./AddToCartButton";
import { capitalizeWords } from "../../../../../../shared/utils/capitalizeWords";
import { QuantityStepper } from "./QuantityStepper";
import { useDishCard } from "./useDishCard";
import CartErrorModal from "../../../../../../shared/components/CartErrorModal/CartErrorModal";
import { NoImagePlaceholder } from "../../../../../../shared/components/NoImagePlaceHolder/NoImagePlaceHolder";

type DishCardProps = {
  dishId: string;
  name: string;
  price: number;
  descriptions: string;
  dishImgUrl: string | null;
};

const DishCard: React.FC<DishCardProps> = ({
  dishId,
  name,
  price,
  descriptions,
  dishImgUrl,
}) => {
  const { restaurantId } = useParams();

  const {
    addToCartError,
    setAddToCartError,
    quantityAddedToCart,
    favorited,
    setFavorited,
    handleAddToCart,
    incrementQuantity,
    decrementQuantity,
    handleAddAnyway,
  } = useDishCard(dishId);

  return (
    <>
      <Link
        to={`/restaurants/${restaurantId}/dishes/${dishId}`}
        className={`
          relative flex h-full flex-col
          select-none overflow-hidden rounded-lg
          shadow-md
          hover:bg-green-100/20
          ${
            quantityAddedToCart > 0
              ? "border-green-400 bg-green-300/20"
              : "border-gray-400"
          }
        `}
      >
        {/* Dish Image */}
        <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden">
          {dishImgUrl ? (
            <img
              src={dishImgUrl}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <NoImagePlaceholder compact />
          )}

          {/* Cart Quantity Badge */}
          {quantityAddedToCart > 0 && (
            <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-green-200 bg-green-400 text-white">
              <span className="text-xs font-bold">{quantityAddedToCart}</span>
            </div>
          )}

          <PopularTag className="absolute bottom-2 left-2" />

          <FavoriteButton
            className="absolute bottom-2 right-2"
            isSelected={favorited}
            onClick={() => setFavorited((prev) => !prev)}
          />
        </div>

        {/* Dish Information */}
        <div id="desc" className="flex min-h-0 flex-1 flex-col gap-1 px-2 py-2">
          {/* Dish Name */}
          <div
            id="name"
            className="overflow-hidden text-ellipsis text-nowrap text-sm font-bold"
          >
            {capitalizeWords(name)}
          </div>

          {/* Description */}
          <div id="description" className="line-clamp-3 text-xs text-slate-700">
            {descriptions}
          </div>

          {/* Price and Cart Controls */}
          <div className="mt-auto flex items-center justify-between pt-2">
            <div id="price" className="text-sm font-bold">
              ${price.toFixed(2)}
            </div>

            {quantityAddedToCart === 0 ? (
              <AddToCartButton onClick={handleAddToCart} />
            ) : (
              <QuantityStepper
                onDecrease={decrementQuantity}
                onIncrease={incrementQuantity}
                quantity={quantityAddedToCart}
              />
            )}
          </div>
        </div>
      </Link>

      {/* Cart Error Modal */}
      {addToCartError && (
        <CartErrorModal
          onClose={() => setAddToCartError(undefined)}
          onAddAnyway={handleAddAnyway}
        />
      )}
    </>
  );
};

export default DishCard;
