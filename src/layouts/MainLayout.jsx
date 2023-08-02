import { Outlet } from 'react-router-dom';
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
