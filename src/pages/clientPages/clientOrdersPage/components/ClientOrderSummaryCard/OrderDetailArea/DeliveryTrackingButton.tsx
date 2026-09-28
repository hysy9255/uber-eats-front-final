interface DeliveryTrackingButtonProps {
  onClickDeliveryTracking: () => void;
  selected: boolean;
}

const DeliveryTrackingButton: React.FC<DeliveryTrackingButtonProps> = ({
  onClickDeliveryTracking,
  selected,
}) => {
  return (
    <button
      onClick={onClickDeliveryTracking}
      className={`border ${
        selected ? "border-green-500 text-green-500" : "border-gray-300"
      } rounded-md text-xs py-1 flex-1 hover:cursor-pointer`}
    >
      Delivery Tracking
    </button>
  );
};

export default DeliveryTrackingButton;
