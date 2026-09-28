import DefaultRestaurantLogoImg from "@/shared/components/DefaultRestaurantLogoImg/DefaultRestaurantLogoImg";
import { capitalizeWords } from "@/shared/utils/capitalizeWords";
import type { ClientOrderDetailDTO } from "../../../api/getClientOrderDetail/clientOrderDetail.dto";

interface OrderDetailHeaderProps {
  order: ClientOrderDetailDTO;
}

const OrderDetailHeader: React.FC<OrderDetailHeaderProps> = ({ order }) => {
  return (
    <div className="flex gap-x-2 pb-2 items-center">
      {order.restaurantLogo === null ? (
        <DefaultRestaurantLogoImg className="w-10 h-10 border border-gray-400 rounded-full " />
      ) : (
        <img src={order.restaurantLogo} className="w-10 h-10" />
      )}
      <div className="flex flex-col">
        <div className="text-xs font-medium">{order.restaurant}</div>
        <div className="text-[10px] text-gray-500">
          {capitalizeWords(order.cuisineType)} • 1.2km • 4.8
        </div>
      </div>
    </div>
  );
};

export default OrderDetailHeader;
