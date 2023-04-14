import React, { useState } from 'react'
import DashboardLayout from '@/layout/DashboardLayout'
import styled from '@emotion/styled'
import {FiChevronRight} from 'react-icons/fi'
import useBoundStore from "@/store";
import { getMyInvites } from '@/services/api'
import { useQuery } from 'react-query'
import InformModal from '@/components/Modals/InformModal';
// import InviteStatusModal from "@/components/Modals/InviteStatusModal";

const Settings = () => {

      const [show, setShow] = useState(false);
      const setShowInviteModal = useBoundStore((state) => state.setShowInviteModal)
      const setMyInvites = useBoundStore((state) => state.setMyInvites)

      const { data: inviteData = [], isLoading: inviteLoading, refetch: getInviteRefetch } = useQuery('getMyInvites', () => getMyInvites(), {
		enabled: false,
		onSuccess: (data=[]) => {
                  setMyInvites(data)
			setShowInviteModal(true)
                  if(data?.length == 0) setShow(true)
		}
	});

      return (
            <div>
                  <DashboardLayout screen={"settings"}>
                        {
                              inviteData?.length == 0 &&
                              <InformModal show={show} setShow={setShow} text={"No invites recieved"} />
                        }
                        <SettingWrapper>
                              <p className="heading mb-3" >Invites</p>
                              <div className='recievedInvites p-4' role="button" onClick={()=>getInviteRefetch()} >
                                    <p>Recieved Invitations</p>
                                    <FiChevronRight size={20} />
                              </div>
                        </SettingWrapper>

                  </DashboardLayout>
            </div>
      )
}

export default Settings

const SettingWrapper = styled.div`
      .recievedInvites{
            background-color : var(--background-color);
            border-radius : 20px;
            display : flex;
            align-items : center;
            justify-content : space-between;
      }
`
