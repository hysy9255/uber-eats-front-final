interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onSearch,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex
        w-full max-w-[640px] min-w-[100px]
        h-10
      "
    >
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for restaurant or cuisine"
        className="
          flex-1 min-w-0
          h-full
          pl-8 pr-4
          text-base
          border border-gray-300
          rounded-l-full
          outline-none
          focus:border-blue-500
          focus:ring-1 focus:ring-blue-500
          placeholder:text-gray-500
        "
      />

      <button
        type="submit"
        aria-label="Search"
        className="
          w-16 h-full
          shrink-0
          border border-l-0 border-gray-300
          rounded-r-full
          bg-gray-50
          flex items-center justify-center
          hover:bg-gray-100
        "
      >
        <svg
          viewBox="0 0 24 24"
          className="size-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="10.5" cy="10.5" r="6.5" />
          <line x1="15.5" y1="15.5" x2="21" y2="21" />
        </svg>
      </button>
    </form>
  );
};
