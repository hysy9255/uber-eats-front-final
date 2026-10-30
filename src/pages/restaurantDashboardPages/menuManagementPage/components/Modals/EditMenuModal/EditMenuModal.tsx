import { FormProvider, useForm } from "react-hook-form";
import CancelButton from "../../shared/components/CancelButton";
import { createPortal } from "react-dom";
import ReadonlyField from "./components/Inputs/ReadonlyField";
import EditMenuItemModalHeader from "./components/EditMenuItemModalHeader";
import SaveButton from "../../shared/components/SaveButton";
import { FormField } from "../../shared/components/inputs/FormField";
import GeneralInput from "../../shared/components/inputs/GeneralInput";
import PriceInput from "../../shared/components/inputs/PriceInput";
import DescriptionInput from "../../shared/components/inputs/DescriptionInput";
import { ImageInput } from "../../shared/components/inputs/ImageInput";
import type { EditMenuForm } from "./edit-menu-form.types";
import { useEffect } from "react";
import { useMenuMutation } from "../../MenuTable/components/MenuTableRow/components/MenuItemActions/hooks/useMenuMutation";
import { useMenuModalContext } from "../../MenuTable/context/useMenuModalContext";

export const EditMenuModal = () => {
  const { editMenu } = useMenuMutation();
  const { closeEditMenuModal, menuToEdit } = useMenuModalContext();

  const methods = useForm<EditMenuForm>({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const removeImage = () => {
    methods.setValue(
      "dishImage",
      {
        status: "removed",
        preview: null,
        file: null,
      },
      {
        shouldDirty: true,
      }
    );
  };

  const handleImageChange = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    methods.setValue(
      "dishImage",
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

  const dishImage = methods.watch("dishImage");
  const imagePreview = dishImage?.preview ?? null;

  useEffect(() => {
    if (!menuToEdit) return;
    methods.reset({
      dishId: menuToEdit.dishId,
      dishName: menuToEdit.name,
      category: menuToEdit.category,
      price: String(menuToEdit.price),
      description: menuToEdit.description,
      dishImage: {
        status: "unchanged",
        preview: menuToEdit.dishImg,
        file: null,
      },
    });
  }, [menuToEdit, methods]);

  const handleEditMenu = (data: EditMenuForm) => {
    editMenu(data);
    closeEditMenuModal();
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={closeEditMenuModal}
      />
      <div
        className="z-10 w-full max-w-[520px] rounded-2xl 
                  shadow-xl p-6 bg-white"
      >
        {/* Header */}
        <EditMenuItemModalHeader onClickClose={closeEditMenuModal} />
        <FormProvider {...methods}>
          <form className="mt-6 space-y-5">
            <FormField label="Item name" isRequired>
              <GeneralInput placeholder="e.g. Pad Thai" fieldName="dishName" />
            </FormField>

            <FormField label="Category">
              <ReadonlyField fieldName={menuToEdit?.category} />
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
              <ImageInput
                imagePreview={imagePreview}
                onRemoveImage={removeImage}
                handleImageChange={handleImageChange}
              />
            </FormField>
          </form>
        </FormProvider>

        {/* Footer */}
        <div className="mt-7 flex justify-end items-center gap-3">
          {!methods.formState.isValid && (
            <div className="text-xs text-red-500">
              * Please fill in all required fields
            </div>
          )}
          <CancelButton onClick={closeEditMenuModal} />
          <SaveButton
            onClick={methods.handleSubmit(handleEditMenu)}
            disabled={!methods.formState.isDirty || !methods.formState.isValid}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};
