import { useContext } from "react";
import { MenuManagementContext } from "./MenuManagementContext";

export const useMenuManagement = () => {
  const ctx = useContext(MenuManagementContext);
  if (!ctx)
    throw new Error(
      "useMenuManagement must be used within MenuManagementProvider"
    );
  return ctx;
};
