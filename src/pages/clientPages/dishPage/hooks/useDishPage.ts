import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "@/shared/utils/getToken";
import { addToCart } from "../../cartPage/api/addToCart/addToCart";
import { replaceItems } from "../../cartPage/api/addToCart/replaceItems";
import { getDishDetail } from "../api/getDishDetail/getDishDetail";
import type { DishDetailDTO } from "../api/getDishDetail/dishDetail.dto";
import { useQuantity } from "./useQuantity";
import { useCart } from "../../shared/context/cart/useCart";

export const useDishPage = (restaurantId?: string, dishId?: string) => {
  const navigate = useNavigate();
  const [dishDetail, setDishDetail] = useState<DishDetailDTO>();
  const [addToCartError, setAddToCartError] = useState<string>();
  const token = getToken();
  const { loadMyCart } = useCart();

  useEffect(() => {
    if (!dishId || !restaurantId) {
      return;
    }
    const load = async () => {
      try {
        const dishDetailData = await getDishDetail(restaurantId, dishId);
        setDishDetail(dishDetailData);
      } catch (error) {
        console.error(error);
      }
    };
    load();
  }, [restaurantId, dishId]);

  const { quantity, increment, decrement } = useQuantity();

  const totalPrice = dishDetail
    ? (dishDetail.price * quantity).toFixed(2)
    : "0.00";

  const handleAddToCart = async () => {
    try {
      if (!dishId) throw new Error("Dish id not found");
      if (!token) {
        navigate("/login");
        return;
      }
      await addToCart(token, { dishId, quantity });
      await loadMyCart();
      navigate(`/restaurants/${restaurantId}`);
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
    if (!token) throw new Error("no token");
    if (!dishId) throw new Error("");
    await replaceItems({ dishId, quantity }, token);
    await loadMyCart();
    setAddToCartError(undefined);
  };

  return {
    addToCartError,
    increment,
    decrement,
    quantity,
    totalPrice,
    handleAddToCart,
    handleClickAddAnyway,
    dishDetail,
    setAddToCartError,
  };
};
