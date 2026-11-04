import { Plus } from "lucide-react";

interface AddressListFooterProps {
  onClose: () => void;
  onAdd: () => void;
  onSetDefault: () => void;
  canSetDefault: boolean;
}

export const AddressListFooter: React.FC<AddressListFooterProps> = ({
  onClose,
  onAdd,
  onSetDefault,
  canSetDefault,
}) => {
  return (
    <div
      className="
        grid shrink-0 grid-cols-3
        items-center gap-2
        border-t border-gray-100
        bg-white
        px-3 py-3

        sm:flex sm:justify-between
        sm:gap-3
        sm:px-7 sm:py-5
      "
    >
      {/* Add Address */}
      <button
        type="button"
        onClick={onAdd}
        className="
          flex h-9 min-w-0
          items-center justify-center
          gap-1
          whitespace-nowrap
          rounded-lg
          border border-gray-200
          bg-white
          px-1
          text-[10px] font-semibold
          text-gray-800
          transition

          hover:border-green-300
          hover:bg-green-50
          hover:text-green-700
          hover:cursor-pointer

          sm:h-11 sm:gap-2
          sm:rounded-xl
          sm:px-4 sm:text-sm
        "
      >
        <Plus className="h-3 w-3 shrink-0 sm:h-4 sm:w-4" />
        Add address
      </button>

      {/* Right Buttons */}
      <div
        className="
          contents

          sm:flex sm:items-center
          sm:gap-3
        "
      >
        <button
          type="button"
          onClick={onClose}
          className="
            h-9 min-w-0
            whitespace-nowrap
            rounded-lg
            border border-gray-200
            bg-white
            px-1
            text-[11px] font-semibold
            text-gray-700
            transition
            hover:bg-gray-50
            hover:cursor-pointer

            sm:h-11 sm:rounded-xl
            sm:px-5 sm:text-sm
          "
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={onSetDefault}
          disabled={!canSetDefault}
          className="
            h-9 min-w-0
            whitespace-nowrap
            rounded-lg
            bg-green-600
            px-1
            text-[10px] font-semibold
            text-white
            transition

            hover:bg-green-700
            hover:cursor-pointer
            disabled:cursor-not-allowed
            disabled:bg-gray-300

            sm:h-11 sm:rounded-xl
            sm:px-5 sm:text-sm
          "
        >
          Set as Default
        </button>
      </div>
    </div>
  );
};
