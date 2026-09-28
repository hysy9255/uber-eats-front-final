import { Building, Home, MapPin } from "lucide-react";
import type { DeliveryAddressDTO } from "../../../../shared/api/deliveryAddress.dto";
import { AddressAlias } from "../../../../../../shared/types/addressAlias.type";

export const getAddressIcon = (
  address?: DeliveryAddressDTO,
  selected?: string
) => {
  const isSelected = address?.deliveryAddressId === selected;

  switch (address?.alias) {
    case AddressAlias.home:
      return (
        <Home
          size={22}
          className={isSelected ? "text-sky-500" : ""}
          strokeWidth={isSelected ? 2 : 1}
        />
      );

    case AddressAlias.work:
      return (
        <Building
          size={22}
          className={isSelected ? "text-sky-500" : ""}
          strokeWidth={isSelected ? 2 : 1}
        />
      );

    default:
      return (
        <MapPin
          size={22}
          className={isSelected ? "text-sky-500" : ""}
          strokeWidth={isSelected ? 2 : 1}
        />
      );
  }
};
