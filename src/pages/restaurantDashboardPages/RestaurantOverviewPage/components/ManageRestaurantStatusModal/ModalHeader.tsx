import { X } from "lucide-react";

interface ModalHeaderProps {
  onClose: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose }) => {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h2 className="text-xl font-bold text-gray-950">Manage status</h2>

        <p className="mt-1 text-sm text-gray-500">
          Change your restaurant&apos;s operating status.
        </p>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="
        hover:cursor-pointer
        rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700
        "
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ModalHeader;
