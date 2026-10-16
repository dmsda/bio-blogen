import React from 'react';
import { useAppStore } from '../store/useAppStore';

export const ProfileEditor: React.FC = () => {
  const { profile, updateProfile } = useAppStore();

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-sm transition-all hover:border-neutral-700">
      <h2 className="text-lg font-bold text-white mb-6 flex items-center">
        <span className="bg-blue-500/20 text-blue-400 p-2 rounded-xl mr-3">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </span>
        Profil
      </h2>
      
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-neutral-400 mb-1.5">Nama Lengkap / Username</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => updateProfile({ name: e.target.value })}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
            placeholder="Misal: John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-400 mb-1.5">Bio Singkat</label>
          <textarea
            value={profile.bio}
            onChange={(e) => updateProfile({ bio: e.target.value })}
            rows={3}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
            placeholder="Tulis sesuatu tentang dirimu..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-400 mb-1.5">URL Foto Profil (Avatar)</label>
          <div className="flex gap-3">
            {profile.avatarUrl && (
              <img 
                src={profile.avatarUrl} 
                alt="Avatar Preview" 
                className="w-12 h-12 rounded-full object-cover border-2 border-neutral-800 bg-neutral-950 flex-shrink-0"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            )}
            <input
              type="text"
              value={profile.avatarUrl}
              onChange={(e) => updateProfile({ avatarUrl: e.target.value })}
              className="flex-1 w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              placeholder="https://contoh.com/foto.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
