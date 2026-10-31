import { Eye } from "lucide-react";

interface PreviewButtonProps {
  onClickPreview: () => void;
}

const PreviewButton: React.FC<PreviewButtonProps> = ({ onClickPreview }) => {
  return (
    <button
      type="button"
      onClick={onClickPreview}
      className="
                hover:cursor-pointer
                flex
                h-9
                shrink-0
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
      <Eye className="h-4 w-4" />
      Preview
    </button>
  );
};

export default PreviewButton;
