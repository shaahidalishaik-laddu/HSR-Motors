import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, Search, Menu } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const pageTitles = {
    '/': 'Dashboard',
    '/leads': 'Lead Listing',
    '/kanban': 'Lead Management',
    '/analytics': 'Insights',
    '/settings': 'Settings',
    '/help': 'Help',
  };

  const currentTitle = location.pathname.startsWith('/leads/')
    ? 'Lead Details'
    : pageTitles[location.pathname] || 'HSR MotorHub';

  return (
    <nav className="bg-white h-16 border-b border-gray-200 flex justify-between items-center px-6 sticky top-0 z-10 shadow-sm">
      {/* Left side mobile menu toggle (hidden on desktop) and context title */}
      <div className="flex items-center">
        <button className="mr-4 text-slate-500 hover:text-slate-700 md:hidden focus:outline-none">
          <Menu size={20} />
        </button>
        <span className="text-xl font-semibold text-slate-800 tracking-tight hidden sm:block">{currentTitle}</span>
      </div>

      {/* Center global search bar (optional) */}
      <div className="flex-1 max-w-lg mx-6 hidden md:block">
        <div className="relative relative-group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
            placeholder="Search leads, campaigns, or contacts..."
          />
        </div>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          <Bell size={20} />
        </button>
        
        {/* Profile Dropdown area */}
        <div className="flex items-center cursor-pointer hover:bg-slate-50 p-1.5 pr-2 rounded-full transition-colors hidden sm:flex border border-transparent hover:border-slate-200">
          <img
            className="h-8 w-8 rounded-full border border-slate-200"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            alt="User avatar"
          />
          <span className="ml-2 text-sm font-medium text-slate-700">Harsha</span>
        </div>
      </div>
    </nav>
  );
}