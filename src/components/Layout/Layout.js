import Loader from 'components/AuthPage/Loader.js';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{ width: '100%', heigt: '100vh' }}>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
