import { MapPin, Clock, User } from "lucide-react";
import { createPortal } from "react-dom";
import { capitalizeWords } from "../../../../../../../shared/utils/capitalizeWords";
import { OrderStatusBadge } from "./OrderStatusBadge";
import { InfoBox } from "./InfoBox";
import XButton from "./XButton";
import type { RestaurantOrderDetailDTO } from "../../../../api/getRestaurantOrderDetail/restaurantOrderDetail.dto";
import { getToken } from "../../../../../../../shared/utils/getToken";
import { useCallback, useEffect, useState } from "react";
import { getRestaurantOrderDetail } from "../../../../api/getRestaurantOrderDetail/getRestaurantOrderDetail";

interface OrderDetailModalProps {
  targetOrderId: string;
  onClose: () => void;
}

const OrderDetailModal = ({
  targetOrderId,
  onClose,
}: OrderDetailModalProps) => {
  const [orderDetail, setOrderDetail] =
    useState<RestaurantOrderDetailDTO | null>(null);

  const loadTargetOrderDetail = useCallback(async () => {
    const token = getToken();
    if (!token) throw new Error("No Token Found");
    try {
      const orderDetailData = await getRestaurantOrderDetail(
        token,
        targetOrderId
      );

      setOrderDetail(orderDetailData);
    } catch (e) {
      console.error(e);
      throw new Error("Error loading order detail");
    }
  }, [targetOrderId]);

  useEffect(() => {
    loadTargetOrderDetail();
  }, [loadTargetOrderDetail]);

  if (!orderDetail) return;

  const order = orderDetail;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div
        className="
          relative
          z-10
          w-full
          max-w-[620px]
          rounded-2xl
          bg-white
          p-6
          shadow-2xl
        "
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-gray-950">
                Order #{order.orderId.split("-")[0]}
              </h2>

              <OrderStatusBadge status={order.status} />
            </div>

            <p className="mt-1 text-sm text-gray-500">
              View order details and customer information.
            </p>
          </div>

          <XButton onClick={onClose} />
        </div>

        {/* Basic info */}
        <div
          className="
            mt-6
            grid
            grid-cols-2
            gap-3
          "
        >
          <InfoBox
            icon={<User className="h-4 w-4" />}
            label="Customer"
            value={capitalizeWords(order.client)}
          />

          <InfoBox
            icon={<Clock className="h-4 w-4" />}
            label="Order time"
            value={new Date(order.orderedAt).toLocaleString()}
          />
        </div>

        {/* Items */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-900">Items</h3>
          <div
            className="
              mt-3
              max-h-[200px]
              overflow-y-auto
              divide-y
              divide-gray-100
              rounded-xl
              border
              border-gray-200
            "
          >
            {order.orderItems.map((item, index) => (
              <div
                key={`${item.dishName}-${index}`}
                className="
                  flex
                  items-center
                  justify-between
                  px-4
                  py-3
                "
              >
                <div>
                  <span className="text-sm font-medium text-gray-900">
                    {capitalizeWords(item.dishName)}
                  </span>

                  <span className="ml-2 text-sm text-gray-500">
                    x{item.quantity}
                  </span>
                </div>

                {
                  <span className="text-sm font-medium text-gray-700">
                    ${(item.unitPrice * item.quantity).toFixed(2)}
                  </span>
                }
              </div>
            ))}
          </div>
        </div>

        {/* Delivery */}
        {order.deliveryTo && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-900">Delivery</h3>

            <div
              className="
                mt-3
                flex
                gap-3
                rounded-xl
                border
                border-gray-200
                bg-gray-50
                p-4
              "
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-500" />

              <span className="text-sm text-gray-700">{order.deliveryTo}</span>
            </div>
          </div>
        )}

        {/* Restaurant request */}
        {order.requestToRestaurant && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-900">
              Customer note
            </h3>

            <div
              className="
                mt-3
                rounded-xl
                border
                border-gray-200
                bg-gray-50
                p-4
                text-sm
                text-gray-700
              "
            >
              {order.requestToRestaurant}
            </div>
          </div>
        )}

        {/* Total */}
        <div
          className="
            mt-6
            flex
            items-center
            justify-between
            border-t
            border-gray-200
            pt-5
          "
        >
          <span className="text-base font-semibold text-gray-900">Total</span>

          <span className="text-xl font-bold text-gray-950">
            ${order.totalPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default OrderDetailModal;
