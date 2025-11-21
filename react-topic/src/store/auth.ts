import { create } from "zustand";

interface User {
    id: string;
    email: string | undefined;
    role: string | undefined;
}

interface AuthStore {
    user: User | null;
    setUser: (paramter: User | null) => void;
    reset: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    setUser: (newUser: User | null) => set({ user: newUser }),
    reset: () => set({ user: null }), // Zustand 상태 초기화
}));
