import React, { useState, useEffect } from 'react';
import Router from './routes/Router';
import Loading from './components/Loading';
import { useLocation } from 'react-router-dom';
import Navbar from './Utils/Navbar';
import Footer from "./Utils/Footer"

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleComplete(); // Complete the initial load

    // Simulating loading on route change
    // You might replace this with actual route change events in your app
    handleStart();
    setTimeout(() => {
      handleComplete();
    }, 1000);

    // Optional: Add event listeners for real route change events if not using react-router-dom v6
    // window.addEventListener('beforeunload', handleStart);
    // window.addEventListener('load', handleComplete);

    // Cleanup event listeners
    return () => {
      // window.removeEventListener('beforeunload', handleStart);
      // window.removeEventListener('load', handleComplete);
    };
  }, [location.pathname]); // Listen to route changes

  return (
    <>
      {loading && <Loading />}
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
