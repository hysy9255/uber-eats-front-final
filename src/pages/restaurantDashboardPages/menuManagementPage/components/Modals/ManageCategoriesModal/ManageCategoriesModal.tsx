import AddCategorySection from "./components/AddCategorySection/AddCategorySection";
import CategoryList from "./components/CategoryList/CategoryList";
import CategoryActionModals from "./components/CategoryActionModals/CategoryActionModals";
import CategoriesModalHeader from "./components/CategoriesModalHeader";
import { CategoriesModalProvider } from "./context/CategoriesModalProvider";

interface ManageCategoriesModalProps {
  onClose: () => void;
}

export const ManageCategoriesModal = ({
  onClose: onCloseModal,
}: ManageCategoriesModalProps) => {
  return (
    <CategoriesModalProvider>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center">
        {/* backdrop */}
        <div className="absolute inset-0 bg-black/40" onClick={onCloseModal} />

        {/* modal */}
        <div className="relative z-10 w-full max-w-[440px] rounded-2xl bg-white p-6 shadow-2xl">
          <CategoriesModalHeader onClose={onCloseModal} />
          <CategoryList />
          <AddCategorySection />
        </div>

        <CategoryActionModals />
      </div>
    </CategoriesModalProvider>
  );
};
