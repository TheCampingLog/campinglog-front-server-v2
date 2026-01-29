import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface MemberState {
  email: string | null;
  nickname: string | null;
  profileImage: string | null;
  isLoggedIn: boolean;
  setMember: (email: string, nickname: string, profileImage: string) => void;
  clearMember: () => void;
  login: () => void;
  logout: () => void;
}

export const useMemberStore = create<MemberState>()(
  persist(
    (set) => ({
      email: null,
      nickname: null,
      profileImage: null,
      isLoggedIn: false,
      setMember: (email, nickname, profileImage) => set({ email, nickname, profileImage, isLoggedIn: true }),
      clearMember: () => set({ email: null, nickname: null, profileImage: null, isLoggedIn: false }),
      login: () => set({ isLoggedIn: true }),
      logout: () => set({ email: null, nickname: null, profileImage: null, isLoggedIn: false }),
    }),
    {
      name: 'member-storage',
    },
  ),
);
