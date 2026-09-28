import { Fragment } from "react/jsx-runtime";
import UploadImageButton from "../Buttons/UploadImageButton";
import ItemImageManager from "../ItemImageManager";

interface ImageInputProps {
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string | null;
  handleClickUpload: () => void;
  handleClickRemoveImage: () => void;
}

const ImageInput: React.FC<ImageInputProps> = ({
  fileInputRef,
  handleImageChange,
  imagePreview,
  handleClickUpload,
  handleClickRemoveImage,
}) => {
  return (
    <Fragment>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleImageChange}
        className="hidden"
      />

      {!imagePreview ? (
        <UploadImageButton onClick={handleClickUpload} />
      ) : (
        <ItemImageManager
          imagePreview={imagePreview}
          onClickChangeImageButton={handleClickUpload}
          onClickRemoveImageButton={handleClickRemoveImage}
        />
      )}
    </Fragment>
  );
};

export default ImageInput;
