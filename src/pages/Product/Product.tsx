import { useState } from 'react';
import { Button } from '../../components/elements/Button/Button';
import Heading from '../../components/elements/Heading/Heading';
import Paragraph from '../../components/elements/Paragraph/Paragraph';
import HeadingBanner from '../../components/ui/HeadingBanner/HeadingBanner';
import ProductList from '../../components/ui/ProductSection/ProductList';
import { ProductData } from '../../components/ui/ProductSection/ProductData';

const tabNames: string[] = [
  'All',
  'Internal Projects',
  'External Projects',
  'Redesign',
  'Community Projects',
];

const Product = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <div
      className='container max-w-[1440px] md:px-[70px] flex flex-col items-center gap-12 overflow-x-hidden'
      id='headerProduct'
    >
      {/* Hero Header Product Section */}
      <div className='flex flex-col pt-[50px] items-center gap-[48px] self-stretch'>
        <div className='max-w-[1300px] flex flex-col px-8 items-center'>
          <img src={'/'} className='shadow-2xl rounded-xl' alt='' />
        </div>

        <div className='max-w-[1300] flex flex-col px-8 items-center gap-8'>
          <HeadingBanner
            paragraph={
              ' Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.'
            }
          >
            Products of ESD Laboratory
          </HeadingBanner>
        </div>
      </div>
      {/* End of Hero Header Product Section */}

      {/* Button Tab Section */}
      <div
        id='tab'
        className='flex max-md:w-screen max-md:overflow-scroll gap-3 p-3'
      >
        {tabNames.map((tabName) => (
          <Button
            className='min-w-[200px]'
            key={tabName}
            variant={activeTab === tabName ? 'primary' : 'secondary'}
            onClick={() => handleTabClick(tabName)}
          >
            {tabName}
          </Button>
        ))}
      </div>
      {/* End of Button Tab Section */}

      {/* Project Section */}
      <ProductList products={ProductData} />
      {/* End of Project Section */}
    </div>
  );
};

export default Product;
