import { Link } from 'react-router-dom';
import LogoNameEisd from '../../ui/LogoEisd/LogoNameEISD';

const Footer = () => {
  return (
    <div className='container-layout'>
      <div className='grid w-full max-sm:grid-cols-3 grid-cols-5 gap-8'>
        {[
          {
            title: 'Product',
            links: ['Overview', 'Features', 'Pricing', 'Releases'],
          },
          {
            title: 'Laboratory',
            links: ['About us', 'Careers', 'Press', 'News', 'Contact'],
          },
          {
            title: 'Resources',
            links: ['Blog', 'Newsletter', 'Events', 'Support'],
          },
          {
            title: 'Social',
            links: ['Twitter', 'Linkedin', 'Facebook', 'Github', 'Dribble'],
          },
          {
            title: 'Legal',
            links: [
              'Terms',
              'Privacy',
              'Cookies',
              'License',
              'Settings',
              'Contact',
            ],
          },
        ].map((section, index) => (
          <div key={index} className='flex flex-col gap-4'>
            <div className='title text-[--gray-400] text-[14px] leading-5'>
              {section.title}
            </div>
            <div className='flex flex-col gap-3 text-[16px] font-semibold text-[--gray-500]'>
              {section.links.map((link, linkIndex) => (
                <Link key={linkIndex} to='/'>
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='flex max-md:flex-col w-full justify-between items-center'>
        <LogoNameEisd />
        <h1 className='text-[12px] md:text-[16px] font-normal leading-6 text-[--gray-400]'>
          © 2025 EISD Laboratory. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
