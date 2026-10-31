import { Plus } from "lucide-react";

export interface RecommendedDish {
  dishId: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
}

export const RecommendedDishCard = ({ dish }: { dish: RecommendedDish }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <img
        src={dish.imageUrl}
        alt={dish.name}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
          {dish.category}
        </span>

        <h3 className="mt-3 font-bold text-gray-900">{dish.name}</h3>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold">${dish.price.toFixed(2)}</span>

          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50">
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
