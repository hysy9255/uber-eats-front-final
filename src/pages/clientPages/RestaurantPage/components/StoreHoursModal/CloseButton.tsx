interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
            hover:cursor-pointer
            h-11
            min-w-[120px]
            rounded-xl
            bg-green-600
            px-6
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-green-700
        "
    >
      Close
    </button>
  );
};

export default CloseButton;
