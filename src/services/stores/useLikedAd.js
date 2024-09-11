import { create } from "zustand";

const getStoredLikedData = () => {
    const storedData = localStorage.getItem("likedData");
    return storedData ? JSON.parse(storedData) : [];
};

export const useLikedAd = create((set) => ({
    likedData: getStoredLikedData(),
    setLikedData: (item) =>
        set((state) => {
            const exists = state.likedData.some((i) => i.id === item.id); 
            const updatedLikedData = exists
                ? state.likedData.filter((i) => i.id !== item.id)
                : [...state.likedData, item];

            localStorage.setItem("likedData", JSON.stringify(updatedLikedData));
            return { likedData: updatedLikedData };
        }),
}));
