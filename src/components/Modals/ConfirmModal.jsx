import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './okrModal.module.css'
import ModalWrapper from './ModalWrapper'
import Link from 'next/link'
import CustomButton from '../CustomButton/customButton'
import { useQuery } from 'react-query'
import { createKeyResult, getAllMyObjectives, getTeamByTeamId } from '@/services/api'

const ConfirmModal = ({ show, setShow, onContinue }) => {
          const handleClose = () => setShow(false);
          return (
                    <>
                              <ModalWrapper show={show} setShow={setShow} size={"lg"} >
                                        <div className={' px-2 px-md-4 pt-4'} >
                                                  <div className={styles.closeButton} >
                                                            <AiOutlineClose size={25} role={"button"} onClick={handleClose} />
                                                  </div>
                                                  <div>
                                                            <p className="text-center" >Do you really want to perform this action ?</p>
                                                  </div>
                                        </div>
                                        <Modal.Footer className={styles.footer + " justify-content-center"} >
                                                  <div className='d-flex' >
                                                            <CustomButton className="w-auto px-5" text={"No"} onClick={() => handleClose()} nofilled={true} />
                                                            <CustomButton className="w-auto px-5 ms-4" text={"Yes"} onClick={() => onContinue()} nofilled={false} />
                                                  </div>

                                        </Modal.Footer>
                              </ModalWrapper>
                    </>
          );
}

export default ConfirmModal