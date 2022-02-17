import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import RouteList from "@/routes/Routes";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    document.querySelector<any>("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector<any>("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return <RouteList />;
};

export default App;
