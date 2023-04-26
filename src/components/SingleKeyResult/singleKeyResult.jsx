import React, { useState, useEffect } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdPeople } from 'react-icons/md'
import { BiTimeFive } from 'react-icons/bi'
import styles from '../Modals/okrModal.module.css'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import CreateKeyResult from '../Modals/CreateKeyResult';
import { useQuery } from 'react-query'
import { deleteKeyResult, updateKeyResult } from '@/services/api'
import moment from 'moment'
import PeopleKr from '../Modals/PeopleKrModal'
import EditProgress from '../Modals/EditProgressModal'
import useBoundStore from '@/store'

const SingleKeyResult = ({ item, index, key, screen, cb, options, actOrg }) => {
          const [krModal, setKrModal] = useState(false);
          const [peopleModal, setPeopleModal] = useState(false);
          const [editProg, setEditProg] = useState(false);
          const [finalData, setFinalData] = useState({});

          const userInfo = useBoundStore((state) => state.userInfo);

          const { data, refetch } = useQuery('deleteKeyResult', () => deleteKeyResult(item?.id), {
                    enabled: false,
                    cacheTime: 0,
                    onSuccess: () => cb()
          })

          const { data: data2, isLoading, isError, error, refetch: refetch2 } = useQuery('updateKeyResult', () => updateKeyResult(item?.id, finalData), {
                    enabled: false,
                    cacheTime: 0,
                    onSuccess: () => {
                              cb();
                              setKrModal(false);
                              setEditProg(false);
                    }
          })

          useEffect(() => {
                    if (finalData && finalData?.title != undefined) {
                              refetch2();
                    }
          }, [finalData])


          return (
                    <div className={styles.keyFullWrapper + " d-flex"} key={key} >
                              {
                                        krModal &&
                                        <CreateKeyResult
                                                  show={krModal}
                                                  setShow={(val) => setKrModal(val)}
                                                  edit={true}
                                                  kr={item?.title}
                                                  init={item?.initialProgress}
                                                  pr={item?.currentProgress}
                                                  tr={item?.totalProgress}
                                                  dt={moment(item?.dueDate).format('YYYY-MM-DDThh:mm')}
                                                  screen={screen}
                                                  isLoading={isLoading}
                                                  isError={isError}
                                                  error={error}
                                                  onClick={(e) => {
                                                            setFinalData(e);
                                                  }}
                                        />
                              }
                              {
                                        peopleModal &&
                                        <PeopleKr
                                                  show={peopleModal}
                                                  setShow={setPeopleModal}
                                                  onClick={() => { }}
                                                  data={item}
                                                  cb={cb}
                                                  options={options}
                                        />
                              }
                              {
                                        editProg &&
                                        <EditProgress
                                                  show={editProg}
                                                  setShow={setEditProg}
                                                  init={item?.initialProgress}
                                                  pr={item?.currentProgress}
                                                  tr={item?.totalProgress}
                                                  dt={moment(item?.dueDate).format('YYYY-MM-DDThh:mm')}
                                                  kr={item?.title}
                                                  onClick={(e) => {
                                                            setFinalData(e);
                                                  }}
                                        />
                              }
                              <div className={styles.keyResults + " d-flex py-3 justify-content-between align-items-center"} >
                                        <p className={styles.keyTitle} >{item?.title}</p>
                                        <div className={styles.rightSection + " d-flex align-items-center"} >
                                                  <div className={styles.duedata + " me-4 d-none d-lg-flex"} style={{ backgroundColor: 'var(--green)' }}  >
                                                            <BiTimeFive className="me-1" size={16} />
                                                            <p>{moment(item?.dueDate).format('DD/MM/YYYY h:mm:ss a')}</p>
                                                  </div>
                                                  {
                                                            screen != 'myObjectives' && (item?.user?.firstName &&
                                                                      <div className='d-flex align-items-center my-1 me-5' onClick={() => actOrg?.role != "Employee" ? setPeopleModal(true) : null} >
                                                                                <MdPeople className={styles.people} />
                                                                                {
                                                                                          userInfo?.id == item?.user?.id &&
                                                                                          <p className={' ps-2 link'} style={{ whiteSpace: 'nowrap' }} role="button" >You</p> ||
                                                                                          <p className={styles.people + ' ps-2'} style={{ whiteSpace: 'nowrap' }} role="button" >{item?.user?.firstName + " " + item?.user?.lastName}</p>
                                                                                }
                                                                      </div> ||
                                                                      <div className='d-flex align-items-center my-1 me-5' onClick={() => setPeopleModal(true)} >
                                                                                <p className={styles.people + ' ps-2'} style={{ whiteSpace: 'nowrap' }} role="button" >Add People</p>
                                                                      </div>)
                                                  }
                                                  <div className="d-flex">
                                                            <div className="me-4" >
                                                                      <label htmlFor={"start" + index}>Initial</label>
                                                                      {/* <input value={initial} onChange={(e) => setInitial(e.target.value)} type="number" name={"start" + index} id={"start" + index} /> */}
                                                                      <p>{item?.initialProgress}</p>
                                                            </div>
                                                            <div className="me-4">
                                                                      <label htmlFor={"progress" + index}>Progress</label>
                                                                      {/* <input value={progress} onChange={(e) => setProgress(e.target.value)} type="number" name={"progress" + index} id={"progress" + index} /> */}
                                                                      <p>{item?.currentProgress}</p>
                                                            </div>
                                                            <div className="me-4">
                                                                      <label htmlFor={"target" + index}>Target</label>
                                                                      {/* <input value={target} onChange={(e) => setTarget(e.target.value)} type="number" name={"target" + index} id={"target" + index} /> */}
                                                                      <p>{item?.totalProgress}</p>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>

                              <ContextMenuTrigger id={"keyResult" + index} mouseButton={0}>
                                        <BsThreeDotsVertical className="mt-4" role="button" />
                              </ContextMenuTrigger>
                              <ContextMenu id={"keyResult" + index} rtl={true} >
                                        {
                                                  screen != 'myObjectives' && (actOrg?.role != "Employee" && <>
                                                            <MenuItem data={{ foo: 'bar' }} onClick={() => setKrModal(true)}>
                                                                      Edit Key Result
                                                            </MenuItem>
                                                            <MenuItem data={{ foo: 'bar' }} onClick={() => refetch()}>
                                                                      Delete Key Result
                                                            </MenuItem>
                                                  </> || (userInfo?.id == item?.user?.id &&
                                                            <MenuItem data={{ foo: 'bar' }} onClick={() => setEditProg(true)}>
                                                                      Edit Progress
                                                            </MenuItem>)) || ( screen == 'myObjectives' &&
                                                  <>
                                                            <MenuItem data={{ foo: 'bar' }} onClick={() => setKrModal(true)}>
                                                                      Edit Key Result
                                                            </MenuItem>
                                                            <MenuItem data={{ foo: 'bar' }} onClick={() => refetch()}>
                                                                      Delete Key Result
                                                            </MenuItem>
                                                  </>)
                                        }

                              </ContextMenu>
                    </div>
          )
}

export default SingleKeyResult;