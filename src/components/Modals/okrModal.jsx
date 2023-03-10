import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { AiOutlineClose } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdPeople } from 'react-icons/md'
import styles from './okrModal.module.css'
import ModalWrapper from './ModalWrapper'
import Link from 'next/link'

const SingleKeyResult = ({ item, index }) => {
          const [initial, setInitial] = useState(0);
          const [progress, setProgress] = useState(item?.progress);
          const [target, setTarget] = useState(item?.target);
          return (
                    <div className={styles.keyFullWrapper + " d-flex"} >
                              <div className={styles.keyResults + " d-flex py-3 justify-content-between align-items-center"} >
                                        <p className={styles.keyTitle} >{item?.title}</p>
                                        <div className='d-flex align-items-center my-1'>
                                                  <MdPeople className={styles.people} />
                                                  <p className={styles.people + ' ps-2'} >Ranjana</p>
                                        </div>
                                        <div className="d-flex" >
                                                  <div className="me-4" >
                                                            <label htmlFor={"start" + index}>Initial</label>
                                                            <input value={initial} onChange={(e) => setInitial(e.target.value)} type="number" name={"start" + index} id={"start" + index} />
                                                  </div>
                                                  <div className="me-4">
                                                            <label htmlFor={"progress" + index}>Progress</label>
                                                            <input value={progress} onChange={(e) => setProgress(e.target.value)} type="number" name={"progress" + index} id={"progress" + index} />
                                                  </div>
                                                  <div className="me-4">
                                                            <label htmlFor={"target" + index}>Target</label>
                                                            <input value={target} onChange={(e) => setTarget(e.target.value)} type="number" name={"target" + index} id={"target" + index} />
                                                  </div>
                                        </div>
                              </div>
                              <BsThreeDotsVertical className="mt-4" role="button" />
                    </div>
          )
}

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
                                                  <BsThreeDotsVertical role="button" className="mt-1" />
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
                    </ModalWrapper>
          );
}

export default OkrModal