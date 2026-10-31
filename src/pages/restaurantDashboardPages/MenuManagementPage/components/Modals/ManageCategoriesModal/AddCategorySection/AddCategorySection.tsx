import { useForm } from "react-hook-form";
import CancelButton from "../../../shared/CancelButton";
import type { AddCategoryForm } from "../types/add-category-form.types";
import SaveButton from "../../../shared/SaveButton";
import AddCategoryModalOpenButton from "./AddCategoryModalOpenButton";
import { useCategoriesModalContext } from "../context/useCategoriesModal";
import { useCategoryMutations } from "../hooks/useCategoryMutations";

const AddCategorySection = () => {
  const { addCategory } = useCategoryMutations();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<AddCategoryForm>({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const { isAddModalOpen, openAddModal, closeAddModal } =
    useCategoriesModalContext();

  const handleAddCategory = (data: AddCategoryForm) => {
    addCategory(data);
    closeAddModal();
    reset();
  };

  const handleCancel = () => {
    closeAddModal();
    reset();
  };

  return (
    <>
      {" "}
      {isAddModalOpen ? (
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
          <label className="text-sm font-medium text-gray-800">
            Category name
          </label>

          <input
            {...register("categoryName", { required: true })}
            autoFocus
            placeholder="e.g. Appetizers"
            className="
              mt-2
              h-10
              w-full
              rounded-lg
              border
              border-gray-200
              bg-white
              px-3
              text-sm
              outline-none
              focus:border-green-500
              "
          />

          <div className="mt-4 flex justify-end gap-2">
            <CancelButton onClick={handleCancel} />
            <SaveButton
              onClick={handleSubmit(handleAddCategory)}
              label="Add Category"
              disabled={!isValid}
            />
          </div>
        </div>
      ) : (
        <AddCategoryModalOpenButton onClick={openAddModal} />
      )}
    </>
  );
};

export default AddCategorySection;
