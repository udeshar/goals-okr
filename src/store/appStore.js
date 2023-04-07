import { persist } from 'zustand/middleware'

export function setInLocalStorage(key, data){
          if (typeof window !== "undefined") {
                    localStorage.setItem(key, JSON.stringify(data));
          }
}

export function getFromLocalStorage(key){
          if (typeof window !== "undefined") {
                    const data = localStorage.getItem(key);
                    return JSON.parse(data)
          }
          return undefined;
}

export const useAppStore = ((set)=>({

                    // variables
                    theme: getFromLocalStorage('theme') || 'light',
                    drawerOpened : getFromLocalStorage('drawerOpened') || false,         //True or false 
                    menuCollapsed : getFromLocalStorage('menuCollapsed') || false,

                    // Functions
                    toggleTheme: () => { 
                              return set((state)=>{ 
                                        setInLocalStorage('theme' , state.theme == 'light' ? 'dark' : 'light')
                                        return { theme: state.theme == 'light' ? 'dark' : 'light' }
                              })
                    },
                    toggleDrawer: () => { 
                              return set((state)=>{ 
                                        setInLocalStorage('drawerOpened' , !state.drawerOpened)
                                        return { drawerOpened: !state.drawerOpened }
                              })
                    },
                    // set((state)=>({ drawerOpened: !state.drawerOpened})),
                    toggleMenu: () => { 
                              return set((state)=>{ 
                                        setInLocalStorage('menuCollapsed' , !state.menuCollapsed)
                                        return { menuCollapsed: !state.menuCollapsed }
                              })
                    }
                    // set((state)=>({ menuCollapsed: !state.menuCollapsed})),
          })
)

