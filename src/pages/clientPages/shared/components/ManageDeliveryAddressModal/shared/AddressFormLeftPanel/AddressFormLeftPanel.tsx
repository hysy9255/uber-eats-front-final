import { BriefcaseBusiness, Home, Pencil } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { inputClassName } from "@/shared/constants/inputClassName";
import type { DeliveryAddressForm } from "../types/deliveryAddressForm.type";
import { AddressAlias } from "../../../../../../../shared/types/addressAlias.type";
import AddressAliasButton from "./AddressAliasButton";

export const AddressFormLeftPanel = () => {
  const { register, setValue, watch } = useFormContext<DeliveryAddressForm>();

  const alias = watch("alias");

  const handleAliasChange = async (newAlias: AddressAlias) => {
    setValue("alias", newAlias, {
      shouldDirty: true,
      shouldValidate: true,
    });

    setValue("customAlias", null, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const responsiveInputClassName = `
    ${inputClassName}
    block min-w-0 w-full
    max-md:!text-[13px]
  `;

  return (
    <div
      className="
        min-h-0 min-w-0
        overflow-y-auto
        overscroll-contain
        px-4 py-4

        md:border-r md:border-gray-100
        md:px-8 md:py-5
      "
    >
      {/* Street Address */}
      <div className="min-w-0">
        <label className="text-[11px] font-semibold text-gray-900 md:text-[12px]">
          Street address
        </label>

        <input
          {...register("streetAddress", {
            required: "Street address is required",
          })}
          type="text"
          placeholder="123 Main St"
          className={responsiveInputClassName}
        />
      </div>

      {/* Apt / City */}
      <div className="mt-3 grid grid-cols-2 gap-2.5 md:mt-4 md:gap-3">
        <div className="min-w-0">
          <label className="text-[11px] font-semibold text-gray-900 md:text-[12px]">
            Apt / Unit
          </label>

          <input
            {...register("apt")}
            type="text"
            placeholder="Apt 5B"
            className={responsiveInputClassName}
          />
        </div>

        <div className="min-w-0">
          <label className="text-[11px] font-semibold text-gray-900 md:text-[12px]">
            City
          </label>

          <input
            {...register("city", {
              required: "City is required",
            })}
            type="text"
            placeholder="San Francisco"
            className={responsiveInputClassName}
          />
        </div>
      </div>

      {/* State / ZIP */}
      <div className="mt-3 grid grid-cols-2 gap-2.5 md:mt-4 md:gap-3">
        <div className="min-w-0">
          <label className="text-[11px] font-semibold text-gray-900 md:text-[12px]">
            State
          </label>

          <input
            {...register("state", {
              required: "State is required",
            })}
            type="text"
            placeholder="CA"
            className={responsiveInputClassName}
          />
        </div>

        <div className="min-w-0">
          <label className="text-[11px] font-semibold text-gray-900 md:text-[12px]">
            ZIP
          </label>

          <input
            {...register("zip", {
              required: "Zip is required",
            })}
            type="text"
            placeholder="94103"
            className={responsiveInputClassName}
          />
        </div>
      </div>

      {/* Address Alias */}
      <div className="mt-5 md:mt-6">
        <label className="text-[11px] font-semibold text-gray-900 md:text-[12px]">
          Address alias
        </label>

        <div className="mt-2 grid grid-cols-3 gap-2 md:gap-3">
          <input
            type="hidden"
            {...register("alias", {
              required: "Address alias is required",
            })}
          />

          <AddressAliasButton
            title="home"
            Icon={Home}
            onClick={() => handleAliasChange(AddressAlias.home)}
            isActive={alias === "home"}
          />

          <AddressAliasButton
            title="work"
            Icon={BriefcaseBusiness}
            onClick={() => handleAliasChange(AddressAlias.work)}
            isActive={alias === "work"}
          />

          <AddressAliasButton
            title="custom"
            Icon={Pencil}
            onClick={() => handleAliasChange(AddressAlias.other)}
            isActive={alias === "other"}
          />
        </div>
      </div>

      {/* Custom Name */}
      <div className={alias === AddressAlias.other ? "mt-3 md:mt-4" : "hidden"}>
        <label className="text-[11px] font-semibold text-gray-900 md:text-[12px]">
          Custom name
        </label>

        <input
          {...register("customAlias", {
            validate: (value, formValues) => {
              if (formValues.alias !== AddressAlias.other) return true;

              return !!value?.trim() || "Custom alias is required";
            },
          })}
          type="text"
          placeholder="e.g. Mom's house"
          className={responsiveInputClassName}
        />
      </div>
    </div>
  );
};
