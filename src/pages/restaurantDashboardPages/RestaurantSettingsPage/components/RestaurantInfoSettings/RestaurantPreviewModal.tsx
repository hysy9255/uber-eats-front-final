import { X } from "lucide-react";
import { RestaurantCustomerPreview } from "./RestaurantCustomerPreview/ResetaurantCustomerPreview";
import { createPortal } from "react-dom";

interface RestaurantPreviewModalProps {
  onClose: () => void;
}

export const RestaurantPreviewModal = ({
  onClose,
}: RestaurantPreviewModalProps) => {
  return createPortal(
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        px-6
        py-8
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          w-full
          max-w-[500px]
          max-h-[90vh]
          overflow-y-auto
          rounded-2xl
          bg-white
          p-6
          shadow-xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-5 flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-950">
              Restaurant preview
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              This is how your restaurant appears to customers.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              hover:cursor-pointer
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              text-gray-500
              hover:bg-gray-100
              hover:text-gray-900
            "
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Preview */}
        <RestaurantCustomerPreview />
      </div>
    </div>,
    document.body
  );
};
