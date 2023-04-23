import React, { useState } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link';
import { BsThreeDotsVertical } from 'react-icons/bs'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import CreateTeam from '../Modals/CreateTeam';
import { deleteTeam } from '@/services/api'
import { useQuery } from 'react-query'

const TeamCard = ({ item, index, orgid, cb, role, screen }) => {
          const [show, setShow] = useState(false);

          const { isLoading, refetch } = useQuery('deleteTeam', () => deleteTeam(item?.id, orgid), {
                    enabled: false,
                    cacheTime: 0,
                    onSuccess: () => {
                              cb();
                    }
          })

          return (
                    <TeamCardWrapper style={{ backgroundColor: item?.color }}>
                              <CreateTeam show={show} setShow={(v) => setShow(v)} edit item={item} screen={"teams"} orgid={orgid} cb={() => { cb(); setShow(false) }} />
                              <div >
                                        <div className="d-flex justify-content-between" >
                                                  <p className="heading" >{item?.name}</p>
                                                  {
                                                            role != "Employee" && screen != 'objectives' &&
                                                            <div>
                                                                      <ContextMenuTrigger id={"objj" + index} mouseButton={0}>
                                                                                <BsThreeDotsVertical style={{ color: '#fff' }} size={18} role="button" />
                                                                      </ContextMenuTrigger>
                                                                      <ContextMenu id={"objj" + index} rtl={true} >
                                                                                <MenuItem data={{ foo: 'bar' }} onClick={() => setShow(true)}>
                                                                                          Edit Team
                                                                                </MenuItem>
                                                                                <MenuItem data={{ foo: 'bar' }} onClick={() => refetch()}>
                                                                                          Delete Team
                                                                                </MenuItem>
                                                                      </ContextMenu>
                                                            </div>
                                                  }

                                        </div>
                                        <p className="desc mt-1" >{item?.description}</p>
                              </div>
                              <div className="overlay" />
                              <div>
                                        {
                                                  screen == 'objectives' && 
                                                  <Link href={"/objectives/"+item?.id}  ><p className="noof mt-1" role="button" >See Objectives  </p></Link>
                                                  || <Link href={"/teams/"+item?.id}  ><p className="noof mt-1" role="button" >View Team  </p></Link>
                                        }
                              </div>
                    </TeamCardWrapper>
          )
}

export default TeamCard

const TeamCardWrapper = styled.div`
          border-radius : 15px;
          min-height : 145px;
          padding : 20px;
          position : relative;
          overflow : hidden;
          z-index : 1;
          border: 0.5px solid #ffffff00;
          display : flex;
          flex-direction : column;
          justify-content : space-between;
          // align-items : center;

          .overlay:before{
                    content : ' ';
                    position: absolute;
                    top : 0;
                    left : 0;
                    height : 100%;
                    width : 100%;
                    z-index : -1;
                    background: linear-gradient(120deg, #000000b3, #0000003d);
          }

          .heading{
                    font-size : 15px;
                    color : #fff;
          }
          a{
                    text-decoration : none;
          }
          .noof{
                    font-size : 13px; 
                    color : #fff;
          }
          .desc{
                    font-size : 13px;
                    opacity : 0.8;
                    color : #fff;
          }

`