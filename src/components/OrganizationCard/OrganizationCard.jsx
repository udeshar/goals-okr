import React, { useState } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import { BsFillBuildingsFill } from 'react-icons/bs'
import OrganizationDetails from '../Modals/OrganizationDetails'

const OrganizationCard = ({item, cb}) => {
          const [show, setShow] = useState(false);
          return (
                    <>
                              <OrganizationDetails show={show} setShow={setShow} item={item} cb={cb} />
                              <OrganizationCardWrapper onClick={() => setShow(true)} role="button" className={item?.status ? 'activeOrg' : ''}  >
                                        <div className="flexalingcenter half2" >
                                                  <div className="me-4" >
                                                            <div className='orgIconWrap' >
                                                                      <BsFillBuildingsFill fontSize={35} />
                                                            </div>
                                                  </div>
                                                  <div >
                                                            <h5 className="orgName">{item?.organization?.name}</h5>
                                                            <div className="d-flex"><p className='members me-1' >Number of members </p><b>30</b></div>
                                                  </div>
                                        </div>
                                        <div className="allcenter half2 my-2">
                                                  <div className="singlOkrWrap" >
                                                            <p className='members'>Pending OKR</p>
                                                            <b className='numbers n1' >20</b>
                                                  </div>
                                                  <div className="singlOkrWrap">
                                                            <p className='members'>Completed OKR</p>
                                                            <b className='numbers n2'>40</b>
                                                  </div>
                                                  <div className="singlOkrWrap">
                                                            <p className='members'>Overdue OKR</p>
                                                            <b className='numbers n3'>5</b>
                                                  </div>
                                        </div>
                              </OrganizationCardWrapper>
                    </>
          )
}

export default OrganizationCard

const OrganizationCardWrapper = styled.div`
          display : flex;
          justify-content : space-between;
          width : 100%
          align-items : center;
          flex-wrap : wrap;
          border-radius : 15px;
          background-color : var(--background-color);
          padding : 10px;
          margin : 20px 0px;

          &.activeOrg{
                    border : 1px solid var(--green);
          }

          .orgName{
                    font-family : var(--poppins);
                    color : var(--accent);
          }
          .members{
                    color : var(--lightGreyText);
          }
          .half1{
                    flex : 1;
          }
          .half2{
                    flex : 1;
                    .singlOkrWrap{
                              margin-right : 25px;
                    }
                    .members{
                              white-space: nowrap;
                    }
          }

          .numbers{
                    font-size : 25px;
                    margin-top : 5px;

                    &.n1{
                              color : var(--orange)
                    }
                    &.n2{
                              color : var(--green)
                    }
                    &.n3{
                              color : var(--red)
                    }
          }

          .orgIconWrap{
                    background-color : var(--accent_light);
                    border-radius : 15px;
                    padding : 15px;
                    display : flex;
                    justify-content : space-between;
                    align-items : center;
                    color : var(--lightGreyText);
          }

          @media only screen and (max-width : 668px){
                    padding : 20px;
                    .half2 .members{
                              white-space: initial;
                    }
          }

`