import { useState } from "react";
import { getToken } from "../../../../../../shared/utils/getToken";
import type { DeliveryAddressDTO } from "../../../api/deliveryAddress.dto";
import { deleteDeliveryAddress } from "../api/deleteDeliveryAddress";
import { setDefaultAddress } from "../api/setDefaultAddress";
import AddressCard from "./AddressCard/AddressCard";
import { AddressListFooter } from "./AddressListFooter";
import Header from "./Header";
import { moveDefaultAddressToFront } from "./utils/moveDefaultAddressToFront";
import NoDeliveryAddresses from "./NoDeliveryAddresses";
import { useAddress } from "../../../context/address/useAddress";

interface AddressListProps {
  onClose: () => void;
  onEdit: (address: DeliveryAddressDTO) => void;
  onAdd: () => void;
  onDeleteSuccess: () => Promise<void>;
  onSetDefaultSuccess: () => Promise<void>;
}

export const AddressList: React.FC<AddressListProps> = ({
  onClose,
  onEdit,
  onAdd,
  onDeleteSuccess,
  onSetDefaultSuccess,
}) => {
  const { addresses, defaultAddress } = useAddress();

  const [selectedAddressId, setSelectedAddressId] = useState<string>();

  const defaultAddressId = defaultAddress?.deliveryAddressId;

  const activeAddressId = selectedAddressId ?? defaultAddressId;

  const canSetDefault =
    !!activeAddressId && activeAddressId !== defaultAddressId;

  const handleSetDefault = async () => {
    try {
      const token = getToken();
      if (!token) throw new Error("No Token");
      if (!selectedAddressId) throw new Error("No selected address");
      await setDefaultAddress(token, selectedAddressId);

      await onSetDefaultSuccess();
    } catch (e) {
      console.error(e);
      throw new Error("Error changing default address");
    }
  };

  const handleDeleteAddress = async (addressId: string) => {
    try {
      const token = getToken();
      const confirmed = confirm("배송지로 정말로 삭제하시겠습니까?");
      if (!confirmed) return;

      if (!token) throw new Error("No Token");
      await deleteDeliveryAddress(token, addressId);

      await onDeleteSuccess();
    } catch (e) {
      console.error(e);
      throw new Error("Error deleting delivery address");
    }
  };

  return (
    <div className="flex min-h-0 max-h-[calc(100dvh-24px)] flex-col sm:max-h-[85dvh]">
      <Header onClose={onClose} />

      <div
        className="
          min-h-0 flex-1
          overflow-y-auto overscroll-contain
          px-3 py-4
          sm:px-7 sm:py-5
        "
      >
        <div className="flex flex-col gap-2.5 sm:gap-3">
          {moveDefaultAddressToFront(addresses).map((address) => {
            const selected = activeAddressId === address.deliveryAddressId;

            return (
              <AddressCard
                key={address.deliveryAddressId}
                address={address}
                isSelected={selected}
                onSelect={() => setSelectedAddressId(address.deliveryAddressId)}
                onEdit={() => onEdit(address)}
                onDelete={() => handleDeleteAddress(address.deliveryAddressId)}
              />
            );
          })}

          {addresses?.length === 0 && <NoDeliveryAddresses />}
        </div>
      </div>

      <AddressListFooter
        onClose={onClose}
        onAdd={onAdd}
        onSetDefault={handleSetDefault}
        canSetDefault={canSetDefault}
      />
    </div>
  );
};
