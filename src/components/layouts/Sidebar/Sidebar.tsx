import { Link, useLocation } from "react-router-dom";
import {
  DashboardIcon,
  IonTrophyOutline,
  MaterialSymbolsEventListOutline,
  TdesignMember,
} from "../../elements/Icon/Icon";

interface SidebarProps {
  children: React.ReactNode;
}

type Router = {
  path: string;
  label: string;
  icon: React.ReactNode;
};

const menuItemLinks: Router[] = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    path: "/dashboard/product",
    label: "Product",
    icon: <MaterialSymbolsEventListOutline />,
  },
  { path: "/dashboard/member", label: "Member", icon: <TdesignMember /> },
  {
    path: "/dashboard/achievement",
    label: "Achievement",
    icon: <IonTrophyOutline />,
  },
  {
    path: "/dashboard/events",
    label: "Events",
    icon: <MaterialSymbolsEventListOutline />,
  },
];

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex bg-[--gray-50] p-6">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn-primary drawer-button btn absolute right-2 top-2 lg:hidden"
        >
          Open drawer
        </label>
        {children}
      </div>
      <div className="drawer-side border-r border-[--stroke-color] ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 space-y-2 bg-[#ffffff] p-6 text-base ">
          {menuItemLinks.map((item, index) => (
            <Link to={item.path} key={index}>
              <li
                key={index}
                className={`cursor-pointer rounded-xl p-3 font-medium hover:bg-[--gray-50] ${
                  item.path === pathname && "bg-[--gray-50]"
                } `}
              >
                <div className="flex">
                  {item.icon}
                  {item.label}
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
