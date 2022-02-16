import { useState } from "react";
import {Outlet} from 'react-router-dom'
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="bg-stone-200 h-screen">
         <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
