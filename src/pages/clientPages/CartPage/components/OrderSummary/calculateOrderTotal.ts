import { DeliveryType } from "../../../ClientOrdersPage/types/deliveryType.enum";
import type { CartDTO } from "../../api/getCart/cart.dto";

export const calculateOrderTotal = (
  cart: CartDTO,
  deliveryType: DeliveryType,
  deliveryFee: number
) => {
  const subTotal = cart?.totalCost;

  if (deliveryType === DeliveryType.direct) {
    return subTotal + deliveryFee;
  } else {
    return subTotal;
  }
};
