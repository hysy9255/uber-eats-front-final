import type { ReactNode } from "react";

interface OnBoardDescriptionProps {
  description: ReactNode;
}

const OnBoardDescription = ({ description }: OnBoardDescriptionProps) => {
  return (
    <section className="w-full min-w-0 overflow-hidden rounded-xl border border-gray-200 bg-gray-50/60 p-4 sm:rounded-2xl sm:p-6">
      {description}
    </section>
  );
};

export default OnBoardDescription;
