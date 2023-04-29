import React from 'react'
import styled from '@emotion/styled'
import IconButton from '../IconButton/IconButton'
import { CiSettings, CiLogout } from 'react-icons/ci'
import Logout from '../Logout/Logout'
import Image from 'next/image'
import profile from '@/assets/icons/profile.png'

const ProfileSlideDown = ({ actOrg, userInfo }) => {
          return (
                    <ProfileModalWrapper>
                              <div>
                                        {
                                                  userInfo?.profileImage &&
                                                  <img className='profile_image' src={userInfo?.profileImage} alt="user" /> ||
                                                  <Image src={profile} height={44} width={44} className='profile_image' />
                                        }
                              </div>
                              <p className="mt-3 heading" >{userInfo?.firstName + " " + userInfo?.lastName}</p>
                              <p className={"org mt-1"} >{actOrg?.organization?.name || "No active Org"}</p>
                              <p className="email mt-1" >{userInfo?.email}</p>
                              <hr />
                              <div className="d-flex justify-content-evenly my-2">
                                        <Logout>
                                                  <IconButton className={"btnClass"} Icon={CiLogout} onClick={() => { }} />
                                        </Logout>
                                        <IconButton className={"btnClass"} Icon={CiSettings} onClick={() => { }} />
                              </div>
                    </ProfileModalWrapper>
          )
}

export default ProfileSlideDown

const ProfileModalWrapper = styled.div`
          position : absolute;
          background-color : var(--background-color);
          min-height : 30vh;
          width : 250px;
          right : 0;
          border : 0.5px solid var(--border-color);
          border-radius : 15px;
          top : 130%;
          padding : 20px; 
          text-align : center;

          .profile_image{
                    width : 70px;
                    height : 70px;
          }

          .org{
                    color : var(--lightaccent);
                    font-size : 14px;
          }

          .email{
                    color : var(--greyText);
                    font-size : 14px;
          }

          .btnClass{
                    height : 40px;
                    width : 40px;
                    border-color : var(--border-color);
                    padding : 5px;
          }
`