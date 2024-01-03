import { Button } from '../../elements/Button/Button';
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
    <>
      {/* Project section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div>
          <img src={'./mu2.webp'} alt='' />
        </div>
        <div className='flex flex-col gap-[21px]'>
          <SectionHeading>
            <div className='grid place-items-start'>
              <SectionHeading.HeadingTop>
                {product.name}
              </SectionHeading.HeadingTop>
              <SectionHeading.HeadingBottom>
                {product.name}
              </SectionHeading.HeadingBottom>
            </div>
          </SectionHeading>
          <div className='flex gap-4'>
            <Button className='disabled hover:bg-none' variant='secondary'>
              Redesign
            </Button>
            <Button variant='secondary'>Website</Button>
          </div>
          <SectionHeading.ParagraphBottom className={'text-start'}>
            {product.description}
          </SectionHeading.ParagraphBottom>

          <div className='grid grid-cols-2 gap-4'>
            <Button>Mockup Showcase</Button>
            <Button variant='secondary'>Repository</Button>
          </div>
        </div>
      </div>
      {/* End of Project section */}
    </>
  );
};

export default ProductItem;
