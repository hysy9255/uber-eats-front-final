import { useEffect, useState } from "react";
import { decreaseItemQuantity } from "../../../../../cartPage/api/decreaseItemQuantity";
import { increaseItemQuantity } from "../../../../../cartPage/api/increaseItemQuantity";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../../../../../../shared/utils/getToken";
import { useCart } from "../../../../../shared/context/cart/useCart";
import { replaceItems } from "../../../../../cartPage/api/addToCart/replaceItems";
import { addToCart } from "../../../../../cartPage/api/addToCart/addToCart";

export const useDishCard = (dishId: string) => {
  const navigate = useNavigate();
  const token = getToken();
  const { loadMyCart, cart } = useCart();
  const [addToCartError, setAddToCartError] = useState<string>();
  const [quantityAddedToCart, setQuantityAddedToCart] = useState<number>(0);
  const [favorited, setFavorited] = useState<boolean>(false);

  useEffect(() => {
    const targetItem = cart?.items.find((item) => item.dishId === dishId);
    setQuantityAddedToCart(targetItem?.quantity ?? 0);
  }, [dishId, cart?.items]);

  const handleAddToCart = async () => {
    try {
      if (!dishId) throw new Error("Dish id not found");
      if (!token) {
        navigate("/login");
        return;
      }
      await addToCart(token, { dishId, quantity: 1 });
      await loadMyCart();
    } catch (error) {
      console.error(error);
      const msg =
        error instanceof Error
          ? error.message
          : "Login failed. Please try again.";
      setAddToCartError(msg);
    }
  };

  const incrementQuantity = async () => {
    try {
      if (!token) {
        navigate("/login");
        return;
      }
      await increaseItemQuantity(token, dishId);
      await loadMyCart();
    } catch (error) {
      console.error("Failed to increase quantity", error);
    }
  };

  const decrementQuantity = async () => {
    try {
      if (!token) {
        navigate("/login");
        return;
      }
      await decreaseItemQuantity(token, dishId);
      await loadMyCart();
    } catch (error) {
      console.error("Failed to decrease quantity", error);
    }
  };

  const handleAddAnyway = async () => {
    try {
      if (!token) throw new Error("no token");
      if (!dishId) throw new Error("");
      await replaceItems({ dishId, quantity: 1 }, token);
      await loadMyCart();
      setAddToCartError(undefined);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  return {
    addToCartError,
    setAddToCartError,
    quantityAddedToCart,
    favorited,
    setFavorited,
    handleAddToCart,
    incrementQuantity,
    decrementQuantity,
    handleAddAnyway,
  };
};
