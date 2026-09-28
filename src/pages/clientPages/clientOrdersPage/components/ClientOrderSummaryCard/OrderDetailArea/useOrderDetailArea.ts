import { getToken } from "@/shared/utils/getToken";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ClientOrderDetailDTO } from "../../../api/getClientOrderDetail/clientOrderDetail.dto";
import { addBulkToCart } from "../../../../cartPage/api/addToCart/addBulkToCart";
import { replaceItemsWithBulkItems } from "../../../../cartPage/api/addToCart/replaceItemsWithBulkItems";
import { useCart } from "../../../../shared/context/cart/useCart";

export enum OrderDetailViewType {
  ORDER_TRACKING = "order_tracking",
  ORDER_MANAGEMENT = "order_management",
}

export const useOrderDetailArea = (order: ClientOrderDetailDTO) => {
  const { loadMyCart } = useCart();
  const navigate = useNavigate();
  const [addToCartError, setAddToCartError] = useState<string | null>(null);
  const [orderDetailView, setOrderDetailView] = useState<OrderDetailViewType>(
    OrderDetailViewType.ORDER_TRACKING
  );
  const [showCartToast, setShowCartToast] = useState(false);
  const token = getToken();

  const handleAddItemsToCart = async () => {
    try {
      if (!token) {
        navigate("/login");
        return;
      }

      const payload = order.orderItems.map((item) => {
        if (item.dishId === null) throw new Error("No Dish Id");
        return {
          dishId: item.dishId,
          quantity: item.quantity,
        };
      });

      await addBulkToCart(token, payload);
      await loadMyCart();
      setShowCartToast(true);
      setTimeout(() => {
        setShowCartToast(false);
      }, 3000);
    } catch (error) {
      console.log(error);
      const msg =
        error instanceof Error
          ? error.message
          : "Login failed. Please try again.";
      setAddToCartError(msg);
    }
  };

  const handleClickAddAnyway = async () => {
    try {
      if (!token) throw new Error("no token");
      const payload = order.orderItems.map((item) => {
        if (item.dishId === null) throw new Error("No Dish Id");
        return {
          dishId: item.dishId,
          quantity: item.quantity,
        };
      });
      await replaceItemsWithBulkItems(payload, token);
      await loadMyCart();
      setAddToCartError(null);
      setShowCartToast(true);
      setTimeout(() => {
        setShowCartToast(false);
      }, 3000);
    } catch (e) {
      console.error(e);
      throw new Error("Error replace items");
    }
  };

  const handleClickDeliveryTracking = () =>
    setOrderDetailView(OrderDetailViewType.ORDER_TRACKING);
  const handleClickOrderManagement = () =>
    setOrderDetailView(OrderDetailViewType.ORDER_MANAGEMENT);

  const handleCancelCartError = () => setAddToCartError(null);

  return {
    orderDetailView,
    handleAddItemsToCart,
    showCartToast,
    addToCartError,
    setAddToCartError,
    handleCancelCartError,
    handleClickAddAnyway,
    handleClickDeliveryTracking,
    handleClickOrderManagement,
  };
};
