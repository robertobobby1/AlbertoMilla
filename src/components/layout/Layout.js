import * as React from 'react';
import Footer from '../footer/Footer';
import NavigationBar from '../navigationbar/NavigationBar';
import { Outlet } from "react-router-dom";


function Layout() {

  return (
    <><NavigationBar></NavigationBar><Outlet /><Footer></Footer></>
  );
}

export default Layout;