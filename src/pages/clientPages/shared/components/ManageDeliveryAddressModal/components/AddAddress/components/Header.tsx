import { ArrowLeft, X } from "lucide-react";

interface HeaderProps {
  closeAddAddress: () => void;
}

const Header: React.FC<HeaderProps> = ({ closeAddAddress }) => {
  return (
    <div
      className="
    flex
    h-[88px]
    shrink-0
    items-center
    justify-between
    border-b
    border-gray-100
    px-8
  "
    >
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={closeAddAddress}
          className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-xl
        border
        border-gray-200
        bg-white
        text-gray-700
        transition
        hover:bg-gray-50
      "
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        <div>
          <h2 className="text-[22px] font-bold tracking-[-0.03em] text-gray-950">
            Add delivery address
          </h2>

          <p className="mt-0.5 text-[12px] text-gray-500">
            Add a new delivery address to your account.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={closeAddAddress}
        className="
      flex
      h-9
      w-9
      items-center
      justify-center
      rounded-full
      bg-gray-100
      text-gray-500
      transition
      hover:bg-gray-200
      hover:text-gray-800
    "
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Header;
