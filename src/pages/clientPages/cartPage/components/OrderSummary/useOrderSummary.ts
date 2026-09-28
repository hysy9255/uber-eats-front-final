import { getToken } from "@/shared/utils/getToken";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../../api/placeOrder/placeOrder";
import { DeliveryType } from "../../../clientOrdersPage/types/deliveryType.enum";
import type { PlaceOrderForm } from "../../../clientOrdersPage/types/placeOrderForm.type";
import { useCart } from "../../../shared/context/cart/useCart";

export const useOrderSummary = () => {
  const { cart, loadMyCart } = useCart();
  const navigate = useNavigate();
  const [deliveryType, setDeliveryType] = useState<DeliveryType>(
    DeliveryType.free
  );

  const { register, handleSubmit } = useForm<PlaceOrderForm>({
    mode: "onSubmit",
  });

  const deliveryFee = 4.75;

  const calculateFinalPrice = () => {
    if (!cart?.totalCost) {
      return;
    }
    const subTotal = cart?.totalCost;

    if (deliveryType === DeliveryType.direct) {
      return subTotal + deliveryFee;
    } else {
      return subTotal;
    }
  };

  const handleClickDeliveryType = (deliveryType: DeliveryType) =>
    setDeliveryType(deliveryType);

  const token = getToken();
  if (!token) {
    throw new Error("Token not found");
  }

  const handleCheckout = handleSubmit(
    async (data: PlaceOrderForm) => {
      try {
        await placeOrder(token, {
          request: {
            toRestaurant: data.requestToRestaurant,
            toDriver: data.requestToDriver,
          },
        });
      } catch (e) {
        console.error("Failed to place order", e);
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
    },
    (e) => console.error(e)
  );

  return {
    cart,
    deliveryType,
    deliveryFee,
    calculateFinalPrice,
    handleClickDeliveryType,
    register,
    handleCheckout,
  };
};
