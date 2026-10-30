import { useFormContext } from "react-hook-form";
import type { UpdateRestaurantSettingForm } from "../../../types/updateRestaurantSettingForm";
import { SETTINGS_INPUT_CLASS_NAME } from "../../../constants/settingsInputClassName";

interface FormFieldProps {
  label: string;
  fieldValue: keyof UpdateRestaurantSettingForm;
}

export const FormField: React.FC<FormFieldProps> = ({ label, fieldValue }) => {
  const { register } = useFormContext<UpdateRestaurantSettingForm>();
  return (
    <div>
      <label className="text-xs font-medium text-gray-700">{label}</label>

      <div className="mt-2">
        <input
          {...register(fieldValue)}
          className={SETTINGS_INPUT_CLASS_NAME}
        />
      </div>
    </div>
  );
};
