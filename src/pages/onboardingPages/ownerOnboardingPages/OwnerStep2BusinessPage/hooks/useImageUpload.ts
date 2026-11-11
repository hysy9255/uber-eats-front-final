import { useFormContext } from "react-hook-form";
import type { OwnerOnBoardingForm } from "../../types/ownerOnBoardingForm.type";

export const useImageUpload = () => {
  const { setValue } = useFormContext<OwnerOnBoardingForm>();

  const handleSelectMainImage = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    const url = URL.createObjectURL(file);

    setValue(
      "step2.mainImgUrl",
      { status: "changed", preview: url, file: file },
      { shouldDirty: true }
    );
  };

  const handleSelectSub1Image = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    const url = URL.createObjectURL(file);

    setValue(
      "step2.sub1ImgUrl",
      { status: "changed", preview: url, file: file },
      { shouldDirty: true }
    );
  };

  const handleSelectSub2Image = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    const url = URL.createObjectURL(file);

    setValue(
      "step2.sub2ImgUrl",
      { status: "changed", preview: url, file: file },
      { shouldDirty: true }
    );
  };

  const handleSelectBannerImage = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    const url = URL.createObjectURL(file);

    setValue(
      "step2.bannerImgUrl",
      { status: "changed", preview: url, file: file },
      { shouldDirty: true }
    );
  };

  const handleLogoImageChange = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    const url = URL.createObjectURL(file);
    setValue(
      "step2.logoImgUrl",
      { status: "changed", preview: url, file: file },
      { shouldDirty: true }
    );
  };

  const handleRemoveLogoImage = () => {
    setValue(
      "step2.logoImgUrl",
      {
        status: "removed",
        preview: null,
        file: null,
      },
      { shouldDirty: true }
    );
  };

  return {
    handleSelectMainImage,
    handleSelectSub1Image,
    handleSelectSub2Image,
    handleSelectBannerImage,
    handleRemoveLogoImage,
    handleLogoImageChange,
  };
};
