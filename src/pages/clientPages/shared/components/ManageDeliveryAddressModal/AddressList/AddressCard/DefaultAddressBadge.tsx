import { Star } from "lucide-react";

const DefaultAddressBadge = () => {
  return (
    <span
      className="
        inline-flex
        shrink-0
        items-center gap-1
        rounded-full
        bg-green-100
        px-2.5 py-1
        text-[11px]
        font-semibold
        text-green-700
      "
    >
      <Star className="h-3.5 w-3.5" />
      Default
    </span>
  );
};

export default DefaultAddressBadge;
