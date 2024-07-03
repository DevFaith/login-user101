import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Logout from './pages/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
          {/* Add a default route or redirect as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
