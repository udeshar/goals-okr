import React, { useState } from 'react'
import ModalWrapper from './ModalWrapper'
import { Modal } from 'react-bootstrap'
import styles from './okrModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import CustomButton from '../CustomButton/customButton'
import Custom_input from '../CustomInput/custom_input'
import { useQuery } from 'react-query'
import { invitePeople } from '@/services/api'
import useBoundStore from '@/store';

const InvitePeopleModal = ({ show, setShow, cb }) => {

          const [email, setEmail] = useState('');
          const [emailError, setEmailError] = useState('');
          const activeOrganization = useBoundStore((state) => state.activeOrganization)

          const handleClose = () => setShow(false);

          const {data, isLoading, refetch} = useQuery('invitePeople', ()=>invitePeople({email, orgid : activeOrganization.organization.id}),{
                    enabled : false,
                    cacheTime : 0,
                    onSuccess : ()=>{
                              cb();
                              handleClose();
                    }
          })

          function submitData(){
                    if(email == ''){
                              setEmailError("Email cannot be empty")
                    } else{
                              refetch()
                    }
          }

          return (
                    <ModalWrapper size={'lg'} show={show} setShow={setShow} >
                              <div className={styles.closeButton} >
                                        <AiOutlineClose size={25} role={"button"} onClick={handleClose} />
                              </div>
                              <div className="px-2 px-md-4 py-4" >
                                        <h5>Invite People</h5>
                                        <Custom_input
                                                  value={email}
                                                  className={"mt-4"}
                                                  setValue={setEmail}
                                                  placeholder={"Enter the email"}
                                                  title={"Email"}
                                                  required
                                                  setError={() => setEmailError('')}
                                                  error={emailError}
                                                  type={"email"}
                                        />
                              </div>
                              <Modal.Footer className={styles.footer} >
                                        <div>
                                                  <CustomButton className="px-5" text={"Invite"} onClick={() => submitData()} loading={isLoading} />
                                        </div>
                                        <div></div>
                              </Modal.Footer>
                    </ModalWrapper>
          )
}

export default InvitePeopleModal