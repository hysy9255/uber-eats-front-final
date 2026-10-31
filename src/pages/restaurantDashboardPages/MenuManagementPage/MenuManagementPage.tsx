import MenuToolBar from "./components/MenuToolBar/MenuToolBar";
import MenuTabs from "./components/MenuTable/MenuTabs";
import MenuTable from "./components/MenuTable/MenuTable";
import { useMenuManagement } from "./context/useMenuManagement";
import Toast from "../../clientPages/shared/components/Toast";
import { MenuPageHeader } from "./components/OwnerMenuPageHeader/OwnerMenuPageHeader";
import { MenuActionModals } from "./MenuActionModals/MenuActionModals";

const MenuManagementPage = () => {
  const { successMessage } = useMenuManagement();

  return (
    <div className="h-dvh bg-[#fafafa] px-6 py-5 flex flex-col">
      <MenuPageHeader />
      <MenuTabs className="mt-5" />
      <MenuToolBar className="mt-5" />
      <MenuTable className="mt-5 flex-1 overflow-y-auto" />
      <MenuActionModals />
      {successMessage.show && (
        <Toast
          message={successMessage.message}
          onClose={() =>
            successMessage.setSuccessMessage({ show: false, message: "" })
          }
        />
      )}
    </div>
  );
};

export default MenuManagementPage;
