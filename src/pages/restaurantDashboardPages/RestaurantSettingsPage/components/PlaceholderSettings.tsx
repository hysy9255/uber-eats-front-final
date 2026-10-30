interface PlaceholderSettingsProps {
  title: string;
  description: string;
}

export const PlaceholderSettings = ({
  title,
  description,
}: PlaceholderSettingsProps) => {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5">
      <h2 className="text-base font-bold text-gray-950">{title}</h2>

      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </section>
  );
};
