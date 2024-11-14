import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import Input from '../../elements/Input/Input';
import { Button } from '../../elements/Button/Button';

interface EventFormProps {
  register: UseFormRegister<EventTypes>;
  errors: FieldErrors<EventTypes>;
  isPending?: boolean;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting?: boolean;
}


interface EventTypes {
  id: string;
  name: string;
  date: string;
  detail: string;
  organizer: string;
  image: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  deletedAt?: Date | string;

}

const EventForm: React.FC<EventFormProps> = ({
  register, errors, isPending, handleFileChange, isSubmitting
}) => {
  return (
  <>
      <Input
        {...register("name")}
        disabled={isPending}
        label="Nama Event"
        placeholder="Masukkan Nama Event"
        error={errors.name?.message}
      />
      <Input
        {...register("date")}
        type="date"
        disabled={isPending}
        label="Date"
        placeholder="Pilih Tanggal Event"
        error={errors.date?.message}
      />
      <Input
        {...register("detail")}
        disabled={isPending}
        label="Detail"
        placeholder="Masukkan Detail Event"
        error={errors.detail?.message}
      />
      <Input
        {...register("organizer")}
        disabled={isPending}
        label="Organizer"
        placeholder="Masukkan Organizer Event"
        error={errors.organizer?.message}
      />

      <Input
        type="file"
        disabled={isPending}
        label="Foto"
        placeholder="Masukkan Nama Pengguna"
        error={errors.image?.message}
        onChange={handleFileChange} 
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
  )
}

export default EventForm;

