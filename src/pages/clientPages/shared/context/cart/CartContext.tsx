import { createContext } from "react";
import type { CartDTO } from "../../../CartPage/api/getCart/cart.dto";

type CartContextValue = {
  cart: CartDTO | null;
  loadMyCart: () => Promise<void>;
};

export const CartContext = createContext<CartContextValue | null>(null);
