import React, { useState, useEffect } from 'react'
import ModalWrapper from './ModalWrapper'
import { Modal } from 'react-bootstrap'
import styles from './okrModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import CustomButton from '../CustomButton/customButton'
import Custom_input from '../CustomInput/custom_input'
import { useQuery } from 'react-query'
import { acceptInvitations, rejectInvitations } from '@/services/api'
import useBoundStore from '@/store';
import styled from '@emotion/styled'
import { BsFillBuildingsFill } from 'react-icons/bs'

const InviteStatusModal = ({ show, setShow, invtes, cb }) => {

          const handleClose = () => setShow(false);
          const [actionTaken, setActionTaken] = useState('');
          const [orgid , setOrgid] = useState('');

          const {data, isLoading, refetch} = useQuery('acceptInvitations', ()=>acceptInvitations({orgid}),{
                    enabled : false,
                    cacheTime : 0,
                    onSuccess : ()=>{
                              cb();
                    }
          })

          const { refetch : rejectRefetch} = useQuery('rejectInvitations', ()=>rejectInvitations({orgid}),{
                    enabled : false,
                    cacheTime : 0,
                    onSuccess : ()=>{
                              cb();
                    }
          })

          useEffect(() => {
            if(orgid != ''){
                    if(actionTaken == "accept"){
                              refetch()
                    } else{
                              rejectRefetch()
                    }
            }
          }, [orgid])
          

          return (
                    <ModalWrapper size={'lg'} show={show} setShow={setShow} >
                              <div className={styles.closeButton} >
                                        <AiOutlineClose size={25} role={"button"} onClick={handleClose} />
                              </div>
                              <div className="px-2 px-md-4 py-4" >
                                        <p className="pb-1 heading" >Your invites</p>
                                        <div className="mt-4">
                                                  {
                                                            invtes.map((item, index) => (
                                                                      <OrgInvt className="mt-3" >
                                                                                <div className="orgDetails">
                                                                                          <div className='orgIconWrap' >
                                                                                                    <BsFillBuildingsFill fontSize={40} />
                                                                                          </div>
                                                                                          <h6 className="ms-4 mb-0 heading" style={{fontSize : 15}} >{item?.organization?.name}</h6>
                                                                                </div>
                                                                                <div className="orgDetails actions">
                                                                                          <CustomButton text={"Accept"} className={"greenbtns px-4"} nofilled={true} onClick={() => {
                                                                                                    setActionTaken('accept')
                                                                                                    setOrgid(item?.organization?.id);
                                                                                          }} />
                                                                                          <CustomButton text={"Reject"} className={"redbtns px-4 ms-2"} nofilled={true} onClick={() => {
                                                                                                    setActionTaken('reject')
                                                                                                    setOrgid(item?.organization?.id)
                                                                                          }} />
                                                                                </div>
                                                                      </OrgInvt>
                                                            ))
                                                  }
                                        </div>
                              </div>
                              <Modal.Footer className={styles.footer} >
                                        <div>
                                                  <CustomButton className="px-5" text={"Close"} onClick={handleClose} loading={false} />
                                        </div>
                                        <div><p className="mb-0 mt-3" style={{ fontSize: 14, color: 'var(--mediumGrey)' }} >Note* : You can see your invites in settings</p></div>
                              </Modal.Footer>
                    </ModalWrapper>
          )
}

export default InviteStatusModal

const OrgInvt = styled.div`
          display : flex;
          justify-content : space-between;
          align-items : center;

          .orgDetails{
                    display : flex;
                    align-items : center;
          }

          .orgIconWrap{
                    background-color : var(--accent_light);
                    border-radius : 15px;
                    padding : 15px;
                    display : flex;
                    justify-content : center;
                    align-items : center;
                    color : var(--lightGreyText);
                    // height : 2px;
          }

          .actionbtns{
                    width : max-content;
          }
          .greenbtns{
                    border : 0.5px solid var(--green);
                    p{
                              color : var(--green);
                    }
          }
          .redbtns{
                    border : 0.5px solid var(--red);
                    p{
                              color : var(--red);
                    }
          }
`