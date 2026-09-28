interface EditButtonProps {
  onClick: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-sm font-medium text-emerald-700 hover:underline hover:cursor-pointer"
    >
      Edit
    </button>
  );
};

export default EditButton;
