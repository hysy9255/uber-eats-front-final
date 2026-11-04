import type { DeliveryAddressDTO } from "../../../api/deliveryAddress.dto";

export const moveDefaultAddressToFront = (addresses?: DeliveryAddressDTO[]) => {
  const sortedAddresses = [...(addresses ?? [])].sort(
    (a, b) => Number(b.isDefault) - Number(a.isDefault)
  );
  return sortedAddresses;
};
