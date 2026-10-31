import { useMenuModalContext } from "../MenuTable/context/useMenuModalContext";
import AddItemButton from "./AddItemButton";

export const MenuPageHeader = () => {
  const { openAddMenuModal } = useMenuModalContext();
  return (
    <header className="flex justify-between h-10">
      <h1 className="text-[24px] font-bold tracking-[-0.5px] text-gray-950">
        Menu
      </h1>
      <AddItemButton onClick={openAddMenuModal} />
    </header>
  );
};
