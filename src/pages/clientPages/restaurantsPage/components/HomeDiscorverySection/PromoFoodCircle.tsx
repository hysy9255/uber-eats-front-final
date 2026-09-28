interface PromoFoodCircleProps {
  src: string;
}

export const PromoFoodCircle: React.FC<PromoFoodCircleProps> = ({ src }) => {
  return (
    <div
      className="
        w-[105px]
        h-[105px]
        rounded-full
        bg-white
        shadow-md
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      <img src={src} className="w-full h-full object-cover" />
    </div>
  );
};
