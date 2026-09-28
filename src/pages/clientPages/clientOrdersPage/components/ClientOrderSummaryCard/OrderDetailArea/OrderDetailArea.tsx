import { OrderDetailViewType, useOrderDetailArea } from "./useOrderDetailArea";
import OrderManagementArea from "./OrderManagementArea/OrderManagementArea";
import DeliveryTrackingButton from "./DeliveryTrackingButton";
import OrderManagementButton from "./OrderManagementButton";
import AddToCartButton from "./AddToCartButton";
import OrderSummaryCard from "./OrderSummaryCard";
import OrderItemRow from "./OrderItemRow";
import OrderTracker from "./OrderTracker";
import OrderDetailHeader from "./OrderDetailHeader";
import type { ClientOrderDetailDTO } from "../../../api/getClientOrderDetail/clientOrderDetail.dto";
import CartErrorModal from "./CartErrorModal";
import Toast from "../../../../shared/components/Toast";

interface OrderDetailAreaProps {
  orderDetail: ClientOrderDetailDTO;
}

const OrderDetailArea: React.FC<OrderDetailAreaProps> = ({
  orderDetail: order,
}) => {
  const {
    orderDetailView,
    handleAddItemsToCart,
    showCartToast,
    addToCartError,
    handleCancelCartError,
    handleClickAddAnyway,
    handleClickDeliveryTracking,
    handleClickOrderManagement,
  } = useOrderDetailArea(order);

  return (
    <div
      className="
      mt-[var(--y-padding)]
      flex gap-x-2
    "
    >
      <div
        className=" rounded-2xl
        border border-gray-200
        bg-white
        p-4 flex flex-col flex-[2]"
      >
        <OrderDetailHeader order={order} />
        <div className="flex gap-x-1">
          <DeliveryTrackingButton
            onClickDeliveryTracking={handleClickDeliveryTracking}
            selected={orderDetailView === OrderDetailViewType.ORDER_TRACKING}
          />
          <OrderManagementButton
            onClickOrderManagement={handleClickOrderManagement}
            selected={orderDetailView === OrderDetailViewType.ORDER_MANAGEMENT}
          />
          <AddToCartButton onAddToCart={handleAddItemsToCart} />
        </div>
        {orderDetailView === OrderDetailViewType.ORDER_TRACKING ? (
          <OrderTracker status={order.status} />
        ) : (
          <OrderManagementArea
            request={order.requestToRestaurant}
            address={order.deliveryTo}
            paymentMethod="Visa •••• 4242"
            onClickCancel={() => {}}
            onClickRestaurant={() => {}}
            onClickReport={() => {}}
            onClickHelp={() => {}}
            onClickMap={() => {}}
          />
        )}

        {order.orderItems.map((item, index) => (
          <div
            className={`flex border-t border-gray-200 ${
              index + 1 === order.orderItems.length && "border-b"
            }`}
          >
            <OrderItemRow orderItem={item} />
          </div>
        ))}
      </div>
      <OrderSummaryCard order={order} />
      {showCartToast && <Toast message="Item added to cart" />}
      {addToCartError && (
        <CartErrorModal
          onClickCancel={handleCancelCartError}
          onClickAddAnyway={handleClickAddAnyway}
        />
      )}
    </div>
  );
};

export default OrderDetailArea;
