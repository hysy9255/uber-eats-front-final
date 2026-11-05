import { AlertTriangle, X } from "lucide-react";
import { useEffect, useId, useRef } from "react";

interface LeaveThisPagePopupProps {
  onClose: () => void;
  onConfirmExit: () => void;
}

const LeaveThisPagePopup = ({
  onClose,
  onConfirmExit,
}: LeaveThisPagePopupProps) => {
  const titleId = useId();
  const descriptionId = useId();
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;

    cancelButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        p-4
      "
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="
          relative w-full max-w-[420px]
          rounded-2xl border border-gray-100
          bg-white p-5 shadow-2xl
          sm:p-7
        "
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="
            absolute right-4 top-4
            flex h-8 w-8 items-center justify-center
            rounded-lg text-gray-400
            transition-colors cursor-pointer
            hover:bg-gray-100 hover:text-gray-700
          "
        >
          <X className="h-4 w-4" />
        </button>

        {/* Warning Icon */}
        <div
          className="
            mb-5 flex h-12 w-12
            items-center justify-center
            rounded-xl bg-red-50 text-red-600
          "
        >
          <AlertTriangle className="h-6 w-6" strokeWidth={1.8} />
        </div>

        {/* Content */}
        <h2
          id={titleId}
          className="text-xl font-bold tracking-tight text-gray-950"
        >
          Leave this page?
        </h2>

        <p id={descriptionId} className="mt-2 text-sm leading-6 text-gray-500">
          Are you sure you want to exit? Your progress and any information
          you've entered will be lost.
        </p>

        {/* Actions */}
        <div className="mt-7 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            ref={cancelButtonRef}
            type="button"
            onClick={onClose}
            className="
              inline-flex h-11 items-center justify-center
              rounded-xl border border-gray-200
              bg-white px-5
              text-sm font-semibold text-gray-700
              transition-colors cursor-pointer
              hover:border-gray-300 hover:bg-gray-50
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-green-600
            "
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirmExit}
            className="
              inline-flex h-11 items-center justify-center
              rounded-xl bg-red-600 px-5
              text-sm font-semibold text-white
              transition-colors cursor-pointer
              hover:bg-red-700 active:bg-red-800
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-red-600
            "
          >
            Yes, exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveThisPagePopup;
