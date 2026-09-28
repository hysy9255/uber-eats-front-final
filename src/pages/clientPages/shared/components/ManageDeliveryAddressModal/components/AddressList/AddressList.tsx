import type { DeliveryAddressDTO } from "../../../../api/deliveryAddress.dto";
import type { AddressPanelType } from "../../constants/addressPanel.type";
import AddressCard from "./components/AddressCard/AddressCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NoDeliveryAddresses from "./components/NoDeliveryAddresses";

interface AddressListProps {
  addresses?: DeliveryAddressDTO[];
  closeAddressPopUp: () => void;
  setSelectedAddressId: (value: string) => void;
  selectedAddressId?: string;
  setAddressToEdit: (value: DeliveryAddressDTO) => void;
  setPanel: (value: AddressPanelType) => void;
  handleDeleteAddress: (addressId: string) => void;
  handleClickSetAsDefault: () => void;
  canChangeDefault: boolean;
}

const AddressList: React.FC<AddressListProps> = ({
  addresses,
  closeAddressPopUp,
  setSelectedAddressId,
  selectedAddressId,
  setAddressToEdit,
  setPanel,
  handleDeleteAddress,
  handleClickSetAsDefault,
  canChangeDefault,
}) => {
  const sortedAddresses = [...(addresses ?? [])].sort(
    (a, b) => Number(b.isDefault) - Number(a.isDefault)
  );
  return (
    <div className="flex max-h-[85vh] flex-col">
      <Header closeAddressPopUp={closeAddressPopUp} />

      <div
        className="
        flex-1
        overflow-y-auto
        px-7 py-5
      "
      >
        <div className="flex flex-col gap-3">
          {sortedAddresses?.map((address) => {
            const selected = selectedAddressId === address.deliveryAddressId;

            return (
              <AddressCard
                address={address}
                setSelectedAddressId={setSelectedAddressId}
                setAddressToEdit={setAddressToEdit}
                setPanel={setPanel}
                handleDeleteAddress={handleDeleteAddress}
                selected={selected}
              />
            );
          })}

          {/* Empty */}
          {addresses?.length === 0 && <NoDeliveryAddresses />}
        </div>
      </div>

      <Footer
        closeAddressPopUp={closeAddressPopUp}
        setPanel={setPanel}
        handleClickSetAsDefault={handleClickSetAsDefault}
        selectedAddressId={selectedAddressId}
        canChangeDefault={canChangeDefault}
      />
    </div>
  );
};

export default AddressList;
