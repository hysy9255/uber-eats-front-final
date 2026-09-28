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

  const [addressList, setAddressList] = useState<DeliveryAddressDTO[]>();
  const [address, setAddress] = useState<DeliveryAddressDTO>();

  const token = getToken();

  const loadMyDeliveryAddresses = useCallback(async () => {
    if (!loggedIn || user?.role !== UserRole.Client) {
      return;
    }
    try {
      if (!token) throw new Error("No Token");
      const data = await viewMyDeliveryAddresses(token);
      setAddressList(data);
      setAddress(data.find((d) => d.isDefault === true));
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
        addressList,
        address,
        loadMyDeliveryAddresses,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
