interface FooterProps {
  isDirty: boolean;
  onSave: () => void;
  onDiscard: () => void;
}

const Footer: React.FC<FooterProps> = ({ isDirty, onSave, onDiscard }) => {
  return (
    <div className="mt-8 flex justify-end gap-3">
      <button
        type="button"
        disabled={!isDirty}
        onClick={onDiscard}
        className={`
          h-10 rounded-lg px-5 text-sm font-semibold transition
          ${
            isDirty
              ? "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 cursor-pointer"
              : "border border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed"
          }
        `}
      >
        Discard changes
      </button>

      <button
        type="button"
        disabled={!isDirty}
        onClick={onSave}
        className={`
        h-10 rounded-lg border px-5 text-sm font-semibold transition
        ${
          isDirty
            ? "border-green-500 bg-green-400 text-white hover:bg-green-500 active:bg-green-600 cursor-pointer"
            : "border-green-100 bg-green-50 text-green-200 cursor-not-allowed"
        }
      `}
      >
        Save changes
      </button>
    </div>
  );
};

export default Footer;
