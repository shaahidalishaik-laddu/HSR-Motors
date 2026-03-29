import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';
import LeadActionCard from '../components/LeadActionCard';
import { Mail, Phone, Filter, ChevronDown, Download, Search, Settings } from 'lucide-react';

const mockTableData = [
  { id: 1, name: 'Alice Smith', company: 'TechNova', email: 'alice@technova.com', phone: '+1 (555) 123-4567', source: 'Website', status: 'NEW', date: 'Oct 24, 2023', agent: 'Harsha Admin' },
  { id: 2, name: 'Bob Johnson', company: 'BuildCorp', email: 'bob@buildcorp.com', phone: '+1 (555) 987-6543', source: 'Facebook Ads', status: 'INTERESTED', date: 'Oct 23, 2023', agent: 'Alex P.' },
  { id: 3, name: 'Charlie Davis', company: 'MediLife', email: 'charlie@medilife.com', phone: '+1 (555) 222-3333', source: 'Referral', status: 'CONTACTED', date: 'Oct 21, 2023', agent: 'Harsha Admin' },
  { id: 4, name: 'Diana King', company: 'CloudNet', email: 'diana@cloudnet.com', phone: '+1 (555) 444-5555', source: 'Google Ads', status: 'CONVERTED', date: 'Oct 19, 2023', agent: 'Sarah M.' },
];

export default function LeadListing() {
  const navigate = useNavigate();

  const handleExport = () => alert('Exporting CSV...');
  const handleNewLead = () => alert('Opening new lead form...');
  const handleFilter = (label) => alert(`Filter ${label} clicked`);
  const handleSettings = () => alert('Opening lead settings...');
  const handleNextPage = () => alert('Loading next page...');
  const handleLeadClick = (id) => navigate(`/leads/${id}`);

  return (
    <div className="p-8 max-w-7xl mx-auto w-full bg-slate-50 min-h-[calc(100vh-4rem)]">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800">All Leads</h1>
          <p className="text-sm text-slate-500 mt-1">Manage, filter, and assign leads to your sales agents.</p>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => alert('Exporting CSV...') } className="flex items-center px-4 py-2 border border-slate-300 text-slate-700 bg-white shadow-sm rounded-lg hover:bg-slate-50 focus:outline-none transition">
            <Download size={16} className="mr-2" />
            Export CSV
          </button>
          <button type="button" onClick={() => alert('Opening new lead form...')} className="px-4 py-2 bg-blue-600 text-white shadow-md shadow-blue-500/20 rounded-lg hover:bg-blue-700 transition font-medium">
            New Lead
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
        <LeadActionCard title="Auto-Assign Leads" value="12 pending" description="Route new leads to the right sales rep automatically." buttonLabel="Run auto-assign" onAction={() => alert('Auto-assign executed')} />
        <LeadActionCard title="Follow-up Reminder" value="8 due" description="Remind your team to contact leads who are waiting for next touch." buttonLabel="Review leads" onAction={() => alert('Opening follow-up review')} />
        <LeadActionCard title="Lead Quality" value="85%" description="See the percentage of high-priority leads ready for outreach." buttonLabel="View quality" onAction={() => alert('Viewing lead quality dashboard')} />
        <LeadActionCard title="Geo-Based Assignment" value="Location aware" description="Assign leads automatically based on customer location." buttonLabel="Assign by region" onAction={() => alert('Assigning leads by location...')} />
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Table Filters & Search */}
        <div className="p-5 border-b border-slate-200 flex justify-between items-center bg-white gap-4 flex-wrap">
          <div className="flex flex-1 min-w-[300px] max-w-md relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400 group-focus-within:text-blue-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm transition-colors"
              placeholder="Search leads by name, email, or company..."
            />
          </div>
          
          <div className="flex items-center gap-2">
            <FilterButton label="Status" value="All" onAction={() => handleFilter('Status')} />
            <FilterButton label="Source" value="Any" onAction={() => handleFilter('Source')} />
            <FilterButton label="Agent" value="Me" onAction={() => handleFilter('Agent')} />
            
            <button type="button" onClick={handleSettings} className="p-2 border border-slate-300 rounded-lg text-slate-500 hover:text-slate-700 bg-white shadow-sm hover:bg-slate-50 transition ml-2">
               <Settings size={18} />
            </button>
          </div>
        </div>

        {/* The Table */}
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 border-b border-slate-200 text-xs tracking-wider font-semibold uppercase">
                <th className="px-6 py-4 w-10">
                   <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                </th>
                <th className="px-6 py-4">Lead Contact</th>
                <th className="px-6 py-4 hidden md:table-cell">Contact Details</th>
                <th className="px-6 py-4">Source</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4">Assigned To</th>
                <th className="px-6 py-4">Created Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {mockTableData.map((lead) => (
                <tr key={lead.id} onClick={() => handleLeadClick(lead.id)} className="hover:bg-slate-50 transition-colors group cursor-pointer">
                  <td className="px-6 py-4">
                     <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  </td>
                  <td className="px-6 py-4">
                     <div className="flex items-center">
                       <div className="w-9 h-9 border border-white bg-indigo-100 text-indigo-700 font-bold rounded-full flex justify-center items-center text-sm shadow-sm">
                         {lead.name.charAt(0)}
                       </div>
                       <div className="ml-3">
                         <p className="text-sm font-semibold text-slate-800">{lead.name}</p>
                         <p className="text-xs text-slate-500">{lead.company}</p>
                       </div>
                     </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                     <div className="space-y-1">
                       <p className="text-xs text-slate-600 flex items-center"><Mail size={13} className="mr-1.5 text-slate-400"/> {lead.email}</p>
                       <p className="text-xs text-slate-600 flex items-center"><Phone size={13} className="mr-1.5 text-slate-400"/> {lead.phone}</p>
                     </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600">{lead.source}</td>
                  <td className="px-6 py-4 text-center">
                     <StatusBadge status={lead.status} />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-sm text-slate-700">
                      <img src={`https://i.pravatar.cc/150?u=${lead.id * 123}`} alt="agent" className="w-6 h-6 rounded-full mr-2 bg-slate-200 border border-slate-200"/>
                      {lead.agent}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                     {lead.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500 bg-slate-50">
           <p>Showing <span className="font-medium text-slate-800">1</span> to <span className="font-medium text-slate-800">4</span> of <span className="font-medium text-slate-800">4</span> results</p>
           <div className="flex gap-2">
              <button disabled className="px-3 py-1 border border-slate-200 rounded-md bg-white text-slate-400 cursor-not-allowed">Previous</button>
              <button type="button" onClick={handleNextPage} className="px-3 py-1 border border-slate-300 rounded-md bg-white text-slate-700 hover:bg-slate-50 transition">Next</button>
           </div>
        </div>

      </div>
    </div>
  );
}

function FilterButton({ label, value, onAction }) {
  return (
    <button type="button" onClick={onAction} className="flex items-center px-3 py-2 border border-slate-300 rounded-lg bg-white shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
      <span className="text-slate-500 font-normal mr-2">{label}:</span>
      {value}
      <ChevronDown size={16} className="ml-2 text-slate-400" />
    </button>
  );
}