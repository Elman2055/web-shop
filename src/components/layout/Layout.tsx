import ToolBar from "../toolBar";
import Footer from "../footerBar/Footer";
import useDesktop from "../hooks/useDesktop";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const isDesktop = useDesktop();

  return (
    <>
      <ToolBar isDesktop={isDesktop} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
