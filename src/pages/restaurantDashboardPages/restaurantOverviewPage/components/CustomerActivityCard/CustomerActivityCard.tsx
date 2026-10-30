import { MessageSquare, Percent, Star, UserRound } from "lucide-react";
import { CustomerMetric } from "./CustomerMetric";

export const CustomerActivityCard = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold text-gray-950">Customer activity</h3>

      <div className="mt-4 grid grid-cols-2">
        <CustomerMetric
          icon={<Star className="w-6 h-6" />}
          iconClass="bg-green-50 text-green-600"
          label="Average rating"
          value="4.8 / 5"
          sub="↑ 0.2 vs last week"
        />

        <CustomerMetric
          icon={<MessageSquare className="w-6 h-6" />}
          iconClass="bg-violet-50 text-violet-600"
          label="Total reviews"
          value="126"
          sub="↑ 18 vs last week"
          borderLeft
        />

        <CustomerMetric
          icon={<UserRound className="w-6 h-6" />}
          iconClass="bg-green-50 text-green-600"
          label="Returning customers"
          value="36"
          sub="↑ 9 vs last week"
          borderTop
        />

        <CustomerMetric
          icon={<Percent className="w-6 h-6" />}
          iconClass="bg-red-50 text-red-500"
          label="Repeat order rate"
          value="28%"
          sub="↑ 3% vs last week"
          borderLeft
          borderTop
        />
      </div>
    </div>
  );
};
