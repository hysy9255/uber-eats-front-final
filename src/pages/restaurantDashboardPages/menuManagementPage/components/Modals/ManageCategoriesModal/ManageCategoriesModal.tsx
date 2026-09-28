import { useState } from "react";
import ManageCategoriesRow from "./Components/ManageCategoriesRow";
import AddCategoryPlusButton from "./Components/Buttons/AddCategoryPlusButton";
import RenameModal from "./Components/Modals/RenameModal";
import DeleteModal from "./Components/Modals/DeleteModal";
import AddCategorySection from "./Components/AddCategorySection";
import { FormProvider, useForm } from "react-hook-form";
import type { AddCategoryFormValues } from "./types/add-category-form.types";
import type { EditCategoryFormValues } from "./types/edit-category-form.types";
import type { Category } from "../../types/cateogry.type";
import CloseButton from "../../Shared/CloseButton";
import { deleteDishCategory } from "../../../api/category/deleteDishCategory";
import { editDishCategory } from "../../../api/category/editDishCategory/editDishCategory";
import { createDishCategory } from "../../../api/category/createDishCategory/createDishCategory";
import { useRestaurantDashboard } from "../../../../shared/context/useRestaurantDashboard";
import { getToken } from "../../../../../../shared/utils/getToken";

interface ManageCategoriesModalProps {
  onClose: () => void;
  loadCategories: () => void;
  categories: Category[];
}

export const ManageCategoriesModal = ({
  onClose,
  loadCategories,
  categories,
}: ManageCategoriesModalProps) => {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Category | null>(null);
  const { restaurantId } = useRestaurantDashboard();
  const addCategoryMethods = useForm<AddCategoryFormValues>({
    mode: "onSubmit",
  });
  const editCategoryMethods = useForm<EditCategoryFormValues>({
    mode: "onSubmit",
  });
  const token = getToken();

  const handleAddCategory = async (data: AddCategoryFormValues) => {
    try {
      if (!token) throw new Error("No Token!");
      if (!restaurantId) throw new Error("No Restaurant ID");
      await createDishCategory(restaurantId, token, {
        categoryName: data.categoryName,
      });
      addCategoryMethods.reset();
      loadCategories();
      setShowAddCategory(false);
    } catch (e) {
      console.error(e);
      throw new Error("Error adding category");
    }
  };

  const handleStartEdit = (category: Category) => {
    setEditingCategory(category);
    setOpenMenuId(null);
    editCategoryMethods.reset({
      newCategoryName: category.name,
    });
  };

  const handleEditCategory = async (data: EditCategoryFormValues) => {
    try {
      if (!token) throw new Error("No Token!");
      if (!restaurantId) throw new Error("No Restaurant ID");
      if (!editingCategory) return;
      await editDishCategory(restaurantId, editingCategory?.categoryId, token, {
        newCategoryName: data.newCategoryName,
      });
      editCategoryMethods.reset();
      loadCategories();
      setEditingCategory(null);
    } catch (e) {
      console.error(e);
      throw new Error("Error editing category");
    }
  };

  const handleDelete = async () => {
    try {
      if (!deleteTarget) return;
      if (!token) throw new Error("No Token!");
      if (!restaurantId) throw new Error("No Restaurant ID");
      await deleteDishCategory(restaurantId, deleteTarget.categoryId, token);
      loadCategories();
      setDeleteTarget(null);
    } catch (e) {
      console.error(e);
      throw new Error("Error deleting category");
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* modal */}
      <div
        className="relative z-10 w-full max-w-[440px] rounded-2xl bg-white p-6 shadow-2xl
        "
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-950">
              Manage categories
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Organize your menu categories.
            </p>
          </div>
          <CloseButton onClick={onClose} />
        </div>

        {/* Category List */}
        <div className="mt-6 max-h-[320px] min-h-[150px] space-y-2 overflow-y-auto pr-1">
          {categories.map((category) => (
            <ManageCategoriesRow
              category={category}
              openMenuId={openMenuId}
              onClickMore={() =>
                setOpenMenuId((current) =>
                  current === category.categoryId ? null : category.categoryId
                )
              }
              onClickRename={() => handleStartEdit(category)}
              onClickDelete={() => {
                setDeleteTarget(category);
                setOpenMenuId(null);
              }}
            />
          ))}
        </div>

        {/* Add category */}
        {!showAddCategory ? (
          <AddCategoryPlusButton onClick={() => setShowAddCategory(true)} />
        ) : (
          <FormProvider {...addCategoryMethods}>
            <AddCategorySection
              onClickCancel={() => {
                setShowAddCategory(false);
                addCategoryMethods.reset();
              }}
              onClickAddCategory={addCategoryMethods.handleSubmit(
                handleAddCategory
              )}
            />
          </FormProvider>
        )}
      </div>

      {/* Rename Modal */}
      {editingCategory && (
        <FormProvider {...editCategoryMethods}>
          <RenameModal
            onClickCancel={() => {
              editCategoryMethods.reset();
              setEditingCategory(null);
            }}
            onClickSave={editCategoryMethods.handleSubmit(handleEditCategory)}
          />
        </FormProvider>
      )}

      {/* Delete Modal */}
      {deleteTarget && (
        <DeleteModal
          deleteTarget={deleteTarget}
          onClickCancel={() => setDeleteTarget(null)}
          onClickDelete={handleDelete}
        />
      )}
    </div>
  );
};
