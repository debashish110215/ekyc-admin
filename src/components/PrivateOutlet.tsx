import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateOutlet = () => {
  const auth = useAuth();
  const result = auth ? <Outlet /> : <Navigate to="/login" />;
  return result;
};

export default PrivateOutlet;
