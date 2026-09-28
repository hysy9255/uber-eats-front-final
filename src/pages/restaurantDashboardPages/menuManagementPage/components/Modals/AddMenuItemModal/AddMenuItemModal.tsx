import { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CancelButton from "../../Shared/CancelButton";
import AddItemButton from "./Components/Buttons/AddItemButton";
import { FormField } from "./Components/FormField";
import GeneralInput from "./Components/Inputs/GeneralInput";
import PriceInput from "./Components/Inputs/PriceInput";
import DescriptionInput from "./Components/Inputs/DescriptionInput";
import { createPortal } from "react-dom";
import type { AddMenuItemFormValues } from "./add-menu-item-form.types";
import AddMenuItemModalHeader from "./Components/AddMenuItemModalHeader";
import CategoryDropdownInput from "./Components/Inputs/CategoryDropdownInput";
import ImageInput from "./Components/Inputs/ImageInput";
import type { Category } from "../../types/cateogry.type";
import { createDish } from "../../../api/dish/createDish/createDish";
import { getToken } from "../../../../../../shared/utils/getToken";
import { useRestaurantDashboard } from "../../../../shared/context/useRestaurantDashboard";
import { uploadImage } from "@/shared/utils/uploadImage";

interface AddMenuItemModalProps {
  onClose: () => void;
  loadMenu: () => void;
  categories: Category[];
}

export const AddMenuItemModal = ({
  onClose,
  loadMenu,
  categories,
}: AddMenuItemModalProps) => {
  const methods = useForm<AddMenuItemFormValues>({ mode: "onSubmit" });
  const token = getToken();
  const { restaurantId } = useRestaurantDashboard();

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  const handleClickRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);

    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  const onSubmit = async (data: {
    dishName: string;
    category: string;
    price: string;
    description: string;
  }) => {
    try {
      if (!token) throw new Error("No Token");
      if (!restaurantId) throw new Error("No Restaurant ID");
      // const dishImgUrl = imageFile ? (await uploadImage(imageFile)).url : null;
      let dishImgUrl: string | null;

      if (imageFile) {
        // 새 이미지 업로드
        dishImgUrl = await uploadImage(imageFile);
      } else {
        dishImgUrl = null;
      }

      await createDish(token, restaurantId, data.category, {
        dishName: data.dishName,
        price: Number(data.price),
        description: data.description,
        dishImgUrl: dishImgUrl,
      });
      loadMenu();
      onClose();
    } catch (error) {
      console.error("Failed to add menu item:", error);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        className="z-10 w-full max-w-[520px] rounded-2xl 
                  shadow-xl p-6 bg-white"
      >
        {/* Header */}
        <AddMenuItemModalHeader onClickClose={onClose} />

        <FormProvider {...methods}>
          <form className="mt-6 space-y-5">
            <FormField label="Item name">
              <GeneralInput placeholder="e.g. Pad Thai" fieldName="dishName" />
            </FormField>

            <FormField label="Category">
              <CategoryDropdownInput categories={categories} />
            </FormField>

            <FormField label="Price">
              <PriceInput fieldName="price" placeholder="0.00" />
            </FormField>

            <FormField label="Description">
              <DescriptionInput
                fieldName="description"
                placeholder="Describe this menu item..."
              />
            </FormField>

            <FormField label="Item image">
              {/* 실제 file input */}
              <ImageInput
                fileInputRef={fileInputRef}
                handleImageChange={handleImageChange}
                imagePreview={imagePreview}
                handleClickUpload={handleClickUpload}
                handleClickRemoveImage={handleClickRemoveImage}
              />
            </FormField>
          </form>
        </FormProvider>

        {/* Footer */}
        <div className="mt-7 flex justify-end gap-3">
          <CancelButton onClick={onClose} />
          <AddItemButton onClick={methods.handleSubmit(onSubmit)} />
        </div>
      </div>
    </div>,
    document.body
  );
};
