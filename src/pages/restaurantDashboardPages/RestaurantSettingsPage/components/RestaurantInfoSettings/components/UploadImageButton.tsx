import { Upload } from "lucide-react";

interface UploadImageButtonProps {
  title: string;
  onClickButton: () => void;
}

const UploadImageButton: React.FC<UploadImageButtonProps> = ({
  title,
  onClickButton,
}) => {
  return (
    <button
      type="button"
      onClick={onClickButton}
      className="
            hover:cursor-pointer
            flex
            h-9
            items-center
            gap-2
            rounded-lg
            border
            border-gray-200
            bg-white
            px-3
            text-xs
            font-medium
            text-gray-700
            hover:bg-gray-50
        "
    >
      <Upload className="h-4 w-4" />
      {title}
    </button>
  );
};

export default UploadImageButton;
