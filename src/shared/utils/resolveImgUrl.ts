import { uploadImage } from "@/shared/utils/uploadImage";
import type { DishImageState } from "../../pages/restaurantDashboardPages/MenuManagementPage/components/shared/types/dishImageState";

export const resolveImgUrl = async (image: DishImageState) => {
  switch (image.status) {
    case "changed": {
      if (!image.file) throw new Error("No image file to upload.");
      return await uploadImage(image.file);
    }
    case "removed":
      return null;
    case "unchanged":
      return undefined;
  }
};
