import LogoEsd from '/logoEsd.webp';

const LogoNameEsd = () => {
  return (
    <div className='flex justify-center items-center gap-3'>
      <img src={LogoEsd} alt='' />
      <div className='flex gap-1'>
        <h1 className='text-primaryNormal text-[14px] font-bold leading-5'>
          ESD
        </h1>
        <h1 className='text-secondaryNormal text-[14px] font-bold leading-5'>
          Laboratory
        </h1>
      </div>
    </div>
  );
};

export default LogoNameEsd;
