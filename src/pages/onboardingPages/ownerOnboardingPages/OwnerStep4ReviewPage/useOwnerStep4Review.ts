import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { OwnerOnBoardingForm } from "../types/ownerOnBoardingForm.type";
import { useFormContext } from "react-hook-form";
import { registerOwner } from "../api/registerOwner";
import { resolveImgUrl } from "../../../../shared/utils/resolveImgUrl";

export const useOwnerStep4Review = () => {
  const navigate = useNavigate();
  const { handleSubmit, getValues } = useFormContext<OwnerOnBoardingForm>();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBack = () => navigate("/on-board/owner/step3");

  const handleContinue = handleSubmit(async (data: OwnerOnBoardingForm) => {
    try {
      const profileImgUrl = await resolveImgUrl(data.step1.profileImgUrl);
      const logoImgUrl = await resolveImgUrl(data.step2.logoImgUrl);
      const mainImgUrl = await resolveImgUrl(data.step2.mainImgUrl);
      const sub1ImgUrl = await resolveImgUrl(data.step2.sub1ImgUrl);
      const sub2ImgUrl = await resolveImgUrl(data.step2.sub2ImgUrl);
      const bannerImgUrl = await resolveImgUrl(data.step2.bannerImgUrl);

      if (!mainImgUrl || !sub1ImgUrl || !sub2ImgUrl || !bannerImgUrl) {
        throw new Error("Please upload all required images.");
      }

      await registerOwner({
        account: {
          email: data.step1.email,
          password: data.step1.password,
          name: `${data.step1.firstName} ${data.step1.lastName}`,
          phoneNumber: data.step1.phoneNumber,
          profileImage: profileImgUrl ?? null,
        },
        restaurant: {
          address: {
            streetAddress: data.step3.streetAddress,
            apt: data.step3.unit,
            state: data.step3.state,
            city: data.step3.city,
            zip: data.step3.zip,
          },
          images: {
            logo: logoImgUrl ?? null,
            mainImage: mainImgUrl,
            sub1Image: sub1ImgUrl,
            sub2Image: sub2ImgUrl,
            bannerImage: bannerImgUrl,
          },
          profile: {
            name: data.step2.dba,
            cuisineType: data.step2.cuisineType,
            storePhone: data.step2.storePhone,
            email: data.step2.businessEmail?.trim() || null,
            website: data.step2.website?.trim() || null,
            instagram: data.step2.instagram?.trim() || null,
          },
        },
      });
      setShowSuccess(true);
    } catch (err) {
      console.error(err);
      alert(err instanceof Error ? err.message : "Unexpected error");
    }
  });

  const data = getValues();

  return {
    handleBack,
    showSuccess,
    handleContinue,
    data,
  };
};
