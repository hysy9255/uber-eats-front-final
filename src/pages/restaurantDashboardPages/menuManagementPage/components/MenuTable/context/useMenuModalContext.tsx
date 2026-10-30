import { useContext } from "react";
import { MenuModalContext } from "./MenuModalContext";

export const useMenuModalContext = () => {
  const ctx = useContext(MenuModalContext);
  if (!ctx)
    throw new Error(
      "useMenuItemsModal must be used within MenuItemsModalProvider"
    );
  return ctx;
};
