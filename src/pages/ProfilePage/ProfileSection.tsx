import type { ReactNode } from "react";

interface ProfileSectionProps {
  title: string;
  children: ReactNode;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  title,
  children,
}) => {
  return (
    <div>
      <div className="text-sm font-semibold text-gray-900 mb-2">{title}</div>

      <div className="border border-gray-200 rounded-xl overflow-hidden">
        {children}
      </div>
    </div>
  );
};
