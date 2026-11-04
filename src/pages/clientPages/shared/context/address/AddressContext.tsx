import { createContext } from "react";
import type { DeliveryAddressDTO } from "../../api/deliveryAddress.dto";

type AddressContextValue = {
  addresses?: DeliveryAddressDTO[];
  defaultAddress?: DeliveryAddressDTO;
  loadMyDeliveryAddresses: () => Promise<void>;
};

export const AddressContext = createContext<AddressContextValue | null>(null);
