import React, { useState, useEffect } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdPeople } from 'react-icons/md'
import styles from '../Modals/okrModal.module.css'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

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
                                                  <p className={styles.people + ' ps-2'} >Udesh</p>
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

                              <ContextMenuTrigger id={"keyResult" + index} mouseButton={0}>
                                        <BsThreeDotsVertical className="mt-4" role="button" />
                              </ContextMenuTrigger>
                              <ContextMenu id={"keyResult" + index} rtl={true} >
                                        <MenuItem data={{ foo: 'bar' }} onClick={()=>{}}>
                                                  Add People
                                        </MenuItem>
                                        <MenuItem data={{ foo: 'bar' }} onClick={()=>{}}>
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