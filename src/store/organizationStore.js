import { persist } from 'zustand/middleware'
import { getFromLocalStorage, setInLocalStorage } from './appStore'

export const useOrgStore = ((set)=>({

                    activeOrganization :  getFromLocalStorage('activeOrganization') || {},
                    myInvites : getFromLocalStorage('myInvites') || [],
                    showInviteModal : getFromLocalStorage('showInviteModal') || true,
                    // Functions
                    setActiveOrganization : (data) => {
                              setInLocalStorage('activeOrganization', data)
                              return set(()=>({activeOrganization : data}))
                    },
                    setMyInvites: (data) => {
                              setInLocalStorage('myInvites', data)
                              return set(()=>({myInvites : data}))
                    },
                    setShowInviteModal: () => {
                              return set((state)=>{
                                        setInLocalStorage('showInviteModal', !state.showInviteModal)
                                        return{ showInviteModal : !state.showInviteModal }
                              })
                    },
          })
)

