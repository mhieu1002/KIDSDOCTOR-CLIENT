import { Outlet } from "react-router-dom";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import SidebarContact from "./SidebarContact/SidebarContact.tsx";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <SidebarContact />
      <Footer />
    </>
  );
}
