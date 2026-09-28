interface CustomerMetricProps {
  icon: React.ReactNode;
  iconClass: string;
  label: string;
  value: string;
  sub: string;
  borderLeft?: boolean;
  borderTop?: boolean;
}

export const CustomerMetric = ({
  icon,
  iconClass,
  label,
  value,
  sub,
  borderLeft,
  borderTop,
}: CustomerMetricProps) => {
  return (
    <div
      className={`
            flex items-center gap-4 px-4 py-5
            ${borderLeft ? "border-l border-gray-100" : ""}
            ${borderTop ? "border-t border-gray-100" : ""}
          `}
    >
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${iconClass}`}
      >
        {icon}
      </div>

      <div>
        <div className="text-xs text-gray-500">{label}</div>
        <div className="mt-1 text-lg font-bold text-gray-950">{value}</div>
        <div className="mt-1 text-xs text-green-600">{sub}</div>
      </div>
    </div>
  );
};
