const AgreementSection = () => {
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
            I agree to Uber Eats’{" "}
            <a href="/legal/terms" className="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/legal/privacy" className="underline">
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
            Send me deals and promotions by email.
          </span>
        </label>
      </div>
    </section>
  );
};

export default AgreementSection;
