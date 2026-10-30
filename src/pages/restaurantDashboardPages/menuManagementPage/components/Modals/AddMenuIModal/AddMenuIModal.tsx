import { FormProvider, useForm } from "react-hook-form";
import CancelButton from "../../shared/components/CancelButton";
import { createPortal } from "react-dom";
import CategoryDropdownInput from "./components/Inputs/CategoryDropdownInput";
import { useMenuManagement } from "../../../context/useMenuManagement";
import { AddMenuModalHeader } from "./components/AddMenuItemModalHeader";
import SaveButton from "../../shared/components/SaveButton";
import { FormField } from "../../shared/components/inputs/FormField";
import GeneralInput from "../../shared/components/inputs/GeneralInput";
import PriceInput from "../../shared/components/inputs/PriceInput";
import DescriptionInput from "../../shared/components/inputs/DescriptionInput";
import { ImageInput } from "../../shared/components/inputs/ImageInput";
import { useMenuModalContext } from "../../MenuTable/context/useMenuModalContext";
import { useMenuMutation } from "../../MenuTable/components/MenuTableRow/components/MenuItemActions/hooks/useMenuMutation";
import type { AddMenuItemForm } from "./add-menu-item-form.types";
import { useEffect } from "react";

export const AddMenuModal = () => {
  const { closeAddMenuModal } = useMenuModalContext();
  const {
    menuList: { categories },
  } = useMenuManagement();
  const { addMenuItem } = useMenuMutation();
  const methods = useForm<AddMenuItemForm>({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    methods.setValue("dishImage", {
      status: "unchanged",
      preview: null,
      file: null,
    });
  }, [methods]);

  const removeImage = () => {
    methods.setValue("dishImage", {
      status: "removed",
      preview: null,
      file: null,
    });
  };

  const handleImageChange = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    methods.setValue("dishImage", {
      status: "changed",
      preview: previewUrl,
      file: file,
    });
  };

  const dishImage = methods.watch("dishImage");
  const imagePreview = dishImage?.preview ?? null;

  const handleAddMenu = (data: AddMenuItemForm) => {
    addMenuItem(data);
    closeAddMenuModal();
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" />
      <div className="z-10 w-full max-w-[520px] rounded-2xl shadow-xl p-6 bg-white">
        {/* Header */}
        <AddMenuModalHeader onCloseAddMenuModal={closeAddMenuModal} />

        <FormProvider {...methods}>
          <form className="mt-6 space-y-5">
            <FormField label="Item name" isRequired>
              <GeneralInput placeholder="e.g. Pad Thai" fieldName="dishName" />
            </FormField>

            <FormField label="Category" isRequired>
              <CategoryDropdownInput categories={categories} />
            </FormField>

            <FormField label="Price" isRequired>
              <PriceInput fieldName="price" placeholder="0.00" />
            </FormField>

            <FormField label="Description" isRequired>
              <DescriptionInput
                fieldName="description"
                placeholder="Describe this menu item..."
              />
            </FormField>

            <FormField label="Item image" isRequired={false}>
              {/* 실제 file input */}
              <ImageInput
                handleImageChange={handleImageChange}
                imagePreview={imagePreview}
                onRemoveImage={removeImage}
              />
            </FormField>
          </form>
        </FormProvider>

        {/* Footer */}
        <div className="mt-7 flex justify-end gap-3">
          <CancelButton onClick={closeAddMenuModal} />
          <SaveButton
            onClick={methods.handleSubmit(handleAddMenu)}
            label="Add Item"
            disabled={!methods.formState.isValid}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};
