import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <BrowserRouter>
      <Navbar home="/" calculator="/calculator" quote="/quote" />
      <Outlet />
    </BrowserRouter>
  );
}

export default Layout;
