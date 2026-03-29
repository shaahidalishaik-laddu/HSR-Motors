import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, KanbanSquare, Settings, HelpCircle, BarChart2 } from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Lead Listing', path: '/leads', icon: <Users size={20} /> },
    { name: 'Lead Management', path: '/kanban', icon: <KanbanSquare size={20} /> },
    { name: 'Insights', path: '/analytics', icon: <BarChart2 size={20} /> },
  ];

  const bottomItems = [
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
    { name: 'Help', path: '/help', icon: <HelpCircle size={20} /> },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen flex flex-col transition-all duration-300">
      {/* Brand */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3 font-bold shadow-lg shadow-blue-500/30">
          HM
        </div>
        <div>
          <p className="font-bold text-xl tracking-tight">HSR MotorHub</p>
          <p className="text-xs text-slate-400 tracking-wide">Lead operations</p>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
        <p className="px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Main Menu</p>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={`flex items-center px-3 py-2.5 rounded-lg transition-colors group ${
                isActive 
                  ? 'bg-blue-600/10 text-blue-500 font-medium' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span className={`mr-3 ${isActive ? 'text-blue-500' : 'text-slate-400 group-hover:text-white'}`}>
                {item.icon}
              </span>
              {item.name}
            </NavLink>
          );
        })}
      </div>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-slate-800 space-y-1">
        {bottomItems.map((item) => (
           <NavLink
             key={item.name}
             to={item.path}
             className="flex items-center px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
           >
             <span className="mr-3">{item.icon}</span>
             {item.name}
           </NavLink>
        ))}
        
        {/* User Card Miniature */}
        <div className="mt-4 rounded-3xl bg-slate-800/60 p-4 border border-slate-700">
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/150?u=harsha-admin" alt="Admin" className="w-11 h-11 rounded-full border-2 border-slate-700 bg-slate-700" />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">Harsha Admin</p>
              <p className="text-xs text-slate-400 truncate">harsha@deltax.com</p>
            </div>
          </div>
          <div className="mt-3 text-xs text-slate-400 space-y-2">
            <div className="flex items-center justify-between">
              <span>Role</span>
              <span className="text-white">Product Specialist</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Team</span>
              <span className="text-white">Lead Operations</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Status</span>
              <span className="text-emerald-400">Online</span>
            </div>
          </div>
          <button type="button" onClick={() => navigate('/profile')} className="mt-4 w-full text-left px-3 py-2 rounded-xl bg-slate-900 text-slate-200 hover:bg-slate-700 transition text-sm font-medium">
            View Profile
          </button>
        </div>
      </div>
    </aside>
  );
}