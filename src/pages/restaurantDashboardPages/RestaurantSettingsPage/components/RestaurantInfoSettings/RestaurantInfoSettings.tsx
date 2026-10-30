import Footer from "./components/Footer";
import { RestaurantImageField } from "./components/RestaurantImageField";
import RestaurantInfoSettingsHeader from "./components/RestaurantInfoSettingHeader/RestaurantInfoSettingsHeader";
import { FormProvider } from "react-hook-form";
import { RestaurantPreviewModal } from "./components/RestaurantPreviewModal";
import RestaurantLogoField from "./components/RestaurantLogoField";
import Toast from "../../../../clientPages/shared/components/Toast";
import { FormField } from "./components/FormField";
import { useRestaurantInfoSettings } from "./hooks/useRestaurantInfoSettings";

export const RestaurantInfoSettings = () => {
  const {
    methods,
    isPreviewOpen,
    setIsPreviewOpen,
    handleImageChange,
    updateRestaurantInfoSetting,
    setShowUpdateSuccessToast,
    showUpdateSuccessToast,
    removeImage,
    discardChanges,
  } = useRestaurantInfoSettings();

  const {
    formState: { isDirty },
  } = methods;

  const logo = methods.watch("logo");
  const logoPreview = logo?.preview ?? null;

  const mainImage = methods.watch("mainImage");
  const mainImagePreview = mainImage?.preview ?? null;

  const sub1Image = methods.watch("sub1Image");
  const sub1ImagePreview = sub1Image?.preview ?? null;

  const sub2Image = methods.watch("sub2Image");
  const sub2ImagePreview = sub2Image?.preview ?? null;

  const bannerImage = methods.watch("bannerImage");
  const bannerImagePreview = bannerImage?.preview ?? null;

  return (
    <FormProvider {...methods}>
      <section className="rounded-xl border border-gray-200 bg-white p-5">
        {/* Section header */}
        <RestaurantInfoSettingsHeader
          onPreview={() => setIsPreviewOpen(true)}
        />

        {/* First row */}
        <div className="mt-6 grid grid-cols-[1fr_1fr_1.2fr] gap-6">
          {/* Restaurant Name */}
          <FormField label="Restaurant name" fieldValue="name" />

          {/* Cuisine */}
          <FormField label="Cuisine type" fieldValue="cuisineType" />

          {/* Logo */}
          <RestaurantLogoField
            logoImage={logoPreview}
            handleImageChange={handleImageChange}
            removeImage={removeImage}
          />
        </div>

        {/* Phone */}
        <div className="mt-5 max-w-[420px]">
          <FormField label="Phone number" fieldValue="storePhone" />
        </div>

        {/* Address */}
        <div className="mt-5">
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Street address" fieldValue="streetAddress" />
            <FormField label="Apartment / Suite" fieldValue="apt" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <FormField label="City" fieldValue="city" />
            <FormField label="State" fieldValue="state" />
            <FormField label="ZIP code" fieldValue="zip" />
          </div>
        </div>

        {/* Restaurant Images */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Restaurant images
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              Manage the images shown to your customers.
            </p>
          </div>

          <div className="mt-5 max-w-[820px]">
            <div className="grid grid-cols-3 gap-4">
              <RestaurantImageField
                label="Main image"
                fieldValue="mainImage"
                imageUrl={mainImagePreview}
                handleImageChange={handleImageChange}
                removeImage={removeImage}
              />
              <RestaurantImageField
                label="Sub image 1"
                fieldValue="sub1Image"
                imageUrl={sub1ImagePreview}
                handleImageChange={handleImageChange}
                removeImage={removeImage}
              />
              <RestaurantImageField
                label="Sub image 2"
                fieldValue="sub2Image"
                imageUrl={sub2ImagePreview}
                handleImageChange={handleImageChange}
                removeImage={removeImage}
              />
            </div>
            <div className="mt-6 max-w-[600px]">
              <RestaurantImageField
                label="Banner image"
                fieldValue="bannerImage"
                imageUrl={bannerImagePreview}
                handleImageChange={handleImageChange}
                removeImage={removeImage}
                variant="banner"
              />
            </div>
          </div>
        </div>

        <Footer
          isDirty={isDirty}
          onSave={methods.handleSubmit(updateRestaurantInfoSetting)}
          onDiscard={discardChanges}
        />
      </section>
      {isPreviewOpen && (
        <RestaurantPreviewModal onClose={() => setIsPreviewOpen(false)} />
      )}
      {showUpdateSuccessToast && (
        <Toast
          message="Successfully updated"
          onClose={() => setShowUpdateSuccessToast(false)}
        />
      )}
    </FormProvider>
  );
};
