import React, { useState } from 'react'
import styles from './Peoplestable.module.css';
import clsx from 'clsx';
import IconButton from '../IconButton/IconButton';
import { MdModeEditOutline } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import CustomButton from '../CustomButton/customButton';
import moment from 'moment';
import styled from '@emotion/styled';
import InvitePeopleModal from '../Modals/InvitePeopleModal';

const PeoplesTable = ({peoples, cb, invitedPeople}) => {
          const [show, setShow] = useState(false);
          return (
                    <PeopleWrapper className="mt-2" >
                              <InvitePeopleModal show={show} setShow={setShow} cb={cb} />
                              <div className="d-flex top-heading justify-content-between">
                                        <p className={styles.heading}>List of people working in your organization</p>
                                        <CustomButton className={"cb px-5"}  text={"Invite People"} nofilled onClick={()=>setShow(true)} />
                              </div>
                              <div style={{ overflow: 'auto' }} >
                                        <table className={clsx(styles.tableWrapper, 'mt-3')} >
                                                  <thead className={styles.theadWrapper}  >
                                                            <tr className={styles.theadTrWrapper}>
                                                                      <th>Name</th>
                                                                      <th>Date of join</th>
                                                                      <th>Team</th>
                                                                      <th>Role</th>
                                                                      <th>Actions</th>
                                                            </tr>
                                                  </thead>
                                                  <tbody className={styles.tbodyWrapper}>
                                                            {
                                                                      peoples.map((item,index)=>(
                                                                                <tr className={styles.tbodyTrWrapper}>
                                                                                          <td>{item?.user?.firstName} {item?.user?.lastName}</td>
                                                                                          <td>{moment(item?.createdAt).format('DD/MM/YYYY')}</td>
                                                                                          <td>Marketing</td>
                                                                                          <td>{item?.role}
                                                                                                    <ContextMenuTrigger id={"role" + index} mouseButton={0}>
                                                                                                              {/* id should be unique */}
                                                                                                              <IconButton Icon={MdModeEditOutline} onClick={() => { }} />
                                                                                                              {/* <BsThreeDotsVertical size={20} role="button" className='ms-3 ms-md-1 me-1 me-md-5' /> */}
                                                                                                    </ContextMenuTrigger>
                                                                                                    <ContextMenu id={"role" + index} rtl={true} >
                                                                                                              <MenuItem data={{ foo: 'bar' }} onClick={() => { }}>
                                                                                                                        Manager
                                                                                                              </MenuItem>
                                                                                                              <MenuItem data={{ foo: 'bar' }} onClick={() => { }}>
                                                                                                                        Employee
                                                                                                              </MenuItem>
                                                                                                    </ContextMenu>
                                                                                          </td>
                                                                                          <td><IconButton Icon={MdDelete} onClick={() => { }} className={"redBtn"} /></td>
                                                                                </tr>
                                                                      ))
                                                            }
                                                  </tbody>
                                        </table>
                              </div>

                              <div className="d-flex top-heading justify-content-between mt-5">
                                        <p className={styles.heading}>Invited people</p>
                              </div>
                              <div style={{ overflow: 'auto' }} >
                                        <table className={clsx(styles.tableWrapper, 'mt-3')} >
                                                  <thead className={styles.theadWrapper}  >
                                                            <tr className={styles.theadTrWrapper}>
                                                                      <th style={{width : '40%'}} >Email</th>
                                                                      <th>Status</th>
                                                                      <th>Date of invitation</th>
                                                            </tr>
                                                  </thead>
                                                  <tbody className={styles.tbodyWrapper}>
                                                            {
                                                                      invitedPeople.map((item,index)=>(
                                                                                <tr className={styles.tbodyTrWrapper}>
                                                                                          <td>{item?.email}</td>
                                                                                          <td>{item?.status}</td>
                                                                                          <td>{moment(item?.createdAt).format('DD/MM/YYYY')}</td>
                                                                                </tr>
                                                                      ))
                                                            }
                                                  </tbody>
                                        </table>
                              </div>
                    </PeopleWrapper>
          )
}

export default PeoplesTable

const PeopleWrapper = styled.div`
          .cb{
                    width : max-content;
          }
`