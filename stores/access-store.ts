import { create } from 'zustand';

interface AccessState {
  searchQuery: string;
  filters: {
    category: string;
    fileType: string;
    date: Date | null;
    sort: string;
  };
  viewMode: 'grid' | 'table';
  setSearchQuery: (query: string) => void;
  setFilter: (key: keyof AccessState['filters'], value: any) => void;
  setViewMode: (mode: AccessState['viewMode']) => void;
  reset: () => void;
}

export const useAccessStore = create<AccessState>((set) => ({
  searchQuery: '',
  filters: {
    category: '',
    fileType: '',
    date: null,
    sort: 'relevance',
  },
  viewMode: 'grid',
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilter: (key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
      },
    })),
  setViewMode: (mode) => set({ viewMode: mode }),
  reset: () =>
    set({
      searchQuery: '',
      filters: {
        category: '',
        fileType: '',
        date: null,
        sort: 'relevance',
      },
      viewMode: 'grid',
    }),
}));