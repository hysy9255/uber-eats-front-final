import type { DeliveryAddressDTO } from "../../../api/deliveryAddress.dto";

export const getAddressTitle = (address: DeliveryAddressDTO) => {
  return address.alias.charAt(0).toUpperCase() + address.alias.slice(1);
};
