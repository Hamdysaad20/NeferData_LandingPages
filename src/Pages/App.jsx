import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

/**
 * This App component constructs the basic layout of the application
 * It includes the Navbar, Footer, and an Outlet. The Outlet dynamically
 * displays content depending on the active App route
 * 
 * The App adheres to WCAG's section 1.3.2 (Meaningful Sequence) guideline
 * by arranging elements in a logical and purposeful order to deliver a good
 * experience.
 * */
const App = () => (
  <>
    {/* The top navigation bar of the application */}
    <Navbar />

    {/* A placeholder for the main content that will vary based on routing */}
    <Outlet />

    {/* The footer of the application */}
    <Footer />
  </>
);

export default App;