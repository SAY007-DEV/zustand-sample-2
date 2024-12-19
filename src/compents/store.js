import { create } from 'zustand'

const useStore = create((set) => ({
  count: 1, count2:1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec :()=>set((state)=>({count: state.count - 1})),
  ince: () => set((state) => ({ count2: state.count2 + 2 })),
}))
export default useStore

