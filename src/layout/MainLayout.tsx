import { Outlet } from "react-router-dom";
// import MainNav from "./nav/MainNav";
// import Cursor from "../components/cursor/Cursor";

const MainLayout = () => {
  return (
    <>
      {/* <MainNav /> */}
      {/* <Cursor /> */}
      <div className="page">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
