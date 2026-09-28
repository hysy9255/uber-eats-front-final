const AgreementsSection = () => {
  return (
    <section className="rounded-xl ring-1 ring-slate-200 p-5 bg-white">
      <h3 className="text-lg font-semibold">Agreements</h3>
      <div className="mt-3 space-y-3">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-slate-300"
          />
          <span className="text-sm">
            I agree to the{" "}
            <a className="underline" href="#">
              Restaurant Terms
            </a>{" "}
            and{" "}
            <a className="underline" href="#">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-slate-300"
          />
          <span className="text-sm">
            I certify that the provided information is accurate and up to date.
          </span>
        </label>
      </div>
    </section>
  );
};

export default AgreementsSection;
