import { useEffect, useState } from "react";
import { AddressPanelType } from "../constants/addressPanel.type";
import type { DeliveryAddressDTO } from "../../../api/deliveryAddress.dto";
import { getToken } from "../../../../../../shared/utils/getToken";
import { setDefaultAddress } from "../api/setDefaultAddress";
import { deleteDeliveryAddress } from "../api/deleteDeliveryAddress";
import { useAddress } from "../../../context/address/useAddress";

export const useManageDeliveryAddressModal = () => {
  const { addressList: addresses, loadMyDeliveryAddresses } = useAddress();
  const [addressToEdit, setAddressToEdit] = useState<DeliveryAddressDTO>();
  const token = getToken();

  const [selectedAddressId, setSelectedAddressId] = useState<string>();

  const defaultAddress = addresses?.find((address) => address.isDefault);

  useEffect(() => {
    setSelectedAddressId(defaultAddress?.deliveryAddressId);
  }, [defaultAddress]);

  const canChangeDefault =
    !!selectedAddressId &&
    selectedAddressId !== defaultAddress?.deliveryAddressId;

  const [panel, setPanel] = useState<
    AddressPanelType.List | AddressPanelType.Add | AddressPanelType.Edit
  >(AddressPanelType.List);

  const handleDeleteAddress = async (addressId: string) => {
    try {
      const confirmed = confirm("배송지로 정말로 삭제하시겠습니까?");
      if (!confirmed) return;

      if (!token) throw new Error("No Token");
      await deleteDeliveryAddress(token, addressId);
      alert("주소가 삭제되었습니다");
      await loadMyDeliveryAddresses();
    } catch (e) {
      console.error(e);
      throw new Error("Error deleting delivery address");
    }
  };

  const handleClickSetAsDefault = async () => {
    try {
      if (!token) throw new Error("No Token");
      if (!selectedAddressId) throw new Error("No selected address");
      await setDefaultAddress(token, selectedAddressId);
      alert("배송지가 변경되었습니다");
      await loadMyDeliveryAddresses();
    } catch (e) {
      console.error(e);
      throw new Error("Error changing default address");
    }
  };

  return {
    addresses,
    selectedAddressId,
    setSelectedAddressId,
    addressToEdit,
    setAddressToEdit,
    panel,
    setPanel,
    handleDeleteAddress,
    handleClickSetAsDefault,
    loadMyDeliveryAddresses,
    canChangeDefault,
  };
};
