import SectionHeading from '../SectionHeading';

interface ProductItemProps {
  product: {
    name: string;
    description: string;
    image: string;
    link: string;
    // tag: string[];
    value: {
      iconPath: string;
      name: string;
      value: string;
    };
  };
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className='space-y-[32px] lg:space-y-[64px]'>
      <SectionHeading>
        <div className=' lg:space-y-[20px]'>
          <SectionHeading.HeadingBottom>
            {product.name}
          </SectionHeading.HeadingBottom>
          <SectionHeading.ParagraphBottom>
            {product.description}
          </SectionHeading.ParagraphBottom>
        </div>
      </SectionHeading>
      <div className='container flex flex-col max-w-[1280px] px-[32px] items-center gap-[96px] max-lg:gap-[32px]'>
        <div className='max-w-[737px] max-h-[558px] border'>
          <img
            src={'./mu2.png'}
            className='sm:block w-full h-auto'
            alt=''
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

const ProductItemProductPage = ({ product }: ProductItemProps) => {
  return (
    <div className='space-y-[32px] lg:space-y-[64px]'>
      <SectionHeading>
        <div className=' lg:space-y-[20px]'>
          <SectionHeading.HeadingBottom>
            {product.name}
          </SectionHeading.HeadingBottom>
          <SectionHeading.ParagraphBottom>
            {product.description}
          </SectionHeading.ParagraphBottom>
        </div>
      </SectionHeading>
      <div className='container flex flex-col max-w-[1280px] px-[32px] items-center gap-[96px] max-lg:gap-[32px]'>
        <div className='max-w-[737px] max-h-[558px] border'>
          <img
            src={'./mu2.png'}
            className='sm:block w-full h-auto'
            alt=''
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

ProductItem.ProductPage = ProductItemProductPage;

export default ProductItem;
