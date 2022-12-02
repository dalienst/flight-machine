import React, {Suspense} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "../layouts/Navbar"
import { publicLinks } from './links';

const Home = React.lazy(() => import("../pages/Home"));
const Flights = React.lazy(() => import("../pages/Flights"));
const FlightDetail = React.lazy(() => import("../pages/FlightDetail"));

function BaseRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Just a moment...</div>}>
        <Navbar />
        <Routes>
          <Route exact path={publicLinks.Home} element={<Home />} />
          <Route path={publicLinks.Flights} element={<Flights />} />
          <Route path={publicLinks.FlightDetail} element={<FlightDetail/>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default BaseRouter;
