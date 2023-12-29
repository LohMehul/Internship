import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './PrivateRoute';
import Login from './Login';
import Logout from './Logout';
import Dashboard from './Dashboard'; // Create a Dashboard component for demonstration

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <ProtectedRoute path="/dashboard" element={<Dashboard />} />
          {/* Add more protected routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;