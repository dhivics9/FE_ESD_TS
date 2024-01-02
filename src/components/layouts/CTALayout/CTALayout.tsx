import { Button } from '../../elements/Button/Button';
import Heading from '../../elements/Heading/Heading';
import Paragraph from '../../elements/Paragraph/Paragraph';

const CTALayout = () => {
  return (
    <div className={`py-[96px]`} id='CTABottom'>
      <div className='bg-[#ffffff] container max-w-[1280px] flex flex-col items-center gap-[40px] p-[32px_16px]'>
        <div className='flex flex-col gap-2 md:gap-5'>
          <Heading
            className={'text-[24px] md:text-md tracking-[-0.72px] text-center '}
          >
            Start Your Journey Here
          </Heading>
          <Paragraph className='max-w-3xl text-center text-[14px] md:text-[20px] '>
            We’re waiting for digital talents like you to join our team and help
            us to create an impact on society. Choose your desired path and
            start making changes through what you love.
          </Paragraph>
        </div>
        <Button>Join The Team</Button>
      </div>
    </div>
  );
};

export default CTALayout;
