import CloseButton from "../../../shared/components/CloseButton";

interface AddMenuModalHeaderProps {
  onCloseAddMenuModal: () => void;
}

export const AddMenuModalHeader: React.FC<AddMenuModalHeaderProps> = ({
  onCloseAddMenuModal,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold text-gray-950">Add menu item</h2>

        <p className="mt-1 text-sm text-gray-500">
          Add a new item to your restaurant menu.
        </p>
      </div>

      <CloseButton onClick={onCloseAddMenuModal} />
    </div>
  );
};
