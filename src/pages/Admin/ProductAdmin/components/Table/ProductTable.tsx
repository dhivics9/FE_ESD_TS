import React from "react";
import { Button } from "../../../../../components/elements/Button/Button";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { openModal } from "../../../../../utils/modal";

interface ProductTableProps {
  products: Product[];
  setSelectedProduct: (product: Product) => void;
  setDeletedItem: (item: { id: string; name: string }) => void;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  isLoading: boolean;
}

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  setSelectedProduct,
  setDeletedItem,
  currentPage,
  totalPages,
  setCurrentPage,
  isLoading,
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse text-left">
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Category</th>
            <th>Development Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.product}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>
                  {product.on_development ? "In Development" : "Completed"}
                </td>
                <td>
                  <Button
                    onClick={() => {
                      setSelectedProduct(product);
                      openModal("edit-product-dialog");
                    }}
                  >
                    <PencilSquareIcon className="size-5" />
                  </Button>
                  <Button
                    onClick={() => {
                      setDeletedItem({ id: product.id, name: product.product });
                      openModal("modal-delete");
                    }}
                  >
                    <TrashIcon className="size-5" />
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No products found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
