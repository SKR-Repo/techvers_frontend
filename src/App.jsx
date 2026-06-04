import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { initGA, trackPageView } from "./utils/analytics";

import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(
      location.pathname + location.search
    );
  }, [location]);

  return null;
}

const App = () => {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <>
      <AnalyticsTracker />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;