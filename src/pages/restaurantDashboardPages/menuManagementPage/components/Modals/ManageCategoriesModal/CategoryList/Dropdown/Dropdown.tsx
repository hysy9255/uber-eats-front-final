import RenameButton from "./RenameButton";
import TrashButton from "./TrashButton";

interface DropdownProps {
  isOpenUpward: boolean;
  onClickRename: () => void;
  onClickDelete: () => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  isOpenUpward,
  onClickRename,
  onClickDelete,
}) => {
  return (
    <div
      className={`
        absolute
        right-full
        mr-1
        z-30
        w-[140px]
        rounded-xl
        border
        border-gray-200
        bg-white
        p-1.5
        shadow-lg
        ${isOpenUpward ? "bottom-0" : "top-0"}
      `}
    >
      <RenameButton onClick={onClickRename} />
      <TrashButton onClick={onClickDelete} />
    </div>
  );
};
