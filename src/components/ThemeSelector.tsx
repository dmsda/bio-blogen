import React from 'react';
import { useAppStore } from '../store/useAppStore';

const THEME_PRESETS = [
  {
    preset: 'dark',
    name: 'Midnight',
    backgroundColor: '#0a0a0a',
    textColor: '#ffffff',
    buttonColor: '#262626',
    buttonTextColor: '#ffffff',
    previewClasses: 'bg-[#0a0a0a] border-neutral-800',
    buttonPreviewClass: 'bg-[#262626]'
  },
  {
    preset: 'light',
    name: 'Minimal',
    backgroundColor: '#ffffff',
    textColor: '#171717',
    buttonColor: '#f5f5f5',
    buttonTextColor: '#171717',
    previewClasses: 'bg-white border-neutral-200',
    buttonPreviewClass: 'bg-[#f5f5f5] border border-neutral-200'
  },
  {
    preset: 'glass',
    name: 'Ocean Glass',
    backgroundColor: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
    textColor: '#ffffff',
    buttonColor: 'rgba(255, 255, 255, 0.2)',
    buttonTextColor: '#ffffff',
    previewClasses: 'bg-gradient-to-br from-blue-400 to-blue-600 border-white/20',
    buttonPreviewClass: 'bg-white/20 backdrop-blur-sm'
  },
];

export const ThemeSelector: React.FC = () => {
  const { theme, updateTheme } = useAppStore();

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-sm transition-all hover:border-neutral-700">
      <h2 className="text-lg font-bold text-white mb-6 flex items-center">
        <span className="bg-blue-500/20 text-blue-400 p-2 rounded-xl mr-3">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </span>
        Desain & Tema
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {THEME_PRESETS.map((preset) => (
          <button
            key={preset.preset}
            onClick={() => updateTheme({
              preset: preset.preset,
              backgroundColor: preset.backgroundColor,
              textColor: preset.textColor,
              buttonColor: preset.buttonColor,
              buttonTextColor: preset.buttonTextColor,
            })}
            className={`group relative flex flex-col items-center p-3 rounded-xl border-2 transition-all duration-300 overflow-hidden ${
              theme.preset === preset.preset
                ? 'border-blue-500 ring-2 ring-blue-500/20 bg-blue-500/5'
                : 'border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/50'
            }`}
          >
            {/* Preview Bubble */}
            <div className={`w-full aspect-[4/3] rounded-lg mb-3 border flex flex-col items-center justify-center p-2 gap-1.5 shadow-inner ${preset.previewClasses}`}>
              <div className="w-8 h-8 rounded-full bg-current opacity-20" style={{ color: preset.textColor }}></div>
              <div className={`w-10 h-2 rounded-full ${preset.buttonPreviewClass}`}></div>
              <div className={`w-10 h-2 rounded-full ${preset.buttonPreviewClass}`}></div>
            </div>
            
            <span className="text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors">
              {preset.name}
            </span>
            
            {/* Active Indicator Checkmark */}
            {theme.preset === preset.preset && (
              <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-0.5 shadow-sm">
                <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Kustomisasi Lanjutan */}
      <div className="mt-8 border-t border-neutral-800 pt-6">
        <h3 className="text-sm font-bold text-neutral-300 mb-4 flex items-center gap-2">
          <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          Kustomisasi Lanjutan
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-neutral-400">Background Utama</label>
            <div className="flex items-center gap-2 bg-neutral-950 p-2 rounded-xl border border-neutral-800 focus-within:border-blue-500 transition-colors">
              <input
                type="color"
                value={theme.backgroundColor.startsWith('#') ? theme.backgroundColor : '#000000'}
                onChange={(e) => updateTheme({ backgroundColor: e.target.value, preset: 'custom' })}
                className="w-7 h-7 rounded cursor-pointer border-0 p-0 bg-transparent shrink-0"
              />
              <input
                type="text"
                value={theme.backgroundColor}
                onChange={(e) => updateTheme({ backgroundColor: e.target.value, preset: 'custom' })}
                className="bg-transparent text-sm text-white w-full focus:outline-none"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
            <label className="text-xs text-neutral-400">URL Gambar / CSS Gradient</label>
            <div className="flex items-center gap-2 bg-neutral-950 p-2 rounded-xl border border-neutral-800 focus-within:border-blue-500 transition-colors">
              <input
                type="text"
                value={theme.backgroundImage || ''}
                onChange={(e) => updateTheme({ backgroundImage: e.target.value, preset: 'custom' })}
                className="bg-transparent text-sm text-white w-full focus:outline-none"
                placeholder="https://... atau linear-gradient(...)"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-neutral-400">Teks Utama</label>
            <div className="flex items-center gap-2 bg-neutral-950 p-2 rounded-xl border border-neutral-800 focus-within:border-blue-500 transition-colors">
              <input
                type="color"
                value={theme.textColor.startsWith('#') ? theme.textColor : '#ffffff'}
                onChange={(e) => updateTheme({ textColor: e.target.value, preset: 'custom' })}
                className="w-7 h-7 rounded cursor-pointer border-0 p-0 bg-transparent shrink-0"
              />
              <input
                type="text"
                value={theme.textColor}
                onChange={(e) => updateTheme({ textColor: e.target.value, preset: 'custom' })}
                className="bg-transparent text-sm text-white w-full focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-neutral-400">Warna Tombol (Link Kustom)</label>
            <div className="flex items-center gap-2 bg-neutral-950 p-2 rounded-xl border border-neutral-800 focus-within:border-blue-500 transition-colors">
              <input
                type="color"
                value={theme.buttonColor.startsWith('#') ? theme.buttonColor : '#3b82f6'}
                onChange={(e) => updateTheme({ buttonColor: e.target.value, preset: 'custom' })}
                className="w-7 h-7 rounded cursor-pointer border-0 p-0 bg-transparent shrink-0"
              />
              <input
                type="text"
                value={theme.buttonColor}
                onChange={(e) => updateTheme({ buttonColor: e.target.value, preset: 'custom' })}
                className="bg-transparent text-sm text-white w-full focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-neutral-400">Teks Tombol (Link Kustom)</label>
            <div className="flex items-center gap-2 bg-neutral-950 p-2 rounded-xl border border-neutral-800 focus-within:border-blue-500 transition-colors">
              <input
                type="color"
                value={theme.buttonTextColor.startsWith('#') ? theme.buttonTextColor : '#ffffff'}
                onChange={(e) => updateTheme({ buttonTextColor: e.target.value, preset: 'custom' })}
                className="w-7 h-7 rounded cursor-pointer border-0 p-0 bg-transparent shrink-0"
              />
              <input
                type="text"
                value={theme.buttonTextColor}
                onChange={(e) => updateTheme({ buttonTextColor: e.target.value, preset: 'custom' })}
                className="bg-transparent text-sm text-white w-full focus:outline-none"
              />
            </div>
          </div>

          <div className="col-span-2 flex flex-col gap-1.5 mt-2">
            <label className="text-xs text-neutral-400">Efek Hover Tombol</label>
            <div className="relative">
              <select
                value={theme.buttonHoverStyle || 'scale'}
                onChange={(e) => updateTheme({ buttonHoverStyle: e.target.value as any, preset: 'custom' })}
                className="appearance-none w-full bg-neutral-950 border border-neutral-800 text-sm text-white rounded-xl px-4 py-2.5 pr-10 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
              >
                <option value="scale">Scale (Membesar Sedikit)</option>
                <option value="shift">Shift (Naik Melayang)</option>
                <option value="glow">Glow (Bercahaya)</option>
                <option value="none">None (Tanpa Efek)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
