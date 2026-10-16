import React from 'react';
import { useAppStore } from '../store/useAppStore';

export const SeoEditor: React.FC = () => {
  const { seo, updateSeo } = useAppStore();

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-sm mt-6 transition-all hover:border-neutral-700">
      <h2 className="text-lg font-bold text-white mb-6 flex items-center">
        <span className="bg-blue-500/20 text-blue-400 p-2 rounded-xl mr-3">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        Pengaturan SEO
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-neutral-300 mb-1.5">Judul Halaman (Meta Title)</label>
          <input
            type="text"
            value={seo.title}
            onChange={(e) => updateSeo({ title: e.target.value })}
            className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Misal: Kumpulan Link John Doe"
          />
          <p className="text-xs text-neutral-500 mt-1">Muncul di tab browser dan hasil pencarian Google.</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-neutral-300 mb-1.5">Deskripsi Halaman (Meta Description)</label>
          <textarea
            value={seo.description}
            onChange={(e) => updateSeo({ description: e.target.value })}
            className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue-500 transition-colors min-h-[80px] resize-none"
            placeholder="Tulis ringkasan singkat tentang halaman ini..."
          />
          <p className="text-xs text-neutral-500 mt-1">Muncul saat link dibagikan ke WhatsApp, Instagram, Facebook, dll.</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-neutral-300 mb-1.5">URL Favicon (Ikon Tab - Opsional)</label>
          <input
            type="url"
            value={seo.faviconUrl}
            onChange={(e) => updateSeo({ faviconUrl: e.target.value })}
            className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-xl px-4 py-2.5 focus:outline-none focus:border-blue-500 transition-colors text-sm"
            placeholder="https://contoh.com/ikon.png"
          />
        </div>
      </div>
    </div>
  );
};
