import Heading from '../../elements/Heading/Heading';
import Paragraph from '../../elements/Paragraph/Paragraph';

interface ValueItemProps {
  value: {
    iconPath: string;
    name: string;
    value: string;
  };
}

const ValueItem = ({ value }: ValueItemProps) => {
  return (
    <div className='flex flex-col items-center gap-[20px] grow shrink-0 basis-0'>
      <div className='flex w-[48px] h-[48px] p-[12px] justify-center items-center rounded-[28px] border-[8px] border-[#F9F5FF] bg-[#F4EBFF]'>
        <div className='w-[24px] h-[24px] shrink-0'>
          <img
            src={value.iconPath}
            alt={value.name}
            className='w-full h-auto'
          />
        </div>
      </div>

      <div className='flex flex-col items-center gap-[8px] self-stretch'>
        <Heading className='self-strech tracking-normal text-[#101828] text-center font-inter text-[20px] md:text-[16px] font-[500px] leading-[30px]'>
          {value.name}
        </Heading>
        <Paragraph className='self-strech text-[#667085] text-center font-inter text-[16px]  font-[400px] leading-[24px]'>
          {value.value}
        </Paragraph>
      </div>
    </div>
  );
};

export default ValueItem;
