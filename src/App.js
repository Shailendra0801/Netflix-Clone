import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/browse' element={<Browse />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}
