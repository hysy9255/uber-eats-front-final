import { createPortal } from "react-dom";
import { AddressPanelType } from "./constants/addressPanel.type";
import Overlay from "./Overlay";
import AddAddress from "./AddAddress";
import { EditAddress } from "./EditAddress";
import Toast from "../Toast";
import { AddressList } from "./AddressList/AddressList";
import { useAddressPanel } from "./hooks/useAddressPanel";
import { useAddressSuccess } from "./hooks/useAddressSuccess";

interface AddressPopUpProps {
  onClose: () => void;
}

const ManageDeliveryAddressModal = ({ onClose }: AddressPopUpProps) => {
  const { panel, addressToEdit, openList, openAdd, openEdit } =
    useAddressPanel();

  const { successMessage, handleSuccess, closeSuccessMessage } =
    useAddressSuccess();

  return createPortal(
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        p-3 sm:px-4 sm:py-6"
      role="dialog"
      aria-modal="true"
    >
      <Overlay onClose={onClose} />

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
              onClose={onClose}
              onEdit={openEdit}
              onAdd={openAdd}
              onDeleteSuccess={() => handleSuccess("delete")}
              onSetDefaultSuccess={() => handleSuccess("setDefault")}
            />
          )}

          {panel === AddressPanelType.Add && (
            <AddAddress
              onAddSuccess={() => handleSuccess("add")}
              onBack={openList}
            />
          )}

          {panel === AddressPanelType.Edit && addressToEdit && (
            <EditAddress
              onUpdateSuccess={() => handleSuccess("update")}
              onBack={openList}
              addressToEdit={addressToEdit}
            />
          )}
        </div>
      </div>
      {successMessage && (
        <Toast message={successMessage} onClose={closeSuccessMessage} />
      )}
    </div>,
    document.body
  );
};

export default ManageDeliveryAddressModal;
