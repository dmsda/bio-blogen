import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { generateBloggerXML } from '../utils/generateBloggerXML';
import { generateHTML } from '../utils/generateHTML';

export const ExportButton: React.FC = () => {
  const state = useAppStore();

  const handleExportBlogger = () => {
    const xmlContent = generateBloggerXML(state);
    const blob = new Blob([xmlContent], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `biolink-theme-${Date.now()}.xml`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleExportHTML = () => {
    const htmlContent = generateHTML(state);
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `bio-link-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-8 mb-4 flex justify-end gap-3">
      <button
        onClick={handleExportHTML}
        className="bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 border border-neutral-700 shadow-lg"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        Export HTML
      </button>
      <button
        onClick={handleExportBlogger}
        className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-2xl font-bold shadow-lg shadow-blue-500/30 flex items-center gap-2 transition-all hover:scale-105"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Export XML Blogger
      </button>
    </div>
  );
};
