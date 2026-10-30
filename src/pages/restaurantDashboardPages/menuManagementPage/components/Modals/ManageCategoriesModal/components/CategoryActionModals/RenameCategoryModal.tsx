import { useForm } from "react-hook-form";
import CancelButton from "../../../../shared/components/CancelButton";
import type { EditCategoryForm } from "../../types/edit-category-form.types";
import SaveButton from "../../../../shared/components/SaveButton";
import { useEffect } from "react";
import { useCategoryMutations } from "../../hooks/useCategoryMutations";
import { useCategoriesModalContext } from "../../context/useCategoriesModal";

export const RenameCategoryModal = () => {
  const { categoryToEdit, closeEditModal } = useCategoriesModalContext();
  const { editCategory } = useCategoryMutations();

  const {
    register,
    reset,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<EditCategoryForm>({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    reset({
      categoryId: categoryToEdit?.categoryId,
      newCategoryName: categoryToEdit?.name,
    });
  }, [categoryToEdit, reset]);

  const handleEditCategory = (data: EditCategoryForm) => {
    editCategory(data);
    closeEditModal();
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20" />
      <div
        className="
          relative
          z-10
          w-full
          max-w-[360px]
          rounded-2xl
          bg-white
          p-6
          shadow-2xl
        "
      >
        <h3 className="text-lg font-bold text-gray-950">Rename category</h3>

        <label className="mt-5 block text-sm font-medium text-gray-700">
          Category name
        </label>

        <input
          {...register("newCategoryName", { required: true })}
          autoFocus
          className="
              mt-2
              h-10
              w-full
              rounded-lg
              border
              border-gray-200
              px-3
              text-sm
              outline-none
              focus:border-green-500
            "
        />

        <div className="mt-6 flex justify-end gap-2">
          <CancelButton onClick={closeEditModal} />
          <SaveButton
            onClick={handleSubmit(handleEditCategory)}
            disabled={!isValid || !isDirty}
          />
        </div>
      </div>
    </div>
  );
};
