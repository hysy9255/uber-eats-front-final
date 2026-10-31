import CloseButton from "../../shared/CloseButton";

interface EditMenuItemModalHeaderProps {
  onClickClose: () => void;
}

const EditMenuItemModalHeader: React.FC<EditMenuItemModalHeaderProps> = ({
  onClickClose,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold text-gray-950">Edit menu item</h2>

        <p className="mt-1 text-sm text-gray-500">
          Edit the details of this menu item.
        </p>
      </div>

      <CloseButton onClick={onClickClose} />
    </div>
  );
};

export default EditMenuItemModalHeader;
