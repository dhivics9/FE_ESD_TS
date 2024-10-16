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
import { achievementSchema } from "../../../../../components/forms/AchievementForm/schema";
import { useUpdateAchievementData } from "../../../../../services/achievement/achievement.query";
import AchievementForm from "../../../../../components/forms/AchievementForm/AchievementForm";

interface DialogEditAchievementProps {
  selectedAchievement: Achievement;
  onClose: () => void;
}

const DialogEditAchievement: React.FC<DialogEditAchievementProps> = ({
  selectedAchievement,
  onClose,
}) => {
  const queryClient = useQueryClient();
  const [image, setImage] = useState<File>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Achievement>({
    resolver: zodResolver(achievementSchema),
    defaultValues: selectedAchievement, // Populate form with selectedAchievement data
  });

  const { mutate: updateAchievement, isPending } = useUpdateAchievementData({
    onSuccess: () => {
      toast.success("Achievement updated successfully");
      queryClient.invalidateQueries({ queryKey: ["achievements"] });

      // Reset the form upon successful submission
      reset();
      onClose();
    },
    onError: (err) => {
      toast.error("Failed to update achievement");
      console.error(err);
    },
  });

  const onSubmit: SubmitHandler<Achievement> = (data) => {
    const formData = new FormData();

    // Append each field to the FormData object
    formData.append("member_id", data.member_id);
    formData.append("achievement", data.achievement);

    // Append the image if it exists
    if (image) {
      formData.append("image", image);
    }

    // Call the mutation with formData to update the achievement
    updateAchievement({
      id: selectedAchievement.id,
      data: formData,
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <Modal id="edit-achievement-dialog">
      <ModalBox>
        <div className="flex items-center justify-between ">
          <h1 className="text-2xl font-semibold">Edit Achievement</h1>
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

export default DialogEditAchievement;
