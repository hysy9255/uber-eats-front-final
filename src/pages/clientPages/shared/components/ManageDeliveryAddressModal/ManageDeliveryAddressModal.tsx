import { createPortal } from "react-dom";
import { AddressPanelType } from "./constants/addressPanel.type";
import Overlay from "./components/Overlay";
import { useManageDeliveryAddressModal } from "./hooks/useManageDeliveryAddressModal";
import AddAddress from "./components/AddAddress/AddAddress";
import AddressList from "./components/AddressList/AddressList";
import EditAddress from "./components/EditAddress/EditAddress";

interface AddressPopUpProps {
  closeAddressPopUp: () => void;
}
const ManageDeliveryAddressModal = ({
  closeAddressPopUp,
}: AddressPopUpProps) => {
  const {
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
  } = useManageDeliveryAddressModal();

  return createPortal(
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        px-4 py-6
      "
      role="dialog"
      aria-modal="true"
    >
      <Overlay closeAddressPopUp={closeAddressPopUp} />

      <div
        className={`
          relative z-10
          w-full
          max-h-[85vh]
          overflow-hidden
          rounded-[28px]
          bg-white
          shadow-[0_30px_80px_rgba(15,23,42,0.25)]
          transition-[max-width]
          duration-300

          ${
            panel !== AddressPanelType.List ? "max-w-[1180px]" : "max-w-[760px]"
          }
        `}
      >
        {/* LIST */}
        {panel === AddressPanelType.List && (
          <AddressList
            addresses={addresses}
            setSelectedAddressId={setSelectedAddressId}
            selectedAddressId={selectedAddressId}
            setAddressToEdit={setAddressToEdit}
            setPanel={setPanel}
            handleDeleteAddress={handleDeleteAddress}
            handleClickSetAsDefault={handleClickSetAsDefault}
            closeAddressPopUp={closeAddressPopUp}
            canChangeDefault={canChangeDefault}
          />
        )}

        {/* ADD */}
        {panel === AddressPanelType.Add && (
          <AddAddress
            onSuccessAddAddress={loadMyDeliveryAddresses}
            closeAddAddress={() => setPanel(AddressPanelType.List)}
          />
        )}

        {/* EDIT */}
        {panel === AddressPanelType.Edit && addressToEdit && (
          <EditAddress
            onSuccessAddAddress={loadMyDeliveryAddresses}
            closeAddAddress={() => setPanel(AddressPanelType.List)}
            addressToEdit={addressToEdit}
          />
        )}
      </div>
    </div>,
    document.body
  );
};

export default ManageDeliveryAddressModal;
