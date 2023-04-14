import React, { useState, useEffect } from 'react'
import DashboardLayout from '@/layout/DashboardLayout'
import CustomButton from '@/components/CustomButton/customButton'
import Head from 'next/head'
import styled from '@emotion/styled'
import NotFound from '@/components/NotFound/NotFound'
import CreateOrganization from '@/components/Modals/CreateOrganization'
import OrganizationCard from '@/components/OrganizationCard/OrganizationCard'
import { useQuery } from 'react-query'
import { getOrganization, createOrganization } from '@/services/api'
import Loader from '@/components/Loader/Loader'
import useBoundStore from '@/store';

const Organization = () => {

      const [show, setShow] = useState(false);
      const [orgData, setOrgData] = useState({})

      const setActiveOrganization = useBoundStore((state) => state.setActiveOrganization)

      const { data = [], isLoading, refetch : getOrgRefetch } = useQuery('getOrganization', () => getOrganization());
      const { isLoading : createLoading, refetch } = useQuery('createOrganization', () => createOrganization(orgData),{
            cacheTime : 0,
            enabled : false,
            onSuccess : ()=>{
                  getOrgRefetch()
                  setShow(false)
            }
      });

      useEffect(() => {
        if(orgData && orgData?.name != undefined){
            refetch()
        }
      }, [orgData])

      useEffect(() => {
            if(data && data?.length > 0){
                  setActiveOrganization(data.filter((item)=>item.status)[0])
            } else{
                  setActiveOrganization({})
            }
      }, [data])
      

      return (
            <>
                  <Head>
                        <title>Create Next App</title>
                        <meta name="description" content="Generated by create next app" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" href="/favicon.ico" />
                  </Head>
                  <main>
                        <DashboardLayout screen={"organization"} >
                              <>
                                    <CreateOrganization show={show} setShow={(e) => setShow(e)} onSubmit={(e)=>setOrgData(e)} loading={createLoading} />
                                    <div className={'d-flex align-items-center justify-content-between'} >
                                          <div className={'d-flex link align-items-center'} >
                                                <CustomButton text={"Create Organization"} className={'px-4'} nofilled onClick={() => setShow(true)} />
                                          </div>
                                          <div>
                                                <p>sort By</p>
                                          </div>
                                    </div>
                                    <OrgWrapper>
                                          {
                                                isLoading && <Loader />
                                          }
                                          {
                                                !isLoading && data?.length == 0 &&
                                                <NotFound
                                                      title={"No Active Organization Found"}
                                                      desc={"You are not part of any organazation to access this featue. Ask your manager to invite you or create your own organization."}
                                                      btnText={"Create Organization"}
                                                      onClick={() => setShow(true)}
                                                />
                                          }
                                          <p className="mt-4 note" >*Organization which have green border are currently set as your active organization</p>
                                          <p className="note mt-1 mb-4" >If none have set as active then you can go inside and set it as active</p>
                                          <div className='mt-2' >
                                                {
                                                      data?.map((item, index) => <OrganizationCard item={item} cb={getOrgRefetch} />)
                                                }
                                          </div>
                                    </OrgWrapper>
                              </>
                        </DashboardLayout>
                  </main>
            </>
      )
}

export default Organization

const OrgWrapper = styled.div`
      position : relative;
      min-height : 60vh;

      .note{
            color : var(--lightGreyText);
            font-size : 14px;
      }
`
