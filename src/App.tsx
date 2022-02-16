import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import PrivateOutlet from "./components/PrivateOutlet";
import Dashboard from "./pages/Dashboard";
import SimpleScreen from "./pages/SimpleScreen";
import Clients from "./pages/Clients";
import UserManagement from "./pages/UserManagement";
import BulkUpload from "./pages/BulkUpload";
import OpenAlerts from "./pages/OpenAlerts";
import History from "./pages/History";
import Admin from "./pages/Admin";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    document.querySelector<any>("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector<any>("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="*" element={<PrivateOutlet />}>
          <Route path="" element={<Index />}>
            <Route index element={<Dashboard />} />
            <Route path="simple-screen" element={<SimpleScreen />} />
            <Route path="clients" element={<Clients />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="bulk-upload" element={<BulkUpload />} />
            <Route path="open-alerts" element={<OpenAlerts />} />
            <Route path="history" element={<History />} />
            <Route path="admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
        <Route path="login" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
