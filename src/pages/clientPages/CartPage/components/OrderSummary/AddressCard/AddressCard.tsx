import { useState } from "react";
import { ChevronRight } from "lucide-react";

import { formatViewAddress } from "@/shared/utils/formatViewAddress";
import { getAddressIcon } from "./getAddressIcon";
import ManageDeliveryAddressModal from "../../../../shared/components/ManageDeliveryAddressModal/ManageDeliveryAddressModal";
import { useAddress } from "../../../../shared/context/address/useAddress";

const AddressCard = () => {
  const [addressPopUpOpen, setAddressPopUpOpen] = useState(false);
  const { defaultAddress } = useAddress();

  const formattedViewAddress = formatViewAddress(
    defaultAddress?.streetAddress,
    defaultAddress?.apt,
    defaultAddress?.city,
    defaultAddress?.state,
    defaultAddress?.zip
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setAddressPopUpOpen(true)}
        className="
          group flex w-full min-w-0 items-center gap-3
          rounded-xl border border-gray-200
          bg-white p-3 text-left
          transition-colors duration-200
          hover:cursor-pointer hover:border-green-300 hover:bg-green-50/30
          sm:gap-4 sm:p-4
        "
      >
        {/* Address Icon */}
        <div
          className="
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-xl bg-gray-50 text-gray-600
            group-hover:bg-green-50 group-hover:text-green-700
            sm:h-11 sm:w-11
          "
        >
          {defaultAddress && getAddressIcon(defaultAddress)}
        </div>

        {/* Address Information */}
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="text-xs font-semibold text-gray-900 sm:text-sm">
            {defaultAddress?.alias ?? "Delivery address"}
          </span>

          <p
            className="
              line-clamp-2 wrap-break-word
              text-xs leading-5 text-gray-500
              sm:text-sm sm:leading-6
            "
          >
            {defaultAddress
              ? formattedViewAddress
              : "Choose a delivery address"}
          </p>
        </div>

        {/* Arrow */}
        <ChevronRight
          className="
            h-4 w-4 shrink-0 text-gray-400
            transition-transform duration-200
            group-hover:translate-x-0.5
            group-hover:text-green-600
            sm:h-5 sm:w-5
          "
        />
      </button>

      {addressPopUpOpen && (
        <ManageDeliveryAddressModal
          onClose={() => setAddressPopUpOpen(false)}
        />
      )}
    </>
  );
};

export default AddressCard;
