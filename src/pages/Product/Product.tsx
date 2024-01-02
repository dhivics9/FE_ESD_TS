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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div>
          <img src={'/'} alt='' />
        </div>
        <div className='flex flex-col gap-[21px]'>
          <Paragraph className='text-[16px] text-primaryNormal font-semibold leading-6'>
            Meet the Brilliant Minds Behind Our Success
          </Paragraph>

          <Heading className='text-[36px] leading-[44px] tracking-[-0.72px]'>
            Manchester United Landing Page Redesign
          </Heading>
          <div className='flex gap-4'>
            <Button variant='secondary'>Redesign</Button>
            <Button variant='secondary'>Website</Button>
          </div>
          <Paragraph className='text-[20px] leading-7'>
            Our Collaboration with UK Football Club called, Manchester United.
            Here we do Redesign in UX Problem especially in User Retention and
            Develop the Design into the code with React Framework.
          </Paragraph>
          <div className='flex gap-14'>
            {[1, 2, 3].map((item) => (
              <div key={item} className='bg-[#F9F5FF] p-2 rounded-full'>
                <div className='bg-[#F4EBFF] p-2 rounded-full'>
                  <img src={'/'} alt='' />
                </div>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <Button>Mockup Showcase</Button>
            <Button variant='secondary'>Repository</Button>
          </div>
        </div>
      </div>
      {/* End of Project Section */}
    </div>
  );
};

export default Product;
