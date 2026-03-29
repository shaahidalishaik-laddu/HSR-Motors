import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import StatusBadge from '../components/StatusBadge';
import { ChevronLeft, Mail, Phone, MapPin, Building, Globe, Calendar, Clock, Edit2, Plus, ArrowRight } from 'lucide-react';

// Mock Data
const lead = {
  id: 1,
  name: 'Alice Smith',
  company: 'TechNova',
  role: 'Marketing Director',
  email: 'alice@technova.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  website: 'www.technova.com',
  source: 'Organic Search',
  status: 'INTERESTED',
  created: 'Oct 24, 2023',
  score: 85
};

const mockTimeline = [
  { id: 1, type: 'call', title: 'Initial Discovery Call', user: 'Harsha Admin', time: '2 hours ago', content: 'Discussed their Q3 requirements. They are interested in bulk pricing.' },
  { id: 2, type: 'status', title: 'Stage Updated', user: 'Harsha Admin', time: '1 day ago', content: 'Moved from CONTACTED to INTERESTED' },
  { id: 3, type: 'note', title: 'Internal Note', user: 'Alex P.', time: '2 days ago', content: 'Sent the presentation deck via email.' }
];

export default function LeadDetails() {
  const { id } = useParams();
  const [newNote, setNewNote] = useState('');
  const [status, setStatus] = useState(lead.status);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleScheduleCall = () => alert('Scheduling call with the lead...');
  const handleScheduleTestDrive = () => alert('Test drive scheduled successfully');
  const handleSyncCalendar = () => alert('Google Calendar synchronized successfully');
  const handleEditProfile = () => alert('Opening lead profile editor...');
  const handleLogActivity = () => {
    if (!newNote.trim()) {
      alert('Please enter a note before logging activity.');
      return;
    }
    alert('Activity logged successfully');
    setNewNote('');
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    alert(`Status updated to ${event.target.value}`);
  };
  const handleFilesChange = (event) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;
    setUploadedFiles((current) => [...current, ...files.map((file) => ({ name: file.name, size: file.size }))]);
  };
  const handleUploadDocuments = () => {
    if (uploadedFiles.length === 0) {
      alert('Please select documents to upload.');
      return;
    }
    alert('Customer documents uploaded successfully');
  };

  return (
    <div className="p-8 max-w-7xl mx-auto w-full bg-slate-50 min-h-[calc(100vh-4rem)]">
      {/* Back Nav */}
      <Link to="/leads" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 mb-6 transition">
        <ChevronLeft size={16} className="mr-1" /> Back to Leads
      </Link>

      {/* Header Profile Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-16 h-16 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 text-2xl font-bold shadow-sm">
            {lead.name.charAt(0)}
          </div>
          <div className="ml-5">
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center">
               {lead.name}
               <span className="ml-3 text-xs font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 border border-blue-200 tracking-wider">
                 SCORE: {lead.score}
               </span>
            </h1>
            <p className="text-slate-500 text-sm">{lead.role} at <span className="font-medium text-slate-700">{lead.company}</span></p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <select value={status} onChange={handleStatusChange} className="border border-slate-300 rounded-lg py-2 pl-3 pr-8 bg-white text-sm font-medium text-slate-700 focus:ring-blue-500 shadow-sm appearance-none outline-none">
             <option value="NEW">New</option>
             <option value="CONTACTED">Contacted</option>
             <option value="INTERESTED">Interested</option>
             <option value="CONVERTED">Converted</option>
             <option value="NOT_INTERESTED">Not Interested</option>
          </select>
          <button type="button" onClick={handleEditProfile} className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition inline-flex items-center text-sm font-medium">
             <Edit2 size={16} className="mr-2" />
             Edit Profile
          </button>
        </div>
      </div>

      <div className="bg-blue-600 text-white rounded-3xl p-6 shadow-lg border border-blue-500/20 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-blue-200 mb-2">Next action</p>
            <h2 className="text-xl font-semibold">Call back the lead with the updated pricing proposal</h2>
            <p className="text-sm text-blue-100 mt-2 max-w-2xl">The lead has shown strong interest and is ready for a personalized follow-up. Set a reminder to contact them within 24 hours.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button type="button" onClick={handleScheduleCall} className="inline-flex items-center justify-center rounded-full bg-white text-blue-700 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-slate-100 transition">Schedule call</button>
            <button type="button" onClick={handleScheduleTestDrive} className="inline-flex items-center justify-center rounded-full bg-slate-100 text-blue-700 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-slate-200 transition">Schedule test drive</button>
            <button type="button" onClick={handleSyncCalendar} className="inline-flex items-center justify-center rounded-full bg-slate-100 text-blue-700 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-slate-200 transition">Sync with Google Calendar</button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Customer Documents</h3>
            <p className="text-sm text-slate-500">Upload ID documents, loan papers, and test drive forms.</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_auto] items-center">
          <label className="block">
            <input type="file" multiple onChange={handleFilesChange} className="block w-full text-sm text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700" />
          </label>
          <button type="button" onClick={handleUploadDocuments} className="px-4 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition">Upload Documents</button>
        </div>
        <div className="mt-4">
          {uploadedFiles.length === 0 ? (
            <p className="text-sm text-slate-500">No documents uploaded yet.</p>
          ) : (
            <div className="space-y-3">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between rounded-2xl bg-slate-50 border border-slate-200 p-3">
                  <div>
                    <p className="text-sm font-medium text-slate-800">{file.name}</p>
                    <p className="text-xs text-slate-500">{(file.size / 1024).toFixed(1)} KB</p>
                  </div>
                  <span className="text-xs text-slate-500">Uploaded</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Details Overview */}
        <div className="space-y-6 lg:col-span-1">
          {/* Contact Details Container */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
             <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-5">Contact Info</h3>
             <div className="space-y-4">
                <DetailRow icon={<Mail size={16}/>} label="Email" value={<a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">{lead.email}</a>} />
                <DetailRow icon={<Phone size={16}/>} label="Phone" value={lead.phone} />
                <DetailRow icon={<Building size={16}/>} label="Company" value={lead.company} />
                <DetailRow icon={<MapPin size={16}/>} label="Location" value={lead.location} />
                <DetailRow icon={<Globe size={16}/>} label="Website" value={<a href={`https://${lead.website}`} target="_blank" className="text-blue-600 hover:underline">{lead.website}</a>} />
             </div>
          </div>

          {/* Lead Meta Container */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
             <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-5">Lead Details</h3>
             <div className="space-y-4">
                <DetailRow icon={<ArrowRight size={16}/>} label="Source" value={lead.source} />
                <DetailRow icon={<Clock size={16}/>} label="Status" value={<StatusBadge status={lead.status} />} />
                <DetailRow icon={<Calendar size={16}/>} label="Created At" value={lead.created} />
             </div>
          </div>
        </div>

        {/* Right Column: Activity Timeline */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Note Input */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
             <div className="flex gap-4 items-start">
               <div className="w-10 h-10 rounded-full border border-slate-200 bg-slate-100 flex items-center justify-center flex-shrink-0 flex-col overflow-hidden">
                 <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="me"/>
               </div>
               <div className="flex-1 space-y-3">
                 <textarea 
                   rows="3" 
                   value={newNote}
                   onChange={(e) => setNewNote(e.target.value)}
                   className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm outline-none resize-none"
                   placeholder="Log a call, meeting, or add a note..."
                 ></textarea>
                 <div className="flex justify-between items-center">
                    <div className="flex gap-2 text-slate-400">
                       <button className="p-1.5 hover:bg-slate-100 rounded-md transition"><Phone size={18}/></button>
                       <button className="p-1.5 hover:bg-slate-100 rounded-md transition"><Calendar size={18}/></button>
                    </div>
                    <button type="button" onClick={handleLogActivity} className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium shadow-md shadow-blue-500/20 hover:bg-blue-700 transition">Log Activity</button>
                 </div>
               </div>
             </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
             <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wider mb-6">Activity Timeline</h3>
             
             <div className="relative border-l-2 border-slate-100 ml-4 space-y-8 pb-4">
                {mockTimeline.map((item) => (
                   <div key={item.id} className="relative pl-6">
                      <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center">
                         <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                      </div>
                      
                      <div className="flex justify-between items-start mb-1">
                         <p className="font-semibold text-slate-800 text-sm tracking-tight">{item.title}</p>
                         <span className="text-xs text-slate-400 font-medium">{item.time}</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">{item.content}</p>
                      
                      <div className="flex items-center text-xs font-medium text-slate-500">
                         By {item.user}
                      </div>
                   </div>
                ))}
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}

function DetailRow({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between group">
      <div className="flex items-center text-slate-500 text-sm">
         <span className="mr-3 text-slate-400">{icon}</span>
         {label}
      </div>
      <div className="text-sm font-medium text-slate-800 text-right">
         {value}
      </div>
    </div>
  );
}