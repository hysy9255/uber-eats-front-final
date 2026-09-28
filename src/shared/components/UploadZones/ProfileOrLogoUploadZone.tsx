interface ProfileOrLogoUploadZoneProps {
  onRemove: () => void;
  onProfileImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  defaultImgBackground: React.ReactNode;
  imgUrl: string | null;
}

const ProfileOrLogoUploadZone: React.FC<ProfileOrLogoUploadZoneProps> = ({
  onRemove,
  onProfileImageChange,
  title,
  defaultImgBackground,
  imgUrl,
}) => {
  return (
    <div className="block col-span-2">
      <div className="text-sm font-medium mb-2">{title}</div>

      {/* Preview */}
      <div className="flex items-center gap-4">
        <div className="h-25 w-25 rounded-full overflow-hidden ring-1 ring-slate-300 bg-slate-100 flex items-center justify-center">
          {imgUrl ? (
            <img
              src={imgUrl}
              alt="Profile preview"
              className="h-full w-full object-cover"
            />
          ) : (
            defaultImgBackground
          )}
        </div>

        <div className="flex items-center gap-3">
          {imgUrl ? (
            <button
              type="button"
              className="rounded-full px-3 py-2 text-sm font-medium ring-1 ring-slate-300 hover:bg-slate-50 cursor-pointer"
              onClick={onRemove}
            >
              Remove
            </button>
          ) : (
            <label className="inline-block">
              <span className="rounded-full px-3 py-2 text-sm font-medium ring-1 ring-slate-300 hover:bg-slate-50 cursor-pointer">
                Upload image
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={onProfileImageChange}
              />
            </label>
          )}
        </div>
      </div>

      <p className="mt-2 text-xs text-slate-500">
        PNG or JPG up to 2MB. Circle images look best.
      </p>
    </div>
  );
};

export default ProfileOrLogoUploadZone;
