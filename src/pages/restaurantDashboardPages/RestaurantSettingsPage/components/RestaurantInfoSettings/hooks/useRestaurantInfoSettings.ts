import { useCallback, useEffect, useState } from "react";
import type { UpdateRestaurantSettingForm } from "../../../types/updateRestaurantSettingForm";
import { useForm } from "react-hook-form";
import { useRestaurantInfoData } from "./useRestaurantInfoData";
import type { UpdateRestaurantSettingDTO } from "../../../api/updateRestaurantSetting/updateRestaurantSetting.dto";
import { resolveDishImgUrl } from "../../../../MenuManagementPage/components/shared/utils/resolveDishImgUrl";

export const useRestaurantInfoSettings = () => {
  const { loadRestaurantInfoData, updateRestaurantInfo } =
    useRestaurantInfoData();

  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [showUpdateSuccessToast, setShowUpdateSuccessToast] =
    useState<boolean>(false);

  const methods = useForm<UpdateRestaurantSettingForm>({
    mode: "onSubmit",
  });

  const {
    formState: { dirtyFields },
  } = methods;

  const loadMenu = useCallback(async () => {
    const data = await loadRestaurantInfoData();
    if (!data) return;
    methods.reset({
      ...data,
      logo: {
        status: "unchanged",
        preview: data.logo,
        file: null,
      },
      mainImage: {
        status: "unchanged",
        preview: data.mainImage,
        file: null,
      },
      sub1Image: {
        status: "unchanged",
        preview: data.sub1Image,
        file: null,
      },
      sub2Image: {
        status: "unchanged",
        preview: data.sub2Image,
        file: null,
      },
      bannerImage: {
        status: "unchanged",
        preview: data.bannerImage,
        file: null,
      },
    });
  }, [loadRestaurantInfoData, methods]);

  useEffect(() => {
    loadMenu();
  }, [loadMenu]);

  const handleImageChange = async (
    file: File,
    field: keyof UpdateRestaurantSettingForm
  ) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    methods.setValue(
      field,
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

  const removeImage = (
    field: keyof UpdateRestaurantSettingForm,
    shouldDirty: boolean
  ) => {
    methods.setValue(
      field,
      {
        status: "removed",
        preview: null,
        file: null,
      },
      {
        shouldDirty,
      }
    );
  };

  const updateRestaurantInfoSetting = async (
    data: UpdateRestaurantSettingForm
  ) => {
    const payload: UpdateRestaurantSettingDTO = {};

    const addressChanged =
      dirtyFields.streetAddress ||
      dirtyFields.city ||
      dirtyFields.state ||
      dirtyFields.zip ||
      dirtyFields.apt;

    if (addressChanged) {
      payload.updatedAddress = {
        streetAddress: data.streetAddress,
        city: data.city,
        state: data.state,
        zip: data.zip,
        apt: data.apt,
      };
    }

    const dirtyKeys = Object.keys(dirtyFields) as Array<
      keyof UpdateRestaurantSettingForm
    >;

    for (const key of dirtyKeys) {
      switch (key) {
        case "logo":
        case "mainImage":
        case "sub1Image":
        case "sub2Image":
        case "bannerImage": {
          payload.updatedImages ??= {};
          payload.updatedImages[key] = (await resolveDishImgUrl(
            data[key]
          )) as never;
          break;
        }

        case "name": {
          payload.updatedProfile ??= {};
          payload.updatedProfile.newName = data.name;
          break;
        }

        case "cuisineType": {
          payload.updatedProfile ??= {};
          payload.updatedProfile.newCuisineType = data.cuisineType;
          break;
        }

        case "storePhone": {
          payload.updatedProfile ??= {};
          payload.updatedProfile.newStorePhone = data.storePhone;
          break;
        }
      }
    }
    await updateRestaurantInfo(payload);
    await loadMenu();
    setShowUpdateSuccessToast(true);
  };

  const discardChanges = () => {
    loadMenu();
  };

  return {
    methods,
    isPreviewOpen,
    setIsPreviewOpen,
    handleImageChange,
    removeImage,
    updateRestaurantInfoSetting,
    showUpdateSuccessToast,
    setShowUpdateSuccessToast,
    discardChanges,
  };
};
