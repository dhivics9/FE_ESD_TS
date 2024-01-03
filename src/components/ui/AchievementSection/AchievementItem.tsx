import { formatDateType } from '../../../utils/string';
import Paragraph from '../../elements/Paragraph/Paragraph';
import SectionHeading from '../SectionHeading';

interface AchievementItemProps {
  achievement: {
    name: string;
    description: string;
    collaborators: string;
    image: string;
    link: string;
    date: Date;
  };
}

const AchievementItem = ({ achievement }: AchievementItemProps) => {
  const { name, description, collaborators, date } = achievement;

  return (
    <div className='space-y-[32px] w-full flex flex-col items-center '>
      <div className={`flex justify-center w-full h-[379px]`} id='Logo_Win'>
        <img src={'./Winner.png'} className='' alt='' />
      </div>
      <div className='section w-[1096px] flex justify-center gap-16'>
        <div className='flex flex-col items-end gap-[34px]'>
          <div className='flex w-[945px] items-start gap-[16px]'>
            <div className='flex flex-col w-[711px] items-start gap-2'>
              <SectionHeading>
                <div className='grid place-items-start'>
                  <SectionHeading.HeadingTop>
                    {formatDateType(date)}
                  </SectionHeading.HeadingTop>
                  <SectionHeading.HeadingBottom className='text-[20px]'>
                    {name}
                  </SectionHeading.HeadingBottom>
                  <p className='text-[--gray-500]'>{collaborators}</p>
                </div>
              </SectionHeading>
              <Paragraph className='text-secondaryDark'>
                {description}
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementItem;
