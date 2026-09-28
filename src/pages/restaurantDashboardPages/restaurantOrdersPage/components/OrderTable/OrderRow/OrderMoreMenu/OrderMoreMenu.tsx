import {
  Eye,
  Check,
  ChefHat,
  Truck,
  PackageCheck,
  XCircle,
  Printer,
} from "lucide-react";
import { MenuButton } from "./MenuButton";
import { OrderStatus } from "../../../../types/orderStatus.enum";

interface OrderMoreMenuProps {
  status: OrderStatus;
  openUpward: boolean;

  onView: () => void;
  onAccept: () => void;
  onMarkReady: () => void;
  onStartDelivery: () => void;
  onMarkDelivered: () => void;
  onCancel: () => void;
  onPrint: () => void;
}

const OrderMoreMenu = ({
  status,
  openUpward,
  onView,
  onAccept,
  onMarkReady,
  onStartDelivery,
  onMarkDelivered,
  onCancel,
  onPrint,
}: OrderMoreMenuProps) => {
  return (
    <div
      className={`
        absolute
        right-2
        z-50
        w-[205px]
        rounded-xl
        border
        border-gray-200
        bg-white
        p-1.5
        shadow-xl
        ${openUpward ? "bottom-full mb-1" : "top-full mt-1"}
      `}
    >
      <MenuButton
        icon={<Eye className="h-4 w-4" />}
        label="View order"
        onClick={onView}
      />

      {status === OrderStatus.Pending && (
        <MenuButton
          icon={<ChefHat className="h-4 w-4" />}
          label="Accept order"
          onClick={onAccept}
        />
      )}

      {status === OrderStatus.Cooking && (
        <MenuButton
          icon={<Check className="h-4 w-4" />}
          label="Mark as ready"
          onClick={onMarkReady}
        />
      )}

      {status === OrderStatus.Ready && (
        <MenuButton
          icon={<Truck className="h-4 w-4" />}
          label="Start delivery"
          onClick={onStartDelivery}
        />
      )}

      {status === OrderStatus.Delivering && (
        <MenuButton
          icon={<PackageCheck className="h-4 w-4" />}
          label="Mark as delivered"
          onClick={onMarkDelivered}
        />
      )}

      {status === OrderStatus.Delivered && (
        <MenuButton
          icon={<Printer className="h-4 w-4" />}
          label="Print receipt"
          onClick={onPrint}
        />
      )}

      {status !== OrderStatus.Delivered && (
        <>
          <div className="my-1 border-t border-gray-100" />

          <MenuButton
            icon={<XCircle className="h-4 w-4" />}
            label="Cancel order"
            onClick={onCancel}
            danger
          />
        </>
      )}
    </div>
  );
};

export default OrderMoreMenu;
