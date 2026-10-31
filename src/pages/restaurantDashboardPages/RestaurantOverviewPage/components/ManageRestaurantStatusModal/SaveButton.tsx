interface SaveButtonProps {
  hasChanges: boolean;
  isSaving: boolean;
  handleSave: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({
  hasChanges,
  isSaving,
  handleSave,
}) => {
  return (
    <button
      type="button"
      onClick={handleSave}
      disabled={!hasChanges || isSaving}
      className="
                h-10 px-5 rounded-xl
                bg-green-600
                text-sm font-semibold text-white
                hover:bg-green-700
                disabled:cursor-not-allowed
                disabled:opacity-40
                hover:cursor-pointer
              "
    >
      {isSaving ? "Saving..." : "Save changes"}
    </button>
  );
};

export default SaveButton;
