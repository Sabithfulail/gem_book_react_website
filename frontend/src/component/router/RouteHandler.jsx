import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../../pages/signin/SignIn';
import SignUp from '../../pages/signup/SignUp';
import DashBoard from '../DashBoard/DashBoard';

const RouteHandler = () => {
  return (
    <Routes>
      {/* Define routes for different pages */}
      <Route path="/" element={<SignUp />} /> {/* Default route */}
      <Route path="/signin" element={<SignIn />} /> {/* Route for SignIn page */}
      <Route path="/signup" element={<SignUp />} /> {/* Route for SignUp page */}
      <Route path="/dashboard/*" element={<DashBoard />} /> {/* Route for Dashboard and its nested routes */}
    </Routes>
  );
};

export default RouteHandler;
