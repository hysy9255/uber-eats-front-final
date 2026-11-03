import { AddressPanelType } from "../../../../constants/addressPanel.type";
import { getAddressIcon } from "../../../../utils/getAddressIcon";
import { getAddressTitle } from "../../../../utils/getAddressTitle";
import { formatViewAddress } from "../../../../utils/formatViewAddress";
import DefaultAddressBadge from "./DefaultAddressBadge";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import type { DeliveryAddressDTO } from "../../../../../../api/deliveryAddress.dto";

interface AddressCardProps {
  address: DeliveryAddressDTO;
  setSelectedAddressId: (value: string) => void;
  setAddressToEdit: (value: DeliveryAddressDTO) => void;
  setPanel: (value: AddressPanelType) => void;
  handleDeleteAddress: (addressId: string) => void;
  selected: boolean;
}

const AddressCard: React.FC<AddressCardProps> = ({
  address,
  setSelectedAddressId,
  setAddressToEdit,
  setPanel,
  handleDeleteAddress,
  selected,
}) => {
  return (
    <div
      onClick={() => setSelectedAddressId(address.deliveryAddressId)}
      className={`
        flex min-w-0 cursor-pointer
        flex-col gap-3
        rounded-xl border
        px-3 py-3
        transition-all

        sm:flex-row sm:items-center
        sm:gap-4 sm:rounded-2xl
        sm:px-5 sm:py-5

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
      {/* Main Row */}
      <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-4">
        {/* Radio */}
        <div
          className={`
            flex h-4 w-4 shrink-0
            items-center justify-center
            rounded-full border-2
            sm:h-6 sm:w-6
            ${selected ? "border-green-600" : "border-gray-300"}
          `}
        >
          {selected && (
            <div className="h-2 w-2 rounded-full bg-green-600 sm:h-3 sm:w-3" />
          )}
        </div>

        {/* Address Icon */}
        <div
          className={`
            flex h-9 w-9 shrink-0
            items-center justify-center
            rounded-xl

            [&_svg]:h-4 [&_svg]:w-4
            sm:h-14 sm:w-14
            sm:rounded-2xl
            sm:[&_svg]:h-6 sm:[&_svg]:w-6

            ${
              selected
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-500"
            }
          `}
        >
          {getAddressIcon(address.alias)}
        </div>

        {/* Address Info */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <h3
              className="
                min-w-0
                break-words
                text-[13px] font-semibold
                leading-5 text-gray-950
                sm:truncate
                sm:text-base sm:leading-normal
              "
            >
              {getAddressTitle(address)}
            </h3>

            {address.isDefault && (
              <div
                className="
                  shrink-0
                  [&_*]:text-[10px]
                  sm:[&_*]:text-xs
                "
              >
                <DefaultAddressBadge />
              </div>
            )}
          </div>

          <p
            className="
              mt-1
              line-clamp-2
              min-w-0
              break-all
              text-[11px]
              leading-4
              text-gray-500

              sm:max-w-[420px]
              sm:break-normal
              sm:text-sm sm:leading-6
            "
          >
            {formatViewAddress(address)}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div
        className="
          flex shrink-0 items-center
          justify-end gap-2
          border-t border-gray-100
          pt-2

          sm:border-0 sm:pt-0

          max-sm:[&_button]:h-8
          max-sm:[&_button]:w-8
          max-sm:[&_button_svg]:h-3.5
          max-sm:[&_button_svg]:w-3.5
        "
        onClick={(e) => e.stopPropagation()}
      >
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
