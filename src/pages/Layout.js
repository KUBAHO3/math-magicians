import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <>
      <Navbar home="/" calculator="/calculator" quote="/quote" />
      <Outlet />
    </>
  );
}

export default Layout;
