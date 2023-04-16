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
import CreateKeyResult from './CreateKeyResult'
import { useQuery } from 'react-query'
import { createKeyResult, getAllMyObjectives } from '@/services/api'
import Loader from '../Loader/Loader'
import NotFound from '../NotFound/NotFound'

const OkrModal = ({ show, setShow, data, screen, cb }) => {

          const handleClose = () => setShow(false);
          const [item, setItem] = useState(data || {});
          const [krModal, setKrModal] = useState(false);
          const [keyData, setKeyData] = useState({});

          const { data: newKeyData, isLoading, isError, error, refetch } = useQuery('createKeyResult', () => createKeyResult(keyData), {
                    enabled: false,
                    cacheTime: 0,
                    onSuccess: () => {
                              cb();
                              setKrModal(false);
                    }
          })

          useEffect(() => {
                    setItem(data)
          }, [data])

          useEffect(() => {
                    if (keyData && keyData?.title != undefined) {
                              console.log("this is running")
                              console.log(keyData?.title)
                              refetch();
                    }
          }, [keyData])

          console.log(error)


          return (
                    <>
                              <CreateKeyResult
                                        show={krModal}
                                        setShow={(val) => setKrModal(val)}
                                        screen={screen}
                                        isLoading={isLoading}
                                        onClick={(e) => {
                                                  e.objective = item?.objective?.id;
                                                  setKeyData(e);
                                        }} 
                                        isError={isError}
                                        error={error} />
                              <ModalWrapper show={show} setShow={setShow} size={"xl"} >
                                        {
                                                  isLoading &&
                                                  <Loader />
                                        }
                                        <div className={styles.modalWrapper + ' px-2 px-md-4 pt-4'} >
                                                  {
                                                            !isLoading && item?.keys?.length == 0 &&
                                                            <NotFound title={"No Key Result found"} desc={"Click the below button to create Key Result"} btnText={"Add Key Result"} onClick={() => setKrModal(true)} />
                                                  }
                                                  <div className={styles.closeButton} >
                                                            <AiOutlineClose size={25} role={"button"} onClick={handleClose} />
                                                  </div>
                                                  <div className="d-flex justify-content-between" >
                                                            <div className="d-md-flex d-block align-items-center flex-wrap" >
                                                                      <h4 className='m-0' >{item?.objective?.title}</h4>
                                                                      {
                                                                                screen != 'myObjectives' &&
                                                                                <Link href="#" className={styles.singleTeam + ' align-items-center linkWithNoStyles d-flex ps-md-4'}>
                                                                                          <div style={{ backgroundColor: 'red' }} className={styles.teamIcon + " allcenter"} >
                                                                                                    <p>OP</p>
                                                                                          </div>
                                                                                          <p className={styles.smallText + " ps-1"} >Operations</p>
                                                                                </Link>
                                                                      }
                                                            </div>
                                                  </div>
                                                  <p className='accentText mt-4' >Key Results</p>
                                                  <div className="pt-2" >
                                                            {
                                                                      item?.keys?.map((itemm, index) => (
                                                                                <SingleKeyResult item={itemm} index={index} key={"jhdch" + index} screen={screen} cb={cb} />
                                                                      ))
                                                            }
                                                  </div>
                                        </div>
                                        <Modal.Footer className={styles.footer} >
                                                  <div className='d-flex' >
                                                            <CustomButton className="w-auto px-5" text={"Add Key Result"} onClick={() => {
                                                                      // setShow(false)
                                                                      setKrModal(true)
                                                            }} nofilled={true} />
                                                            <CustomButton className="w-auto px-5 ms-4" text={"Cancel"} onClick={() => {
                                                                      setShow(false)
                                                            }} nofilled={true} />
                                                  </div>

                                        </Modal.Footer>
                              </ModalWrapper>
                    </>
          );
}

export default OkrModal