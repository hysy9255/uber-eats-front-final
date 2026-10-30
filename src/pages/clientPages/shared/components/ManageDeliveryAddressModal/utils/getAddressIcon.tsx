import { BriefcaseBusiness, Home, MapPin } from "lucide-react";
import type { DeliveryAddressDTO } from "../../../api/deliveryAddress.dto";

export const getAddressIcon = (alias: DeliveryAddressDTO["alias"]) => {
  switch (alias) {
    case "home":
      return <Home className="h-6 w-6" />;

    case "work":
      return <BriefcaseBusiness className="h-6 w-6" />;

    default:
      return <MapPin className="h-6 w-6" />;
  }
};
