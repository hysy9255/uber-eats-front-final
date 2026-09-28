import { X } from "lucide-react";

interface HeaderProps {
  closeAddressPopUp: () => void;
}

const Header: React.FC<HeaderProps> = ({ closeAddressPopUp }) => {
  return (
    <div
      className="
    flex items-start justify-between
    border-b border-gray-100
    px-7 py-6
  "
    >
      <div>
        <h2 className="text-[22px] font-bold tracking-[-0.4px] text-gray-950">
          Manage delivery address
        </h2>

        <p className="mt-1.5 text-sm text-gray-500">
          Choose where you want your order delivered.
        </p>
      </div>

      <button
        type="button"
        onClick={closeAddressPopUp}
        className="
      flex h-10 w-10
      cursor-pointer
      items-center justify-center
      rounded-full
      bg-gray-100
      text-gray-500
      transition
      hover:bg-gray-200
      hover:text-gray-800
    "
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Header;
