import { Home, MapPin } from "lucide-react";

const RightPanel = () => {
  return (
    <div
      className="
    flex
    min-h-0
    flex-col
    items-center
    justify-center
    px-7
    py-5
    text-center
  "
    >
      {/* Illustration */}

      <div
        className="
      relative
      flex
      h-[135px]
      w-[220px]
      items-center
      justify-center
    "
      >
        <div
          className="
        absolute
        bottom-3
        h-[16px]
        w-[190px]
        rounded-[50%]
        bg-green-50
      "
        />

        <div className="relative">
          <Home
            className="
          h-[68px]
          w-[68px]
          stroke-[1.4]
          text-gray-200
        "
          />

          <MapPin
            className="
          absolute
          -right-4
          -top-10
          h-[50px]
          w-[50px]
          fill-green-100
          text-green-600
        "
          />
        </div>
      </div>

      <h3 className="mt-2 text-[19px] font-bold text-gray-950">
        Add a new address
      </h3>

      <p
        className="
      mt-2
      max-w-[250px]
      text-[12px]
      leading-5
      text-gray-500
    "
      >
        Add your delivery details so we know exactly where to bring your order.
      </p>

      <div
        className="
      mt-6
      w-full
      max-w-[260px]
      rounded-2xl
      bg-gray-50
      px-5
      py-4
      text-left
    "
      >
        <div className="flex items-start gap-3">
          <div
            className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-green-50
          text-green-600
        "
          >
            <MapPin className="h-[18px] w-[18px]" />
          </div>

          <div>
            <div className="text-[12px] font-semibold text-gray-900">
              Delivery details
            </div>

            <p className="mt-1 text-[11px] leading-[18px] text-gray-500">
              Make sure your address details are accurate so your order arrives
              without delays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
