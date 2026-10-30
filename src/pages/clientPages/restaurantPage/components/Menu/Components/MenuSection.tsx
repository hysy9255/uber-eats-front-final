import { forwardRef } from "react";
import { capitalizeWords } from "@/shared/utils/capitalizeWords";
import type { DishSummaryDTO } from "../../../../dishPage/api/getDishSummaries/dishSummary.dto";
import { DEFAULT_CATEGORY } from "../Menu";
import DishCard from "./DishCard/DishCard";

interface MenuSectionProps {
  category: string;
  dishes: DishSummaryDTO[];
}

export const MenuSection = forwardRef<HTMLElement, MenuSectionProps>(
  ({ category, dishes }, ref) => {
    return (
      <section ref={ref} className="scroll-mt-24">
        <div className="mb-1 text-gray-800">
          <h2 className="text-md font-bold">{capitalizeWords(category)}</h2>

          <p className="min-h-[16px] text-xs">
            {category === DEFAULT_CATEGORY
              ? "많은 고객들이 주문하는 인기 메뉴에요"
              : `${capitalizeWords(category)} 카테고리의 메뉴에요`}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {dishes.map((dish) => (
            <DishCard
              key={dish.dishId}
              dishId={dish.dishId}
              name={dish.name}
              price={dish.price}
              descriptions={dish.description}
              dishImgUrl={dish.dishImg}
            />
          ))}
        </div>
      </section>
    );
  }
);

MenuSection.displayName = "MenuSection";
