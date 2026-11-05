import { getToken } from "@/shared/utils/getToken";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../../api/placeOrder/placeOrder";
import { DeliveryType } from "../../types/deliveryType.enum";
import type { PlaceOrderForm } from "../../types/placeOrderForm.type";
import { useCart } from "../../../shared/context/cart/useCart";

export const useOrderSummary = () => {
  const { cart, loadMyCart } = useCart();
  const navigate = useNavigate();
  const [deliveryType, setDeliveryType] = useState<DeliveryType>(
    DeliveryType.free
  );
  const [showCheckoutErrorModal, setShowCheckoutErrorModal] = useState(false);

  const handleCheckout = async (data: PlaceOrderForm) => {
    try {
      const token = getToken();
      if (!token) {
        throw new Error("Token not found");
      }
      await placeOrder(token, {
        request: {
          toRestaurant: data.requestToRestaurant,
          toDriver: data.requestToDriver,
        },
      });
    } catch (e) {
      console.error("Failed to place order", e);

      if (e instanceof Error) {
        try {
          const error = JSON.parse(e.message);

          if (
            error.statusCode === 409 &&
            error.message === "Restaurant is not accepting orders"
          ) {
            setShowCheckoutErrorModal(true);
          }
        } catch {
          console.error("Unable to parse checkout error");
        }
      }

      return;
    }

    try {
      await loadMyCart();
    } catch (e) {
      console.error("Order succeeded, but cart refresh failed", e);
    }

    navigate("/orders", {
      state: {
        orderPlaced: true,
      },
    });
  };

  return {
    cart,
    deliveryType,
    setDeliveryType,
    handleCheckout,
    showCheckoutErrorModal,
    setShowCheckoutErrorModal,
  };
};
