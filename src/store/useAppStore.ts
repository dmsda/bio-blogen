import { create } from 'zustand';

// --- Types & Interfaces ---

export interface ProfileState {
  name: string;
  bio: string;
  avatarUrl: string;
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: string; // Tipe icon, misal: 'instagram', 'whatsapp', dll
  customIconUrl?: string; // Gambar icon base64 custom
  isActive: boolean;
}

export interface SeoState {
  title: string;
  description: string;
  faviconUrl: string;
}

export interface ThemeState {
  preset: string; // misal: 'light', 'dark', 'glass', 'custom'
  backgroundColor: string;
  backgroundImage?: string;
  textColor: string;
  buttonColor: string;
  buttonTextColor: string;
  buttonHoverStyle: 'scale' | 'shift' | 'glow' | 'none';
}

export interface AppState {
  // State
  profile: ProfileState;
  links: LinkItem[];
  seo: SeoState;
  theme: ThemeState;

  // Actions - Profile
  updateProfile: (profile: Partial<ProfileState>) => void;

  // Actions - Links
  addLink: (link: Omit<LinkItem, 'id'>) => void;
  updateLink: (id: string, updatedLink: Partial<LinkItem>) => void;
  removeLink: (id: string) => void;
  reorderLinks: (newLinks: LinkItem[]) => void;

  // Actions - SEO
  updateSeo: (seo: Partial<SeoState>) => void;

  // Actions - Theme
  updateTheme: (theme: Partial<ThemeState>) => void;

  // Actions - Template
  loadTemplate: (data: { profile: ProfileState; links: LinkItem[]; seo: SeoState; theme: ThemeState }) => void;
}

// --- Zustand Store ---

export const useAppStore = create<AppState>((set) => ({
  // Initial State
  profile: {
    name: 'Nama Kamu',
    bio: 'Tulis deskripsi singkat tentang diri kamu di sini.',
    avatarUrl: '',
  },
  links: [],
  seo: {
    title: 'Bio Link Saya',
    description: 'Kumpulan link penting milik saya.',
    faviconUrl: '',
  },
  theme: {
    preset: 'dark', // Default ke dark mode
    backgroundColor: '#121212',
    backgroundImage: '',
    textColor: '#ffffff',
    buttonColor: '#1591DC',
    buttonTextColor: '#ffffff',
    buttonHoverStyle: 'scale',
  },

  // Reducers / Actions
  updateProfile: (profileUpdates) =>
    set((state) => ({ profile: { ...state.profile, ...profileUpdates } })),

  addLink: (link) =>
    set((state) => ({
      links: [
        ...state.links,
        { ...link, id: crypto.randomUUID() },
      ],
    })),

  updateLink: (id, updatedLink) =>
    set((state) => ({
      links: state.links.map((link) =>
        link.id === id ? { ...link, ...updatedLink } : link
      ),
    })),

  removeLink: (id) =>
    set((state) => ({
      links: state.links.filter((link) => link.id !== id),
    })),

  reorderLinks: (newLinks) => set(() => ({ links: newLinks })),

  updateSeo: (seoUpdates) =>
    set((state) => ({ seo: { ...state.seo, ...seoUpdates } })),

  updateTheme: (themeUpdates) =>
    set((state) => ({ theme: { ...state.theme, ...themeUpdates } })),

  loadTemplate: (data) =>
    set(() => ({
      profile: { ...data.profile },
      links: [...data.links],
      seo: { ...data.seo },
      theme: { ...data.theme },
    })),
}));
