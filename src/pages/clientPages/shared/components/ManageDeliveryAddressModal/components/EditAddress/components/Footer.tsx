interface FooterProps {
  closeAddAddress: () => void;
  handleSave: () => void;
}

const Footer: React.FC<FooterProps> = ({ closeAddAddress, handleSave }) => {
  return (
    <div
      className="
    flex
    h-[68px]
    shrink-0
    items-center
    justify-end
    gap-3
    border-t
    border-gray-100
    px-8
  "
    >
      <button
        type="button"
        onClick={closeAddAddress}
        className="
        hover:cursor-pointer
        h-9
        min-w-[110px]
        rounded-lg
        border
        border-gray-200
        bg-white
        px-5
        text-[12px]
        font-semibold
        text-gray-700
        transition
        hover:bg-gray-50
      "
      >
        Cancel
      </button>

      <button
        type="button"
        onClick={handleSave}
        className="
        hover:cursor-pointer
        h-9
        min-w-[145px]
        rounded-lg
        bg-green-600
        px-5
        text-[12px]
        font-semibold
        text-white
        transition
        hover:bg-green-700
      "
      >
        Save address
      </button>
    </div>
  );
};

export default Footer;
