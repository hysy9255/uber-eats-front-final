import type { RestaurantOrderSummaryDTO } from "../../../api/getRestaurantOrderSummaries/restaurantOrderSummary.dto";
import { useOrderData } from "./useOrderData";
import OrderDetailModal from "./OrderDetailModal/OrderDetailModal";
import { useState } from "react";
import OrderRowContent from "./OrderRowContent";
import { OrderStatus } from "../../../types/orderStatus.enum";
import OrderItemActions from "./OrderItemActions";

interface OrderRowProps {
  order: RestaurantOrderSummaryDTO;
  openUpward: boolean;
  onToggleDropdown: () => void;
  closeMoreDropdown: () => void;
  targetOrderId: string | null;
  updateOrderStatusLocally: (orderId: string, status: OrderStatus) => void;
}

export const OrderRow = ({
  order,
  onToggleDropdown,
  closeMoreDropdown,
  targetOrderId,
  updateOrderStatusLocally,
}: OrderRowProps) => {
  const {
    acceptTargetOrder,
    markTargetOrderReady,
    markTargetOrderDelivering,
    markTargetOrderDelivered,
  } = useOrderData();

  const [orderDetailModalOpen, setOrderDetailModalOpen] =
    useState<boolean>(false);

  const openOrderDetailModal = () => {
    setOrderDetailModalOpen(true);
    closeMoreDropdown();
  };

  const closeOrderDetailModal = () => {
    setOrderDetailModalOpen(false);
  };

  const handleAcceptOrder = async () => {
    try {
      if (!targetOrderId) return;
      await acceptTargetOrder(targetOrderId);
      closeMoreDropdown();
      updateOrderStatusLocally(targetOrderId, OrderStatus.Cooking);
    } catch (e) {
      console.error(e);
      throw new Error("Error accepting order");
    }
  };

  const handleMarkOrderReady = async () => {
    try {
      if (!targetOrderId) return;
      await markTargetOrderReady(targetOrderId);
      closeMoreDropdown();
      updateOrderStatusLocally(targetOrderId, OrderStatus.Ready);
    } catch (e) {
      console.error(e);
      throw new Error("Error accepting order");
    }
  };

  const handleMarkOrderDelivering = async () => {
    try {
      if (!targetOrderId) return;
      await markTargetOrderDelivering(targetOrderId);
      closeMoreDropdown();
      updateOrderStatusLocally(targetOrderId, OrderStatus.Delivering);
    } catch (e) {
      console.error(e);
      throw new Error("Error accepting order");
    }
  };

  const handleMarkOrderDelivered = async () => {
    try {
      if (!targetOrderId) return;
      await markTargetOrderDelivered(targetOrderId);
      closeMoreDropdown();
      updateOrderStatusLocally(targetOrderId, OrderStatus.Delivered);
    } catch (e) {
      console.error(e);
      throw new Error("Error accepting order");
    }
  };
  return (
    <tr className="border-b border-gray-100 transition hover:bg-gray-50/70">
      <OrderRowContent order={order} />

      <td className="px-4 py-3 relative">
        <OrderItemActions
          orderStatus={order.status}
          isMoreMenuOpen={targetOrderId === order.orderId}
          onClickMoreButton={onToggleDropdown}
          openOrderDetailModal={openOrderDetailModal}
          handleAcceptOrder={handleAcceptOrder}
          handleMarkOrderReady={handleMarkOrderReady}
          handleMarkOrderDelivering={handleMarkOrderDelivering}
          handleMarkOrderDelivered={handleMarkOrderDelivered}
          onToggleDropdown={onToggleDropdown}
        />
      </td>

      {orderDetailModalOpen && (
        <OrderDetailModal
          targetOrderId={order.orderId}
          onClose={closeOrderDetailModal}
        />
      )}
    </tr>
  );
};
