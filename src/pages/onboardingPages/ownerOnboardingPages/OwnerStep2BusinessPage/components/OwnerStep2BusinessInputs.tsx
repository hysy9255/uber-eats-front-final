import { useFormContext } from "react-hook-form";
import type { OwnerOnBoardingForm } from "../../types/ownerOnBoardingForm.type";
import ProfileOrLogoUploadZone from "../../../../../shared/components/UploadZones/ProfileOrLogoUploadZone";
import OnBoardInput from "../../../shared/components/OnBoardInput";
import ImageUploadZone from "../../../../../shared/components/UploadZones/ImageUploadZone";
import { formatPhoneNumber } from "@/shared/utils/formatPhoneNumber";
import { useImageUpload } from "../hooks/useImageUpload";

const OwnerStep2BusinessInputs = () => {
  const {
    handleSelectMainImage,
    handleSelectSub1Image,
    handleSelectSub2Image,
    handleSelectBannerImage,
    handleRemoveLogoImage,
    handleLogoImageChange,
  } = useImageUpload();

  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<OwnerOnBoardingForm>();

  const step2 = watch("step2");
  const logoPreview = step2?.logoImgUrl.preview ?? null;
  const mainPreview = step2?.mainImgUrl.preview ?? null;
  const sub1Preview = step2?.sub1ImgUrl.preview ?? null;
  const sub2Preview = step2?.sub2ImgUrl.preview ?? null;
  const bannerPreview = step2?.bannerImgUrl.preview ?? null;

  return (
    <form className="min-w-0 space-y-8 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
      {/* Restaurant Logo */}
      <div className="flex min-w-0 justify-center">
        <ProfileOrLogoUploadZone
          onRemove={handleRemoveLogoImage}
          onChange={handleLogoImageChange}
          title="Restaurant logo (optional)"
          imgUrl={logoPreview}
          variant="logo"
        />
      </div>

      {/* Business Information */}
      <section className="flex min-w-0 flex-col gap-5">
        <div className="border-b border-gray-100 pb-3">
          <h3 className="text-base font-bold text-gray-900">
            Business information
          </h3>
          <p className="mt-1 text-xs leading-5 text-gray-500">
            Enter your restaurant's legal and contact information.
          </p>
        </div>

        <OnBoardInput
          title="Legal business name"
          field="step2.lbn"
          placeholder="Enter legal business name"
        />

        <OnBoardInput
          title="Doing business as (DBA)"
          field="step2.dba"
          placeholder="Enter restaurant name"
        />

        <OnBoardInput
          title="Cuisine type"
          field="step2.cuisineType"
          placeholder="e.g. Italian, Japanese, Korean"
        />

        <OnBoardInput
          title="Store phone"
          field="step2.storePhone"
          placeholder="010-1234-5678"
          type="tel"
          formatValue={formatPhoneNumber}
          pattern={{
            value: /^010-\d{4}-\d{4}$/,
            message: "Use 010-xxxx-xxxx format",
          }}
        />

        <OnBoardInput
          title="Business email (optional)"
          field="step2.businessEmail"
          placeholder="Enter business email"
          type="email"
          required={false}
          pattern={{
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email",
          }}
        />
      </section>

      {/* Online Presence */}
      <section className="flex min-w-0 flex-col gap-5">
        <div className="border-b border-gray-100 pb-3">
          <h3 className="text-base font-bold text-gray-900">Online presence</h3>
          <p className="mt-1 text-xs leading-5 text-gray-500">
            Add your website and social media information.
          </p>
        </div>

        <OnBoardInput
          title="Website (optional)"
          field="step2.website"
          placeholder="https://example.com"
          required={false}
          pattern={{
            value: /^(https?:\/\/)?([\w-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/i,
            message: "Please enter a valid website URL",
          }}
        />

        <OnBoardInput
          title="Instagram (optional)"
          field="step2.instagram"
          placeholder="https://www.instagram.com/yourhandle"
          required={false}
          pattern={{
            value: /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9._]+\/?$/i,
            message: "Please enter a valid Instagram URL",
          }}
        />
      </section>

      {/* Restaurant Images */}
      <section className="min-w-0">
        <div className="mb-5 border-b border-gray-100 pb-3">
          <h3 className="text-base font-bold text-gray-900">
            Restaurant photos
          </h3>
          <p className="mt-1 text-xs leading-5 text-gray-500">
            Add photos to showcase your restaurant to customers.
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Main Image */}
          <div className="min-w-0">
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Main cover image
            </label>

            <input
              type="hidden"
              {...register("step2.mainImgUrl", {
                required: "Main cover image is required",
              })}
            />

            <ImageUploadZone
              previewSrc={mainPreview}
              className="aspect-square rounded-xl"
              onSelect={handleSelectMainImage}
            />

            {errors.step2?.mainImgUrl?.message && (
              <p className="mt-2 text-xs font-medium text-red-500">
                {errors.step2.mainImgUrl.message}
              </p>
            )}
          </div>

          {/* First Sub Image */}
          <div className="min-w-0">
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              First sub cover image
            </label>

            <input
              type="hidden"
              {...register("step2.sub1ImgUrl", {
                required: "First sub cover image is required",
              })}
            />

            <ImageUploadZone
              previewSrc={sub1Preview}
              className="aspect-square rounded-xl"
              label="Recommended 1600×900"
              onSelect={handleSelectSub1Image}
            />

            {errors.step2?.sub1ImgUrl?.message && (
              <p className="mt-2 text-xs font-medium text-red-500">
                {errors.step2.sub1ImgUrl.message}
              </p>
            )}
          </div>

          {/* Second Sub Image */}
          <div className="min-w-0">
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Second sub cover image
            </label>

            <input
              type="hidden"
              {...register("step2.sub2ImgUrl", {
                required: "Second sub cover image is required",
              })}
            />

            <ImageUploadZone
              previewSrc={sub2Preview}
              className="aspect-square rounded-xl"
              label="Recommended 1600×900"
              onSelect={handleSelectSub2Image}
            />

            {errors.step2?.sub2ImgUrl?.message && (
              <p className="mt-2 text-xs font-medium text-red-500">
                {errors.step2.sub2ImgUrl.message}
              </p>
            )}
          </div>

          {/* Banner Image */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-3">
            <label className="mb-2 block text-sm font-semibold text-gray-800">
              Banner image
            </label>

            <input
              type="hidden"
              {...register("step2.bannerImgUrl", {
                required: "Banner image is required",
              })}
            />

            <ImageUploadZone
              variant="banner"
              previewSrc={bannerPreview}
              label="Recommended wide banner image"
              onSelect={handleSelectBannerImage}
              className="h-[180px] rounded-xl sm:h-[200px]"
            />

            {errors.step2?.bannerImgUrl?.message && (
              <p className="mt-2 text-xs font-medium text-red-500">
                {errors.step2.bannerImgUrl.message}
              </p>
            )}
          </div>
        </div>
      </section>
    </form>
  );
};

export default OwnerStep2BusinessInputs;
