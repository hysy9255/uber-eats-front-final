import { ClientOrderView } from "../../types/clientOrderView.enum";
import TabButton from "./TabButton";

interface OrderHistoryTabProps {
  currentTab: ClientOrderView;
  handleClickTab: (tab: ClientOrderView) => void;
  ongoingCount: number;
  completedCount: number;
}

const OrderHistoryTab = ({
  currentTab,
  handleClickTab,
  ongoingCount = 0,
  completedCount = 0,
}: OrderHistoryTabProps) => {
  return (
    <div className="flex w-full max-w-[520px] rounded-full bg-gray-100 p-1 ">
      <TabButton
        onClickTab={() => handleClickTab(ClientOrderView.ONGOING)}
        title="Ongoing"
        onGoingCount={ongoingCount}
        selected={currentTab === ClientOrderView.ONGOING}
        selectedCss1="bg-white text-black shadow-sm ring-1 ring-orange-300"
        selectedCss2="bg-orange-100 text-orange-600"
      />
      <TabButton
        onClickTab={() => handleClickTab(ClientOrderView.COMPLETED)}
        title="Completed"
        onGoingCount={completedCount}
        selected={currentTab === ClientOrderView.COMPLETED}
        selectedCss1="bg-white text-black shadow-sm ring-1 ring-green-300"
        selectedCss2="bg-green-100 text-green-600"
      />
    </div>
  );
};

export default OrderHistoryTab;
