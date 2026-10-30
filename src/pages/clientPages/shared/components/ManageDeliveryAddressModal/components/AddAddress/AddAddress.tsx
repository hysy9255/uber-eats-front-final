import Footer from "./components/Footer";
import RightPanel from "./components/RightPanel";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import { FormProvider, useForm } from "react-hook-form";
import type { AddDeliveryAddressForm } from "./types/addDeliveryAddressForm.type";
import { getToken } from "../../../../../../../shared/utils/getToken";
import { addDeliveryAddress } from "../../api/createDeliveryAddress/createDeliveryAddress";
import { CreateDeliveryAddressDTO } from "../../api/createDeliveryAddress/createDeliveryAddress.dto";
import { AddressAlias } from "../../../../../../../shared/types/addressAlias.type";

interface AddAddressProps {
  closeAddAddress: () => void;
  onSuccessAddAddress: () => Promise<void>;
}

const AddAddress = ({
  closeAddAddress,
  onSuccessAddAddress,
}: AddAddressProps) => {
  const token = getToken();
  const methods = useForm<AddDeliveryAddressForm>({
    mode: "onSubmit",
    defaultValues: {
      streetAddress: "",
      apt: "",
      city: "",
      state: "",
      zip: "",
      alias: AddressAlias.home,
      customAlias: null,
    },
  });

  const handleSave = async (data: AddDeliveryAddressForm) => {
    try {
      if (!token) throw new Error("No Token");
      const payload = new CreateDeliveryAddressDTO({
        streetAddress: data.streetAddress,
        apt: data.apt,
        city: data.city,
        state: data.state,
        zip: data.zip,
        alias: data.alias,
        customAlias: data.customAlias,
      });

      await addDeliveryAddress(token, payload);
      await onSuccessAddAddress();
      alert("Register Delivery Address: Success");
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

export default AddAddress;
