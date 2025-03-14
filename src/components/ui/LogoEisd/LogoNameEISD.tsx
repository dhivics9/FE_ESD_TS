import LogoEisd from '/logoEisd.webp';

const LogoNameEisd = () => {
  return (
    <div className='flex justify-center items-center gap-3'>
      <img className='w-12' src={LogoEisd} alt='' />
      <div className='flex gap-1'>
        <h1 className='text-primaryNormal text-[14px] font-bold leading-5'>
          EISD
        </h1>
        <h1 className='text-secondaryNormal text-[14px] font-bold leading-5'>
          Laboratory
        </h1>
      </div>
    </div>
  );
};

export default LogoNameEisd;
