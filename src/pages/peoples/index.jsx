import React from 'react'
import DashboardLayout from '@/layout/DashboardLayout'
import NotFound from '@/components/NotFound/NotFound'
import { useRouter } from 'next/router'

const Peoples = () => {
  const router = useRouter();
  return (
    <div>
      <DashboardLayout screen={"peoples"} >
        <NotFound 
          title={"No Active Organization Found"}
          desc={"You are not part of any organazation to access this featue. Ask your manager to invite you or create your own organization."}
          btnText={"Create Organization"}
          onClick={() => router.push('/organization')}
        />
      </DashboardLayout>
    </div>
  )
}

export default Peoples
