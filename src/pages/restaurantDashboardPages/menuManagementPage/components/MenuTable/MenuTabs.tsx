import { tabs } from "../../constants/tabs";
import { useMenuManagement } from "../../context/useMenuManagement";
import TabButton from "../../../../../shared/components/TabButton";

interface MenuTabsProps {
  className?: string;
}

const MenuTabs: React.FC<MenuTabsProps> = ({ className }) => {
  const {
    menuList: { currentTab, setCurrentTab, displayMenus: menu },
  } = useMenuManagement();
  return (
    <div className={`${className} flex h-10 gap-8 border-b border-gray-200`}>
      {tabs.map((tab) => {
        const selected = currentTab === tab.key;

        const count = menu.reduce((acc, item) => {
          if (tab.key === "all") {
            acc += 1;
          }
          if (tab.key === "active" && item.isAvailable) {
            acc += 1;
          }
          if (tab.key === "inactive" && !item.isAvailable) {
            acc += 1;
          }
          return acc;
        }, 0);

        return (
          <TabButton
            key={tab.label}
            label={tab.label}
            onClick={() => setCurrentTab(tab.key)}
            selected={selected}
            count={count}
          />
        );
      })}
    </div>
  );
};

export default MenuTabs;
