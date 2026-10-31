const ModalFooter = () => {
  return (
    <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
      <div className="text-sm font-semibold text-gray-800">
        What does this mean?
      </div>

      <ul className="mt-2 space-y-1 text-xs leading-5 text-gray-500">
        <li>• Open: Customers can place new orders as usual.</li>

        <li>
          • Pause: New orders are stopped, but current orders can still be
          managed.
        </li>

        <li>• Closed: The restaurant is not accepting new orders.</li>
      </ul>
    </div>
  );
};

export default ModalFooter;
