import { useState, useEffect, useRef, FC } from "react";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import SidebarNav from "@/components/sidebar/SidebarNav";
interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (val: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded] = useState<any>(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector<any>("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector<any>("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div
      id="sidebar"
      ref={sidebar}
      className={` sidebarMain  no-scrollbar w-72  2xl:!w-72 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-72"
      }`}
    >
      <div className="text-right">
        <button
          ref={trigger}
          className="lg:hidden  mt-2 mr-4 p-2 text-gray-500 hover:bg-gray-800  hover:rounded-full hover:text-gray-400"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
        >
          <AiOutlineDoubleLeft className="text-2xl " />
        </button>

        <div className="block text-white mt-3">
          <img
            className=" mx-auto h-24"
            src={"logo/app_logo.svg"}
            alt="app logo"
          />

          <img                
            className=" mx-auto h-4"
            src={"logo/app_logo_title.svg"}
            alt="app logo title"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between  h-full mt-16">
        <div
          className={`overflow-hidden  overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 `}
          style={{ height: "600px" }}
        >
          <SidebarNav />
        </div>
        <div>
          <div className="flex justify-center bg-sky-700  py-3 mx-4 rounded text-gray-300 hover:text-gray-50 hover:bg-sky-500">
            <button className="flex items-center ">
              <FiLogOut className="text-lg mr-2" />
              <span className="text-sm font-medium">Log Out</span>
            </button>
          </div>

          <div className="text-xs font-light text-center my-4">
            <p>2022 &copy; Wave Money</p>
            <p>Made My Misfit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
