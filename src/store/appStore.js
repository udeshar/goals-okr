import { persist } from 'zustand/middleware'

export const useAppStore = (
          persist((set)=>({

                    // variables
                    theme: 'light',
                    drawerOpened : false,         //True or false 
                    menuCollapsed : false,

                    // Functions
                    toggleTheme: () => set((state)=>({ theme: state.theme == 'light' ? 'dark' : 'light' })),
                    toggleDrawer: () => set((state)=>({ drawerOpened: !state.drawerOpened})),
                    toggleMenu: () => set((state)=>({ menuCollapsed: !state.menuCollapsed})),
          }),{
                    name: "app-storage",
                    onRehydrateStorage: ()=>console.log("Rehydrated")
          })
)

