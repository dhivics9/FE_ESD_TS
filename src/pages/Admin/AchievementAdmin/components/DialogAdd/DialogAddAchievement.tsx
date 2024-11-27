import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../../../components/elements/Button/Button";
import {
  Modal,
  ModalBox,
} from "../../../../../components/elements/Modal/Modal";
import { useAddAchievement } from "../../../../../services/achievement/achievement.query";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { achievementSchema } from "../../../../../components/forms/AchievementForm/schema";
import AchievementForm from "../../../../../components/forms/AchievementForm/AchievementForm";

export interface TAchievement {
  name: string;
  detail: string;
  organizer: string;
  image: string;
  date: string;
}

interface DialogAddAchievementProps {
  onClose: () => void;
}

const DialogAddAchievement: React.FC<DialogAddAchievementProps> = ({
  onClose,
}) => {
  const queryClient = useQueryClient();
  const [image, setImage] = useState<File>();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TAchievement>({
    resolver: zodResolver(achievementSchema),
    defaultValues: {
      name: "",
      detail: "",
      organizer: "",
      image: "",
      date: "",
    },
  });

  const { mutate: addAchievement, isPending } = useAddAchievement({
    onSuccess: () => {
      toast.success("Achievement added successfully");
      queryClient.invalidateQueries({ queryKey: ["achievements"] });

      // Reset the form upon successful submission
      reset();
      onClose();
    },
    onError: (err) => {
      toast.error("Failed to add achievement");
      console.error(err);
    },
  });

  const onSubmit: SubmitHandler<TAchievement> = (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("detail", data.detail);
    formData.append("organizer", data.organizer);
    formData.append("date", data.date);

    // Append the image if it exists
    if (image) {
      formData.append("photo", image);
    }

    // Call the mutation with formData
    addAchievement(formData);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // Check if file size is more than 5MB
        toast.error("File size should not exceed 5MB");
        return;
      }
      setImage(file);
      setValue("image", file.name);
    }
  };

  return (
    <Modal id="add-achievement-dialog">
      <ModalBox>
        <div className="flex items-center justify-between ">
          <h1 className="text-2xl font-semibold">Add Achievement</h1>
          <Button className="!rounded-full !p-2" onClick={onClose}>
            <XMarkIcon className="size-6" />
          </Button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AchievementForm
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

export default DialogAddAchievement;
