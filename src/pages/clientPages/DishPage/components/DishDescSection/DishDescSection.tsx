import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import { Trophy } from "lucide-react";
import NutritionTable from "./NutritionTable";
import DishOrderPanel from "./DishOrderPanel";
import type { DishDetailDTO } from "../../api/getDishDetail/dishDetail.dto";
import DefaultRestaurantLogoImg from "../../../../../shared/components/DefaultRestaurantLogoImg/DefaultRestaurantLogoImg";
import { capitalizeWords } from "../../../../../shared/utils/capitalizeWords";

interface DishDescSectionProps {
  restaurantId: string;
  dishDetail: DishDetailDTO;
  totalPrice: string;
  decrement: () => void;
  increment: () => void;
  quantity?: number;
  onClickAddToCart: () => void;
}

const DishDescSection: React.FC<DishDescSectionProps> = ({
  restaurantId,
  dishDetail,
  totalPrice,
  decrement,
  increment,
  quantity,
  onClickAddToCart,
}) => {
  return (
    <article>
      <div>
        <Link to={`/client/restaurants/${restaurantId}`}>
          <div
            className="
          flex items-center gap-x-2 
          font-semibold font-serif 
          hover:cursor-pointer text-md pb-2"
          >
            {dishDetail.logo ? (
              <img className="rounded-full w-7 h-7" src={dishDetail.logo} />
            ) : (
              <DefaultRestaurantLogoImg className="w-7 h-7 rounded-full border border-gray-400" />
            )}
            <div>{dishDetail.restaurantName}</div>
          </div>
        </Link>

        <div>
          <div className="font-semibold text-4xl">
            {capitalizeWords(dishDetail.name)}
          </div>
          <div className="flex flex-col gap-y-3 my-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                <Trophy className="h-4 w-4" />
                Best Seller
              </span>

              <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                {dishDetail.name}
              </span>
            </div>
            <StarRating
              rating={dishDetail.avgRating}
              className="ml-2"
              showText={true}
            />
          </div>
        </div>

        <div className="text-md text-gray-700 max-w-xl">
          {dishDetail.description}
        </div>
      </div>
      <div className="mt-2 grid gap-6 lg:grid-cols-[1.45fr_1fr]">
        <NutritionTable />
        <DishOrderPanel
          handleDecrease={decrement}
          handleIncrease={increment}
          price={totalPrice}
          quantity={quantity}
          onClickAddToCart={onClickAddToCart}
        />
      </div>
    </article>
  );
};

export default DishDescSection;
