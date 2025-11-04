import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ContactPage from "./components/Contact/Contact";
import Service from "./components/Services/Service";
import SubService from "./components/Services/SubService";
import {
  householdTasks,
  participateCommunity,
  groupCentreBasedActivities,
  respiteCare,
  dailyTaskSharedLiving,
  communityNursingCare,
  assistTravelTransport,
  overnightSupport,
} from "./constant";
import { useEffect } from "react";
import Lenis from "lenis";

function App() {
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [pathname]);

  // useEffect(() => {
  //   const data = async () => {
  //     const response = await fetch("https://email-backend-r8co.onrender.com/", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   };
  //   data();
  // }, []);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Service />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route
        path='/services/participate-community'
        element={<SubService serviceDetails={participateCommunity} />}
      />
      <Route
        path='/services/household-tasks'
        element={<SubService serviceDetails={householdTasks} />}
      />
      <Route
        path='/services/group-centre-based-activities'
        element={<SubService serviceDetails={groupCentreBasedActivities} />}
      />
      <Route
        path='/services/respite-care'
        element={<SubService serviceDetails={respiteCare} />}
      />
      <Route
        path='/services/daily-task-shared-living'
        element={<SubService serviceDetails={dailyTaskSharedLiving} />}
      />
      {/* <Route
        path='/services/community-nursing-care'
        element={<SubService serviceDetails={communityNursingCare} />}
      /> */}
      <Route
        path='/services/assist-travel-transport'
        element={<SubService serviceDetails={assistTravelTransport} />}
      />
      <Route
        path='/services/overnight-support'
        element={<SubService serviceDetails={overnightSupport} />}
      />
    </Routes>
  );
}

export default App;
