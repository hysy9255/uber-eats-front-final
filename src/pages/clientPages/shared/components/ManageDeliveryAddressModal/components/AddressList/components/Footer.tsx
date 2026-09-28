import { Plus } from "lucide-react";
import { AddressPanelType } from "../../../constants/addressPanel.type";

interface FooterProps {
  closeAddressPopUp: () => void;
  setPanel: (value: AddressPanelType) => void;
  handleClickSetAsDefault: () => void;
  selectedAddressId?: string;
  canChangeDefault: boolean;
}

const Footer: React.FC<FooterProps> = ({
  closeAddressPopUp,
  setPanel,
  handleClickSetAsDefault,
  canChangeDefault,
}) => {
  return (
    <div
      className="
    flex items-center justify-between
    border-t border-gray-100
    bg-white
    px-7 py-5
  "
    >
      <button
        type="button"
        onClick={() => setPanel(AddressPanelType.Add)}
        className="
      inline-flex h-11
      cursor-pointer
      items-center gap-2
      rounded-xl
      border border-gray-200
      bg-white
      px-4
      text-sm font-semibold
      text-gray-800
      transition
      hover:border-green-300
      hover:bg-green-50
      hover:text-green-700
    "
      >
        <Plus className="h-4 w-4" />
        Add address
      </button>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={closeAddressPopUp}
          className="
        h-11
        cursor-pointer
        rounded-xl
        border border-gray-200
        bg-white
        px-5
        text-sm font-semibold
        text-gray-700
        transition
        hover:bg-gray-50
      "
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={handleClickSetAsDefault}
          disabled={!canChangeDefault}
          className="
        h-11
        cursor-pointer
        rounded-xl
        bg-green-600
        px-5
        text-sm font-semibold
        text-white
        transition
        hover:bg-green-700
        disabled:cursor-not-allowed
        disabled:bg-gray-300
      "
        >
          Set as Default
        </button>
      </div>
    </div>
  );
};

export default Footer;
