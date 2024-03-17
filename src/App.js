import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/Admin/UserList';
import UserDetails from './components/Admin/UserDetails';
import AdminDashboard from './components/Admin/AdminDashboard';
import Navbar from './components/Navbar';
import CollaboratorRequest from './components/Admin/CollaboratorRequest';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleShowDetails = (user) => {
    setSelectedUser(user);
  };

  const handleBackToList = () => {
    setSelectedUser(null);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Admin-Dashboard" element={<AdminDashboard />} />
          <Route path='/Collaborator-Request' element={<CollaboratorRequest />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
