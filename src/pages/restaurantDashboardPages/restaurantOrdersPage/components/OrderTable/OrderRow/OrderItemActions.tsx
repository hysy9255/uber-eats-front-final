import { useRef, useState } from "react";
import { MoreVerticalButton } from "../../../../MenuManagementPage/components/shared/MoreVerticalButton";
import type { OrderStatus } from "../../../types/orderStatus.enum";
import OrderMoreMenu from "./OrderMoreMenu/OrderMoreMenu";

interface OrderItemActionsProps {
  orderStatus: OrderStatus;
  isMoreMenuOpen: boolean;
  onClickMoreButton: () => void;
  openOrderDetailModal: () => void;
  handleAcceptOrder: () => void;
  handleMarkOrderReady: () => void;
  handleMarkOrderDelivering: () => void;
  handleMarkOrderDelivered: () => void;
  onToggleDropdown: () => void;
}

const OrderItemActions: React.FC<OrderItemActionsProps> = ({
  orderStatus,
  isMoreMenuOpen,
  openOrderDetailModal,
  handleAcceptOrder,
  handleMarkOrderReady,
  handleMarkOrderDelivering,
  handleMarkOrderDelivered,
  onToggleDropdown,
}) => {
  const moreButtonRef = useRef<HTMLButtonElement>(null);
  const [isDropdownUpward, setIsDropdownUpward] = useState(false);

  const updateDropdownDirection = () => {
    const button = moreButtonRef.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const dropdownHeight = 180;
    const gap = 8;
    const spaceBelow = window.innerHeight - rect.bottom;

    setIsDropdownUpward(spaceBelow < dropdownHeight + gap);
  };

  const handleToggleDropdown = () => {
    onToggleDropdown();
    updateDropdownDirection();
  };

  return (
    <>
      <MoreVerticalButton ref={moreButtonRef} onClick={handleToggleDropdown} />
      {isMoreMenuOpen && (
        <OrderMoreMenu
          openUpward={isDropdownUpward}
          status={orderStatus}
          onView={openOrderDetailModal}
          onAccept={handleAcceptOrder}
          onMarkReady={handleMarkOrderReady}
          onStartDelivery={handleMarkOrderDelivering}
          onMarkDelivered={handleMarkOrderDelivered}
          onCancel={() => {}}
          onPrint={() => {}}
        />
      )}
    </>
  );
};

export default OrderItemActions;
