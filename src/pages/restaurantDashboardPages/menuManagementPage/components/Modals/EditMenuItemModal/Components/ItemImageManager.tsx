import ChangeImageButton from "./Buttons/ChangeImageButton";
import RemoveImageButton from "./Buttons/RemoveImageButton";
import DishImagePreview from "./DishImagePreview";

interface ItemImageManagerProps {
  imagePreview: string;
  onClickChangeImageButton: () => void;
  onClickRemoveImageButton: () => void;
}

const ItemImageManager: React.FC<ItemImageManagerProps> = ({
  imagePreview,
  onClickChangeImageButton,
  onClickRemoveImageButton,
}) => {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        rounded-xl
        border
        border-gray-200
        bg-gray-50
        p-3
      "
    >
      <DishImagePreview imagePreview={imagePreview} />
      <div className="flex flex-1 items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-900">Current image</p>

          <p className="mt-1 text-xs text-gray-500">JPG, PNG or WEBP</p>
        </div>

        <div className="flex items-center gap-2">
          <ChangeImageButton onClick={onClickChangeImageButton} />
          <RemoveImageButton onClick={onClickRemoveImageButton} />
        </div>
      </div>
    </div>
  );
};

export default ItemImageManager;
