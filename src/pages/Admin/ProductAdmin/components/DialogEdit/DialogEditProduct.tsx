import { zodResolver } from "@hookform/resolvers/zod";
import { set, SubmitHandler, useForm } from "react-hook-form";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../../../components/elements/Button/Button";
import {
  Modal,
  ModalBox,
} from "../../../../../components/elements/Modal/Modal";
import ProductForm from "../../../../../components/forms/ProductForm";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { productSchema } from "../../../../../components/forms/ProductForm/schema";
import { useUpdateProductData } from "../../../../Login/product/product.query";
import { useGetAllMembers } from "../../../../../services/member/member.query";

interface DialogEditProductProps {
  selectedProduct: Product;
  onClose: () => void;
}

const DialogEditProduct: React.FC<DialogEditProductProps> = ({
  selectedProduct,
  onClose,
}) => {
  const queryClient = useQueryClient();
  const [image, setImage] = useState<File>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<Product>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      ...selectedProduct,
      member: selectedProduct.members[0].id,
      on_development: selectedProduct.on_development.toString(),
    },
  });

  useEffect(() => {
    console.log("selectedProduct", selectedProduct);
  }, [selectedProduct]);

  const { mutate: updateProduct, isPending } = useUpdateProductData({
    onSuccess: () => {
      toast.success("Product updated successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });
      reset();
      onClose();
    },
    onError: () => {
      toast.error("Failed to update product");
    },
  });

  const { data: memberData } = useGetAllMembers();

  const onSubmit: SubmitHandler<Product> = (data) => {
    const formData = new FormData();
    formData.append("product", data.product);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("on_development", data.on_development);
    formData.append("image", image || selectedProduct.image);
    formData.append("member_ids", data.member);
    formData.append("published_at", selectedProduct.published_at);
    updateProduct({ id: selectedProduct.id, data: formData });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setValue("image", file);
    }
  };

  return (
    <Modal id="edit-product-dialog">
      <ModalBox>
        <div className="flex items-center justify-between ">
          <h1 className="text-2xl font-semibold">Edit Product</h1>
          <Button className="!rounded-full !p-2" onClick={onClose}>
            <XMarkIcon className="size-6" />
          </Button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProductForm
            register={register}
            errors={errors}
            isPending={isPending}
            handleFileChange={handleFileChange}
            isSubmitting={isSubmitting}
            memberData={memberData}
          />
        </form>
      </ModalBox>
    </Modal>
  );
};

export default DialogEditProduct;
