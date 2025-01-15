import { useCallback, useEffect, useState } from "react";
import { Button } from "../../elements/Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import ValueList from "../ValueSection/ValueList";
import { ProductValue } from "./ProductData";
import ProductItem from "./ProductItem";

enum ActionType {
  Next = "next",
  Previous = "previous",
}

interface ProductListProps {
  products: {
    id: string;
    product: string;
    description: string;
    image: string;
    link: string;
    value: {
      iconPath: string;
      name: string;
      value: string;
    };
  }[];
}

const ProductList = ({ products }: ProductListProps) => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return currentPath == "/Product" ? (
    products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ))
  ) : (
    <ProductHomeLayout products={products} />
  );
};

const ProductHomeLayout = ({ products }: ProductListProps) => {
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const getCurrentProducts = () => {
    const startIndex = currentPage * ITEMS_PER_PAGE;
    return products.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const handleClick = useCallback(
    (action: ActionType) => {
      if (action === ActionType.Next) {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
      } else if (action === ActionType.Previous) {
        setCurrentPage((prevPage) =>
          prevPage === 0 ? totalPages - 1 : prevPage - 1,
        );
      }
    },
    [totalPages],
  );

  return (
    <div
      className={`flex flex-col items-center space-y-[48px] lg:space-y-[64px]`}
    >
      <div className="flex w-full flex-col items-center space-y-12">
        {" "}
        {/* Ubah ke flex-col dan tambah space-y-12 untuk jarak antar produk */}
        {getCurrentProducts().map((product) => (
          <ProductItem key={`${product.id}${currentPage}`} product={product} />
        ))}
      </div>

      <div className={`flex flex-col items-center space-y-[48px]`}>
        <ButtonGroup>
          <Button
            variant={"secondary"}
            onClick={() => handleClick(ActionType.Previous)}
          >
            Previous
          </Button>
          <Button onClick={() => handleClick(ActionType.Next)}>Next</Button>
        </ButtonGroup>

        <div className="text-sm">
          Page {currentPage + 1} of {totalPages}
        </div>

        <ValueList
          className="hidden grid-cols-2 lg:grid lg:grid-cols-3"
          values={ProductValue}
        />
      </div>
    </div>
  );
};

export default ProductList;
