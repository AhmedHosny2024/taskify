import React from 'react';
import Taskify from './Components/Taskify/taskify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/login';
import Reg from './Components/reg/reg';
import Time from './Components/Attendance/attendance';
import Users from './Components/Users/Users';

function App() {
  
  return (
  // <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/reg" element={<Reg  />} />
      <Route path="/" element={<Taskify  />} />
      {/* <Route path="/time" element={<Time  />} />
      <Route path="/Users" element={<Users  />} /> */}
        {/* <Route path="/" element={<Taskify />}>
          <Route path="/Time" element={<Time />} />
          <Route path="/Users" element={<Users />} />
        </Route> */}
    </Routes>
  </Router>
    // <Taskify/>
  // </React.StrictMode>
  );
}

export default App;
