import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface InfoSectionProps {
  Icon: LucideIcon;
  title: string;
  contents: string | ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({ Icon, title, contents }) => {
  return (
    <div className="flex items-center gap-3 px-6 py-5">
      <div
        className="
        flex h-10 w-10
        shrink-0
        items-center justify-center
        rounded-full
        bg-gray-50
        text-gray-500
    "
      >
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <p className="text-[12px] font-medium text-gray-500">{title}</p>

        <p className="mt-1 text-[14px] font-semibold text-gray-900">
          {contents}
        </p>
      </div>
    </div>
  );
};

export default InfoSection;
