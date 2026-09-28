import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PopularTag from "./Components/PopularTag";
import FavoriteButton from "./Components/FavoriteButton";
import AddToCartButton from "./Components/AddToCartButton";
import { capitalizeWords } from "../../../../../../../shared/utils/capitalizeWords";
import NoImgAvailable from "../../../../../../../shared/components/NoImgAvailable/NoImgAvailable";

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
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const [favorited, setFavorited] = useState<boolean>(false);
  return (
    <Link
      to={`/restaurants/${restaurantId}/dishes/${dishId}`}
      className={`
      relative select-none rounded-lg shadow-md
       hover:bg-green-100/20
      ${addedToCart ? "border-green-400 bg-green-300/20" : "border-gray-400"}
      `}
    >
      <div className="relative">
        {dishImgUrl ? (
          <img
            className="object-cover rounded-t-lg aspect-[3/2]"
            src={dishImgUrl}
          />
        ) : (
          <div
            className="
              rounded-t-lg 
              aspect-[3/2]
               flex items-center justify-center bg-white"
          >
            <NoImgAvailable className="w-30 h-30" />
          </div>
        )}

        {addedToCart && (
          <div className="border border-green-200 bg-green-400 text-white rounded-full w-6 h-6 absolute right-2 top-2 flex items-center justify-center">
            <div className="text-xs font-bold">1</div>
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
          <AddToCartButton onClick={() => setAddedToCart(true)} />
        </div>
      </div>
    </Link>
  );
};

export default DishCard;
