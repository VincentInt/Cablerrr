import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Headers from './Headers/Headers';

const Layout = () => {
  return (
    <>
      <header>
        <Headers />
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
