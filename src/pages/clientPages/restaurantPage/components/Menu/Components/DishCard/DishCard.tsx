import React from "react";
import { Link, useParams } from "react-router-dom";
import PopularTag from "./Components/PopularTag";
import FavoriteButton from "./Components/FavoriteButton";
import AddToCartButton from "./Components/AddToCartButton";
import { capitalizeWords } from "../../../../../../../shared/utils/capitalizeWords";
import NoImgAvailable from "../../../../../../../shared/components/NoImgAvailable/NoImgAvailable";
// import CartErrorModal from "../../../../../clientOrdersPage/components/ClientOrderSummaryCard/OrderDetailArea/CartErrorModal";
import { QuantityStepper } from "./Components/QuantityStepper";
import { useDishCard } from "./useDishCard";
import CartErrorModal from "../../../../../../../shared/components/CartErrorModal/CartErrorModal";

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
        relative select-none rounded-lg shadow-md
        hover:bg-green-100/20
      ${
        quantityAddedToCart > 0
          ? "border-green-400 bg-green-300/20"
          : "border-gray-400"
      }
      `}
      >
        <div className="relative w-full aspect-[3/2] overflow-hidden rounded-t-lg">
          {dishImgUrl ? (
            <img
              src={dishImgUrl}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-white">
              <NoImgAvailable className="h-30 w-30" />
            </div>
          )}

          {quantityAddedToCart > 0 && (
            <div className="border border-green-200 bg-green-400 text-white rounded-full w-6 h-6 absolute right-2 top-2 flex items-center justify-center">
              <div className="text-xs font-bold">{quantityAddedToCart}</div>
            </div>
          )}

          <PopularTag className="absolute bottom-2 left-2" />
          <FavoriteButton
            className="absolute bottom-2 right-2"
            isSelected={favorited}
            onClick={() => setFavorited((prev) => !prev)}
          />
        </div>

        <div
          id="desc"
          className="flex flex-col 
          justify-center gap-1 
          py-2 px-2
          "
        >
          <div
            id="name"
            className="font-bold text-sm text-nowrap overflow-hidden text-ellipsis"
          >
            {capitalizeWords(name)}
          </div>
          <div id="description" className="text-slate-700 text-xs line-clamp-3">
            {descriptions}
          </div>

          <div className="flex justify-between items-center mt-2">
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
      {addToCartError && (
        <CartErrorModal
          onClickCancel={() => setAddToCartError(undefined)}
          onClickAddAnyway={handleAddAnyway}
        />
      )}
    </>
  );
};

export default DishCard;
