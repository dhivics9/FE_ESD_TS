import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../../../components/elements/Button/Button";
import {
  Modal,
  ModalBox,
} from "../../../../../components/elements/Modal/Modal";
import MemberForm from "../../../../../components/forms/MemberForm";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { memberSchema } from "../../../../../components/forms/MemberForm/schema";
import { useUpdateMemberData } from "../../../../../services/member/member.query";

interface DialogEditEventProps {
  selectedEvent: EventTypes;
  onClose: () => void;
}

const DialogEditEvent: React.FC<DialogEditEventProps> = ({
  selectedEvent,
  onClose,
}) => {
  const queryClient = useQueryClient();
  const [image, setImage] = useState<File>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EventTypes>({
    resolver: zodResolver(memberSchema),
    defaultValues: selectedEvent, // Populate form with selectedMember data
  });

  const { mutate: updateMember, isPending } = useUpdateMemberData({
    onSuccess: () => {
      toast.success("Member updated successfully");
      queryClient.invalidateQueries({ queryKey: ["members"] });

      // Reset the form upon successful submission
      reset();
      onClose();
    },
    onError: (err) => {
      toast.error("Failed to update member");
      console.error(err);
    },
  });

  const onSubmit: SubmitHandler<Member> = (data) => {
    const formData = new FormData();

    // Append each field to the FormData object
    formData.append("name", data.name);
    formData.append("role", data.role);
    formData.append("status", data.status);

    // Append the image if it exists
    if (image) {
      formData.append("image", image);
    }

    // Call the mutation with formData to update the member
    updateMember({ id: selectedEvent.id, data: formData });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <Modal id="edit-event-dialog">
      <ModalBox>
        <div className="flex items-center justify-between ">
          <h1 className="text-2xl font-semibold">Edit Member</h1>
          <Button className="!rounded-full !p-2" onClick={onClose}>
            <XMarkIcon className="size-6" />
          </Button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <MemberForm
            register={register}
            errors={errors}
            isPending={isPending}
            handleFileChange={handleFileChange}
            isSubmitting={isSubmitting}
          />
        </form>
      </ModalBox>
    </Modal>
  );
};

export default DialogEditEvent;
