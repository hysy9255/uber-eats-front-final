import { Upload } from "lucide-react";

interface UploadImageButtonProps {
  onClick: () => void;
}

const UploadImageButton: React.FC<UploadImageButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        w-full
        h-[100px]
        rounded-xl
        border
        border-dashed
        border-gray-300
        flex
        flex-col
        items-center
        justify-center
        gap-2
        text-gray-500
        hover:bg-gray-50
        hover:cursor-pointer
        "
    >
      <Upload className="w-5 h-5" />

      <span className="text-sm font-medium">Upload image</span>

      <span className="text-xs text-gray-400">JPG, PNG or WEBP</span>
    </button>
  );
};

export default UploadImageButton;
