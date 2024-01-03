const SocialProof = () => {
  return (
    <section className='container max-w-[1440px] flex justify-center items-start max-md:py-[24px] py-[32px]'>
      <div className='flex flex-col items-center gap-[32px] px-[32px]'>
        <h4 className='text-[#667085] text-center font-inter text-base font-medium leading-6'>
          Several Client are Impressed with our work
        </h4>
        <div className='flex gap-[90px] self-strech items-center justify-between max-lg:items-center max-lg:flex-col max-lg:gap-[32px]'>
          <div className={`w-[130px] h-[48px]`} id='Logo_1'>
            <img
              src={'./logocomp1.svg'}
              className='flex justify-center'
              alt=''
            />
          </div>
          <div className={`w-[159px] h-[48px]`} id='Logo_2'>
            <img
              src={'./logocomp2.svg'}
              className='flex justify-center'
              alt=''
            />
          </div>
          <div className={`w-[173px] h-[48px]`} id='Logo_3'>
            <img src={'./logocomp3.svg'} className='' alt='' />
          </div>
          <div className={`w-[150px] h-[48px]`} id='Logo_4'>
            <img src={'./logocomp4.svg'} className='' alt='' />
          </div>
          <div className={`w-[177px] h-[48px]`} id='Logo_5'>
            <img src={'./logocomp5.svg'} className='' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
