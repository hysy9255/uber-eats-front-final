import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ToastProps {
  message?: string;
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message = "Added to cart",
  duration = 2000,
  onClose,
}) => {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const fadeDuration = 300;

    const fadeTimer = setTimeout(() => {
      setIsLeaving(true);
    }, duration - fadeDuration);

    const closeTimer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(closeTimer);
    };
  }, [duration, onClose]);

  return createPortal(
    <div
      className={`
        fixed
        top-6
        left-1/2
        -translate-x-1/2
        z-[9999]
        bg-gray-950
        text-white
        px-5
        py-3
        rounded-xl
        shadow-lg
        flex
        items-center
        gap-x-3
        transition-opacity
        duration-300
        ease-out
        ${isLeaving ? "opacity-0" : "opacity-100"}
      `}
    >
      <div
        className="
          w-6
          h-6
          rounded-full
          bg-green-500
          flex
          items-center
          justify-center
          text-xs
          font-bold
        "
      >
        ✓
      </div>

      <span className="text-sm font-medium">{message}</span>
    </div>,
    document.body
  );
};

export default Toast;
