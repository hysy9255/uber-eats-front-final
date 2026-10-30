import TabButton from "../../../../../shared/components/TabButton";
import type { RestaurantOrderSummaryDTO } from "../../api/getRestaurantOrderSummaries/restaurantOrderSummary.dto";
import { OrderStatus } from "../../types/orderStatus.enum";
import type { OrderTab } from "./orderTab.type";

const tabs: {
  key: OrderTab;
  label: string;
  count?: number;
}[] = [
  {
    key: "all",
    label: "All orders",
  },
  {
    key: OrderStatus.Pending,
    label: "Pending",
  },
  {
    key: OrderStatus.Cooking,
    label: "Cooking",
  },
  {
    key: OrderStatus.Ready,
    label: "Ready",
  },
  {
    key: OrderStatus.Delivering,
    label: "Deliverying",
  },
  {
    key: OrderStatus.Delivered,
    label: "Delivered",
  },
];

interface OrderTabsProps {
  currentTab: OrderTab;
  setCurrentTab: (value: OrderTab) => void;
  orders: RestaurantOrderSummaryDTO[];
  className?: string;
}

const OrderTabs: React.FC<OrderTabsProps> = ({
  currentTab,
  setCurrentTab,
  orders,
  className,
}) => {
  return (
    <div className={`${className} flex h-10 gap-8 border-b border-gray-200 `}>
      {tabs.map((tab) => {
        const selected = currentTab === tab.key;

        const count = orders.reduce((acc, cur) => {
          if (tab.key === "all") {
            return acc + 1;
          }
          if (cur.status === tab.key) {
            return acc + 1;
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

export default OrderTabs;
