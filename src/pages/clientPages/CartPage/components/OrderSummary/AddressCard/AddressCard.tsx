import { Fragment, useState } from "react";
import { ChevronRight } from "lucide-react";
import { formatViewAddress } from "@/shared/utils/formatViewAddress";
import { getAddressIcon } from "./getAddressIcon";
import ManageDeliveryAddressModal from "../../../../shared/components/ManageDeliveryAddressModal/ManageDeliveryAddressModal";
import { useAddress } from "../../../../shared/context/address/useAddress";

const AddressCard = () => {
  const [addressPopUpOpen, setAddressPopUpOpen] = useState<boolean>(false);
  const { address } = useAddress();

  const formattedViewAddress = formatViewAddress(
    address?.streetAddress,
    address?.apt,
    address?.city,
    address?.state,
    address?.zip
  );

  return (
    <Fragment>
      {addressPopUpOpen && (
        <ManageDeliveryAddressModal
          closeAddressPopUp={() => setAddressPopUpOpen(false)}
        />
      )}
      <div className="bg-white grid grid-cols-[auto_6fr_1fr] text-sm font-medium relative rounded-md border-2 border-gray-200">
        <div className="flex flex-col items-center justify-center p-3">
          {address && getAddressIcon(address)}
          <div className="text-xs">{address?.alias}</div>
        </div>
        <div className="py-2 flex items-center justify-center">
          <p className="line-clamp-2">{formattedViewAddress}</p>
        </div>

        <div
          onClick={() => setAddressPopUpOpen(true)}
          className="flex items-center justify-center hover:cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </div>
      </div>
    </Fragment>
  );
};

export default AddressCard;
