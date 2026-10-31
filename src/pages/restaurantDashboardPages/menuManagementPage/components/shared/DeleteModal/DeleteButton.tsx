interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        h-10
        rounded-lg
        bg-red-600
        px-4
        text-sm
        font-semibold
        text-white
        hover:bg-red-700
        hover:cursor-pointer
        "
    >
      Delete
    </button>
  );
};

export default DeleteButton;
