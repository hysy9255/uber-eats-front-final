interface SaveButtonProps {
  onClick: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        h-10
        rounded-lg
        bg-green-700
        px-4
        text-sm
        font-semibold
        text-white
        "
    >
      Save
    </button>
  );
};

export default SaveButton;
