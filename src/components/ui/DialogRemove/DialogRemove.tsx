import { FC } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Button } from "../../elements/Button/Button";

interface DialogRemoveProps {
  title: string;
  onConfirm: () => void;
  onClose: () => void;
  isPending: boolean;
}

const DialogRemove: FC<DialogRemoveProps> = ({
  title,
  onConfirm,
  onClose,
  isPending,
}) => {
  return (
    <dialog id="modal-delete" className="modal">
      <div className="modal-box w-full max-w-[498px] space-y-6 text-center">
        <div className="flex w-full justify-center">
          <div className="rounded-full bg-[#FEEBEB] p-5">
            <TrashIcon className="h-auto w-[38px] text-red-600" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold">{title}?</h3>
          <p className="py-4 text-sm">
            Apakah anda yakin ingin menghapus item ini? <br /> akan terhapus
            secara permanen.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <Button
              onClick={onClose}
              variant="secondary"
              className={"border-strokeColor w-full border"}
            >
              Cancel
            </Button>
          </form>
          <Button variant="primary" onClick={onConfirm}>
            {isPending ? (
              <span className="fade-in loading loading-spinner loading-sm"></span>
            ) : (
              "Delete"
            )}
          </Button>
        </div>
      </div>
    </dialog>
  );
};

export default DialogRemove;
