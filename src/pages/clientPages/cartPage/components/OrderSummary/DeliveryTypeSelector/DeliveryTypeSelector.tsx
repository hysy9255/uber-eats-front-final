import type { DeliveryType } from "../../../../clientOrdersPage/types/deliveryType.enum";
import RoundCheckBox from "./RoundCheckBox";

interface DeliveryTypeSelectorProps {
  onClick: () => void;
  deliveryTypeState: DeliveryType;
  assignedDeliveryType: DeliveryType;
  cost: string;
  eta: string;
  title: string;
}

const DeliveryTypeSelector: React.FC<DeliveryTypeSelectorProps> = ({
  onClick,
  deliveryTypeState,
  assignedDeliveryType,
  cost,
  eta,
  title,
}) => {
  return (
    <div
      className={`
        
        hover:cursor-pointer border-2  
        grid grid-cols-[auto_1fr_auto]
        gap-x-3
        items-center
        rounded-md px-3 py-2 ${
          deliveryTypeState === assignedDeliveryType
            ? "border-green-400 bg-green-200/20"
            : "border-gray-200 bg-white"
        }`}
      onClick={onClick}
    >
      <RoundCheckBox isChecked={deliveryTypeState === assignedDeliveryType} />
      <div>
        <div className="text-black">{title}</div>
        <div className="font-normal">{eta}</div>
      </div>
      <div>{cost}</div>
    </div>
  );
};

export default DeliveryTypeSelector;
