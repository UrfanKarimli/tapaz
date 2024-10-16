import { create } from "zustand";

export const useCardDatas = create((set) => ({
    cardDatas: [],
    setCardatas: (newValue) => set({ cardDatas: newValue })
}))