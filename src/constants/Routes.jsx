import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "../layouts/Navbar"
import { publicLinks } from './links';

const Home = React.lazy(() => import("../pages/Home"));
const Flights = React.lazy(() => import("../pages/Flights"));

function BaseRouter() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path={publicLinks.Home} element={<Home />} />
            <Route exact path={publicLinks.Flights} element={<Flights />} />
        </Routes>
    </Router>
  )
}

export default BaseRouter;
