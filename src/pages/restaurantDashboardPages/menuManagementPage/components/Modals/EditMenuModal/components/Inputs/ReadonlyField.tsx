interface ReadonlyFieldProps {
  fieldName?: string;
}

const ReadonlyField: React.FC<ReadonlyFieldProps> = ({ fieldName }) => {
  return (
    <div
      className="
            h-10
            w-full
            rounded-lg
            border
            border-gray-200
            bg-gray-50
            px-3
            flex
            items-center
            text-sm
            font-medium
            text-gray-700
            "
    >
      {fieldName}
    </div>
  );
};

export default ReadonlyField;
