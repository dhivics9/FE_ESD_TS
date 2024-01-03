import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
  { path: '', name: 'Home' },
  { path: 'About', name: 'About' },
  { path: 'Team', name: 'Team' },
  { path: 'Product', name: 'Product' },
  { path: 'Achievements', name: 'Achievements' },
];

interface NavbarLinkProps {
  handleDrawer?: (close: Boolean) => void;
}

const NavbarLink = ({ handleDrawer }: NavbarLinkProps) => {
  const [currentPath, setCurrentPath] = useState('/');

  const handlePathName = () => {
    const path = window.location.pathname;
    if (handleDrawer) {
      handleDrawer(false);
    }
    setCurrentPath(path);
  };

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPath(path);
  }, [currentPath]);

  return links.map((link) => (
    <li
      key={link.path || 'home'}
      className={`${
        currentPath == `/${link.path}`
          ? 'text-primaryNormal'
          : 'text-[--gray-500] hover:text-primaryNormalHover transition-all'
      } text-[16px] font-semibold`}
      onClick={handlePathName}
    >
      <Link to={link.path}>{link.name}</Link>
    </li>
  ));
};

export default NavbarLink;
