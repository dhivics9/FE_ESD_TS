import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../../../components/elements/Button/Button";
import {
  Modal,
  ModalBox,
} from "../../../../../components/elements/Modal/Modal";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { eventSchema } from "../../../../../components/forms/EventForm/schema";
import { useUpdateEvent } from "../../../../../services/event/event.query";
import EventForm from "../../../../../components/forms/EventForm";

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


const formattedDefaultDate = selectedEvent.date.substring(0, 10); // Gets YYYY-MM-DD

const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
  reset,
} = useForm<EventTypes>({
  resolver: zodResolver(eventSchema),
  defaultValues: {
    ...selectedEvent,
    date: formattedDefaultDate
  },
});

  const { mutate: updateEvent, isPending } = useUpdateEvent({
    onSuccess: () => {
      toast.success("Event updated successfully");
      queryClient.invalidateQueries({ queryKey: ["events"] });

      // Reset the form upon successful submission
      reset();
      onClose();
    },
    onError: (err) => {
      toast.error("Failed to update event");
      console.error(err);
    },
  });

  const onSubmit: SubmitHandler<EventTypes> = (data) => {
  const formData = new FormData();
  
  const formattedDate = new Date(data.date).toISOString();
  
  formData.append('data', JSON.stringify({
    name: data.name,
    date: formattedDate,  // This will be in RFC3339 format
    detail: data.detail,
    organizer: data.organizer
  }));
  
  if (image) {
    formData.append('image', image);
  }

    // Call the mutation with formData to update the member
    updateEvent({ id: selectedEvent.id, data: formData as any });
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
          <h1 className="text-2xl font-semibold">Edit Event</h1>
          <Button className="!rounded-full !p-2" onClick={onClose}>
            <XMarkIcon className="size-6" />
          </Button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <EventForm
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
