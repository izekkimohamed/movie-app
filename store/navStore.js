import create from "zustand";

export const useStore = create((set) => ({
  isOpen: false,
  closeMenu: () => set((state) => ({ isOpen: false })),
  openMenu: () => set((state) => ({ isOpen: true })),
  displayList: false,
  setDisplayList: (value) => set((state) => ({ displayList: value })),
}));
