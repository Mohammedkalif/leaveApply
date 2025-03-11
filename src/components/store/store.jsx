import { create } from "zustand";

const useStore = create((set) => ({
    role: localStorage.getItem("role") || "", 
    setRole: (newRole) => {
        set({ role: newRole });
    },
}));

export default useStore;
