import create from "zustand"

export const useGeneralStore = create((set) => ({
  transition: false,
  setTransition: (transition) => set(() => ({ transition })),
}))
