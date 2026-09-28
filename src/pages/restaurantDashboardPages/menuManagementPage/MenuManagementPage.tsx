import { AddMenuItemModal } from "./components/Modals/AddMenuItemModal/AddMenuItemModal";
import { tabs } from "./constants/tabs";
import { EditMenuItemModal } from "./components/Modals/EditMenuItemModal/EditMenuItemModal";
import { ManageCategoriesModal } from "./components/Modals/ManageCategoriesModal/ManageCategoriesModal";
import OwnerMenuPageHeader from "./components/OwnerMenuPageHeader/OwnerMenuPageHeader";
import MenuToolBar from "./components/MenuToolBar/MenuToolBar";
import MenuTabs from "./components/MenuTabs/MenuTabs";
import MenuTable from "./components/MenuTable/MenuTable";
import { useMenuManagementPage } from "./useMenuManagementPage";

const MenuManagementPage = () => {
  const {
    // data
    categories,
    displayItems,
    menu,

    // filters
    currentTab,
    setCurrentTab,

    currentCategory,
    setCurrentCategory,

    searchTerm,
    setSearchTerm,

    // add modal
    addMenuItemModalOpen,
    openAddMenuItemModal,
    closeAddMenuItemModal,

    // manage categories modal
    isManageCategoriesOpen,
    openManageCategoriesModal,
    closeManageCategoriesModal,

    // edit modal
    targetEditMenuItem,
    openEditMenuItemModal,
    closeEditMenuItemModal,

    // reload
    loadMenu,
    loadCategories,

    // dropdowns
    selectedSortOption,
    setSelectedSortOption,
  } = useMenuManagementPage();

  return (
    <div className="min-h-screen bg-[#fafafa] px-6 py-5">
      {/* Header */}
      <OwnerMenuPageHeader onClickAddItemButton={openAddMenuItemModal} />

      {/* Tabs */}
      <MenuTabs
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        menu={menu}
      />

      {/* Search + filters */}
      <MenuToolBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        categories={categories}
        onClickManageCategoriesButton={openManageCategoriesModal}
        selectedSortOption={selectedSortOption}
        setSelectedSortOption={setSelectedSortOption}
      />

      {/* Table */}
      <MenuTable
        menuItems={displayItems}
        loadMenu={loadMenu}
        openEditMenuItemModal={openEditMenuItemModal}
      />

      {targetEditMenuItem && (
        <EditMenuItemModal
          menuItem={targetEditMenuItem}
          onClose={closeEditMenuItemModal}
          loadMenu={loadMenu}
        />
      )}
      {addMenuItemModalOpen && (
        <AddMenuItemModal
          categories={categories}
          onClose={closeAddMenuItemModal}
          loadMenu={loadMenu}
        />
      )}
      {isManageCategoriesOpen && (
        <ManageCategoriesModal
          onClose={closeManageCategoriesModal}
          loadCategories={loadCategories}
          categories={categories}
        />
      )}
    </div>
  );
};

export default MenuManagementPage;
