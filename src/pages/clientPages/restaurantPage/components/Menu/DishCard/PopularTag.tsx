interface PopularTagProps {
  className?: string;
}

const PopularTag: React.FC<PopularTagProps> = ({ className }) => {
  return (
    <div
      className={`${className} bg-gray-50 font-bold text-green-600
              rounded-full text-[10px] px-2 py-1`}
    >
      Popular
    </div>
  );
};

export default PopularTag;
