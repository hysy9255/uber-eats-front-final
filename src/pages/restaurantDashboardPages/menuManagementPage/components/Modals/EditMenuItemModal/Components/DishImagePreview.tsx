interface DishImagePreviewProps {
  imagePreview: string;
}

const DishImagePreview: React.FC<DishImagePreviewProps> = ({
  imagePreview,
}) => {
  return (
    <img
      src={imagePreview}
      alt="menu preview"
      className="
        w-[100px]
        h-[100px]
        rounded-xl
        object-cover
        border
        border-gray-200
        "
    />
  );
};

export default DishImagePreview;
