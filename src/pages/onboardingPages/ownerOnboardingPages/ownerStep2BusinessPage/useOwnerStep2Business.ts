import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import type { OwnerOnBoardingForm } from "../constants/OwnerOnBoardingForm.type";
import { uploadImage } from "@/shared/utils/uploadImage";

export const useOwnerStep2Business = () => {
  const navigate = useNavigate();

  const { setValue, getValues, handleSubmit } =
    useFormContext<OwnerOnBoardingForm>();

  const [images, setImages] = useState<{
    mainImgUrl: string;
    sub1ImgUrl: string;
    sub2ImgUrl: string;
    bannerImgUrl: string;
    logoImgUrl: string | null;
  }>(() => ({
    mainImgUrl: getValues("step2.mainImgUrl") ?? "",
    sub1ImgUrl: getValues("step2.sub1ImgUrl") ?? "",
    sub2ImgUrl: getValues("step2.sub2ImgUrl") ?? "",
    bannerImgUrl: getValues("step2.bannerImgUrl") ?? "",
    logoImgUrl: getValues("step2.logoImgUrl") ?? "",
  }));

  const handleBack = () => navigate("/on-board/owner/step1");

  const handleContinue = handleSubmit(
    () => navigate("/on-board/owner/step3"),
    (e) => console.error(e)
  );

  const handleSelectMainImage = async (file: File) => {
    const url = URL.createObjectURL(file);
    setImages((prev) => ({ ...prev, mainImgUrl: url }));
    const persistentUrl = await uploadImage(file);
    setValue("step2.mainImgUrl", persistentUrl);
  };

  const handleSelectSub1Image = async (file: File) => {
    const url = URL.createObjectURL(file);
    setImages((prev) => ({ ...prev, sub1ImgUrl: url }));
    const persistentUrl = await uploadImage(file);
    setValue("step2.sub1ImgUrl", persistentUrl);
  };

  const handleSelectSub2Image = async (file: File) => {
    const url = URL.createObjectURL(file);
    setImages((prev) => ({ ...prev, sub2ImgUrl: url }));
    const persistentUrl = await uploadImage(file);
    setValue("step2.sub2ImgUrl", persistentUrl);
  };

  const handleSelectBannerImage = async (file: File) => {
    const url = URL.createObjectURL(file);
    setImages((prev) => ({ ...prev, bannerImgUrl: url }));
    const persistentUrl = await uploadImage(file);
    setValue("step2.bannerImgUrl", persistentUrl);
  };

  const handleRemoveLogoImage = () => {
    setImages((prev) => ({ ...prev, logoImgUrl: "" }));
    setValue("step2.logoImgUrl", "", { shouldDirty: true });
  };

  const handleLogoImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      e.target.value = "";
      return;
    }

    const url = URL.createObjectURL(file);
    setImages((prev) => ({ ...prev, logoImgUrl: url }));
    const persistentUrl = await uploadImage(file);

    setValue("step2.logoImgUrl", persistentUrl, {
      shouldDirty: true,
    });
  };

  return {
    images,
    handleBack,
    handleContinue,
    handleSelectMainImage,
    handleSelectSub1Image,
    handleSelectSub2Image,
    handleSelectBannerImage,
    handleRemoveLogoImage,
    handleLogoImageChange,
  };
};
