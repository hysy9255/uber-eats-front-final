import { FormProvider, useForm } from "react-hook-form";
import { getToken } from "../../../../../shared/utils/getToken";
import { addDeliveryAddress } from "./api/createDeliveryAddress/createDeliveryAddress";
import { CreateDeliveryAddressDTO } from "./api/createDeliveryAddress/createDeliveryAddress.dto";
import { AddressFormHeader } from "./shared/AddressFormHeader";
import { AddressFormLeftPanel } from "./shared/AddressFormLeftPanel/AddressFormLeftPanel";
import { AddressFormRightPanel } from "./shared/AddressFormRightPanel";
import { AddressFormFooter } from "./shared/AddressFormFooter";
import type { DeliveryAddressForm } from "./shared/types/deliveryAddressForm.type";
import { getAddressFormDefaults } from "./shared/utils/getAddressFormDefaults";

interface AddAddressProps {
  onBack: () => void;
  onAddSuccess: () => Promise<void>;
}

const AddAddress = ({ onBack, onAddSuccess }: AddAddressProps) => {
  const methods = useForm<DeliveryAddressForm>({
    mode: "onChange",
    defaultValues: getAddressFormDefaults(),
  });

  const handleSave = async (data: DeliveryAddressForm) => {
    try {
      const token = getToken();
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

      await onAddSuccess();

      onBack();
    } catch (e) {
      console.error(e);
      throw new Error("Error registering new delivery address");
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="flex h-full min-h-0 w-full flex-col overflow-hidden bg-white">
        <AddressFormHeader mode="add" />

        <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-[1.45fr_0.85fr]">
          <AddressFormLeftPanel />
          <AddressFormRightPanel mode="add" />
        </div>
        <AddressFormFooter
          onCancel={onBack}
          onSave={methods.handleSubmit(handleSave)}
          canSave={methods.formState.isValid}
        />
      </div>
    </FormProvider>
  );
};

export default AddAddress;
