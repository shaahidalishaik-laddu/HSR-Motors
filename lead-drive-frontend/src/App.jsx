import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import LeadListing from './pages/LeadListing';
import LeadDetails from './pages/LeadDetails';
import LeadManagement from './pages/LeadManagement';
import AdminProfile from './pages/AdminProfile';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden selection:bg-blue-100 selection:text-blue-900">
        <Sidebar />
        
        <div className="flex-1 flex flex-col relative overflow-hidden">
          <Navbar />
          
          {/* Main scrollable content area */}
          <main className="flex-1 overflow-y-auto overflow-x-hidden p-0 relative focus:outline-none">
            <Routes>
               <Route path="/" element={<Dashboard />} />
               <Route path="/leads" element={<LeadListing />} />
               <Route path="/leads/:id" element={<LeadDetails />} />
               <Route path="/kanban" element={<LeadManagement />} />
               <Route path="/profile" element={<AdminProfile />} />
               {/* Placeholders for sidebar nav */}
               <Route path="/analytics" element={<Dashboard />} />
               <Route path="/settings" element={<Dashboard />} />
               <Route path="/help" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
export default App;