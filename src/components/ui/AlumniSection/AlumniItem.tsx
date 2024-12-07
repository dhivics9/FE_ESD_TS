import { Button } from '../../elements/Button/Button';
import Heading from '../../elements/Heading/Heading';
import Paragraph from '../../elements/Paragraph/Paragraph';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import { convertDateString, formatDate } from '../../../utils/string';

enum ActionType {
  Next = 'next',
  Previous = 'previous',
}

interface AlumniItemProps {
  alumni: {
    date: string;
    title: string;
    description: string;
    link: string;
    imagePath: string;
  };
  onClick?: (action: ActionType) => void;
  currentIndex: number;
  alumnis: {
    date: string;
    title: string;
    description: string;
    link: string;
    imagePath: string;
  }[];
}

const AlumniItem = ({
  alumni,
  onClick,
  alumnis,
  currentIndex,
}: AlumniItemProps) => {
  const handleNextClick = () => {
    if (onClick) {
      onClick(ActionType.Next); // Call onClick with ActionType.Next
    }
  };
  const handlePrevious = () => {
    if (onClick) {
      onClick(ActionType.Next); // Call onClick with ActionType.Next
    }
  };
  return (
    <div className='flex max-w-[1096px] items-start gap-[64px] max-lg:flex-col max-lg:gap-[32px] max-lg:items-center'>
      <div className='border border-[#000000]'>
        <img src={alumni.imagePath} className='w-[336px] h-[304px]' alt='' />
      </div>

      <div className='flex flex-col justify-between min-h-[304px]'>
        <div
          id='WrapperTextContent'
          className='flex flex-col max-w-[696px] items-start gap-[16px] max-lg:gap-[32px] max-sm:items-center max-md:px-[16px]'
        >
          <div className='flex max-w-[711px] flex-col items-start gap-[8px] max-sm:items-center'>
            <h3 className='text-[#6941C6] text-center font-inter text-[16px] md:text-[14px] font-semibold leading-[24px] tracking-normal'>
              {convertDateString(alumni.date)}
            </h3>
            <Heading
              className={
                'font-inter text-[24px] md:text-[22px] text-center font-semibold leading-[32px]'
              }
            >
              {alumni.title}
            </Heading>
          </div>

          <Paragraph
            className={
              'text-infoDark font-inter text-[18px] font-[500px] leading-[28px]'
            }
          >
            {alumni.description}
          </Paragraph>
        </div>
        <div
          id='action'
          className='flex max-w-[696px] gap-[430px] max-md:flex-col max-md:gap-[20px] max-md:items-center'
        >
          <div className='flex items-start rounded-[8px]'>
            <div className='flex gap-[5px] items-center'>
              {alumnis.map((_item, idx) => {
                return (
                  <div
                    key={idx}
                    className={`${
                      currentIndex !== idx
                        ? 'w-[12px] h-[12px] bg-infoLightActive'
                        : 'w-[14px] h-[14px] bg-primaryNormal'
                    } rounded-full`}
                  ></div>
                );
              })}
            </div>
          </div>
          <div id='Button-quote' className=''>
            <ButtonGroup className='flex'>
              <Button variant='secondary' onClick={handleNextClick}>
                Previous
              </Button>
              <Button onClick={handlePrevious}>Next</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniItem;
