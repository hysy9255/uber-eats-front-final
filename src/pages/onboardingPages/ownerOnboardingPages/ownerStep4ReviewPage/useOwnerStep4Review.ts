import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { OwnerOnBoardingForm } from "../constants/OwnerOnBoardingForm.type";
import { useFormContext } from "react-hook-form";
import { registerOwner } from "../api/registerOwner";

export const useOwnerStep4Review = () => {
  const navigate = useNavigate();
  const { handleSubmit, getValues } = useFormContext<OwnerOnBoardingForm>();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBack = () => navigate("/on-board/owner/step3");

  const handleContinue = handleSubmit(async (data: OwnerOnBoardingForm) => {
    try {
      await registerOwner({
        account: {
          email: data.step1.email,
          password: data.step1.password,
          name: `${data.step1.firstName} ${data.step1.lastName}`,
          phoneNumber: data.step1.phoneNumber,
          profileImage: data.step1.profileImgUrl ?? null,
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
            logo: data.step2.logoImgUrl,
            mainImage: data.step2.mainImgUrl,
            sub1Image: data.step2.sub1ImgUrl,
            sub2Image: data.step2.sub2ImgUrl,
            bannerImage: data.step2.bannerImgUrl,
          },
          profile: {
            name: data.step2.dba,
            cuisineType: data.step2.cuisineType,
            storePhone: data.step2.storePhone,
            email: data.step2.businessEmail,
            website: data.step2.website,
            instagram: data.step2.instagram,
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
