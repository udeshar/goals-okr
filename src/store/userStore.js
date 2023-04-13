import { persist } from 'zustand/middleware'
import { setInLocalStorage, getFromLocalStorage } from './appStore'

export const useUserStore = ((set)=>({

                    userInfo : getFromLocalStorage('userInfo') || {},
                    // Functions
                    setUserInfo: (data) => { 
                              return set((state)=>{ 
                                        setInLocalStorage('userInfo' , data)
                                        return { userInfo: data }
                              })
                    }
          })
)

