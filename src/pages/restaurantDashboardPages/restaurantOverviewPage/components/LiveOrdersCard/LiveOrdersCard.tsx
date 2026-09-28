import { ChevronRight } from "lucide-react";
import { OrderStatusBadge } from "./OrderStatusBadge";
import type { RestaurantLiveOrdersDTO } from "../../api/queries/getRestaurantLiveOrders/RestaurantLiveOrders.dto";
import { formatOrderItems } from "./utils/formatOrderItems";
import { formatTimeAgo } from "./utils/formatTimeAgo";

interface LiveOrdersCardProps {
  liveOrders?: RestaurantLiveOrdersDTO;
}

export const LiveOrdersCard: React.FC<LiveOrdersCardProps> = ({
  liveOrders,
}) => {
  const orders = liveOrders?.orders ?? [];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold text-gray-950">Live orders</h3>

          <span className="min-w-6 h-6 px-2 rounded-full bg-green-50 text-green-700 text-xs font-semibold flex items-center justify-center">
            {liveOrders?.count ?? 0}
          </span>
        </div>

        <button className="text-sm font-semibold text-green-700 flex items-center gap-1">
          View all orders
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-4">
        {orders.map((order, index) => (
          <div
            key={order.orderId}
            className={`py-4 flex items-start justify-between gap-4 ${
              index !== orders.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            <div>
              <div className="font-bold text-sm text-gray-900">
                #{order.orderId.split("-")[0]}
              </div>

              <div className="mt-1 text-sm text-gray-600">
                {formatOrderItems(order.orderItems)}
              </div>

              <div className="mt-1 text-xs text-gray-400">
                {formatTimeAgo(order.orderedAt)}
              </div>
            </div>

            <OrderStatusBadge status={order.status} />
          </div>
        ))}

        {orders.length === 0 && (
          <div className="py-10 text-center text-sm text-gray-400">
            No live orders
          </div>
        )}
      </div>
    </div>
  );
};
