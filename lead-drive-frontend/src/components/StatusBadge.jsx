import React from 'react';

export default function StatusBadge({ status }) {
  let colorClasses = '';
  switch (status.toUpperCase()) {
    case 'NEW':
      colorClasses = 'bg-blue-50 text-blue-700 border-blue-200';
      break;
    case 'CONTACTED':
      colorClasses = 'bg-purple-50 text-purple-700 border-purple-200';
      break;
    case 'INTERESTED':
      colorClasses = 'bg-amber-50 text-amber-700 border-amber-200';
      break;
    case 'NOT_INTERESTED':
      colorClasses = 'bg-rose-50 text-rose-700 border-rose-200';
      break;
    case 'CONVERTED':
      colorClasses = 'bg-emerald-50 text-emerald-700 border-emerald-200';
      break;
    default:
      colorClasses = 'bg-gray-50 text-gray-700 border-gray-200';
  }

  return (
    <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${colorClasses}`}>
      {status.replace('_', ' ')}
    </span>
  );
}