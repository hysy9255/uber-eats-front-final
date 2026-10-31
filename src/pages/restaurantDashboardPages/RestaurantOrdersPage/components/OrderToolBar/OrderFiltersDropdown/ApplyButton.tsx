interface ApplyButtonProps {
  onClick: () => void;
}

const ApplyButton: React.FC<ApplyButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
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
      hover:cursor-pointer
    "
    >
      Apply
    </button>
  );
};

export default ApplyButton;
