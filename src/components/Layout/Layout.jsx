import  { Outlet } from "react-router-dom"
import HomePage from "../../Pages/HomePage/index.js";

const Layout = () => {
  return (
    <div>
      <HomePage />
      <Outlet />
    </div>
  );
};

export default Layout;