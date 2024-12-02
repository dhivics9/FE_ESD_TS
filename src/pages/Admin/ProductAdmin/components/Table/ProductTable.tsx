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
  currentPage,
  totalPages,
  setCurrentPage,
  setSelectedProduct,
  setDeletedItem,
  isLoading,
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
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
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={product.image} alt={product.product} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.product}</div>
                      </div>
                    </div>
                  </td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td>
                    {product.on_development ? "In Development" : "Completed"}
                  </td>
                  <td>
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => {
                          setSelectedProduct(product);
                          openModal("edit-product-dialog");
                        }}
                      >
                        <PencilSquareIcon className="size-5" />
                      </Button>
                      <Button
                        variant="danger"
                        className=""
                        onClick={() => {
                          setDeletedItem({
                            id: product.id,
                            name: product.product,
                          });
                          openModal("modal-delete");
                        }}
                      >
                        <TrashIcon className="size-5" />
                      </Button>
                    </div>
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
      {/* Pagination */}
      <div className="mt-4 flex justify-between">
        <button
          className="btn btn-sm"
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-sm"
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
