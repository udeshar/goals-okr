import React from 'react'
import styled from '@emotion/styled'
import IconButton from '../IconButton/IconButton'
import { CiSettings, CiLogout} from 'react-icons/ci'
import Logout from '../Logout/Logout'

const ProfileSlideDown = ({actOrg, userInfo}) => {
          return (
                    <ProfileModalWrapper>
                              <div>
                                        <img className='profile_image' src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="user" />
                              </div>
                              <p className="mt-3 heading" >{userInfo?.firstName + " " + userInfo?.lastName}</p>
                              <p className={"org mt-1"} >{actOrg?.organization?.name || "No active Org"}</p>
                              <p className="email mt-1" >{userInfo?.email}</p>
                              <hr />
                              <div className="d-flex justify-content-evenly my-2">
                                        <Logout>
                                                  <IconButton  className={"btnClass"}  Icon={CiLogout} onClick={()=>{}} />
                                        </Logout>
                                        <IconButton  className={"btnClass"} Icon={CiSettings} onClick={()=>{}} />
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