import React from "react";
import { v4 as uuidv4 } from "uuid";
import { SingleStar } from "./SingleStar";

type StarRatingProps = {
  rating: number | null;
  max?: number;
  size?: number;
  className?: string;
  fillColor?: string;
  emptyStrokeColor?: string;
  showText?: boolean;
};

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  max = 5,
  size = 20,
  className = "",
  fillColor = "black",
  emptyStrokeColor = "#636569",
  showText = false,
}) => {
  const hasRating = rating !== null;

  const safeRating = hasRating ? Math.max(0, Math.min(rating, max)) : 0;

  const id = uuidv4();

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div className="inline-flex">
        {Array.from({ length: max }).map((_, index) => {
          const diff = safeRating - index;

          let fillPercent = 0;

          if (diff >= 1) {
            fillPercent = 100;
          } else if (diff > 0) {
            fillPercent = diff * 100;
          }

          return (
            <SingleStar
              key={index}
              id={`star-fill-${index}-${safeRating}-${id}`}
              fillPercent={fillPercent}
              size={size}
              fillColor={fillColor}
              emptyStrokeColor={emptyStrokeColor}
            />
          );
        })}
      </div>

      {showText && (
        <span className="text-sm text-gray-700">
          {hasRating ? `(${safeRating.toFixed(1)})` : "No ratings"}
        </span>
      )}
    </div>
  );
};

export default StarRating;
