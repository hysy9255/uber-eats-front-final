import { DollarSign, ReceiptText, ShoppingBag, Users } from "lucide-react";
import { MetricCard } from "./MetricCard";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatTrend } from "../../utils/formatTrend";
import { getTrendType } from "../../utils/getTrendType";
import type { RestaurantKpiSummaryDTO } from "../../api/queries/getRestaurantKpiSummary/RestaurantKpiSummary.dto";

interface KpiSectionProps {
  overviewSummary?: RestaurantKpiSummaryDTO;
}

const KpiSection: React.FC<KpiSectionProps> = ({ overviewSummary }) => {
  const metrics = [
    {
      key: "orders",
      icon: <ShoppingBag className="w-6 h-6" />,
      iconWrapClass: "bg-green-50 text-green-700",
      label: "Orders",
      value: overviewSummary?.orders.value ?? 0,
      changePercent: overviewSummary?.orders.changePercent ?? 0,
    },
    {
      key: "revenue",
      icon: <DollarSign className="w-6 h-6" />,
      iconWrapClass: "bg-green-50 text-green-700",
      label: "Revenue",
      value: formatCurrency(overviewSummary?.revenue.value ?? 0),
      changePercent: overviewSummary?.revenue.changePercent ?? 0,
    },
    {
      key: "averageOrderValue",
      icon: <ReceiptText className="w-6 h-6" />,
      iconWrapClass: "bg-amber-50 text-amber-600",
      label: "Avg. order value",
      value: formatCurrency(overviewSummary?.averageOrderValue.value ?? 0),
      changePercent: overviewSummary?.averageOrderValue.changePercent ?? 0,
    },
    {
      key: "newCustomers",
      icon: <Users className="w-6 h-6" />,
      iconWrapClass: "bg-violet-50 text-violet-600",
      label: "New customers",
      value: overviewSummary?.newCustomers.value ?? 0,
      changePercent: overviewSummary?.newCustomers.changePercent ?? 0,
    },
  ];

  return (
    <section className="mt-4 grid grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <MetricCard
          key={metric.key}
          icon={metric.icon}
          iconWrapClass={metric.iconWrapClass}
          label={metric.label}
          value={metric.value.toString()}
          trend={formatTrend(metric.changePercent)}
          trendType={getTrendType(metric.changePercent)}
        />
      ))}
    </section>
  );
};

export default KpiSection;
