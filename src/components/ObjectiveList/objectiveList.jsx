import React from 'react'
import { useState } from 'react';
import styles from './objectiveList.module.css'
import { BsChevronDown, BsDot } from 'react-icons/bs'
import clsx from 'clsx';
import OkrModal from '../Modals/okrModal';
import { BsThreeDotsVertical } from 'react-icons/bs'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import CreateObjective from '@/components/Modals/CeateObjective'
import { useQuery } from 'react-query';
import { deleteMyObjectives, getAllMyObjectives, getAllMyTeamObjectives, deleteTeamKeyResult, deleteTeamObjectives } from '@/services/api';
import ConfirmModal from '../Modals/ConfirmModal';
import useBoundStore from '@/store';

export const getColor = (num) => {
     if(num < 30){
          return 'var(--red)'
     } else if(num >= 30 && num < 80){
          return 'var(--orange)'
     } else{
          return 'var(--green)'
     }
}

export const getKeyProgress = (item) => {
     return (item?.currentProgress - item?.initialProgress) * 100 / (item?.totalProgress - item?.initialProgress)
}

export const getTotalObjProgress = (item) => {
     let sum = 0;
     item?.keys.map((e,index)=>{
          sum = sum + getKeyProgress(e)
     })
     return (sum / (item?.keys?.length)).toFixed(0);
}

export const getProgressString = (num) => {
     if(!num) return 'No Keys'
     if(num < 30){
          return 'At risk'
     } else if(num >= 30 && num < 99){
          return 'Almost there'
     } else{
          return 'Completed'
     }
}

const SingleOkr = ({ item, index, screen, cb, id, actOrg }) => {
     const [isOpen, setIsOpen] = useState(false);
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [show, setShow] = useState(false);
     const [confirm, setConfirm] = useState(false);

     const userInfo = useBoundStore((state)=> state.userInfo);

     const { refetch: refetch2 } = useQuery('getAllMyObjective', () => getAllMyObjectives(), {
          enabled: false,
          onSuccess: () => {
               setConfirm(false)
               setShow(false)
          }
     })

     const { data: obj = [], isLoading: objLoading, refetch: getObjectives } = useQuery('getTeamObjectives', () => getAllMyTeamObjectives(id), {
          enabled: false,
     })

     const { refetch } = useQuery('deleteObjective', () => deleteMyObjectives(item?.id), {
          enabled: false,
          cacheTime: 0,
          onSuccess: () => refetch2()
     })

     const { refetch: deleteTeamObjective } = useQuery('deleteTeamObjective', () => deleteTeamObjectives(item?.id), {
          enabled: false,
          cacheTime: 0,
          onSuccess: () => getObjectives()
     })

     return (
          <>
               <OkrModal
                    show={isModalOpen}
                    setShow={(value) => setIsModalOpen(value)}
                    data={item}
                    screen={screen}
                    cb={() => {
                         if (screen != 'myObjectives') {
                              getObjectives()
                         } else {
                              refetch2()
                         }
                    }}
                    id={id} 
                    actOrg={actOrg}
                    />

               <CreateObjective
                    show={show}
                    setShow={() => { setShow(false) }}
                    edit
                    obj={item}
                    screen={screen}
                    cb={() => {
                         if (screen != 'myObjectives') {
                              getObjectives()
                         } else {
                              refetch2()
                         }
                    }}
               />

               <ConfirmModal
                    show={confirm}
                    setShow={setConfirm} onContinue={() => {
                         if (screen != 'myObjectives') {
                              deleteTeamObjective()
                         } else {
                              refetch()
                         }
                    }}
               />

               <div className={styles.overallOkrWrapper} >
                    <div className={clsx(styles.okrWrapper, isOpen ? ' my-3' : ' mt-3')} >
                         <div className={styles.okrtitle} >
                              <BsChevronDown role={"button"} onClick={() => setIsOpen(!isOpen)} />
                              <p className="ps-3" role="button" onClick={() => setIsModalOpen(true)} >{item?.objective?.title}</p>
                         </div>
                         <div className='d-flex align-items-center' >
                              <div className={styles.status} style={{color : getColor(getTotalObjProgress(item))}} >
                                   <BsDot size={30} />
                                   <p className={styles.smallText} >{getProgressString(getTotalObjProgress(item))}</p>
                              </div>
                              {
                                   actOrg?.role != "Employee" &&
                                   <div>
                                        <ContextMenuTrigger id={"objj" + index} mouseButton={0}>
                                             <BsThreeDotsVertical size={20} role="button" className='ms-3 ms-md-1 me-1 me-md-5' />
                                        </ContextMenuTrigger>
                                        <ContextMenu id={"objj" + index} rtl={true} >
                                             <MenuItem data={{ foo: 'bar' }} onClick={() => setShow(true)}>
                                                  Edit Objective
                                             </MenuItem>
                                             <MenuItem data={{ foo: 'bar' }} onClick={() => setConfirm(true)}>
                                                  Delete Objective
                                             </MenuItem>
                                        </ContextMenu>
                                   </div>
                              }
                              <div className={styles.progress + " d-none d-md-flex"} style={{backgroundColor : getColor(getTotalObjProgress(item))}} >
                                   {
                                        item?.keys.length == 0 &&
                                        <p>0%</p> ||
                                        <p>{getTotalObjProgress(item) || 0}%</p>
                                   }
                              </div>
                         </div>
                    </div>

                    <div className={clsx(styles.keyResult, !isOpen && styles.noHeight, 'mx-2 ms-md-5')}>
                         {
                              item?.keys.map((itemm, index) => (
                                   <div className={styles.smallText + " ps-1 ps-md-4 py-2 d-flex justify-content-between align-items-md-center"}>
                                        <div className="d-flex align-items-center" >
                                             <BsDot size={30} />
                                             <p className={styles.keyText} >{itemm?.title}</p>
                                        </div>
                                        <div className={clsx('d-flex justify-content-between')}>
                                             {
                                                  screen != 'myObjectives' &&( userInfo?.id == itemm?.user?.id &&
                                                  <p>You</p> ||
                                                  <p>{itemm?.user?.firstName + " " + itemm?.user?.lastName}</p>)
                                             }
                                             <div className={clsx(styles.status, 'd-none d-md-flex')}>
                                                  <p>{itemm?.currentProgress} / {itemm?.totalProgress}</p>
                                             </div>
                                             <p className='ms-2' style={{ color: getColor((itemm?.currentProgress - itemm?.initialProgress) * 100 / (itemm?.totalProgress - itemm?.initialProgress)) }} >
                                                  {(itemm?.currentProgress - itemm?.initialProgress) * 100 / (itemm?.totalProgress - itemm?.initialProgress)} %
                                             </p>
                                        </div>
                                   </div>
                              ))
                         }
                    </div>
               </div>
          </>
     )
}


const ObjectiveList = ({ screen, data, cb, id, actOrg }) => {
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [item, setItem] = useState({});
     const [show, setShow] = useState(false);
     return (
          <div>
               {
                    data?.map((item, index) => (
                         <SingleOkr
                              actOrg={actOrg}
                              item={item}
                              index={index}
                              screen={screen}
                              cb={cb}
                              id={id}
                         />
                    ))
               }
          </div>
     )
}

export async function getServerSideProps() {
     const screen = "Hello World";
     return {
          props: {
               screen: "Hello world"
          }
     }
}

export default ObjectiveList