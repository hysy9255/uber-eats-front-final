const KeepMeSignedInSection = () => {
  return (
    <label className="mt-1 inline-flex items-center gap-2 select-none">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-black/20 text-black"
      />
      <span className="text-sm text-slate-700">Keep me signed in</span>
    </label>
  );
};

export default KeepMeSignedInSection;
