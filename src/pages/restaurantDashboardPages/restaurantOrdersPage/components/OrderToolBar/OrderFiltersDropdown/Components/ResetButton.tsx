interface ResetButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
    h-10
    rounded-lg
    px-4
    text-sm
    font-medium
    text-gray-600
    hover:bg-gray-100
  "
    >
      Reset
    </button>
  );
};

export default ResetButton;
