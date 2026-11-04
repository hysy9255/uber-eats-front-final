interface AddressFormFooterProps {
  onCancel: () => void;
  onSave: () => void;
  canSave: boolean;
}

export const AddressFormFooter: React.FC<AddressFormFooterProps> = ({
  onCancel,
  onSave,
  canSave,
}) => {
  return (
    <div
      className="
        grid shrink-0 grid-cols-2
        items-center gap-2
        border-t border-gray-100
        bg-white
        px-4 py-3

        md:flex md:h-[68px]
        md:justify-end md:gap-3
        md:px-8 md:py-0
      "
    >
      <button
        type="button"
        onClick={onCancel}
        className="
          h-10 min-w-0
          rounded-lg
          border border-gray-200
          bg-white
          px-3
          text-[11px] font-semibold
          text-gray-700
          whitespace-nowrap
          transition

          hover:cursor-pointer
          hover:bg-gray-50

          md:h-9
          md:min-w-[110px]
          md:px-5
          md:text-[12px]
        "
      >
        Cancel
      </button>

      <button
        type="button"
        onClick={onSave}
        disabled={!canSave}
        className="
          h-10 min-w-0
          rounded-lg
          bg-green-600
          px-3
          text-[11px] font-semibold
          text-white
          whitespace-nowrap
          transition

          enabled:hover:cursor-pointer
          enabled:hover:bg-green-700

          disabled:cursor-not-allowed
          disabled:bg-gray-300
          disabled:text-white

          md:h-9
          md:min-w-[145px]
          md:px-5
          md:text-[12px]
        "
      >
        Save address
      </button>
    </div>
  );
};
