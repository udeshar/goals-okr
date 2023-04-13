import React, { useEffect } from 'react'
import DashboardLayout from '@/layout/DashboardLayout'
import NotFound from '@/components/NotFound/NotFound'
import { useRouter } from 'next/router'
import PeoplesTable from '@/components/PeoplesTable/PeoplesTable'
import { useQuery } from 'react-query'
import { getPeople, getInvitedPeople } from '@/services/api'
import useBoundStore from '@/store';

const Peoples = () => {
      const router = useRouter();
      const activeOrganization = useBoundStore((state) => state.activeOrganization)
      const {data=[], isLoading, refetch} = useQuery('getPeople', ()=>getPeople(activeOrganization?.organization?.id),{
            enabled : false,
      })
      const {data : invitedData = [], isLoading : invitedLoading, refetch : getInvites} = useQuery('getInvitedPeople', ()=>getInvitedPeople(activeOrganization?.organization?.id),{
            enabled : false,
            onError: (error) => {
                  console.error(error);
                },
      })

      useEffect(()=>{
            console.log(activeOrganization)
            if(Object.keys(activeOrganization).length > 0){
                  getInvites()
                  refetch()
            }
      },[activeOrganization])

      return (
            <div>
                  <DashboardLayout screen={"peoples"} >
                       { Object.keys(activeOrganization).length === 0 &&  <NotFound
                              title={"No Active Organization Found"}
                              desc={"You are not part of any organazation to access this featue. Ask your manager to invite you or create your own organization."}
                              btnText={"Create Organization"}
                              onClick={() => router.push('/organization')}
                        /> || 
                        <PeoplesTable peoples={data} cb={()=>{refetch(); getInvites()}} invitedPeople={invitedData} />
                        }
                  </DashboardLayout>
            </div>
      )
}

export default Peoples
