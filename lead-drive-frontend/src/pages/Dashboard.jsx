import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Users, TrendingUp, Presentation, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import AutomationCard from '../components/AutomationCard';

const mockChartData = [
  { name: 'Mon', leads: 400, conversions: 240 },
  { name: 'Tue', leads: 300, conversions: 139 },
  { name: 'Wed', leads: 200, conversions: 980 },
  { name: 'Thu', leads: 278, conversions: 390 },
  { name: 'Fri', leads: 189, conversions: 480 },
  { name: 'Sat', leads: 239, conversions: 380 },
  { name: 'Sun', leads: 349, conversions: 430 },
];

export default function Dashboard() {
  const handleDownloadReport = () => alert('Downloading report...');
  const handleAddNewLead = () => alert('Opening new lead creation...');
  const handleViewAllActivity = () => alert('Showing all activity...');
  const handleAutomationAction = (label) => alert(`${label} action triggered`);
  const handleGeoAssignment = () => alert('Assigning leads based on customer location...');
  const handleCalendarSync = () => alert('Syncing with Google Calendar...');
  const handleDocumentUpload = () => alert('Opening document upload area...');

  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-6 bg-slate-50 min-h-[calc(100vh-4rem)]">
      
      {/* Header */}
      <div className="flex justify-between items-center pb-2">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Dashboard Overview</h1>
          <p className="text-slate-500 text-sm mt-1">Here's what's happening with your leads today.</p>
        </div>
        <div className="flex gap-2">
           <button type="button" onClick={handleDownloadReport} className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 shadow-sm text-slate-700 transition">Download Report</button>
           <button type="button" onClick={handleAddNewLead} className="px-4 py-2 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 shadow-md shadow-blue-500/20 text-sm transition">Add New Lead</button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard title="Total Leads" value="1,248" trend="+12%" icon={<Users className="text-blue-500" size={24}/>} isPositive={true}/>
        <KpiCard title="Conversion Rate" value="34.2%" trend="+4.1%" icon={<TrendingUp className="text-emerald-500" size={24}/>} isPositive={true}/>
        <KpiCard title="Active Campaigns" value="12" trend="-2" icon={<Presentation className="text-amber-500" size={24}/>} isPositive={false}/>
        <KpiCard title="Pipeline Revenue" value="$42,800" trend="+8%" icon={<DollarSign className="text-indigo-500" size={24}/>} isPositive={true}/>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        <AutomationCard
          title="Smart follow-up"
          description="Auto-remind leads not contacted in 48 hours."
          action="Enable reminders"
          onAction={() => handleAutomationAction('Smart follow-up')}
        />
        <AutomationCard
          title="Auto lead scoring"
          description="Surface the hottest leads based on behavior and source." 
          action="Review scores"
          onAction={() => handleAutomationAction('Auto lead scoring')}
        />
        <AutomationCard
          title="Campaign pulse"
          description="Get automatic alerts for campaign performance dips." 
          action="View alerts"
          onAction={() => handleAutomationAction('Campaign pulse')}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <AutomationCard
          title="Geo-Based Assignment"
          description="Assign incoming leads automatically based on customer location."
          action="Enable geo routing"
          onAction={handleGeoAssignment}
        />
        <AutomationCard
          title="Calendar Integration"
          description="Schedule test drives and sync appointments with Google Calendar."
          action="Sync calendar"
          onAction={handleCalendarSync}
        />
        <AutomationCard
          title="Document Upload"
          description="Store customer documents like ID proofs and loan papers in one place."
          action="Upload docs"
          onAction={handleDocumentUpload}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800 mb-6 tracking-tight">Lead Volume vs Conversions</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorConversions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dx={-10}/>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}/>
                <Area type="monotone" dataKey="leads" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
                <Area type="monotone" dataKey="conversions" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorConversions)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Side Chart / Recent Activity */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <h3 className="text-lg font-semibold text-slate-800 mb-6 tracking-tight">Recent Activity</h3>
          <div className="flex-1 overflow-y-auto space-y-4">
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="flex gap-3">
                 <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                   <Users size={16} className="text-blue-600"/>
                 </div>
                 <div>
                   <p className="text-sm font-medium text-slate-800">Lead assigned to <span className="text-blue-600">Alex</span></p>
                   <p className="text-xs text-slate-500">2 hours ago • Source: Facebook</p>
                 </div>
              </div>
            ))}
          </div>
          <button type="button" onClick={handleViewAllActivity} className="w-full mt-4 py-2 border border-slate-200 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-50 transition">View All Activity</button>
        </div>
      </div>
    </div>
  );
}

function KpiCard({ title, value, trend, icon, isPositive }) {
  return (
    <div className="bg-white p-6 text-slate-800 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">{icon}</div>
        <div className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full ${isPositive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
          {isPositive ? <ArrowUpRight size={16}/> : <ArrowDownRight size={16}/>}
          {trend}
        </div>
      </div>
      <div>
        <h4 className="text-slate-500 text-sm font-medium tracking-wide mb-1">{title}</h4>
        <h2 className="text-3xl font-bold tracking-tight">{value}</h2>
      </div>
    </div>
  );
}