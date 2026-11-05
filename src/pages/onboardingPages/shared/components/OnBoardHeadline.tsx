interface OnBoardHeadlineProps {
  title: string;
  subtitle: string;
}

const OnBoardHeadline = ({ title, subtitle }: OnBoardHeadlineProps) => {
  return (
    <header className="flex flex-col items-center gap-2 text-center">
      <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-950 sm:text-[30px]">
        {title}
      </h1>

      <p className="max-w-[520px] text-sm leading-6 text-gray-500 sm:text-base">
        {subtitle}
      </p>
    </header>
  );
};

export default OnBoardHeadline;
