interface CancelButtonProps {
  onClose: () => void;
  isSaving: boolean;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClose, isSaving }) => {
  return (
    <button
      type="button"
      onClick={onClose}
      disabled={isSaving}
      className="
                h-10 px-4 rounded-xl
                border border-gray-200
                text-sm font-semibold text-gray-700
                hover:bg-gray-50
                disabled:opacity-50
                hover:cursor-pointer
              "
    >
      Cancel
    </button>
  );
};

export default CancelButton;
