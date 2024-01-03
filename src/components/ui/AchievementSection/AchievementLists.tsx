import SectionHeading from '../SectionHeading';
import AchievementItem from './AchievementItem';

interface AchievementListsProps {
  achievements: {
    name: string;
    description: string;
    collaborators: string;
    image: string;
    link: string;
    date: Date;
  }[];
}
const AchievementLists = ({ achievements }: AchievementListsProps) => {
  return (
    <div className='flex flex-col items-center gap-[32px] md:gap-[64px]'>
      <SectionHeading>
        <div>
          <SectionHeading.HeadingTop>
            Unlocking Value Through Cutting Edge Solution
          </SectionHeading.HeadingTop>
          <SectionHeading.HeadingBottom>
            Get to Know Our Events and Participate in it
          </SectionHeading.HeadingBottom>
        </div>
      </SectionHeading>
      {achievements.map((achievement) => (
        <AchievementItem key={achievement.name} achievement={achievement} />
      ))}
    </div>
  );
};

export default AchievementLists;
