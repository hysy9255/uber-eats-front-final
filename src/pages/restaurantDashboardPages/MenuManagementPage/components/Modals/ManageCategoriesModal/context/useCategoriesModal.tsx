import { useContext } from "react";
import { CategoriesModalContext } from "./CategoriesModalContext";

export const useCategoriesModalContext = () => {
  const ctx = useContext(CategoriesModalContext);
  if (!ctx)
    throw new Error(
      "useCategoriesModal must be used within CategoriesModalProvider"
    );
  return ctx;
};
