import { create } from 'zustand'

interface Config {
  bears: number;
  subtract: () => void;
  add: () => void;
  reset: () => void;
}

const useStore = create<Config>((set) => ({
  bears: 0,
  add: () => set((state) => ({ bears: state.bears + 1 })),
  subtract: () => set((state) => ({ bears: state.bears - 1 })),
  reset: () => set({ bears: 0 }),
}))

export default useStore