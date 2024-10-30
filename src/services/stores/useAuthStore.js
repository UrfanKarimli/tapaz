import { create } from "zustand";
import { supabase } from "@/client"; 
import { useNavigate } from "react-router-dom";

const useAuthStore = create((set) => ({
    user: null,
    setUser: (newValue)=> set({ user: newValue }),
    error: null,

    login: async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            set({ error: error.message });
        } else {
            const user = data.user.user_metadata.first_name;
            localStorage.setItem("user", JSON.stringify(user));
            set({ user, error: null });
            window.dispatchEvent(new Event("userChange"));
        }
    },

    register: async (firstName, email, password) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: { data: { first_name: firstName } },
        });

        if (error) {
            set({ error: error.message });
        } else {
            alert("Keçid linki üçün e-mailinizi yoxlayın");
            set({ error: null });
        }
    },

    logout: () => {
        const navigate = useNavigate();
        localStorage.removeItem("user");
        set({ user: null });
        window.dispatchEvent(new Event("userChange"));
        navigate("/")
    },
}));

export default useAuthStore;
