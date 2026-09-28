import { OrderStatus } from "../../types/orderStatus.enum";
import type { OrderTab } from "./orderTab.type";
import type { GetOrderForOwnerDTO } from "@/api/order/dto/get-order-for-owner.dto";

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
  orders: GetOrderForOwnerDTO[];
}

const OrderTabs: React.FC<OrderTabsProps> = ({
  currentTab,
  setCurrentTab,
  orders,
}) => {
  return (
    <div className="mt-5 border-b border-gray-200 ">
      <div className="flex items-center gap-8">
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
            <button
              key={tab.key}
              onClick={() => setCurrentTab(tab.key)}
              className={`
            relative
            h-11
            flex items-center gap-2
            hover:cursor-pointer
            text-sm font-medium
            ${selected ? "text-green-700" : "text-gray-500 hover:text-gray-800"}
          `}
            >
              {tab.label}

              {count !== 0 && (
                <span
                  className={`
                min-w-5 h-5
                rounded-full
                px-1.5
                flex items-center justify-center
                text-[10px]
                font-semibold
                ${
                  selected
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-500"
                }
              `}
                >
                  {count}
                </span>
              )}

              {selected && (
                <span className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full bg-green-600" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTabs;
