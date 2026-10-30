import { capitalizeWords } from "../../../../../../shared/utils/capitalizeWords";
import type { RestaurantOrderSummaryDTO } from "../../../api/getRestaurantOrderSummaries/restaurantOrderSummary.dto";
import { formatOrderTime } from "../utils/formatOrderTime";
import { OrderStatusBadge } from "./OrderDetailModal/OrderStatusBadge";

interface OrderRowContentProps {
  order: RestaurantOrderSummaryDTO;
}

const OrderRowContent: React.FC<OrderRowContentProps> = ({ order }) => {
  return (
    <>
      <td className="px-4 py-3">
        <span className="text-sm font-semibold text-gray-900">
          {order.orderId.split("-")[0]}
        </span>
      </td>

      <td className="px-4 py-3">
        <span className="text-sm font-medium text-gray-800">
          {order.client}
        </span>
      </td>

      <td className="px-4 py-3 max-w-[330px]">
        <span className="text-sm text-gray-600">
          {order.orderItems
            .map((item) => `${capitalizeWords(item.name)} x${item.quantity}`)
            .join(", ")}
        </span>
      </td>

      <td className="px-4 py-3 whitespace-nowrap">
        <span className="text-sm font-medium text-gray-800">
          $ {order.totalPrice.toFixed(2)}
        </span>
      </td>

      <td className="px-4 py-3">
        <OrderStatusBadge status={order.status} />
      </td>

      <td className="px-4 py-3 whitespace-nowrap">
        <span className="text-xs text-gray-500">
          {formatOrderTime(order.orderedAt)}
        </span>
      </td>
    </>
  );
};

export default OrderRowContent;
