import Input from "../../elements/Input/Input";
import { Button } from "../../elements/Button/Button";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface AchievementFormProps {
  register: UseFormRegister<Achievement>;
  errors: FieldErrors<Achievement>;
  isPending?: boolean;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting?: boolean;
}

const AchievementForm: React.FC<AchievementFormProps> = ({
  register,
  errors,
  isPending,
  handleFileChange,
  isSubmitting,
}) => {
  return (
    <>
      <Input
        {...register("achievement")}
        disabled={isPending}
        label="Achievement"
        placeholder="Enter Achievement"
        error={errors.achievement?.message}
      />

      <Input
        type="file"
        disabled={isPending}
        label="Achievement Photo"
        placeholder="Upload Achievement Photo"
        error={errors.image?.message}
        onChange={handleFileChange} // Set file change handler for image upload
      />

      <div className="mt-5">
        <Button
          className="flex w-full items-center justify-center gap-2"
          type="submit"
          disabled={isPending || isSubmitting}
        >
          Submit {isPending && <div className="loader"></div>}
        </Button>
      </div>
    </>
  );
};

export default AchievementForm;
