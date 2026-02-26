import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const PageTransition: FC = () => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-transition">
      <Outlet />
    </div>
  );
};

export default PageTransition;
