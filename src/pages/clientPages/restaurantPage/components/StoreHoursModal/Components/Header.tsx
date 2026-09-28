import { Clock3 } from "lucide-react";
import XButton from "./XButton";

interface HeaderProps {
  onClose: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClose }) => {
  return (
    <div className="flex items-start justify-between px-7 pb-6 pt-7">
      <div className="flex items-start gap-4">
        <div
          className="
        flex
        size-[52px]
        shrink-0
        items-center
        justify-center
        rounded-2xl
        bg-green-50
        text-green-600
      "
        >
          <Clock3 className="size-6" />
        </div>

        <div>
          <h2 className="text-[24px] font-bold tracking-[-0.5px] text-gray-950">
            Store hours
          </h2>

          <p className="mt-1 text-sm text-gray-500">Weekly operating hours</p>
        </div>
      </div>

      <XButton onClick={onClose} />
    </div>
  );
};

export default Header;
