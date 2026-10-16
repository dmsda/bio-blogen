import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { platforms } from '../utils/platforms';

export const LivePreview: React.FC = () => {
  const { profile, links, theme } = useAppStore();

  const activeLinks = links.filter(link => link.isActive);

  const getHoverClass = (style?: string) => {
    switch (style) {
      case 'shift': return 'hover:-translate-y-1 active:translate-y-0 shadow-sm hover:shadow-lg';
      case 'glow': return 'hover:shadow-[0_0_15px_currentColor] hover:brightness-110 shadow-sm';
      case 'none': return 'shadow-sm';
      case 'scale':
      default:
        return 'hover:scale-[1.02] active:scale-[0.98] shadow-sm';
    }
  };

  const hoverClass = getHoverClass(theme.buttonHoverStyle);

  return (
    <div className="relative w-full max-w-[320px] aspect-[9/19] rounded-[40px] border-[8px] border-neutral-950 shadow-2xl overflow-hidden bg-black mx-auto shrink-0 flex flex-col ring-1 ring-white/10">
      {/* Notch Mockup */}
      <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50 pointer-events-none">
        <div className="w-32 h-5 bg-neutral-950 rounded-b-2xl"></div>
      </div>

      {/* Preview Container */}
      <div 
        className="flex-1 overflow-y-auto pt-14 pb-10 px-6 scrollbar-hide relative flex flex-col items-center justify-start text-center"
        style={{
          backgroundColor: theme.backgroundColor,
          backgroundImage: theme.backgroundImage 
            ? (theme.backgroundImage.startsWith('http') || theme.backgroundImage.startsWith('data:') 
                ? `url('${theme.backgroundImage}')` 
                : theme.backgroundImage)
            : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: theme.textColor,
        }}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8 mt-4 z-10 w-full">
          {profile.avatarUrl ? (
            <img 
              src={profile.avatarUrl} 
              alt={profile.name} 
              className="w-24 h-24 rounded-full object-cover mb-4 border-2 shadow-sm"
              style={{ borderColor: theme.buttonColor }}
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          ) : (
            <div 
              className="w-24 h-24 rounded-full mb-4 flex items-center justify-center text-3xl shadow-sm border-2 font-bold"
              style={{ backgroundColor: theme.buttonColor, color: theme.buttonTextColor, borderColor: theme.buttonColor }}
            >
              {profile.name ? profile.name.charAt(0).toUpperCase() : '?'}
            </div>
          )}
          
          <h1 className="text-xl font-bold mb-2 leading-tight">{profile.name || 'Nama Kamu'}</h1>
          <p className="text-sm opacity-80 whitespace-pre-wrap">{profile.bio || 'Tulis deskripsi singkat tentang diri kamu di sini.'}</p>
        </div>

        {/* Links Section */}
        <div className="w-full flex flex-col gap-3 z-10 pb-6">
          {activeLinks.length > 0 ? (
            activeLinks.map(link => {
              const platform = platforms[link.icon || 'custom'] || platforms['custom'];
              const isCustom = platform.id === 'custom';
              
              return (
                <a
                  key={link.id}
                  href={link.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-5 rounded-2xl flex items-center justify-center font-semibold text-sm transition-all duration-300 relative overflow-hidden ${hoverClass}`}
                  style={{
                    background: isCustom ? theme.buttonColor : platform.color,
                    color: isCustom ? theme.buttonTextColor : platform.textColor,
                  }}
                >
                  <div className="absolute left-5 flex items-center justify-center opacity-90">
                    {isCustom && link.customIconUrl ? (
                      <img src={link.customIconUrl} style={{ width: 20, height: 20, objectFit: 'contain', borderRadius: 4 }} alt="Icon" />
                    ) : (
                      <span dangerouslySetInnerHTML={{ __html: platform.svg }}></span>
                    )}
                  </div>
                  <span className="pl-6">{link.title || platform.name}</span>
                </a>
              );
            })
          ) : (
            <div className="py-4 rounded-2xl border-2 border-dashed opacity-30 text-xs flex items-center justify-center" style={{ borderColor: theme.textColor }}>
              Belum ada link aktif
            </div>
          )}
        </div>

        {/* Watermark */}
        <div className="mt-auto pt-6 pb-2 text-[10px] opacity-40 font-semibold z-10 tracking-widest uppercase">
          Powered by BioBlogger
        </div>
      </div>
    </div>
  );
};
