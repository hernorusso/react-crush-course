import { Header } from './header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export { App };
