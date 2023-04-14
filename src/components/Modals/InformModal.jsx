import React, { useState, useEffect } from 'react'
import ModalWrapper from './ModalWrapper'
import { Modal } from 'react-bootstrap'
import styles from './okrModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import CustomButton from '../CustomButton/customButton'
import styled from '@emotion/styled'

const InformModal = ({ show, setShow, text, cb }) => {

          const handleClose = () => setShow(false);

          return (
                    <ModalWrapper size={'md'} show={show} setShow={setShow} >
                              <div className={styles.closeButton} >
                                        <AiOutlineClose size={25} role={"button"} onClick={handleClose} />
                              </div>
                              <div className="px-2 px-md-4 py-4" >
                                        <p className="pb-1 heading text-center" >{text}</p>
                                        {/* <CustomButton /> */}
                              </div>
                              <Modal.Footer className={styles.footer + " justify-content-center"} >
                                        <div>
                                                  <CustomButton className="px-5" text={"Close"} onClick={handleClose} loading={false} />
                                        </div>
                              </Modal.Footer>
                    </ModalWrapper>
          )
}

export default InformModal

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
`