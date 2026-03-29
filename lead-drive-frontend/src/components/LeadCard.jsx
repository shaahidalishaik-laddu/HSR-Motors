import React from 'react';
import { Mail, Phone, Calendar, MoreVertical } from 'lucide-react';

export default function LeadCard({ lead, onClick }) {
  return (
    <div
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`bg-white p-4 rounded-xl shadow-sm border border-slate-200 ${onClick ? 'cursor-pointer hover:shadow-md' : 'cursor-default'} transition-shadow group relative`}>
      <div className="flex justify-between items-start mb-3">
        <h4 className="font-semibold text-slate-800 tracking-tight">{lead.name}</h4>
        <button className="text-slate-400 hover:text-slate-600 focus:outline-none">
          <MoreVertical size={16} />
        </button>
      </div>

      <p className="text-xs font-medium text-slate-500 mb-4">{lead.company}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-xs text-slate-500">
          <Mail size={14} className="mr-2 text-slate-400" />
          <span className="truncate">{lead.email}</span>
        </div>
        <div className="flex items-center text-xs text-slate-500">
          <Phone size={14} className="mr-2 text-slate-400" />
          {lead.phone}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-3">
        <div className="flex -space-x-2">
           <img className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" src={`https://i.pravatar.cc/150?u=${lead.id}`} alt="Agent" />
        </div>
        <div className="flex items-center text-xs font-medium text-slate-400">
           <Calendar size={12} className="mr-1"/>
           {lead.dateAdded}
        </div>
      </div>
    </div>
  );
}