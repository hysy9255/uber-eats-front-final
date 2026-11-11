import { useFormContext } from "react-hook-form";
import type { OwnerOnBoardingForm } from "../../types/ownerOnBoardingForm.type";

export const useProfileImageUpload = () => {
  const { setValue } = useFormContext<OwnerOnBoardingForm>();

  const handleRemoveProfileImage = () => {
    setValue(
      "step1.profileImgUrl",
      {
        status: "removed",
        preview: null,
        file: null,
      },
      { shouldDirty: true }
    );
  };

  const handleProfileImageChange = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    setValue(
      "step1.profileImgUrl",
      {
        status: "changed",
        preview: previewUrl,
        file: file,
      },
      {
        shouldDirty: true,
      }
    );
  };

  return {
    handleRemoveProfileImage,
    handleProfileImageChange,
  };
};
