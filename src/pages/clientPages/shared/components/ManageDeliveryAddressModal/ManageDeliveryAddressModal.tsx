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
        p-3 sm:px-4 sm:py-6"
      role="dialog"
      aria-modal="true"
    >
      <Overlay closeAddressPopUp={closeAddressPopUp} />

      {/* <div
        className={`
          relative z-10
          flex w-full min-w-0 flex-col
          max-h-[calc(100dvh-24px)]
          overflow-hidden
          rounded-[20px]
          bg-white
          shadow-[0_30px_80px_rgba(15,23,42,0.25)]
          transition-[max-width] duration-300
          sm:max-h-[85dvh]
          sm:rounded-[28px]
          ${
            panel === AddressPanelType.List ? "max-w-[760px]" : "max-w-[1180px]"
          }
        `}
      >
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain"> */}
      <div
        className={`
        relative z-10
        flex w-full min-w-0 flex-col
        overflow-hidden
        rounded-[20px]
        bg-white
        shadow-[0_30px_80px_rgba(15,23,42,0.25)]

        sm:rounded-[28px]

        ${
          panel === AddressPanelType.List
            ? "max-w-[760px] max-h-[90dvh]"
            : "max-w-[1180px] h-[min(760px,calc(100dvh-24px))]"
        }
      `}
      >
        <div
          className={
            panel === AddressPanelType.List
              ? "min-h-0 overflow-y-auto"
              : "min-h-0 flex-1"
          }
        >
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

          {panel === AddressPanelType.Add && (
            <AddAddress
              onSuccessAddAddress={loadMyDeliveryAddresses}
              closeAddAddress={() => setPanel(AddressPanelType.List)}
            />
          )}

          {panel === AddressPanelType.Edit && addressToEdit && (
            <EditAddress
              onSuccessAddAddress={loadMyDeliveryAddresses}
              closeAddAddress={() => setPanel(AddressPanelType.List)}
              addressToEdit={addressToEdit}
            />
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ManageDeliveryAddressModal;
