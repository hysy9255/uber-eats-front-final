import { MapPin } from "lucide-react";

const NoDeliveryAddresses = () => {
  return (
    <div
      className="
    flex flex-col
    items-center justify-center
    py-16
    text-center
  "
    >
      <div
        className="
      flex h-14 w-14
      items-center justify-center
      rounded-full
      bg-gray-100
      text-gray-400
    "
      >
        <MapPin className="h-6 w-6" />
      </div>

      <h3 className="mt-4 font-semibold text-gray-900">
        No delivery addresses
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        Add an address to start ordering.
      </p>
    </div>
  );
};

export default NoDeliveryAddresses;
