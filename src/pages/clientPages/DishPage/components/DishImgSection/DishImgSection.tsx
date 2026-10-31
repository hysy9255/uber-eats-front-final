import { useState } from "react";
import FavoriteButton from "./FavoriteButton";
import NoImgAvailable from "../../../../../shared/components/NoImgAvailable/NoImgAvailable";

interface DishImgSectionProps {
  dishImg: string | null;
}

const DishImgSection: React.FC<DishImgSectionProps> = ({ dishImg }) => {
  const [favorited, setFavorited] = useState(false);

  return (
    <div className="relative rounded-2xl overflow-hidden">
      <FavoriteButton
        className="absolute top-3 right-3"
        isSelected={favorited}
        onClick={() => setFavorited((prev) => !prev)}
      />
      {dishImg ? (
        <img className="w-full aspect-[1/1] object-cover" src={dishImg} />
      ) : (
        <NoImgAvailable className="aspect-[1/1] min-[811px]:aspect-[2/3] min-[900px]:aspect-[4/3] object-contain border border-gray-200" />
      )}
    </div>
  );
};

export default DishImgSection;
