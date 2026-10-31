import { Fragment } from "react/jsx-runtime";
import { useRef } from "react";
import ItemImageManager from "../ItemImageManager";
import UploadImageButton from "../ImageManagerButtons/UploadImageButton";

interface ImageInputProps {
  handleImageChange: (file: File) => void;
  imagePreview: string | null;
  onRemoveImage: () => void;
}

export const ImageInput: React.FC<ImageInputProps> = ({
  handleImageChange,
  imagePreview,
  onRemoveImage,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <Fragment>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;

          handleImageChange(file);
        }}
        className="hidden"
      />
      {!imagePreview ? (
        <UploadImageButton onClick={handleClickUpload} />
      ) : (
        <ItemImageManager
          imagePreview={imagePreview}
          onClickChangeImageButton={handleClickUpload}
          onClickRemoveImageButton={onRemoveImage}
        />
      )}
    </Fragment>
  );
};
