import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { STATUS_OPTIONS } from "./constants/statusOptions";
import Overlay from "./Components/Overlay";
import ModalHeader from "./Components/ModalHeader";
import ModalFooter from "./Components/ModalFooter";
import CancelButton from "./Components/CancelButton";
import SaveButton from "./Components/SaveButton";
import StatusOptionCard from "./Components/StatusOptionCard";
import { RestaurantStatus } from "../../../../../shared/types/restaurantStatus.type";

interface ManageRestaurantStatusModalProps {
  currentStatus: RestaurantStatus;
  onClose: () => void;
  onSave: (status: RestaurantStatus) => Promise<void> | void;
}

export const ManageRestaurantStatusModal: React.FC<
  ManageRestaurantStatusModalProps
> = ({ currentStatus, onClose, onSave }) => {
  const [selectedStatus, setSelectedStatus] =
    useState<RestaurantStatus>(currentStatus);

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setSelectedStatus(currentStatus);
  }, [currentStatus]);

  const hasChanges = selectedStatus !== currentStatus;

  const handleSave = async () => {
    if (!hasChanges) return;

    try {
      setIsSaving(true);

      await onSave(selectedStatus);

      onClose();
    } finally {
      setIsSaving(false);
    }
  };

  const availableStatusOptions = STATUS_OPTIONS.filter((option) => {
    if (currentStatus === RestaurantStatus.Closed) {
      return option.value !== RestaurantStatus.Paused;
    }

    return true;
  });

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <Overlay onClose={onClose} />

      <div className="relative z-10 w-full max-w-[540px] rounded-2xl bg-white p-6 shadow-2xl">
        <ModalHeader onClose={onClose} />

        <div className="mt-6 flex flex-col gap-3">
          {availableStatusOptions.map((option) => {
            const selected = option.value === selectedStatus;

            return (
              <StatusOptionCard
                key={option.value}
                option={option}
                selected={selected}
                setSelectedStatus={setSelectedStatus}
              />
            );
          })}
          {/* {STATUS_OPTIONS.map((option) => {
            const selected = option.value === selectedStatus;

            return (
              <StatusOptionCard
                option={option}
                selected={selected}
                setSelectedStatus={setSelectedStatus}
              />
            );
          })} */}
        </div>

        <ModalFooter />

        <div className="mt-6 flex justify-end gap-3">
          <CancelButton onClose={onClose} isSaving={isSaving} />
          <SaveButton
            hasChanges={hasChanges}
            isSaving={isSaving}
            handleSave={handleSave}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};
