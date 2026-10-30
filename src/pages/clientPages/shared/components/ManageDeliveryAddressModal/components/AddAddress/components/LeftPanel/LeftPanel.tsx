import { BriefcaseBusiness, Home, Pencil } from "lucide-react";
import { inputClassName } from "@/shared/constants/inputClassName";
import { useFormContext } from "react-hook-form";
import AddressAliasButton from "./AddressAliasButton";
import type { AddDeliveryAddressForm } from "../../types/addDeliveryAddressForm.type";
import { AddressAlias } from "../../../../../../../../../shared/types/addressAlias.type";

const LeftPanel = () => {
  const { register, setValue, watch } =
    useFormContext<AddDeliveryAddressForm>();
  const alias = watch("alias");

  return (
    <div className="min-h-0 overflow-y-auto border-r border-gray-100 px-8 py-5">
      {/* Street Address */}
      <div>
        <label className="text-[12px] font-semibold text-gray-900">
          Street address
        </label>

        <input
          {...register("streetAddress", {
            required: "Street address is required",
          })}
          type="text"
          placeholder="123 Main St"
          className={inputClassName}
        />
      </div>

      {/* Apt / City */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <label className="text-[12px] font-semibold text-gray-900">
            Apt / Unit
          </label>

          <input
            {...register("apt")}
            type="text"
            placeholder="Apt 5B"
            className={inputClassName}
          />
        </div>

        <div>
          <label className="text-[12px] font-semibold text-gray-900">
            City
          </label>

          <input
            {...register("city", {
              required: "City is required",
            })}
            type="text"
            placeholder="San Francisco"
            className={inputClassName}
          />
        </div>
      </div>

      {/* State / ZIP */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <label className="text-[12px] font-semibold text-gray-900">
            State
          </label>

          <input
            {...register("state", {
              required: "State is required",
            })}
            type="text"
            placeholder="CA"
            className={inputClassName}
          />
        </div>

        <div>
          <label className="text-[12px] font-semibold text-gray-900">ZIP</label>

          <input
            {...register("zip", {
              required: "Zip is required",
            })}
            type="text"
            placeholder="94103"
            className={inputClassName}
          />
        </div>
      </div>

      {/* Address Alias */}
      <div className="mt-6">
        <label className="text-[12px] font-semibold text-gray-900">
          Address alias
        </label>

        <div className="mt-2 grid grid-cols-3 gap-3">
          <input
            type="hidden"
            {...register("alias", {
              required: "Address alias is required",
            })}
          />
          {/* Home */}
          <AddressAliasButton
            title="home"
            Icon={Home}
            onClick={() => {
              setValue("alias", AddressAlias.home);
              setValue("customAlias", null);
            }}
            isActive={alias === "home"}
          />
          {/* Work */}
          <AddressAliasButton
            title="work"
            Icon={BriefcaseBusiness}
            onClick={() => {
              setValue("alias", AddressAlias.work);
              setValue("customAlias", null);
            }}
            isActive={alias === "work"}
          />

          {/* Custom */}
          <AddressAliasButton
            title="custom"
            Icon={Pencil}
            onClick={() => {
              setValue("alias", AddressAlias.other);
              setValue("customAlias", null);
            }}
            isActive={alias === "other"}
          />
        </div>
      </div>

      {/* Custom Name */}
      {alias === "other" && (
        <div className="mt-4">
          <label className="text-[12px] font-semibold text-gray-900">
            Custom name
          </label>

          <input
            {...register("customAlias", {
              required: "Custom alias is required",
            })}
            type="text"
            placeholder="e.g. Mom's house"
            className={inputClassName}
          />
        </div>
      )}
    </div>
  );
};

export default LeftPanel;
