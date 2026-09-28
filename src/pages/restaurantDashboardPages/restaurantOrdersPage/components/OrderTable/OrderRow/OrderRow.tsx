import { useState } from "react";
import { getToken } from "@/shared/utils/getToken";
import { capitalizeWords } from "@/shared/utils/capitalizeWords";
import { OrderStatusBadge } from "@/pages/restaurantDashboardPages/restaurantOverviewPage/components/LiveOrdersCard/OrderStatusBadge";
import { OrderStatus } from "../../../types/orderStatus.enum";
import { useOrderRow } from "./useOrderRow";
import { formatOrderTime } from "../utils/formatOrderTime";
import OrderMoreMenu from "./OrderMoreMenu/OrderMoreMenu";
import OrderDetailModal from "./OrderDetailModal/OrderDetailModal";
import type { RestaurantOrderDetailDTO } from "../../../api/getRestaurantOrderDetail/restaurantOrderDetail.dto";
import type { RestaurantOrderSummaryDTO } from "../../../api/getRestaurantOrderSummaries/restaurantOrderSummary.dto";
import MoreVerticalButton from "../../../../menuManagementPage/components/Modals/ManageCategoriesModal/Components/Buttons/MoreVerticalButton";

interface OrderRowProps {
  order: RestaurantOrderSummaryDTO;
  openUpward: boolean;
  updateOrderStatusLocally: (orderId: string, status: OrderStatus) => void;
}

export const OrderRow = ({
  order,
  openUpward,
  updateOrderStatusLocally,
}: OrderRowProps) => {
  const [moreOpen, setMoreOpen] = useState(false);
  const [orderDetail, setOrderDetail] =
    useState<RestaurantOrderDetailDTO | null>(null);

  const token = getToken();

  const {
    loadOrderDetail,
    handleAcceptOrder,
    handleMarkOrderReady,
    handleMarkOrderDeliverying,
    handleMarkOrderDelivered,
  } = useOrderRow();

  const openOrderDetail = async (order: RestaurantOrderSummaryDTO) => {
    const orderDetailData = await loadOrderDetail(token, order.orderId);
    setOrderDetail(orderDetailData);
  };

  const closeOrderDetail = () => {
    setOrderDetail(null);
  };
  return (
    <tr className="border-t border-gray-100 transition hover:bg-gray-50/70">
      <td className="px-4 py-3.5">
        <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
      </td>

      <td className="px-3 py-3.5">
        <span className="text-sm font-semibold text-gray-900">
          {order.orderId.split("-")[0]}
        </span>
      </td>

      <td className="px-3 py-3.5">
        <span className="text-sm font-medium text-gray-800">
          {order.client}
        </span>
      </td>

      <td className="px-3 py-3.5 max-w-[330px]">
        <span className="text-sm text-gray-600">
          {order.orderItems
            .map((item) => `${capitalizeWords(item.name)} x${item.quantity}`)
            .join(", ")}
        </span>
      </td>

      <td className="px-3 py-3.5 whitespace-nowrap">
        <span className="text-sm font-medium text-gray-800">
          $ {order.totalPrice.toFixed(2)}
        </span>
      </td>

      <td className="px-3 py-3.5">
        <OrderStatusBadge status={order.status} />
      </td>

      <td className="px-3 py-3.5 whitespace-nowrap">
        <span className="text-xs text-gray-500">
          {formatOrderTime(order.orderedAt)}
        </span>
      </td>

      <td className="px-3 py-3.5 relative">
        <MoreVerticalButton onClick={() => setMoreOpen((prev) => !prev)} />
        {moreOpen && (
          <OrderMoreMenu
            openUpward={openUpward}
            status={order.status}
            onView={() => {
              openOrderDetail(order);
              setMoreOpen(false);
            }}
            onAccept={async () => {
              try {
                await handleAcceptOrder(token, order.orderId);
                updateOrderStatusLocally(order.orderId, OrderStatus.Cooking);
                setMoreOpen(false);
              } catch (e) {
                console.error(e);
                throw new Error("Error accepting order");
              }
            }}
            onMarkReady={async () => {
              try {
                await handleMarkOrderReady(token, order.orderId);
                updateOrderStatusLocally(order.orderId, OrderStatus.Ready);
                setMoreOpen(false);
              } catch (e) {
                console.error(e);
                throw new Error("Error marking order ready");
              }
            }}
            onStartDelivery={async () => {
              try {
                await handleMarkOrderDeliverying(token, order.orderId);
                updateOrderStatusLocally(order.orderId, OrderStatus.Delivering);
                setMoreOpen(false);
              } catch (e) {
                console.error(e);
                throw new Error("Error starting delivery");
              }
            }}
            onMarkDelivered={async () => {
              try {
                await handleMarkOrderDelivered(token, order.orderId);
                updateOrderStatusLocally(order.orderId, OrderStatus.Delivered);
                setMoreOpen(false);
              } catch (e) {
                console.error(e);
                throw new Error("Error marking order delivered");
              }
            }}
            onCancel={() => {
              // cancel modal
            }}
            onPrint={() => {
              // print
            }}
          />
        )}
      </td>
      {orderDetail && (
        <OrderDetailModal order={orderDetail} onClose={closeOrderDetail} />
      )}
    </tr>
  );
};
