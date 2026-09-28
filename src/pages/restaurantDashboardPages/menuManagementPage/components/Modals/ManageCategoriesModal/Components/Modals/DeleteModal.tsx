import CancelButton from "../../../../Shared/CancelButton";
import DeleteButton from "../Buttons/DeleteButton";

interface DeleteModalProps {
  deleteTarget: { name: string };
  onClickCancel: () => void;
  onClickDelete: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  deleteTarget,
  onClickCancel,
  onClickDelete,
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
        <h3 className="text-lg font-bold text-gray-950">Delete category</h3>

        <p className="mt-4 text-sm text-gray-600">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-gray-900">
            "{deleteTarget.name}"
          </span>
          ?
        </p>

        <p className="mt-2 text-sm text-red-500">
          This action cannot be undone.
        </p>

        <div className="mt-6 flex justify-end gap-2">
          <CancelButton onClick={onClickCancel} />
          <DeleteButton onClick={onClickDelete} />
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
