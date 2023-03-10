import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { AiOutlineClose } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdPeople } from 'react-icons/md'
import styles from './okrModal.module.css'
import ModalWrapper from './ModalWrapper'
import Link from 'next/link'
import CustomButton from '../CustomButton/customButton'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import SingleKeyResult from '../SingleKeyResult/singleKeyResult'

const OkrModal = ({ show, setShow, data }) => {

          const handleClose = () => setShow(false);
          const [item, setItem] = useState(data || {});
          useEffect(() => {
                    setItem(data)
          }, [data])

          return (
                    <ModalWrapper show={show} setShow={setShow} size={"xl"} >
                              <div className={styles.modalWrapper + ' px-2 px-md-4 pt-4'} >
                                        {/* <div className={styles.closeButton} >
                                                  <AiOutlineClose size={25} role={"button"} onClick={handleClose} />
                                        </div> */}
                                        <div className="d-flex justify-content-between" >
                                                  <div className="d-md-flex d-block align-items-center flex-wrap" >
                                                            <h4 className='m-0' >{item?.objective}</h4>
                                                            <Link href="#" className={styles.singleTeam + ' align-items-center linkWithNoStyles d-flex ps-md-4'}>
                                                                      <div style={{ backgroundColor: 'red' }} className={styles.teamIcon + " allcenter"} >
                                                                                <p>OP</p>
                                                                      </div>
                                                                      <p className={styles.smallText + " ps-1"} >Operations</p>
                                                            </Link>
                                                  </div>    
                                                  <ContextMenuTrigger id={"objective"} mouseButton={0}>
                                                            <BsThreeDotsVertical role="button" className="mt-1" />
                                                  </ContextMenuTrigger>
                                                  <ContextMenu id={"objective"} rtl={true} >
                                                            <MenuItem data={{ foo: 'bar' }} onClick={() => { }}>
                                                                      Delete Objective
                                                            </MenuItem>
                                                            <MenuItem data={{ foo: 'bar' }} onClick={() => { }}>
                                                                      Edit Objective
                                                            </MenuItem>
                                                            <MenuItem data={{ foo: 'bar' }} onClick={() => { }}>
                                                                      Change Team
                                                            </MenuItem>
                                                  </ContextMenu>
                                        </div>
                                        <p className='accentText mt-4' >Key Results</p>
                                        <div className="pt-2" >
                                                  {
                                                            item?.keyResults?.map((itemm, index) => (
                                                                      <SingleKeyResult item={itemm} index={index} />
                                                            ))
                                                  }
                                        </div>
                              </div>
                              <Modal.Footer className={styles.footer} >
                                        <CustomButton className="w-auto px-5" text={"Add Key Result"} onClick={() => { }} nofilled={true} />
                              </Modal.Footer>
                    </ModalWrapper>
          );
}

export default OkrModal