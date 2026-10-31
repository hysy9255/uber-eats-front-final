import { createPortal } from "react-dom";
import { CircleAlert } from "lucide-react";

interface CheckoutErrorModalProps {
  onClickOk: () => void;
}

export const CheckoutErrorModal: React.FC<CheckoutErrorModalProps> = ({
  onClickOk,
}) => {
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex max-w-sm flex-col rounded-md border border-slate-100 bg-white shadow-lg">
        <div className="flex gap-3 p-5">
          <div className="shrink-0">
            <CircleAlert className="h-9 w-9 text-red-500" />
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Restaurant is Currently Closed
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              This restaurant is currently closed and unable to accept orders.
              Please try again when the restaurant reopens.
            </p>
          </div>
        </div>

        <div className="flex border-t border-slate-100 p-5">
          <button
            onClick={onClickOk}
            className="w-full cursor-pointer rounded-md border border-gray-700 bg-gray-700 py-2 font-medium text-white shadow-sm hover:bg-gray-800"
          >
            OK
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
