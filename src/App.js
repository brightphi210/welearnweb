import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage';
import { LoginPage } from './pages/LoginPage';
import { ParentsPage } from './pages/ParentsPage';
import { TutorsPage } from './pages/TutorsPage';
import { AdminPage } from './pages/AdminPage';


//fonts

import "./fonts/Sherika Black.ttf"
import "./fonts/Sherika Bold.ttf"
import "./fonts/Sherika Medium.ttf"
import "./fonts/Sherika Regular.ttf"
import "./fonts/Sherika Light.ttf"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/'} element= {<LoginPage/>} />
          <Route path={"/dashboard"} element={<DashboardPage/>} />
          <Route path={'/parents'} element={<ParentsPage/>} />
          <Route path={'/tutors'} element={<TutorsPage/>} />
          <Route path={'/admin'} element={<AdminPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
