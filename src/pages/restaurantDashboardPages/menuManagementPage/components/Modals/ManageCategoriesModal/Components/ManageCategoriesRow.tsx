import MoreVerticalButton from "./Buttons/MoreVerticalButton";
import RenameButton from "./Buttons/RenameButton";
import TrashButton from "./Buttons/TrashButton";

type Category = {
  categoryId: string;
  name: string;
};

interface ManageCategoriesRowProps {
  category: Category;
  openMenuId: string | null;
  onClickMore: () => void;
  onClickRename: () => void;
  onClickDelete: () => void;
}

const ManageCategoriesRow: React.FC<ManageCategoriesRowProps> = ({
  category,
  openMenuId,
  onClickMore,
  onClickRename,
  onClickDelete,
}) => {
  return (
    <div
      key={category.categoryId}
      className={`
        relative
        flex
        h-12
        items-center
        justify-between
        rounded-xl
        border
        border-gray-200
        px-4
        `}
    >
      <div className="flex items-center gap-3">
        <span className="text-gray-300">⋮⋮</span>

        <span className="text-sm font-medium text-gray-900">
          {category.name}
        </span>
      </div>

      <MoreVerticalButton onClick={onClickMore} />

      {openMenuId === category.categoryId && (
        <div
          className="
        absolute
        right-3
        top-10
        z-20
        w-[140px]
        rounded-xl
        border
        border-gray-200
        bg-white
        p-1.5
        shadow-lg
      "
        >
          <RenameButton onClick={onClickRename} />
          <TrashButton onClick={onClickDelete} />
        </div>
      )}
    </div>
  );
};

export default ManageCategoriesRow;
