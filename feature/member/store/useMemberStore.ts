import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface MemberState {
  email: string | null;
  nickname: string | null;
  profileImage: string | null;
  setMember: (email: string, nickname: string, profileImage: string) => void;
  clearMember: () => void;
}

export const useMemberStore = create<MemberState>()(
  persist(
    (set) => ({
      email: null,
      nickname: null,
      profileImage: null,
      setMember: (email, nickname, profileImage) => set({ email, nickname, profileImage }),
      clearMember: () => set({ email: null, nickname: null, profileImage: null }),
    }),
    {
      name: 'member-storage',
    },
  ),
);
