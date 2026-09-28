import CancelButton from "../../../../Shared/CancelButton";
import SaveButton from "../Buttons/SaveButton";
import RenameCategoryInput from "../Inputs/RenameCategoryInput";

interface RenameModalProps {
  onClickCancel: () => void;
  onClickSave: () => void;
}

const RenameModal: React.FC<RenameModalProps> = ({
  onClickCancel,
  onClickSave,
}) => {
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20" />

      <div
        className="
      relative
      z-10
      w-full
      max-w-[360px]
      rounded-2xl
      bg-white
      p-6
      shadow-2xl
    "
      >
        <h3 className="text-lg font-bold text-gray-950">Rename category</h3>

        <label className="mt-5 block text-sm font-medium text-gray-700">
          Category name
        </label>

        <RenameCategoryInput />

        <div className="mt-6 flex justify-end gap-2">
          <CancelButton onClick={onClickCancel} />

          <SaveButton onClick={onClickSave} />
        </div>
      </div>
    </div>
  );
};

export default RenameModal;
