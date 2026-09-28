import { useFormContext } from "react-hook-form";
import type { OwnerOnBoardingForm } from "../../constants/OwnerOnBoardingForm.type";
import ProfileOrLogoUploadZone from "../../../../../shared/components/UploadZones/ProfileOrLogoUploadZone";
import DefaultRestaurantLogoImg from "../../../../../shared/components/DefaultRestaurantLogoImg/DefaultRestaurantLogoImg";
import OnBoardInput from "../../../shared/components/OnBoardInput";
import ImageUploadZone from "../../../../../shared/components/UploadZones/ImageUploadZone";

interface OwnerStep2BusinessInputsProps {
  onRemoveLogoImage: () => void;
  onLogoImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  logoImgUrl: string | null;
  mainImgUrl: string;
  sub1ImgUrl: string;
  sub2ImgUrl: string;
  bannerImgUrl: string;
  onSelectMainImage: (file: File) => void;
  onSelectSub1Image: (file: File) => void;
  onSelectSub2Image: (file: File) => void;
  onSelectBannerImage: (file: File) => void;
}

const OwnerStep2BusinessInputs: React.FC<OwnerStep2BusinessInputsProps> = ({
  onRemoveLogoImage,
  onLogoImageChange,
  logoImgUrl,
  mainImgUrl,
  sub1ImgUrl,
  sub2ImgUrl,
  bannerImgUrl,
  onSelectMainImage,
  onSelectSub1Image,
  onSelectSub2Image,
  onSelectBannerImage,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<OwnerOnBoardingForm>();
  return (
    <form className="space-y-6 rounded-2xl bg-white ring-1 ring-black/10 shadow-sm p-6 lg:p-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <ProfileOrLogoUploadZone
            onRemove={onRemoveLogoImage}
            onProfileImageChange={onLogoImageChange}
            title="Logo Image (optional)"
            defaultImgBackground={<DefaultRestaurantLogoImg />}
            imgUrl={logoImgUrl}
          />
        </div>

        <OnBoardInput
          css="col-span-1"
          title="Legal business name"
          field="step2.lbn"
          placeholder="Tuxedo Dining LLC"
        />
        <OnBoardInput
          css="col-span-1"
          title="Doing business as (DBA)"
          field="step2.dba"
          placeholder="Chinese Tuxedo"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <OnBoardInput
          css="col-span-1"
          title="Cuisine type"
          field="step2.cuisineType"
          placeholder="Chinese, Dim Sum, Noodles"
        />

        <OnBoardInput
          css="col-span-1"
          title="Store phone"
          field="step2.storePhone"
          placeholder="+1 212 555 0199"
          pattern={{
            value: /^010-\d{4}-\d{4}$/,
            message: "Use xxx-xxxx-xxxx format",
          }}
        />

        <OnBoardInput
          css="col-span-1"
          title="Business email"
          field="step2.businessEmail"
          placeholder="contact@chinesetuxedo.com"
          pattern={{
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Please enter valid email",
          }}
        />
      </div>

      {/* Web presence */}
      <div className="grid grid-cols-2 gap-4">
        <OnBoardInput
          css="col-span-1"
          title="Website"
          field="step2.website"
          placeholder="https://example.com"
          pattern={{
            value: /^https?:\/\/[^\s/$.?#].[^\s]*\.com\/?$/i,
            message: "Website must be a valid .com URL",
          }}
        />
        <OnBoardInput
          css="col-span-1"
          title="Instagram"
          field="step2.instagram"
          placeholder="https://www.instagram.com/yourhandle"
          pattern={{
            value: /^https:\/\/(www\.)?instagram\.com\/.+$/i,
            message: "Please enter a valid Instagram URL",
          }}
        />
      </div>

      {/* Media (logo/cover placeholders) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-1">
          <div className="text-sm font-medium">Main Cover Image</div>
          <input
            type="hidden"
            {...register("step2.mainImgUrl", {
              required: "Main cover image is required",
            })}
          />
          <ImageUploadZone
            previewSrc={mainImgUrl}
            className="aspect-square rounded-lg"
            onSelect={onSelectMainImage}
          />
          {errors.step2?.mainImgUrl?.message && (
            <span className="font-medium text-red-500 text-sm">
              {errors.step2.mainImgUrl.message}
            </span>
          )}
        </div>
        <div className="col-span-1">
          <div className="text-sm font-medium">First Sub Cover Image</div>
          <input
            type="hidden"
            {...register("step2.sub1ImgUrl", {
              required: "First sub cover image is required",
            })}
          />
          <ImageUploadZone
            previewSrc={sub1ImgUrl} // ★ RHF 값 표시
            className="aspect-square rounded-lg"
            label={"Recommended 1600×900"}
            onSelect={onSelectSub1Image}
          />
          {errors.step2?.sub1ImgUrl?.message && (
            <span className="font-medium text-red-500 text-sm">
              {errors.step2.sub1ImgUrl.message}
            </span>
          )}
        </div>
        <div className="col-span-1">
          <div className="text-sm font-medium">Second Sub Cover Image</div>
          <input
            type="hidden"
            {...register("step2.sub2ImgUrl", {
              required: "Second sub cover image is required",
            })}
          />
          <ImageUploadZone
            previewSrc={sub2ImgUrl} // ★ RHF 값 표시
            className="aspect-square rounded-lg"
            label={"Recommended 1600×900"}
            onSelect={onSelectSub2Image}
          />
          {errors.step2?.sub2ImgUrl?.message && (
            <span className="font-medium text-red-500 text-sm">
              {errors.step2.sub2ImgUrl.message}
            </span>
          )}
        </div>
        <div className="col-span-3">
          <div className="text-sm font-medium">Banner Image</div>
          <input
            type="hidden"
            {...register("step2.bannerImgUrl", {
              required: "Banner image is required",
            })}
          />
          <ImageUploadZone
            previewSrc={bannerImgUrl} // ★ RHF 값 표시
            className="aspect-[5/1] rounded-lg"
            label={"Recommended 1600×900"}
            onSelect={onSelectBannerImage}
          />
          {errors.step2?.bannerImgUrl?.message && (
            <span className="font-medium text-red-500 text-sm">
              {errors.step2.bannerImgUrl.message}
            </span>
          )}
        </div>
      </div>
    </form>
  );
};

export default OwnerStep2BusinessInputs;
