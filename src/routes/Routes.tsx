import { Routes, Route } from "react-router-dom";
import PrivateRoute from "@/routes/PrivateRoute";
import Index from "@/pages/Index";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";
import SignIn from "@/pages/SignIn";

// for clients
import ClientList from "@/pages/clients/List";
import ClientAdd from "@/pages/clients/Add";

import OTC from "@/pages/Otc";
import UserManagement from "@/pages/UserManagement";
import BulkUpload from "@/pages/BulkUpload";
import OpenAlerts from "@/pages/OpenAlerts";
import History from "@/pages/History";


const RouteList = () => {
  return (
    <Routes>
    <Route path="*" element={<PrivateRoute />}>
      <Route path="" element={<Index />}>
        <Route index element={<Dashboard />} />
        <Route path="otc/list" element={<OTC />} />

        {/* for client */}
        <Route path="client/list" element={<ClientList />}/>
        <Route path="client/add" element={<ClientAdd/>}/>
       

        <Route path="user-management/list" element={<UserManagement />} />
        <Route path="bulk-upload/list" element={<BulkUpload />} />
        <Route path="open-alert/list" element={<OpenAlerts />} />
        <Route path="history/list" element={<History />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
    <Route path="login" element={<SignIn />} />
  </Routes>
  )
}

export default RouteList