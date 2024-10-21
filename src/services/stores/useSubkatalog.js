import { create } from "zustand";

export const useSubkatalog = create((set) => ({
    open: false,
    subDatas: [],
    setOpen: (newValue) => set({ open: newValue }),
    setSubDatas: (newValue) => set({ subDatas: newValue }),
}))