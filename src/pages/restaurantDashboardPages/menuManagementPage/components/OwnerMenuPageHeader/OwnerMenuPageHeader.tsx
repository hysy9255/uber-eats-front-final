import AddItemButton from "./AddItemButton";

interface OwnerMenuPageHeaderProps {
  onClickAddItemButton: () => void;
}

const OwnerMenuPageHeader: React.FC<OwnerMenuPageHeaderProps> = ({
  onClickAddItemButton,
}) => {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-[24px] font-bold tracking-[-0.5px] text-gray-950">
        Menu
      </h1>

      <AddItemButton onClick={onClickAddItemButton} />
    </header>
  );
};

export default OwnerMenuPageHeader;
