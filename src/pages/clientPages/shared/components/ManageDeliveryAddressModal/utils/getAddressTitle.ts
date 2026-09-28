import type { GetDeliveryAddressDTO } from "../../../../../api/deliveryAddress/dto/delivery-address.dto";

export const getAddressTitle = (address: GetDeliveryAddressDTO) => {
  return address.alias.charAt(0).toUpperCase() + address.alias.slice(1);
};
