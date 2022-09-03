import create from "zustand"

export const useCursorStore = create((set) => ({
  hovered: false,
  color: "white",
  text: "",
  setHovered: (hovered) => set(() => ({ hovered })),
  setColor: (color) => set(() => ({ color })),
  setText: (text) => set(() => ({ text })),
  setCursor: (adjustment) => set((state) => ({ ...state, ...adjustment })),
}))
