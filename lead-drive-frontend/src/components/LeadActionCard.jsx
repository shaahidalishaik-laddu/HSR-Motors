import React from 'react';

export default function LeadActionCard({ title, value, description, buttonLabel, onAction }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm hover:shadow-md transition">
      <p className="text-sm text-slate-500 uppercase tracking-[0.18em] mb-2">{title}</p>
      <p className="text-3xl font-semibold text-slate-900 mb-3">{value}</p>
      <p className="text-sm text-slate-500 leading-relaxed mb-5">{description}</p>
      <button type="button" onClick={onAction} className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition">
        {buttonLabel}
      </button>
    </div>
  );
}
