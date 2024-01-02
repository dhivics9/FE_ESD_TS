import { useState } from 'react';
import ButtonGroup from '../../ui/ButtonGroup/ButtonGroup';
import LogoNameEsd from '../../ui/LogoEsd/LogoNameESD';
import { Button } from '../../elements/Button/Button';
import Hamburger from 'hamburger-react';
import NavbarLink from './view/NavbarLink';

const Navbar = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpened(!isDrawerOpened);
  };

  return (
    <div className='fixed w-full'>
      <div className='bg-[#ffffff] flex flex-col border-b-[0.1px] border-[#e6e6e6] relative z-20'>
        <div className='w-full container max-w-[1440px] mx-auto navbar h-[80px] justify-between'>
          <div className='flex gap-10'>
            <div className='flex px-2 mx-2'>
              <LogoNameEsd />
            </div>
            <div className='flex-none hidden lg:block'>
              <ul className='menu menu-horizontal gap-8'>
                <NavbarLink />
              </ul>
            </div>
          </div>
          <ButtonGroup className='flex'>
            <Button className='hidden sm:flex' variant='primary'>
              Our Portfolio
            </Button>
            <div className='lg:hidden'>
              <Hamburger
                toggled={!!isDrawerOpened}
                toggle={setIsDrawerOpened}
                size={20}
              />
            </div>
          </ButtonGroup>
        </div>
      </div>
      <div
        className={`absolute transition-all duration-300 ease-in-out bg-white z-10 ${
          isDrawerOpened ? 'top-[81px] opacity-100' : 'opacity-0 top-[-1000px]'
        }`}
        id='drawer'
      >
        <ul
          className={`menu p-4 w-screen duration-1000 transition-all ${
            isDrawerOpened ? 'opacity-100 h-screen ' : 'opacity-0 h-0'
          } bg-primaryLight gap-4`}
        >
          <NavbarLink handleDrawer={handleDrawer} />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
