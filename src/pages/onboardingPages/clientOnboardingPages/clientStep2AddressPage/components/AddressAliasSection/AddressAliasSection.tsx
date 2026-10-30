import { useFormContext } from "react-hook-form";
import AddressAliasButton from "./AddressAliasButton";
import { BriefcaseBusiness, Home, Pencil } from "lucide-react";
import type { ClientOnBoardingForm } from "../../../types/clientOnBoardingForm.type";
import { inputClassName } from "@/shared/constants/inputClassName";
import { AddressAlias } from "../../../../../../shared/types/addressAlias.type";

const AddressAliasSection = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<ClientOnBoardingForm>();
  const alias = watch("step2.alias");
  return (
    <div>
      <label className="text-[12px] font-semibold text-gray-900">
        Address alias
      </label>

      <div className="mt-2 grid grid-cols-3 gap-3">
        <input
          type="hidden"
          {...register("step2.alias", {
            required: "Address alias is required",
          })}
        />
        {/* Home */}
        <AddressAliasButton
          title="home"
          Icon={Home}
          onClick={() => {
            setValue("step2.alias", AddressAlias.home);
            setValue("step2.customAlias", null);
          }}
          isActive={alias === "home"}
        />
        {/* Work */}
        <AddressAliasButton
          title="work"
          Icon={BriefcaseBusiness}
          onClick={() => {
            setValue("step2.alias", AddressAlias.work);
            setValue("step2.customAlias", null);
          }}
          isActive={alias === "work"}
        />

        {/* Custom */}
        <AddressAliasButton
          title="custom"
          Icon={Pencil}
          onClick={() => {
            setValue("step2.alias", AddressAlias.other);
            setValue("step2.customAlias", null);
          }}
          isActive={alias === "other"}
        />
      </div>
      {alias === "other" && (
        <div className="mt-4">
          <label className="text-[12px] font-semibold text-gray-900">
            Custom name
          </label>

          <input
            {...register("step2.customAlias", {
              required: "Custom alias is required",
            })}
            type="text"
            placeholder="e.g. Mom's house"
            className={inputClassName}
          />
          {errors.step2?.customAlias?.message && (
            <span className="font-medium text-red-500 text-xs">
              {errors.step2?.customAlias?.message}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default AddressAliasSection;
