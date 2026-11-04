import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { getToken } from "@/shared/utils/getToken";

import { increaseItemQuantity } from "../../api/increaseItemQuantity";
import { decreaseItemQuantity } from "../../api/decreaseItemQuantity";
import { useCart } from "../../../shared/context/cart/useCart";
import { capitalizeWords } from "../../../../../shared/utils/capitalizeWords";
import { NoImagePlaceholder } from "../../../../../shared/components/NoImagePlaceHolder/NoImagePlaceHolder";

const CartTable = () => {
  const { cart, loadMyCart } = useCart();

  const token = getToken();
  if (!token) throw new Error("no token");

  const incrementQuantity = async (dishId: string) => {
    try {
      await increaseItemQuantity(token, dishId);
      await loadMyCart();
    } catch (error) {
      console.error("Failed to increase quantity", error);
    }
  };

  const decrementQuantity = async (dishId: string) => {
    try {
      await decreaseItemQuantity(token, dishId);
      await loadMyCart();
    } catch (error) {
      console.error("Failed to decrease quantity", error);
    }
  };
  return (
    <table className="w-full text-gray-600 text-xs">
      <colgroup>
        <col className="w-[52%]" />
        <col className="w-[14%]" />
        <col className="w-[18%]" />
        <col className="w-[16%]" />
      </colgroup>
      <thead>
        <tr className="">
          <th className="text-left p-3 ">PRODUCT DETAILS</th>
          <th className="text-left p-3 ">PRICE</th>
          <th className="text-center p-3 ">QUANTITY</th>
          <th className="text-left p-3 ">TOTAL</th>
        </tr>
      </thead>

      <tbody>
        {cart?.items.map((item, index) => (
          <tr key={index}>
            <td className="p-3">
              <div className="flex gap-3">
                <Link
                  className="block h-25 w-25 shrink-0 overflow-hidden rounded-lg"
                  to={`/restaurants/${cart?.restaurantInfo?.restaurantId}/dishes/${item.dishId}`}
                >
                  {item.dishImg ? (
                    <img
                      src={item.dishImg}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <NoImagePlaceholder compact />
                  )}
                </Link>
                <div className="space-y-1">
                  <div className="text-black text-sm font-semibold">
                    {capitalizeWords(item.name)}
                  </div>
                  <div className="text-xs font-normal text-gray-500 max-[950px]:line-clamp-3">
                    {item.description}
                  </div>
                </div>
              </div>
            </td>
            <td className="p-3 align-top text-sm">
              <div>${item.unitPrice}</div>
            </td>
            <td className="p-3 align-top">
              <div className="flex gap-3 justify-center items-center">
                {item.quantity === 1 ? (
                  <Trash2
                    className="w-4 h-4 hover:cursor-pointer"
                    onClick={() => decrementQuantity(item.dishId)}
                  />
                ) : (
                  <Minus
                    className="w-4 h-4 hover:cursor-pointer"
                    onClick={() => decrementQuantity(item.dishId)}
                  />
                )}
                <div className="text-sm">{item.quantity}</div>
                <Plus
                  className="w-4 h-4 hover:cursor-pointer"
                  onClick={() => incrementQuantity(item.dishId)}
                />
              </div>
            </td>
            <td className="p-3 align-top">
              <div className="text-sm">${item.lineTotalPrice}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
