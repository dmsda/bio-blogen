import React from 'react';
import { useAppStore, LinkItem } from '../store/useAppStore';
import { platforms } from '../utils/platforms';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface SortableLinkItemProps {
  link: LinkItem;
}

const SortableLinkItem: React.FC<SortableLinkItemProps> = ({ link }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: link.id });
  const { updateLink, removeLink } = useAppStore();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPlatformId = e.target.value;
    const platform = platforms[newPlatformId];
    
    // Jika title kosong atau masih menggunakan nama default, otomatis ganti ke nama platform
    let newTitle = link.title;
    if (!link.title || Object.values(platforms).some(p => p.name === link.title)) {
      newTitle = platform.name;
    }

    updateLink(link.id, { icon: newPlatformId, title: newTitle });
  };

  return (
    <div ref={setNodeRef} style={style} className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4 flex gap-4 items-start group transition-all hover:border-neutral-700">
      {/* Drag Handle */}
      <div {...attributes} {...listeners} className="cursor-grab text-neutral-600 hover:text-white p-2 mt-1" aria-label="Geser untuk mengubah urutan tautan" role="button" tabIndex={0}>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
        </svg>
      </div>

      <div className="flex-1 space-y-3">
        {/* Platform Selector */}
        <div className="relative">
          <select
            value={link.icon || 'custom'}
            onChange={handlePlatformChange}
            aria-label="Pilih Platform Tautan"
            className="appearance-none w-full bg-neutral-900 border border-neutral-800 text-sm text-white rounded-xl px-4 py-2.5 pr-10 focus:outline-none focus:border-neutral-600 transition-colors cursor-pointer"
          >
            {Object.values(platforms).map(platform => (
              <option key={platform.id} value={platform.id}>
                {platform.name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Custom Icon Upload (Only visible if 'custom' is selected) */}
        {link.icon === 'custom' && (
          <div className="flex items-center gap-3 bg-neutral-900/50 p-2 rounded-xl border border-neutral-800/50">
            {link.customIconUrl ? (
              <img src={link.customIconUrl} alt="Custom Icon" className="w-8 h-8 rounded-lg object-cover bg-white" />
            ) : (
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-500">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
            )}
            <input
              type="file"
              accept="image/*,.svg"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    updateLink(link.id, { customIconUrl: reader.result as string });
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="w-full text-xs text-neutral-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-neutral-800 file:text-white hover:file:bg-neutral-700 transition-colors cursor-pointer"
            />
          </div>
        )}

        <input
          type="text"
          value={link.title}
          onChange={(e) => updateLink(link.id, { title: e.target.value })}
          className="w-full bg-transparent text-white font-medium placeholder-neutral-600 focus:outline-none focus:border-b focus:border-blue-500 pb-1 transition-colors"
          placeholder="Judul Link (misal: Follow Instagram)"
          aria-label="Judul Tautan"
        />
        <input
          type="text"
          value={link.url}
          onChange={(e) => updateLink(link.id, { url: e.target.value })}
          className="w-full bg-transparent text-sm text-neutral-400 placeholder-neutral-600 focus:outline-none focus:border-b focus:border-blue-500 pb-1 transition-colors"
          placeholder="https://..."
          aria-label="URL Tautan"
        />
      </div>

      <div className="flex flex-col gap-4 items-center justify-between h-full pt-1">
        <button
          onClick={() => updateLink(link.id, { isActive: !link.isActive })}
          className={`w-10 h-5 rounded-full relative transition-colors ${link.isActive ? 'bg-blue-500' : 'bg-neutral-700'}`}
          aria-label={link.isActive ? "Nonaktifkan Tautan" : "Aktifkan Tautan"}
          aria-pressed={link.isActive}
        >
          <span className={`absolute top-0.5 left-0.5 bg-white w-4 h-4 rounded-full transition-transform ${link.isActive ? 'translate-x-5' : 'translate-x-0'}`}></span>
        </button>
        <button
          onClick={() => removeLink(link.id)}
          className="text-neutral-600 hover:text-red-500 p-1 transition-colors mt-auto"
          title="Hapus"
          aria-label="Hapus Tautan"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export const LinksEditor: React.FC = () => {
  const { links, addLink, reorderLinks } = useAppStore();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = links.findIndex((item) => item.id === active.id);
      const newIndex = links.findIndex((item) => item.id === over.id);
      reorderLinks(arrayMove(links, oldIndex, newIndex));
    }
  };

  const handleAddNewLink = () => {
    addLink({
      title: 'Link Baru',
      url: '',
      icon: 'custom',
      isActive: true,
    });
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-sm mt-6 transition-all hover:border-neutral-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-white flex items-center">
          <span className="bg-blue-500/20 text-blue-400 p-2 rounded-xl mr-3">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </span>
          Kelola Link
        </h2>
        <button
          onClick={handleAddNewLink}
          className="bg-white text-black hover:bg-neutral-200 px-4 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Tambah
        </button>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="space-y-3">
          <SortableContext
            items={links.map(l => l.id)}
            strategy={verticalListSortingStrategy}
          >
            {links.map((link) => (
              <SortableLinkItem key={link.id} link={link} />
            ))}
          </SortableContext>
          {links.length === 0 && (
            <div className="text-center py-10 border-2 border-dashed border-neutral-800 rounded-2xl">
              <p className="text-neutral-500 text-sm">Belum ada link. Klik "Tambah" untuk mulai.</p>
            </div>
          )}
        </div>
      </DndContext>
    </div>
  );
};
