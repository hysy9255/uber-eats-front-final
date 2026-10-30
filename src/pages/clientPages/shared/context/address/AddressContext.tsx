import { createContext } from "react";
import type { DeliveryAddressDTO } from "../../api/deliveryAddress.dto";

type AddressContextValue = {
  addressList?: DeliveryAddressDTO[];
  address?: DeliveryAddressDTO;
  loadMyDeliveryAddresses: () => Promise<void>;
};

export const AddressContext = createContext<AddressContextValue | null>(null);
