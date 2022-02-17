import { FC } from "react";
import Notifications from "@/components/header/Notifications";
import UserMenu from "@/components/header/UserMenu";
import LanguageMenu from "@/components/header/LanguageMenu";
import moment from "moment";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useAppSelector } from "@/store/hooks";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}
const Header: FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const selectedPage = useAppSelector((state:any) => state.global.seletedPage);
  return (
    <header className="sticky top-0 bg-white  shadow z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 -mb-px">
          <div className="flex ml-6">
            <button
              className="text-gray-500 lg:hidden hover:text-gray-600 hover:bg-gray-100 p-2 hover:rounded-full"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <AiOutlineUnorderedList className="text-2xl font-medium" />
            </button>
            <div className="hidden lg:block text-slate-500 font-medium uppercase">
              {selectedPage}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden lg:block">
              <LanguageMenu />
            </div>
            <div className="hidden lg:block">
              <p className="text-sm text-gray-600">
                {moment(new Date()).format("DD MMM YYYY")}
              </p>
            </div>
            <div className="hidden lg:block">
              <Notifications />
            </div>
            <div className="hidden sm:block">
              <UserMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
