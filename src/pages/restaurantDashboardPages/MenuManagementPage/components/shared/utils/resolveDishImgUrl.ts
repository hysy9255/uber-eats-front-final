import { uploadImage } from "@/shared/utils/uploadImage";
import type { DishImageState } from "../types/dishImageState";

export const resolveDishImgUrl = async (image: DishImageState) => {
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
