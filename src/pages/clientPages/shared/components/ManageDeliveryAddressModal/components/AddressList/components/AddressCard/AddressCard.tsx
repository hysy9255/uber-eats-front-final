import { AddressPanelType } from "../../../../constants/addressPanel.type";
import { getAddressIcon } from "../../../../utils/getAddressIcon";
import { getAddressTitle } from "../../../../utils/getAddressTitle";
import { formatViewAddress } from "../../../../utils/formatViewAddress";
import DefaultAddressBadge from "./DefaultAddressBadge";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import type { DeliveryAddressDTO } from "../../../../../../api/deliveryAddress.dto";

interface AddAddressProps {
  address: DeliveryAddressDTO;
  setSelectedAddressId: (value: string) => void;
  setAddressToEdit: (value: DeliveryAddressDTO) => void;
  setPanel: (value: AddressPanelType) => void;
  handleDeleteAddress: (addressId: string) => void;
  selected: boolean;
}

const AddressCard: React.FC<AddAddressProps> = ({
  address,
  setSelectedAddressId,
  setAddressToEdit,
  setPanel,
  handleDeleteAddress,
  selected,
}) => {
  return (
    <div
      key={address.deliveryAddressId}
      onClick={() => setSelectedAddressId(address.deliveryAddressId)}
      className={`
      flex cursor-pointer
      items-center gap-4
      rounded-2xl
      border
      px-5 py-5
      transition-all
      ${
        selected
          ? `
          border-green-500
          bg-green-50/60
          shadow-[0_6px_20px_rgba(22,163,74,0.08)]
        `
          : `
          border-gray-200
          bg-white
          hover:border-gray-300
          hover:bg-gray-50/60
        `
      }
      `}
    >
      {/* Radio */}
      <div
        className={`
        flex h-6 w-6
        shrink-0
        items-center justify-center
        rounded-full
        border-2
        ${selected ? "border-green-600" : "border-gray-300"}
        `}
      >
        {selected && <div className="h-3 w-3 rounded-full bg-green-600" />}
      </div>

      {/* Icon */}
      <div
        className={`
        flex h-14 w-14
        shrink-0
        items-center justify-center
        rounded-2xl
        ${
          selected ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
        }
        `}
      >
        {getAddressIcon(address.alias)}
      </div>

      {/* Address Info */}

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-base font-semibold text-gray-950">
            {getAddressTitle(address)}
          </h3>

          {address.isDefault && <DefaultAddressBadge />}
        </div>

        <p
          className="
            mt-1
            line-clamp-2
            max-w-[420px]
            text-sm
            leading-6
            text-gray-500
          "
        >
          {formatViewAddress(address)}
        </p>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-2">
        <EditButton
          onClick={() => {
            setAddressToEdit(address);
            setPanel(AddressPanelType.Edit);
          }}
        />
        <DeleteButton
          onClick={() => handleDeleteAddress(address.deliveryAddressId)}
        />
      </div>
    </div>
  );
};

export default AddressCard;
