interface SaveChangesButtonProps {
  onClick: () => void;
}

const SaveChangesButton: React.FC<SaveChangesButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        h-10
        rounded-lg
        bg-green-700
        px-5
        text-sm
        font-semibold
        text-white
        hover:bg-green-800
        transition
        hover:cursor-pointer
        "
    >
      Save changes
    </button>
  );
};

export default SaveChangesButton;
