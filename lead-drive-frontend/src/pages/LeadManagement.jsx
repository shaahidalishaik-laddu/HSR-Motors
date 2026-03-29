import React from 'react';
import { useNavigate } from 'react-router-dom';
import LeadCard from '../components/LeadCard';
import { Settings2, Plus } from 'lucide-react';

const mockKanbanData = {
  'NEW': [
    { id: 1, name: 'Alice Smith', company: 'TechNova', email: 'alice@technova.com', phone: '+1 (555) 123-4567', dateAdded: 'Today' },
    { id: 2, name: 'Bob Johnson', company: 'BuildCorp', email: 'bob@buildcorp.com', phone: '+1 (555) 987-6543', dateAdded: 'Today' }
  ],
  'CONTACTED': [
    { id: 3, name: 'Charlie Davis', company: 'MediLife', email: 'charlie@medilife.com', phone: '+1 (555) 222-3333', dateAdded: 'Yesterday' }
  ],
  'INTERESTED': [
    { id: 4, name: 'Diana King', company: 'CloudNet', email: 'diana@cloudnet.com', phone: '+1 (555) 444-5555', dateAdded: '2d ago' }
  ],
  'NOT_INTERESTED': [],
  'CONVERTED': [
    { id: 5, name: 'Eve Peterson', company: 'EduSmart', email: 'eve@edusmart.com', phone: '+1 (555) 777-8888', dateAdded: '1w ago' }
  ]
};

export default function LeadManagement() {
  const navigate = useNavigate();

  const columns = ['NEW', 'CONTACTED', 'INTERESTED', 'NOT_INTERESTED', 'CONVERTED'];
  const handleBoardSettings = () => alert('Opening board settings...');
  const handleAddStage = () => alert('Adding a new stage...');
  const handleLeadClick = (id) => navigate(`/leads/${id}`);

  return (
    <div className="p-8 max-w-[1600px] w-full mx-auto flex flex-col h-full min-h-[calc(100vh-4rem)] bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800">Pipeline Board</h1>
          <p className="text-sm text-slate-500 mt-1">Manage qualification, assign follow-ups, and move leads through the funnel.</p>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" onClick={handleBoardSettings} className="flex items-center text-slate-600 bg-white border border-slate-300 px-3 py-1.5 rounded text-sm hover:bg-slate-50 transition">
            <Settings2 size={16} className="mr-2" />
            Board Settings
          </button>
          <button type="button" onClick={handleAddStage} className="flex items-center text-white bg-blue-600 border border-transparent px-3 py-1.5 rounded text-sm shadow-sm hover:bg-blue-700 transition">
            <Plus size={16} className="mr-2" />
            Add Stage
          </button>
        </div>
      </div>

      {/* Kanban Board Layout */}
      <div className="flex flex-1 gap-6 overflow-x-auto pb-4 hide-scrollbar">
        {columns.map((colName) => (
          <div key={colName} className="flex-shrink-0 w-80 bg-slate-50 rounded-xl p-4 flex flex-col border border-slate-200">
            {/* Column Header */}
            <div className="flex justify-between items-center mb-4 px-1">
              <h3 className="font-semibold text-slate-700 text-sm tracking-wide flex items-center">
                 {colName.replace('_', ' ')}
                 <span className="ml-2 bg-white text-slate-500 text-xs px-2 py-0.5 rounded-full border border-slate-200">
                   {mockKanbanData[colName].length}
                 </span>
              </h3>
              <button className="text-slate-400 hover:text-slate-600"><Plus size={16}/></button>
            </div>

            {/* Column Cards */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1 hide-scrollbar">
               {mockKanbanData[colName].map(lead => (
                 <LeadCard key={lead.id} lead={lead} onClick={() => handleLeadClick(lead.id)} />
               ))}
               
               {mockKanbanData[colName].length === 0 && (
                 <div className="h-24 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-sm font-medium text-slate-400">
                    No leads here
                 </div>
               )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}