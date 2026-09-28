import type { OwnerDishSummaryDTO } from "../../api/dish/getOwnerDishSummaries/ownerDishSummary.dto";
import type { MenuTab, TabType } from "../../constants/tabs";
import TabButton from "./TabButton";

interface MenuTabsProps {
  tabs: TabType[];
  currentTab: MenuTab;
  setCurrentTab: (value: MenuTab) => void;
  menu: OwnerDishSummaryDTO[];
}

const MenuTabs: React.FC<MenuTabsProps> = ({
  tabs,
  currentTab,
  setCurrentTab,
  menu,
}) => {
  return (
    <div className="mt-5 border-b border-gray-200">
      <div className="flex items-center gap-8">
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
              tab={tab}
              onClick={() => setCurrentTab(tab.key)}
              selected={selected}
              count={count}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuTabs;
