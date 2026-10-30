import DeleteModal from "../../../../shared/components/DeleteModal/DeleteModal";
import { useCategoriesModalContext } from "../../context/useCategoriesModal";
import { useCategoryMutations } from "../../hooks/useCategoryMutations";
import { RenameCategoryModal } from "./RenameCategoryModal";

const CategoryActionModals = () => {
  const { deleteCategory } = useCategoryMutations();
  const {
    isEditModalOpen,
    isDeleteModalOpen,
    closeDeleteModal,
    categoryToDelete,
  } = useCategoriesModalContext();

  const handleDeleteCategory = () => {
    if (!categoryToDelete) throw new Error("No Category to delete");
    deleteCategory(categoryToDelete);
    closeDeleteModal();
  };

  return (
    <>
      {isEditModalOpen && <RenameCategoryModal />}

      {isDeleteModalOpen && (
        <DeleteModal
          label="Delete category"
          thingToDelete={categoryToDelete?.name ?? ""}
          onDelete={handleDeleteCategory}
          onClose={closeDeleteModal}
        />
      )}
    </>
  );
};

export default CategoryActionModals;
