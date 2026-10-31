import { getToken } from "@/shared/utils/getToken";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../../api/placeOrder/placeOrder";
import { DeliveryType } from "../../../ClientOrdersPage/types/deliveryType.enum";
import type { PlaceOrderForm } from "../../../ClientOrdersPage/types/placeOrderForm.type";
import { useCart } from "../../../shared/context/cart/useCart";

export const useOrderSummary = () => {
  const { cart, loadMyCart } = useCart();
  const navigate = useNavigate();
  const [deliveryType, setDeliveryType] = useState<DeliveryType>(
    DeliveryType.free
  );
  const [showCheckoutErrorModal, setShowCheckoutErrorModal] = useState(false);

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
    showCheckoutErrorModal,
    setShowCheckoutErrorModal,
  };
};
