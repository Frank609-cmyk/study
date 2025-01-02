// App
// Copyright FRANK CORPORATION. All rights reserved.
import React from 'react';
import Login from './components/Login/Login';
import Dashboard from './components/InfoForm/Dashboard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const App = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Login />}></Route>、
        <Route path="/main" element={<Dashboard />}></Route>
      </Routes>
    </Router>

  );
};

export default App;
