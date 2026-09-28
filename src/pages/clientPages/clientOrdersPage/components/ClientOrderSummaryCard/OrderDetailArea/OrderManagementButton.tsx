interface OrderManagementButtonProps {
  onClickOrderManagement: () => void;
  selected: boolean;
}

const OrderManagementButton: React.FC<OrderManagementButtonProps> = ({
  onClickOrderManagement,
  selected,
}) => {
  return (
    <button
      onClick={onClickOrderManagement}
      className={`border ${
        selected ? "border-green-500 text-green-500" : "border-gray-300"
      }  border-gray-300 rounded-md text-xs py-1 flex-1 hover:cursor-pointer`}
    >
      Order Management
    </button>
  );
};

export default OrderManagementButton;
