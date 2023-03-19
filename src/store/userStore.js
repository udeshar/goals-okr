import { persist } from 'zustand/middleware'

export const useUserStore = ((set)=>({

                    userInfo : {},
                    // Functions
                    setUserInfo: (data) => set(()=>({ userInfo: data})),
          })
)

