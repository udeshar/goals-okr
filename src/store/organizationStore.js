import { persist } from 'zustand/middleware'
import { getFromLocalStorage, setInLocalStorage } from './appStore'

export const useOrgStore = ((set)=>({

                    activeOrganization :  getFromLocalStorage('activeOrganization') || {},
                    // Functions
                    setActiveOrganization : (data) => {
                              setInLocalStorage('activeOrganization', data)
                              return set(()=>({activeOrganization : data}))
                    }
          })
)

