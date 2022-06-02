import create from "zustand";

export const useStore = create((set) => ({
  trailer: false,
  showTrailer: () => set((state) => ({ trailer: true })),
  hideTrailer: () => set((state) => ({ trailer: false })),
}));
