import { useCallback, useEffect, useState } from "react";
import { getToken } from "../../../../../../shared/utils/getToken";
import type { DeliveryAddressDTO } from "../../../api/deliveryAddress.dto";
import { viewMyDeliveryAddresses } from "../../../api/viewMyDeliveryAddress";

export const useDeliveryAddress = () => {
  const [addresses, setAddresses] = useState<DeliveryAddressDTO[]>();

  const token = getToken();

  const loadMyDeliveryAddresses = useCallback(async () => {
    try {
      if (!token) throw new Error("No Token");
      const data = await viewMyDeliveryAddresses(token);
      setAddresses(data);
    } catch (error) {
      console.error("Failed to load address", error);
    }
  }, [token]);

  useEffect(() => {
    loadMyDeliveryAddresses();
  }, [loadMyDeliveryAddresses]);

  return {
    addresses,
    loadMyDeliveryAddresses,
  };
};
