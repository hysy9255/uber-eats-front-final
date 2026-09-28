import { BriefcaseBusiness, Home, MapPin } from "lucide-react";
import type { GetDeliveryAddressDTO } from "../../../../../api/deliveryAddress/dto/delivery-address.dto";

export const getAddressIcon = (alias: GetDeliveryAddressDTO["alias"]) => {
  switch (alias) {
    case "home":
      return <Home className="h-6 w-6" />;

    case "work":
      return <BriefcaseBusiness className="h-6 w-6" />;

    default:
      return <MapPin className="h-6 w-6" />;
  }
};
