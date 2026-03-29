import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarCheck, Users, MessageSquare, Briefcase, Mail, MapPin } from 'lucide-react';

const admin = {
  name: 'Harsha Admin',
  email: 'harsha@deltax.com',
  role: 'Product Specialist',
  team: 'Lead Operations',
  status: 'Online',
  location: 'Bangalore, India',
  joined: 'Jan 15, 2024',
  phone: '+91 98765 43210',
  bio: 'Harsha leads the HSR MotorHub product operations team, helping sales and business users manage leads, collaborate in real-time, and optimize deal conversion workflows.',
};

const adminEntries = [
  { id: 1, title: 'Updated lead status for Alice Smith', detail: 'Moved from CONTACTED to INTERESTED.', time: '2 hours ago' },
  { id: 2, title: 'Assigned 5 new leads to the sales team', detail: 'Distributed leads evenly across agents based on capacity.', time: 'Yesterday' },
  { id: 3, title: 'Created follow-up reminder campaign', detail: 'Activated reminders for leads pending contact over 48 hours.', time: '2 days ago' },
  { id: 4, title: 'Reviewed lead quality scorecard', detail: 'Flagged 12 high-priority leads for immediate outreach.', time: '3 days ago' },
  { id: 5, title: 'Conducted pipeline health review', detail: 'Checked conversion trends for the week and adjusted priorities.', time: '1 week ago' },
];

export default function AdminProfile() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full bg-slate-50 min-h-[calc(100vh-4rem)]">
      <div className="flex items-center gap-3 mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition">
          <ArrowLeft size={18} /> Back to Dashboard
        </Link>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-6">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-3xl bg-blue-500 text-white text-3xl font-semibold flex items-center justify-center shadow-sm">H</div>
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">{admin.name}</h1>
              <p className="text-sm text-slate-500">{admin.role} • {admin.team}</p>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-slate-400" />
              <span>{admin.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-slate-400" />
              <span>{admin.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <CalendarCheck size={16} className="text-slate-400" />
              <span>Joined {admin.joined}</span>
            </div>
          </div>

          <div className="mt-6 rounded-3xl bg-slate-50 border border-slate-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-slate-800">Profile status</p>
              <span className="text-xs uppercase tracking-[0.24em] text-emerald-500">{admin.status}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">{admin.bio}</p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3">
            <div className="rounded-3xl bg-blue-600 text-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-blue-200">Leads handled</p>
              <p className="text-3xl font-semibold mt-2">1.2k</p>
            </div>
            <div className="rounded-3xl bg-slate-900 text-white p-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Conversion rate</p>
              <p className="text-3xl font-semibold mt-2">34.2%</p>
            </div>
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Active campaigns</p>
              <p className="text-3xl font-semibold mt-2">12</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-sm font-semibold text-slate-800">Activity entries</p>
                <p className="text-sm text-slate-500">Recent actions performed by Harsha Admin.</p>
              </div>
              <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition">Export log</button>
            </div>
            <div className="space-y-4">
              {adminEntries.map((entry) => (
                <div key={entry.id} className="rounded-3xl bg-slate-50 border border-slate-200 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{entry.title}</p>
                      <p className="text-sm text-slate-500 mt-1">{entry.detail}</p>
                    </div>
                    <span className="text-xs text-slate-400">{entry.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Profile insights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-3xl bg-slate-50 p-4 border border-slate-200">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Average response time</p>
                <p className="text-2xl font-semibold text-slate-900 mt-2">18m</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4 border border-slate-200">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Active sessions</p>
                <p className="text-2xl font-semibold text-slate-900 mt-2">3</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4 border border-slate-200">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Lead reviews</p>
                <p className="text-2xl font-semibold text-slate-900 mt-2">24</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4 border border-slate-200">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Notes logged</p>
                <p className="text-2xl font-semibold text-slate-900 mt-2">16</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
