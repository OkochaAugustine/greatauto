import { create } from "zustand";

interface LoadingState {
  isLoading: boolean;
  loadingMessage: string;
  startLoading: (message?: string) => void;
  stopLoading: () => void;
  setLoadingMessage: (message: string) => void;
}

const loadingMessages = [
  "Loading Premium Inventory...",
  "Preparing Vehicle Details...",
  "Connecting to Verified Dealers...",
  "Optimizing Experience...",
  "Almost Ready...",
];

export const useLoadingStore = create<LoadingState>((set, get) => ({
  isLoading: false,
  loadingMessage: "GREATAUTOS SYSTEM PROCESSING...",
  startLoading: (message = "GREATAUTOS SYSTEM PROCESSING...") => {
    set({ isLoading: true, loadingMessage: message });

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % loadingMessages.length;
      if (get().isLoading) {
        set({ loadingMessage: loadingMessages[index] });
      } else {
        clearInterval(interval);
      }
    }, 1500);
  },
  stopLoading: () => set({ isLoading: false }),
  setLoadingMessage: (message) => set({ loadingMessage: message }),
}));
