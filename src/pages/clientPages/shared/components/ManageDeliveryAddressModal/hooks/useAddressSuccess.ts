import { useState } from "react";
import { useAddress } from "../../../context/address/useAddress";

type AddressSuccessType = "add" | "update" | "delete" | "setDefault";

const successMessages: Record<AddressSuccessType, string> = {
  add: "Address added successfully!",
  update: "Address edited successfully!",
  delete: "Address deleted successfully!",
  setDefault: "Default address changed successfully!",
};

export const useAddressSuccess = () => {
  const { loadMyDeliveryAddresses } = useAddress();

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSuccess = async (type: AddressSuccessType) => {
    await loadMyDeliveryAddresses();
    setSuccessMessage(successMessages[type]);
  };

  const closeSuccessMessage = () => {
    setSuccessMessage(null);
  };

  return {
    successMessage,
    handleSuccess,
    closeSuccessMessage,
  };
};
