import { useState, type ReactNode } from "react";
import { MenuManagementContext } from "./MenuManagementContext";
import { useMenuList } from "./hooks/useMenuList";

interface MenuManagementProviderProps {
  children: ReactNode;
}

export const MenuManagementProvider = ({
  children,
}: MenuManagementProviderProps) => {
  const menuList = useMenuList();

  const [successMessage, setSuccessMessage] = useState<{
    show: boolean;
    message: string;
  }>({ show: false, message: "" });

  return (
    <MenuManagementContext.Provider
      value={{
        menuList,
        successMessage: {
          show: successMessage.show,
          message: successMessage.message,
          setSuccessMessage,
        },
      }}
    >
      {children}
    </MenuManagementContext.Provider>
  );
};
