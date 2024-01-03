import { useCallback, useEffect, useState } from 'react';
import { Button } from '../../elements/Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import ValueList from '../ValueSection/ValueList';
import { ProductValue } from './ProductData';
import ProductItem from './ProductItem';

enum ActionType {
  Next = 'next',
  Previous = 'previous',
}

interface ProductListProps {
  products: {
    name: string;
    description: string;
    image: string;
    // tag: string[];
    link: string;
    value: {
      iconPath: string;
      name: string;
      value: string;
    };
  }[];
}

const ProductList = ({ products }: ProductListProps) => {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  return currentPath == '/Product' ? (
    products.map((product) => (
      <ProductItem key={product.name} product={product} />
    ))
  ) : (
    <ProductHomeLayout products={products} />
  );
};

const ProductHomeLayout = ({ products }: ProductListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = useCallback(
    (action: ActionType) => {
      if (action === ActionType.Next) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      } else if (action === ActionType.Previous) {
        // Decrement the currentIndex or go to the last event if it's already at the first event
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? products.length - 1 : prevIndex - 1,
        );
      }
    },
    [currentIndex],
  );

  return (
    <div
      className={`flex flex-col items-center space-y-[48px] lg:space-y-[64px]`}
    >
      <ProductItem
        key={`${products[currentIndex].name}${currentIndex}`}
        product={products[currentIndex]}
      />
      <div className={`flex flex-col items-center space-y-[48px]`}>
        <ButtonGroup>
          <Button
            variant={'secondary'}
            onClick={() => handleClick(ActionType.Next)}
          >
            Previous
          </Button>
          <Button onClick={() => handleClick(ActionType.Next)}>Next</Button>
        </ButtonGroup>
        <ValueList
          className='hidden lg:grid grid-cols-2 lg:grid-cols-3'
          values={ProductValue}
        />
      </div>
    </div>
  );
};

export default ProductList;
