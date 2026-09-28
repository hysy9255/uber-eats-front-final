import CloseButton from "../../../Shared/CloseButton";

interface AddMenuItemModalHeaderProps {
  onClickClose: () => void;
}

const AddMenuItemModalHeader: React.FC<AddMenuItemModalHeaderProps> = ({
  onClickClose,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold text-gray-950">Add menu item</h2>

        <p className="mt-1 text-sm text-gray-500">
          Add a new item to your restaurant menu.
        </p>
      </div>

      <CloseButton onClick={onClickClose} />
    </div>
  );
};

export default AddMenuItemModalHeader;
