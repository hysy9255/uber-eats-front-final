import { useCallback, useEffect, useState, type ReactNode } from "react";
import { AddressContext } from "./AddressContext";
import { useAuth } from "@/shared/context/auth/useAuth";
import type { DeliveryAddressDTO } from "../../api/deliveryAddress.dto";
import { getToken } from "@/shared/utils/getToken";
import { UserRole } from "@/shared/types/userRole.type";
import { viewMyDeliveryAddresses } from "../../api/viewMyDeliveryAddress";

interface AddressProviderProps {
  children: ReactNode;
}

export const AddressProvider: React.FC<AddressProviderProps> = ({
  children,
}) => {
  const { loggedIn, user, isAuthLoading } = useAuth();

  const [addresses, setAddresses] = useState<DeliveryAddressDTO[]>();
  const [defaultAddress, setDefaultAddress] = useState<DeliveryAddressDTO>();

  const token = getToken();

  const loadMyDeliveryAddresses = useCallback(async () => {
    if (!loggedIn || user?.role !== UserRole.Client) {
      return;
    }
    try {
      if (!token) throw new Error("No Token");
      const data = await viewMyDeliveryAddresses(token);
      setAddresses(data);
      setDefaultAddress(data.find((d) => d.isDefault === true));
    } catch (error) {
      console.error("Failed to load address", error);
    }
  }, [loggedIn, token, user?.role]);

  useEffect(() => {
    if (isAuthLoading) return;
    loadMyDeliveryAddresses();
  }, [isAuthLoading, loadMyDeliveryAddresses]);

  return (
    <AddressContext.Provider
      value={{
        addresses,
        defaultAddress,
        loadMyDeliveryAddresses,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
