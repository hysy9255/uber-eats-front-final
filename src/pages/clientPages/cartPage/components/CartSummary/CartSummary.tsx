import { Link } from "react-router-dom";
import CartTable from "./CartTable";
import { AddMenuButton } from "./AddMenuButton";
import { useCart } from "../../../shared/context/cart/useCart";
import DefaultRestaurantLogoImg from "../../../../../shared/components/DefaultRestaurantLogoImg/DefaultRestaurantLogoImg";

const CartSummary = () => {
  const { cart } = useCart();
  const restaurantPath = `/restaurants/${cart?.restaurantInfo?.restaurantId}`;
  return (
    <section className="py-10 px-5">
      <article className="flex justify-between items-end border-b-2 border-gray-200 pb-5">
        <Link to={restaurantPath}>
          <div className="flex gap-2 hover:cursor-pointer">
            {cart?.restaurantInfo?.restaurantLogo ? (
              <img
                className={`w-5 h-5 self-center object-contain rounded-full`}
                src={cart.restaurantInfo.restaurantLogo}
              />
            ) : (
              <DefaultRestaurantLogoImg className="w-5 h-5 rounded-full border border-gray-400" />
            )}
            <h1 className="font-semibold text-xl leading-none">
              {cart?.restaurantInfo?.restaurantName}
            </h1>
          </div>
        </Link>

        <div className="font-semibold text-lg leading-none ">
          {cart?.items.length} Items
        </div>
      </article>
      <CartTable />
      <div className="flex justify-end">
        <Link to={restaurantPath}>
          <AddMenuButton />
        </Link>
      </div>
    </section>
  );
};

export default CartSummary;
