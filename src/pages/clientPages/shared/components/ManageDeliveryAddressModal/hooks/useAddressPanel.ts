import { useState } from "react";
import { AddressPanelType } from "../constants/addressPanel.type";
import type { DeliveryAddressDTO } from "../../../api/deliveryAddress.dto";

export const useAddressPanel = () => {
  const [panel, setPanel] = useState<
    AddressPanelType.List | AddressPanelType.Add | AddressPanelType.Edit
  >(AddressPanelType.List);

  const [addressToEdit, setAddressToEdit] = useState<DeliveryAddressDTO>();

  const openList = () => {
    setPanel(AddressPanelType.List);
    setAddressToEdit(undefined);
  };

  const openAdd = () => {
    setPanel(AddressPanelType.Add);
    setAddressToEdit(undefined);
  };

  const openEdit = (address: DeliveryAddressDTO) => {
    setAddressToEdit(address);
    setPanel(AddressPanelType.Edit);
  };

  return {
    panel,
    addressToEdit,
    openList,
    openAdd,
    openEdit,
  };
};
