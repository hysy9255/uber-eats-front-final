interface CheckoutButtonProps {
  onCheckOut: () => void;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ onCheckOut }) => {
  return (
    <button
      onClick={onCheckOut}
      className="
        bg-green-700 hover:bg-green-800 active:bg-green-900 
        hover:cursor-pointer rounded-md
        text-white text-sm font-medium py-3 w-full"
    >
      CHECKOUT
    </button>
  );
};

export default CheckoutButton;
