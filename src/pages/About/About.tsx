import Heading from '../../components/elements/Heading/Heading';
import Paragraph from '../../components/elements/Paragraph/Paragraph';
import ButtonGroup from '../../components/ui/ButtonGroup/ButtonGroup';
import { Button } from '../../components/elements/Button/Button';
import SectionHeading from '../../components/ui/SectionHeading';
import HeadingBanner from '../../components/ui/HeadingBanner/HeadingBanner';
import ValueList from '../../components/ui/ValueSection/ValueList';
import { AboutValuesData } from '../../components/ui/ValueSection/ValueData';

const About = () => {
  return (
    <>
      {/* Header About Page */}
      <div className='container-layout'>
        <HeadingBanner
          paragraph={
            'Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.'
          }
        >
          We Are <span className='text-primaryNormal'>ESD Laboratory</span>
        </HeadingBanner>
      </div>

      {/* Story About Page */}
      <div className='container-layout max-w-[1216px]'>
        <div
          className='max-w-[1213px] h-[320px] lg:h-[558px] w-full max-h-[558px] shadow-2xl'
          style={{
            backgroundImage: 'url(./FotoESD.jpg)',
            backgroundPosition: 'center',
            boxShadow:
              '0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.02), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.03), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.04), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.04), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.05), 0px 100px 80px 0px rgba(0, 0, 0, 0.07)',
          }}
        ></div>
        <SectionHeading.ParagraphBottom className='text-justify'>
          At the Enterprise System Development (ESD) Laboratory, we are driven
          by the unwavering pursuit of knowledge and innovation. Our journey
          began with a vision to explore the realms of software development,
          UI/UX design, and technopreneurship, and over the years, we have
          evolved into a thriving hub of creativity and collaboration. With a
          diverse team of passionate minds and cutting-edge resources, we
          continually push the boundaries of technology to create meaningful
          solutions for real-world challenges. As we grow, our commitment to
          empowering the next generation of digital creators and entrepreneurs
          remains steadfast.
        </SectionHeading.ParagraphBottom>

        <Button>Join The Team</Button>
      </div>
      {/* End of Story About Page */}

      {/* Values About Page */}
      <div className='container-layout py-[64px]'>
        <div className='max-w-[768px] flex flex-col items-center gap-5'>
          <SectionHeading>
            <div className='space-y-3'>
              <SectionHeading.HeadingTop>
                Unlocking Value Through Cutting-Edge Solutions
              </SectionHeading.HeadingTop>
              <SectionHeading.HeadingBottom>
                Get to know Our Values
              </SectionHeading.HeadingBottom>
            </div>
            <SectionHeading.ParagraphBottom className='text-center'>
              We believe the values below help guide our vision and daily
              interactions with each other. Our culture is seeded in the core
              tenet of being good to people.
            </SectionHeading.ParagraphBottom>
          </SectionHeading>
        </div>

        <div className='flex flex-col md:flex-row gap-[64px]'>
          <ValueList
            className='grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 grow shrink-0 basis-0'
            values={AboutValuesData}
          />

          <div className='flex justify-center items-center self-stretch grow shrink-0 basis-0'>
            <div
              className='md:max-w-[576px] h-[300px] md:h-[540px] w-full max-h-[540px] shadow-2xl'
              style={{
                backgroundImage: 'url(./AboutJelasin.jpg)',
                backgroundPosition: 'center',
                boxShadow:
                  '0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.02), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.03), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.04), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.04), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.05), 0px 100px 80px 0px rgba(0, 0, 0, 0.07)',
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* End of Values About Page */}

      {/* Achievement About Page */}
      <div className='bg-[#F6F6FA]'>
        <div className='container-layout'>
          <div className='flex max-w-[1216px] items-start gap-[136px] grow shrink-0 basis-0 max-lg:flex-col max-lg:items-center max-lg:gap-[64px]'>
            <div className='max-w-[502px] flex flex-col items-start gap-[12px] max-lg:items-center'>
              <Heading
                className={
                  'text-primaryNormal font-inter text-[16px] font-semibold leading-[24px] max-lg:text-center'
                }
              >
                Nurturing Growth Through Collaborative Efforts
              </Heading>
              <Heading
                className={
                  'text-[#101828] font-inter text-[36px] font-semibold leading-[44px] tracking-[-0.72px] max-lg:text-center'
                }
              >
                We foster growth collaboratively.
              </Heading>
            </div>
            <div className='flex flex-col items-start gap-[64px] shrink-0 max-lg:gap-[32px]'>
              <div className='flex items-start gap-[64px] self-stretch max-sm:flex-col max-lg:gap-8'>
                <div className='w-[256px] h-[110px] max-md:w-[200px] max-md:h-[110px] flex flex-col items-center gap-[20px] grow shrink-0 basis-0 rounded-lg bg-[#FFF] shadow-2xl'>
                  <div className='flex flex-col py-6 px-10 items-start gap-2 self-stretch'>
                    <Heading className='text-[#101828] font-inter text-[30px] font-medium leading-[30px] max-sm:text-[25px]'>
                      1,000+
                    </Heading>
                    <Heading className='text-[#101828] font-inter text-[20px] font-normal leading-6 max-sm:text-[15px]'>
                      Members
                    </Heading>
                  </div>
                </div>
                <div className='w-[256px] h-[110px] max-md:w-[200px] max-md:h-[110px] flex flex-col items-center gap-[20px] grow shrink-0 basis-0 rounded-lg bg-[#FFF] shadow-2xl'>
                  <div className='flex flex-col py-6 px-10 items-start gap-2 self-stretch'>
                    <Heading className='text-[#101828] font-inter text-[30px] font-medium leading-[30px] max-sm:text-[25px]'>
                      50+
                    </Heading>
                    <Heading className='text-[#101828] font-inter text-[20px] font-normal leading-6 max-sm:text-[15px]'>
                      Competition Won
                    </Heading>
                  </div>
                </div>
              </div>
              <div className='flex items-start gap-[64px] self-stretch max-sm:flex-col max-lg:gap-8'>
                <div className='w-[256px] h-[110px] max-md:w-[200px] max-md:h-[110px] flex flex-col items-center gap-[20px] grow shrink-0 basis-0 rounded-lg bg-[#FFF] shadow-2xl'>
                  <div className='flex flex-col py-6 px-10 items-start gap-2 self-stretch'>
                    <Heading className='text-[#101828] font-inter text-[30px] font-medium leading-[30px] max-sm:text-[25px]'>
                      5,000+
                    </Heading>
                    <Heading className='text-[#101828] font-inter text-[20px] font-normal leading-6 max-sm:text-[15px]'>
                      Alumni
                    </Heading>
                  </div>
                </div>
                <div className='w-[256px] h-[110px] max-md:w-[200px] max-md:h-[110px] flex flex-col items-center gap-[20px] grow shrink-0 basis-0 rounded-lg bg-[#FFF] shadow-2xl'>
                  <div className='flex flex-col py-6 px-10 items-start gap-2 self-stretch'>
                    <Heading className='text-[#101828] font-inter text-[30px] font-medium leading-[30px] max-sm:text-[25px]'>
                      4,000+
                    </Heading>
                    <Heading className='text-[#101828] font-inter text-[20px] font-normal leading-6 max-sm:text-[15px]'>
                      Project Handled
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container max-w-[1440px] flex justify-center items-start'>
            <div className='max-w-[1280px] flex flex-col px-[32px] items-start gap-[32px] shrink-0'>
              <div className='flex justify-between items-center self-center gap-[52px] max-xl:flex-col max-lg:gap-[40px]'>
                <div className='flex flex-col'>
                  <Heading className='text-[#101828] text-center font-inter text-[20px] font-normal leading-[30px] max-lg:font-bold max-sm:text-[18px]'>
                    Trusted by over 4,000 startups.
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Achievement About Page */}

      {/* Division Section About Page */}
      <div className='container max-w-[1440px] flex flex-col gap-[64px] py-[96px] items-center max-md:pt-5'>
        <div className='max-w-[1280px] flex flex-col px-[32px] gap-[40px] items-center '>
          <div className='flex flex-col px-8 items-center max-md:px-0'>
            <div className='max-h-[558px] shadow-2xl max-sm:shadow-lg'>
              {/* <img src={Cw} className='' alt='' /> */}
            </div>
          </div>
          <div className='flex flex-col max-w-[768px] items-center gap-5'>
            <div className='flex flex-col items-center gap-4 self-stretch'>
              <Heading
                className={
                  'text-center text-[#6941C6] font-inter text-[16px] font-semibold leading-6'
                }
              >
                Our Division
              </Heading>

              <Heading
                className={
                  'text-center text-[#101828] font-inter text-[36px] font-semibold leading-[44px] tracking-[-0.72px]'
                }
              >
                UI/UX Division
              </Heading>
            </div>

            <Heading
              className={
                'text-center text-[#667085] px-5 max-sm:px-0 font-inter text-[20px] font-normal leading-[30px]'
              }
            >
              In our UI/UX Division, we cultivate creativity and expertise to
              craft seamless user experiences that leave a lasting impact. Join
              us to elevate your design skills and shape the future of digital
              interactions.
            </Heading>
          </div>
        </div>

        <div id='Division-sect' className='flex gap-[16px]'>
          <ButtonGroup>
            <Button variant='secondary'>Previous</Button>
            <Button>Next</Button>
          </ButtonGroup>
        </div>
      </div>
      {/* End of Division Section About Page */}
    </>
  );
};

export default About;
