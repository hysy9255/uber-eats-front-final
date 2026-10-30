import Footer from "./components/Footer";
import RightPanel from "./components/RightPanel";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import { FormProvider, useForm } from "react-hook-form";
import type { EditDeliveryAddressForm } from "./types/editDeliveryAddressForm.type";
import type { DeliveryAddressDTO } from "../../../../api/deliveryAddress.dto";
import { getToken } from "../../../../../../../shared/utils/getToken";
import { UpdateDeliveryAddressDTO } from "../../api/updateDeliveryAddress/updateDeliveryAddress.dto";
import { updateDeliveryAddress } from "../../api/updateDeliveryAddress/updateDeliveryAddress";
import { AddressAlias } from "../../../../../../../shared/types/addressAlias.type";

interface AddAddressProps {
  closeAddAddress: () => void;
  onSuccessAddAddress: () => Promise<void>;
  addressToEdit: DeliveryAddressDTO;
}

const EditAddress = ({
  closeAddAddress,
  onSuccessAddAddress,
  addressToEdit,
}: AddAddressProps) => {
  const token = getToken();

  const getAlias = (addressToEdit: DeliveryAddressDTO) => {
    if (addressToEdit.alias === "home") return AddressAlias.home;
    if (addressToEdit.alias === "work") return AddressAlias.work;
    return AddressAlias.other;
  };

  const getCustomAlias = (addressToEdit: DeliveryAddressDTO) => {
    if (addressToEdit.alias === "home" || addressToEdit.alias === "work") {
      return null;
    }
    return addressToEdit.alias;
  };

  const methods = useForm<EditDeliveryAddressForm>({
    mode: "onSubmit",
    defaultValues: {
      streetAddress: addressToEdit.streetAddress,
      apt: addressToEdit.apt,
      city: addressToEdit.city,
      state: addressToEdit.state,
      zip: addressToEdit.zip,
      alias: getAlias(addressToEdit),
      customAlias: getCustomAlias(addressToEdit),
    },
  });

  const handleSave = async (data: EditDeliveryAddressForm) => {
    try {
      if (!token) throw new Error("No Token");
      const payload = new UpdateDeliveryAddressDTO({
        streetAddress: data.streetAddress,
        apt: data.apt,
        city: data.city,
        state: data.state,
        zip: data.zip,
        alias: data.alias,
        customAlias: data.customAlias,
      });

      await updateDeliveryAddress(
        token,
        payload,
        addressToEdit.deliveryAddressId
      );
      await onSuccessAddAddress();
      alert("Edit Delivery Address: Success");
      closeAddAddress();
    } catch (e) {
      console.error(e);
      throw new Error("Error registering new delivery address");
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="flex h-[82vh] max-h-[760px] min-h-[600px] w-full flex-col overflow-hidden bg-white">
        <Header closeAddAddress={closeAddAddress} />
        <div className="grid min-h-0 flex-1 grid-cols-[1.45fr_0.85fr]">
          <LeftPanel />
          <RightPanel />
        </div>
        <Footer
          closeAddAddress={closeAddAddress}
          handleSave={methods.handleSubmit(handleSave)}
        />
      </div>
    </FormProvider>
  );
};

export default EditAddress;
