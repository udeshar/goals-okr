import { persist } from 'zustand/middleware'

export const useAppStore = (
          persist((set)=>({
                    theme: 'light',
                    toggleTheme: () => set((state)=>({ theme: state.theme == 'light' ? 'dark' : 'light' })),
          }),{
                    name: "app-storage",
                    onRehydrateStorage: ()=>console.log("Rehydrated")
          })
)

