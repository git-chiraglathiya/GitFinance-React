import { create } from 'zustand'

export const useActivePageStore = create((set) => ({
    currentPage: "",
    setCurrentPage: (value) => set(({ currentPage: value }))
}));