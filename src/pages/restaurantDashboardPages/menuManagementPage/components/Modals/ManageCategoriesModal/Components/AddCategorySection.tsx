import CancelButton from "../../../Shared/CancelButton";
import AddCategoryButton from "./Buttons/AddCategoryButton";
import AddNewCategoryInput from "./Inputs/AddNewCategoryInput";

interface AddCategorySectionProps {
  onClickCancel: () => void;
  onClickAddCategory: () => void;
}

const AddCategorySection: React.FC<AddCategorySectionProps> = ({
  onClickCancel,
  onClickAddCategory,
}) => {
  return (
    <div
      className="
    mt-4
    rounded-xl
    border
    border-gray-200
    bg-gray-50
    p-4
  "
    >
      <label className="text-sm font-medium text-gray-800">Category name</label>

      <AddNewCategoryInput />

      <div className="mt-4 flex justify-end gap-2">
        <CancelButton onClick={onClickCancel} />
        <AddCategoryButton onClick={onClickAddCategory} />
      </div>
    </div>
  );
};

export default AddCategorySection;
