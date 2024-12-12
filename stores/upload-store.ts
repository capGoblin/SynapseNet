import { create } from 'zustand';

interface UploadState {
  files: File[];
  metadata: {
    name: string;
    description: string;
    tags: string[];
    category: string;
    isPublic: boolean;
  };
  uploadProgress: number;
  status: 'idle' | 'uploading' | 'processing' | 'completed' | 'error';
  setFiles: (files: File[]) => void;
  setMetadata: (metadata: Partial<UploadState['metadata']>) => void;
  setUploadProgress: (progress: number) => void;
  setStatus: (status: UploadState['status']) => void;
  reset: () => void;
}

export const useUploadStore = create<UploadState>((set) => ({
  files: [],
  metadata: {
    name: '',
    description: '',
    tags: [],
    category: '',
    isPublic: true,
  },
  uploadProgress: 0,
  status: 'idle',
  setFiles: (files) => set({ files }),
  setMetadata: (metadata) =>
    set((state) => ({
      metadata: { ...state.metadata, ...metadata },
    })),
  setUploadProgress: (progress) => set({ uploadProgress: progress }),
  setStatus: (status) => set({ status }),
  reset: () =>
    set({
      files: [],
      metadata: {
        name: '',
        description: '',
        tags: [],
        category: '',
        isPublic: true,
      },
      uploadProgress: 0,
      status: 'idle',
    }),
}));