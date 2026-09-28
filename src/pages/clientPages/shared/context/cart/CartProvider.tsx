import { useCallback, useEffect, useState, type ReactNode } from "react";
import { CartContext } from "./CartContext";
import { getToken } from "../../../../../shared/utils/getToken";
import { useAuth } from "../../../../../shared/context/auth/useAuth";
import { UserRole } from "../../../../../shared/types/userRole.type";
import type { CartDTO } from "../../../cartPage/api/getCart/cart.dto";
import { getCart } from "../../../cartPage/api/getCart/getCart";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const { loggedIn, user, isAuthLoading } = useAuth();
  const token = getToken();

  const [cart, setCart] = useState<CartDTO | null>(null);

  const loadMyCart = useCallback(async () => {
    if (!loggedIn || user?.role !== UserRole.Client) {
      setCart(null);
      return;
    }

    try {
      if (!token) throw new Error("");
      const data = await getCart(token);
      setCart(data);
    } catch (error) {
      console.error("Failed to load cart", error);
    }
  }, [loggedIn, token, user?.role]);

  useEffect(() => {
    if (isAuthLoading) return;
    void loadMyCart();
  }, [isAuthLoading, loadMyCart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        loadMyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
