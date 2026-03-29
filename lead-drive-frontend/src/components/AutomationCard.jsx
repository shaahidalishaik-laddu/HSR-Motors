import React from 'react';

export default function AutomationCard({ title, description, action, onAction }) {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-lg border border-slate-800 hover:border-blue-500 transition">
      <div className="text-xs uppercase tracking-[0.24em] text-slate-400 mb-4">Automation</div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed mb-5">{description}</p>
      <button type="button" onClick={onAction} className="px-4 py-2 bg-blue-500 rounded-full text-sm font-semibold hover:bg-blue-400 transition">{action}</button>
    </div>
  );
}
