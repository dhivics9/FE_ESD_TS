import { achievementsData } from '../../components/ui/AchievementSection/AchievementData';
import AchievementLists from '../../components/ui/AchievementSection/AchievementLists';
import HeadingBanner from '../../components/ui/HeadingBanner/HeadingBanner';
import SocialProof from '../../components/ui/SocialProofSection/SocialProof';

const Achievements = () => {
  return (
    <div className='container-layout'>
      <div>
        <HeadingBanner
          className='flex flex-col items-center'
          paragraph={
            'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.'
          }
        >
          Achievements of ESD Laboratory
        </HeadingBanner>
        <div
          className='max-sm:h-80 w-full'
          style={{
            backgroundImage: 'url(./Content.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
      <div className='max-sm:hidden w-full '>
        <img src='./Content.webp' alt='' className='w-full h-auto' />
      </div>
      {/* client works */}
      <SocialProof />
      {/* list of achievements */}
      <AchievementLists achievements={achievementsData} />
    </div>
  );
};

export default Achievements;
