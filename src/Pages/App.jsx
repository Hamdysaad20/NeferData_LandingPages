import React, { lazy, Suspense } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Footer = lazy(() => import('../Components/Footer/Footer'));

const App = () => (
  <>
    <Navbar />

    <Outlet />

    <Suspense fallback={<div>Loading...</div>}>
      <Footer />
    </Suspense>
  </>
);

  
export default App;