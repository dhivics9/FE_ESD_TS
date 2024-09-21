import Input from "../../elements/Input/Input";
import { Button } from "../../elements/Button/Button";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface MemberFormProps {
  register: UseFormRegister<Member>;
  errors: FieldErrors<Member>;
  isPending?: boolean;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting?: boolean;
}

const MemberForm: React.FC<MemberFormProps> = ({
  register,
  errors,
  isPending,
  handleFileChange,
  isSubmitting,
}) => {
  return (
    <>
      <Input
        {...register("name")}
        disabled={isPending}
        label="Nama pengguna"
        placeholder="Masukkan Nama Pengguna"
        error={errors.name?.message}
      />
      <Input
        {...register("role")}
        disabled={isPending}
        label="Role"
        placeholder="Masukkan Nama Pengguna"
        error={errors.role?.message}
      />

      <label className="form-control">
        <div className="label">
          <span className="label-text text-base font-medium capitalize">
            Status
          </span>
        </div>
        <select
          disabled={isPending}
          {...register("status")}
          className="input input-bordered"
        >
          <option value="" disabled>
            Pilih Peran
          </option>
          <option value="member">Member</option>
          <option value="alumni">Alumni</option>
        </select>
        {errors.status && (
          <p className="text-red-500">{errors.status.message}</p>
        )}
      </label>

      <Input
        type="file"
        disabled={isPending}
        label="Foto"
        placeholder="Masukkan Nama Pengguna"
        error={errors.image?.message}
        onChange={handleFileChange} // Set file change handler
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

export default MemberForm;
