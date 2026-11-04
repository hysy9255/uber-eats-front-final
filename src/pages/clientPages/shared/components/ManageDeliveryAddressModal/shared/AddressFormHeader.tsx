interface AddressFormHeaderProps {
  mode: "add" | "edit";
}

export const AddressFormHeader: React.FC<AddressFormHeaderProps> = ({
  mode,
}) => {
  const isEdit = mode === "edit";
  return (
    <div
      className="
        flex min-h-[64px] shrink-0
        items-center justify-between
        gap-2
        border-b border-gray-100
        px-4 py-3

        md:h-[88px]
        md:px-8 md:py-0
      "
    >
      <div className="flex min-w-0 items-center gap-2.5 md:gap-4">
        <div className="min-w-0">
          <h2
            className="
              text-[16px] font-bold
              leading-5 tracking-[-0.03em]
              text-gray-950

              md:text-[22px]
              md:leading-normal
            "
          >
            {isEdit ? "Edit delivery address" : "Add delivery address"}
          </h2>

          <p
            className="
              mt-0.5 text-[11px]
              leading-4 text-gray-500

              md:text-[12px]
            "
          >
            {/* Edit your delivery address. */}
            {isEdit
              ? "Edit your delivery address."
              : "Add a new delivery address to your account."}
          </p>
        </div>
      </div>
    </div>
  );
};
