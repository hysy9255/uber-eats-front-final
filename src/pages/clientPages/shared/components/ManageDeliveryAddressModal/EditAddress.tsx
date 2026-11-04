import { FormProvider, useForm } from "react-hook-form";
import type { DeliveryAddressDTO } from "../../api/deliveryAddress.dto";
import { getToken } from "../../../../../shared/utils/getToken";
import { UpdateDeliveryAddressDTO } from "./api/updateDeliveryAddress/updateDeliveryAddress.dto";
import { updateDeliveryAddress } from "./api/updateDeliveryAddress/updateDeliveryAddress";
import { AddressFormHeader } from "./shared/AddressFormHeader";
import { AddressFormLeftPanel } from "./shared/AddressFormLeftPanel/AddressFormLeftPanel";
import { AddressFormRightPanel } from "./shared/AddressFormRightPanel";
import { AddressFormFooter } from "./shared/AddressFormFooter";
import type { DeliveryAddressForm } from "./shared/types/deliveryAddressForm.type";
import { getAddressFormDefaults } from "./shared/utils/getAddressFormDefaults";

interface EditAddressProps {
  onBack: () => void;
  onUpdateSuccess: () => Promise<void>;
  addressToEdit: DeliveryAddressDTO;
}

export const EditAddress: React.FC<EditAddressProps> = ({
  onBack,
  onUpdateSuccess,
  addressToEdit,
}) => {
  const methods = useForm<DeliveryAddressForm>({
    mode: "onChange",
    defaultValues: getAddressFormDefaults(addressToEdit),
  });

  const handleSave = async (data: DeliveryAddressForm) => {
    try {
      const token = getToken();
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

      await onUpdateSuccess();

      onBack();
    } catch (e) {
      console.error(e);
      throw new Error("Error updating delivery address");
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="flex h-full min-h-0 w-full flex-col overflow-hidden bg-white">
        <AddressFormHeader mode="edit" />

        <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-[1.45fr_0.85fr]">
          <AddressFormLeftPanel />
          <AddressFormRightPanel mode="edit" />
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
