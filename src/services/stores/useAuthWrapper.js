import { create } from "zustand";

const useAuthWrapper = create((set) => ({
    user: null,
    isAuth: false,
    isUserLoading: false,
    isSignInLoading: false,
    setIsAuth: (type) => set({ isAuth: type }),
    checkAuth: () => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            set({ isAuth: true });
        }
    },


    signIn: async (data) => {
        set({ isSignInLoading: true });
        const { data, error } = await supabase.auth.signInWithPassword({
            email: values.email,
            password: values.password,
        });
        if (error) {
            setErrors(true)
            console.error('login error', error.message);
        } else {
            setErrors(false)
            localStorage.setItem('user', JSON.stringify(data.user.user_metadata.first_name))
            setOpen(false)
        }
        localStorage.setItem("accessToken", `${access_token}`);
        localStorage.setItem("refreshToken", `${refresh_token}`);
        set({ isAuth: true });

    },


    signOut: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        set({ isAuth: false, user: null });
    },
    getNewAccessToken: async () => {
    },


}));


export default useAuthWrapper;
