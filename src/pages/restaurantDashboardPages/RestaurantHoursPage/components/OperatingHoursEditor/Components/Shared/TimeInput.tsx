interface TimeInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const TimeInput = ({
  value,
  onChange,
  disabled = false,
}: TimeInputProps) => {
  return (
    <div
      className={`
          w-[160px]
          h-10
          rounded-lg
          border
          px-3
          flex
          items-center
          gap-2
          ${
            disabled ? "border-gray-100 bg-gray-50" : "border-gray-200 bg-white"
          }
        `}
    >
      <input
        type="time"
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="
            w-full
            bg-transparent
            outline-none
            text-sm
            text-gray-700
            disabled:text-gray-400
          "
      />
    </div>
  );
};
