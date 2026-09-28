interface OnBoardHeadlineProps {
  title: string;
  subtitle: string;
}

const OnBoardHeadline: React.FC<OnBoardHeadlineProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-md font-semibold">{title}</div>
      <div className="text-sm">{subtitle}</div>
    </div>
  );
};

export default OnBoardHeadline;
