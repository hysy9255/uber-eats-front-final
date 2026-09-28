interface TableHeaderProps {
  children: React.ReactNode;
}

export const TableHeader = ({ children }: TableHeaderProps) => {
  return (
    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500">
      {children}
    </th>
  );
};
