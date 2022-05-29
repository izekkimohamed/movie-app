import create from "zustand";

export const useStore = create((set) => ({
  searchResults: [],
  setSearchResults: (results) => set((state) => ({ searchResults: results })),
}));
