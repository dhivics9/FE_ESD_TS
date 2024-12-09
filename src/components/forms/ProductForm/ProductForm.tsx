import React, { useEffect } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import Input from "../../elements/Input/Input";
import { Button } from "../../elements/Button/Button";

interface ProductFormProps {
  register: UseFormRegister<Product>;
  errors: FieldErrors<Product>;
  isPending?: boolean;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting?: boolean;
}

const ProductForm: React.FC<ProductFormProps> = ({
  register,
  errors,
  isPending,
  handleFileChange,
  isSubmitting,
  memberData,
}) => {
  useEffect(() => {
    console.log("memberData", memberData);
  }, [memberData]);
  return (
    <>
      <Input
        {...register("product")}
        disabled={isPending}
        label="Product Name"
        placeholder="Enter Product Name"
        error={errors.product?.message}
      />
      <Input
        {...register("description")}
        disabled={isPending}
        label="Description"
        placeholder="Enter Description"
        error={errors.description?.message}
      />
      <Input
        {...register("category")}
        disabled={isPending}
        label="Category"
        placeholder="Enter Category"
        error={errors.category?.message}
      />

      <label className="form-control">
        <div className="label">
          <span className="label-text text-base font-medium capitalize">
            Member
          </span>
        </div>
        <select
          disabled={isPending}
          {...register("member")}
          className="input input-bordered"
        >
          <option value="-">-</option>
          {memberData?.map((member) => (
            <option key={member.id} value={member.id}>
              {member.name}
            </option>
          ))}
        </select>
        {errors.member && (
          <p className="text-red-500">{errors.member.message}</p>
        )}
      </label>

      <label className="form-control">
        <div className="label">
          <span className="label-text text-base font-medium capitalize">
            Development Status
          </span>
        </div>
        <select
          disabled={isPending}
          {...register("on_development")}
          className="input input-bordered"
        >
          <option value="false">Released</option>
          <option value="true">In Development</option>
        </select>
        {errors.on_development && (
          <p className="text-red-500">{errors.on_development.message}</p>
        )}
      </label>

      <Input
        type="file"
        disabled={isPending}
        label="Product Image"
        placeholder="Upload Product Image"
        error={errors.image?.message}
        onChange={handleFileChange} // File change handler for image upload
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

export default ProductForm;
