import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "@/shared/utils/getToken";
import { useCart } from "../../../../shared/context/cart/useCart";
import { addToCart } from "../../../../CartPage/api/addToCart/addToCart";
import { replaceItems } from "../../../../CartPage/api/addToCart/replaceItems";

export const useAddToCart = (
  restaurantId?: string,
  dishId?: string,
  quantity: number = 1
) => {
  const navigate = useNavigate();
  const { loadMyCart } = useCart();

  const [addToCartError, setAddToCartError] = useState<string | null>(null);

  const handleAddToCart = async () => {
    try {
      const token = getToken();

      if (!dishId) throw new Error("Dish ID not found");

      if (!token) {
        navigate("/login");
        return;
      }

      await addToCart(token, { dishId, quantity });
      await loadMyCart();

      navigate(`/restaurants/${restaurantId}`);
    } catch (error) {
      console.error(error);

      setAddToCartError(
        error instanceof Error ? error.message : "Failed to add item to cart."
      );
    }
  };

  const handleAddAnyway = async () => {
    try {
      const token = getToken();

      if (!token) throw new Error("No Token");
      if (!dishId) throw new Error("Dish ID not found");

      await replaceItems({ dishId, quantity }, token);
      await loadMyCart();

      setAddToCartError(null);

      navigate(`/restaurants/${restaurantId}`);
    } catch (error) {
      console.error(error);

      setAddToCartError(
        error instanceof Error ? error.message : "Failed to replace cart items."
      );
    }
  };

  return {
    addToCartError,
    setAddToCartError,
    handleAddToCart,
    handleAddAnyway,
  };
};
