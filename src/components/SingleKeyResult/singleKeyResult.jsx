import React, { useState, useEffect } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdPeople } from 'react-icons/md'
import { BiTimeFive } from 'react-icons/bi'
import styles from '../Modals/okrModal.module.css'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import CreateKeyResult from '../Modals/CreateKeyResult';

const SingleKeyResult = ({ item, index, key }) => {
          const [initial, setInitial] = useState(0);
          const [progress, setProgress] = useState(item?.progress);
          const [target, setTarget] = useState(item?.target);
          const [krModal, setKrModal] = useState(false);
          return (
                    <div className={styles.keyFullWrapper + " d-flex"} key={key} >
                              {
                                        krModal && 
                                        <CreateKeyResult 
                                        show={krModal} 
                                        setShow={(val) => setKrModal(val)} 
                                        edit={true} 
                                        kr={item?.title}
                                        init={initial}
                                        pr={progress}
                                        tr={target}
                                        />
                              }
                              <div className={styles.keyResults + " d-flex py-3 justify-content-between align-items-center"} >
                                        <p className={styles.keyTitle} >{item?.title}</p>
                                        <div className={styles.rightSection + " d-flex align-items-center"} >
                                                  <div className={styles.duedata + " me-4 d-none d-lg-flex"} style={{backgroundColor : 'var(--green)'}}  >
                                                            <BiTimeFive className="me-1" size={16} />
                                                            <p>12/10/2022</p>
                                                  </div>
                                                  <div className='d-flex align-items-center my-1 me-5'>
                                                            <MdPeople className={styles.people} />
                                                            <p className={styles.people + ' ps-2'} >Udesh</p>
                                                  </div>
                                                  <div className="d-flex">
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
                              </div>

                              <ContextMenuTrigger id={"keyResult" + index} mouseButton={0}>
                                        <BsThreeDotsVertical className="mt-4" role="button" />
                              </ContextMenuTrigger>
                              <ContextMenu id={"keyResult" + index} rtl={true} >
                                        <MenuItem data={{ foo: 'bar' }} onClick={()=>setKrModal(true)}>
                                                  Edit Key Result
                                        </MenuItem>
                                        <MenuItem data={{ foo: 'bar' }} onClick={()=>{}}>
                                                  Delete Key Result
                                        </MenuItem>
                              </ContextMenu>
                    </div>
          )
}

export default SingleKeyResult;