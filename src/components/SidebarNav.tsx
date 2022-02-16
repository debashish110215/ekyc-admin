import { useState, FC } from "react";
import { NavLink } from "react-router-dom";
import { MdCloudUpload } from "react-icons/md";
import { useAppDispatch } from "../store/hooks";
import { setSeletedPage } from "../store/global/globalReducer";
import {
  RiSettings2Fill,
  RiShieldUserFill,
  RiFileList3Fill,
} from "react-icons/ri";

import {
  HiViewGrid,
  HiUserGroup,
  HiBell, 
  HiShieldExclamation,
  HiOutlineChevronRight
} from "react-icons/hi";

const SidebarNav= () => {
  const [sidebarNavData] = useState([
    {
      id: 1,
      text: "Dashboard",
      path: "",
      icon: <HiViewGrid />,
    },
    {
      id: 2,
      text: "Simple Screen",
      path: "simple-screen",
      icon: <HiBell />,
    },
    {
      id: 3,
      text: "Clients",
      path: "clients",
      icon: <HiUserGroup />,
    },
    {
      id: 4,
      text: "User Management",
      path: "user-management",
      icon: <RiSettings2Fill />,
    },
    {
      id: 5,
      text: "Bulk Upload",
      path: "bulk-upload",
      icon: <MdCloudUpload />,
    },
    {
      id: 6,
      text: "Open Alerts",
      path: "open-alerts",
      icon: <HiShieldExclamation />,
    },
    {
      id: 7,
      text: "History",
      path: "history",
      icon: <RiFileList3Fill />,
    },
    {
      id: 8,
      text: "Admin",
      path: "admin",
      icon: <RiShieldUserFill />,
    },
    // {
    //   id: 1,
    //   text: "Dashboard",
    //   path: "",
    //   icon: <HiViewGrid />,
    // },
    // {
    //   id: 2,
    //   text: "Simple Screen",
    //   path: "simple-screen",
    //   icon: <HiBell />,
    // },
    // {
    //   id: 3,
    //   text: "Clients",
    //   path: "clients",
    //   icon: <HiUserGroup />,
    // },
    // {
    //   id: 4,
    //   text: "User Management",
    //   path: "user-management",
    //   icon: <RiSettings2Fill />,
    // },
    // {
    //   id: 5,
    //   text: "Bulk Upload",
    //   path: "bulk-upload",
    //   icon: <MdCloudUpload />,
    // },
    // {
    //   id: 6,
    //   text: "Open Alerts",
    //   path: "open-alerts",
    //   icon: <HiShieldExclamation />,
    // },
    // {
    //   id: 7,
    //   text: "History",
    //   path: "history",
    //   icon: <RiFileList3Fill />,
    // },
    // {
    //   id: 8,
    //   text: "Admin",
    //   path: "admin",
    //   icon: <RiShieldUserFill />,
    // },
    // {
    //   id: 1,
    //   text: "Dashboard",
    //   path: "",
    //   icon: <HiViewGrid />,
    // },
    // {
    //   id: 2,
    //   text: "Simple Screen",
    //   path: "simple-screen",
    //   icon: <HiBell />,
    // },
    // {
    //   id: 3,
    //   text: "Clients",
    //   path: "clients",
    //   icon: <HiUserGroup />,
    // },
    // {
    //   id: 4,
    //   text: "User Management",
    //   path: "user-management",
    //   icon: <RiSettings2Fill />,
    // },
    // {
    //   id: 5,
    //   text: "Bulk Upload",
    //   path: "bulk-upload",
    //   icon: <MdCloudUpload />,
    // },
    // {
    //   id: 6,
    //   text: "Open Alerts",
    //   path: "open-alerts",
    //   icon: <HiShieldExclamation />,
    // },
    // {
    //   id: 7,
    //   text: "History",
    //   path: "history",
    //   icon: <RiFileList3Fill />,
    // },
    // {
    //   id: 8,
    //   text: "Admin",
    //   path: "admin",
    //   icon: <RiShieldUserFill />,
    // },
  ]);

  const dispatch = useAppDispatch();
  return (
    <ul className="mt-3" >
      {sidebarNavData?.map((navItem: any, index: number) => (
        <li key={index} onClick={() => dispatch(setSeletedPage(navItem.text))}>
          <NavLink
            to={navItem.path}
            className="flex items-center mb-2 text-gray-400 py-3 pl-6  hover:text-sky-200 hover:bg-app-100  hover:border-l-3 hover:border-sky-400"
          >
            <span className="text-xl">{navItem.icon}</span>
            <span className="text-sm  ml-3">{navItem.text}</span>
            <span className="ml-auto mr-4"><HiOutlineChevronRight/></span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SidebarNav;
