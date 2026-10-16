import React, { useState } from 'react';

interface LayoutProps {
  editorContent: React.ReactNode;
  previewContent: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ editorContent, previewContent }) => {
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans overflow-hidden flex flex-col md:flex-row">
      {/* Mobile Tabs */}
      <div className="md:hidden flex border-b border-neutral-800 bg-neutral-950 z-10 relative">
        <button
          className={`flex-1 py-4 text-sm font-medium transition-colors ${
            activeTab === 'editor' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-neutral-400'
          }`}
          onClick={() => setActiveTab('editor')}
        >
          Editor
        </button>
        <button
          className={`flex-1 py-4 text-sm font-medium transition-colors ${
            activeTab === 'preview' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-neutral-400'
          }`}
          onClick={() => setActiveTab('preview')}
        >
          Preview
        </button>
      </div>

      {/* Editor Panel (Left on Desktop) */}
      <div
        className={`${
          activeTab === 'editor' ? 'flex' : 'hidden'
        } md:flex flex-col w-full md:w-1/2 lg:w-7/12 border-r border-neutral-800 bg-neutral-950 h-[calc(100vh-53px)] md:h-screen overflow-y-auto`}
      >
        {/* Header Editor */}
        <div className="sticky top-0 z-10 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-black text-sm shadow-lg shadow-blue-500/20 text-white">
              B
            </div>
            <div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">BioBlogger</h1>
              <p className="text-xs text-neutral-400">Bio Link Generator</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#/showcase"
              className="text-xs sm:text-sm font-semibold text-sky-400 hover:text-white transition-colors flex items-center gap-1.5 bg-sky-500/10 hover:bg-sky-500/20 px-3 py-1.5 rounded-lg border border-sky-500/30 shadow-sm"
            >
              <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span>Showcase</span>
            </a>
            <a
              href="#/cara-penggunaan"
              className="text-xs sm:text-sm font-semibold text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 px-3 py-1.5 rounded-lg border border-neutral-800"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="hidden sm:inline">Panduan</span>
            </a>
            <a
              href="https://github.com/dmsda/bio-blogen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="text-neutral-400 hover:text-white transition-colors p-1.5 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Slot Adsense */}
        <div className="w-full bg-neutral-900 p-4 border-b border-neutral-800 flex items-center justify-center min-h-[90px] pointer-events-none opacity-50">
          <span className="text-neutral-500 text-sm font-mono">[ Slot Iklan AdSense - Safe Area ]</span>
        </div>

        {/* Editor Content Area */}
        <div className="p-6 max-w-3xl w-full mx-auto space-y-6 pb-32">
          {editorContent}
        </div>
      </div>

      {/* Preview Panel (Right on Desktop) */}
      <div
        className={`${
          activeTab === 'preview' ? 'flex' : 'hidden'
        } md:flex flex-col w-full md:w-1/2 lg:w-5/12 bg-neutral-900 h-[calc(100vh-53px)] md:h-screen overflow-y-auto items-center justify-start pt-10 pb-20 relative`}
      >
        {/* Background Pattern for Preview Area */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        {previewContent}
      </div>
    </div>
  );
};
