import { useMenuMutation } from "../components/MenuTable/components/MenuTableRow/components/MenuItemActions/hooks/useMenuMutation";
import { useMenuModalContext } from "../components/MenuTable/context/useMenuModalContext";
import { AddMenuModal } from "../components/Modals/AddMenuIModal/AddMenuIModal";
import { EditMenuModal } from "../components/Modals/EditMenuModal/EditMenuModal";
import { ManageCategoriesModal } from "../components/Modals/ManageCategoriesModal/ManageCategoriesModal";
import DeleteModal from "../components/shared/components/DeleteModal/DeleteModal";

export const MenuActionModals = () => {
  const {
    isAddMenuModalOpen,
    isDeleteMenuModalOpen,
    isEditMenuModalOpen,
    menuToDelete,
    closeDeleteMenuModal,
    isCategoriesModalOpen,
    closeCategoriesModal,
  } = useMenuModalContext();

  const { deleteMenuItem } = useMenuMutation();

  const handleDelete = async () => {
    if (!menuToDelete) throw new Error("No Item to delete");
    await deleteMenuItem(menuToDelete);
    closeDeleteMenuModal();
  };

  return (
    <>
      {isAddMenuModalOpen && <AddMenuModal />}
      {isEditMenuModalOpen && <EditMenuModal />}
      {isDeleteMenuModalOpen && (
        <DeleteModal
          label="Delete menu"
          thingToDelete={menuToDelete?.name ?? ""}
          onClose={closeDeleteMenuModal}
          onDelete={handleDelete}
        />
      )}
      {isCategoriesModalOpen && (
        <ManageCategoriesModal onClose={closeCategoriesModal} />
      )}
    </>
  );
};
