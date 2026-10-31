import CloseButton from "../../shared/CloseButton";

interface CategoriesModalHeaderProps {
  onClose: () => void;
}

const CategoriesModalHeader: React.FC<CategoriesModalHeaderProps> = ({
  onClose,
}) => {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h2 className="text-xl font-bold text-gray-950">Manage categories</h2>
        <p className="mt-1 text-sm text-gray-500">
          Organize your menu categories.
        </p>
      </div>
      <CloseButton onClick={onClose} />
    </div>
  );
};

export default CategoriesModalHeader;
