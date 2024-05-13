import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage';
import { LoginPage } from './pages/LoginPage';
import { ParentsPage } from './pages/ParentsPage';
import { TutorsPage } from './pages/TutorsPage';
import { AdminPage } from './pages/AdminPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/login'} element= {<LoginPage/>} />
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
