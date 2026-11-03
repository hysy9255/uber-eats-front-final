import { X } from "lucide-react";

interface HeaderProps {
  closeAddressPopUp: () => void;
}

const Header: React.FC<HeaderProps> = ({ closeAddressPopUp }) => {
  return (
    <div
      className="
        flex shrink-0 items-start
        justify-between gap-3
        border-b border-gray-100
        px-4 py-4
        sm:px-7 sm:py-6
      "
    >
      <div className="min-w-0 flex-1">
        <h2
          className="
            text-base font-bold
            leading-6 tracking-[-0.4px]
            text-gray-950
            sm:text-[22px] sm:leading-normal
          "
        >
          Manage delivery address
        </h2>

        <p
          className="
            mt-1 text-[11px]
            leading-4 text-gray-500
            sm:mt-1.5 sm:text-sm sm:leading-normal
          "
        >
          Choose where you want your order delivered.
        </p>
      </div>

      <button
        type="button"
        onClick={closeAddressPopUp}
        aria-label="Close address modal"
        className="
          flex h-8 w-8 shrink-0
          cursor-pointer
          items-center justify-center
          rounded-full bg-gray-100
          text-gray-500
          transition
          hover:bg-gray-200
          hover:text-gray-800
          sm:h-10 sm:w-10
        "
      >
        <X className="h-4 w-4 sm:h-5 sm:w-5 hover:cursor-pointer" />
      </button>
    </div>
  );
};

export default Header;
