import { DishInfoRow } from "./DishInfoRow";
import { CircleAlert, FileText, Flame, Send, Soup } from "lucide-react";

const NutritionTable = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      <DishInfoRow
        icon={<Flame className="h-4 w-4" />}
        label="Spice level"
        value="Medium"
      />

      <DishInfoRow
        icon={<Soup className="h-4 w-4" />}
        label="Portion size"
        value="Regular"
      />

      <DishInfoRow
        icon={<FileText className="h-4 w-4" />}
        label="Main ingredients"
        value="Chicken, avocado, mixed greens, cherry tomatoes, cucumber"
      />

      <DishInfoRow
        icon={<CircleAlert className="h-4 w-4" />}
        label="Contains"
        value="Peanuts"
      />

      <DishInfoRow
        icon={<Send className="h-4 w-4" />}
        label="Best with"
        value="Steamed rice or fried rice"
        last
      />
    </div>
  );
};

export default NutritionTable;
