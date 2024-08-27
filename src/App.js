import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/login"} element={<Login />} />

          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/*" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
