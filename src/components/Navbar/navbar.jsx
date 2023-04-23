import React, { useEffect, useState } from 'react'
import clsx from 'clsx';
import styles from './navbar.module.css';
import { CiBellOn } from 'react-icons/ci'
import Switch from '../Switch/switch';
import { CiMenuFries } from 'react-icons/ci'
import useBoundStore from '@/store';
import ProfileSlideDown from '../ProfileSlideDown/ProfileSlideDown';
import dynamic from 'next/dynamic';
import { ContextMenu, MenuItem, ContextMenuTrigger, SubMenu } from "react-contextmenu";

const Navbar = ({ screen, breadcrumb }) => {
      const { toggleDrawer, menuCollapsed, toggleMenu, userInfo, activeOrganization } = useBoundStore((state) => ({
            toggleDrawer: state?.toggleDrawer,
            menuCollapsed: state?.menuCollapsed,
            toggleMenu: state?.toggleMenu,
            userInfo: state?.userInfo,
            activeOrganization: state?.activeOrganization
      }))

      const [actOrg, setActOrg] = useState(false);

      useEffect(() => {
            if (activeOrganization && Object.keys(activeOrganization).length > 0) {
                  setActOrg(activeOrganization)
            } else{
                  setActOrg({});
            }
      }, [activeOrganization])


      function onMenuClick() {
            console.log(menuCollapsed)
            if (menuCollapsed) {
                  toggleMenu();
            } else {
                  toggleDrawer()
            }
      }

      return (
            <div className={styles.nav_wrapper + ' d-flex justify-content-between w-100 align-items-center'} >
                  <div className="d-flex align-items-center" >
                        <CiMenuFries onClick={onMenuClick} className={clsx(styles.menu, menuCollapsed && "d-block", " me-3")} size={18} role="button" />
                        <p className={styles.screen_name} >{screen}{breadcrumb && ` / ${breadcrumb}`}</p>
                  </div>
                  <div className="d-flex align-items-center" >
                        <div className={styles.switchAndBell + " me-4"}>
                              <Switch />
                        </div>
                        <div className={" me-3 me-md-5 mt-1"} style={{ position: 'relative' }} >
                              <CiBellOn size={25} />
                              <div className={styles.noti + " allcenter"} >
                                    <p style={{ fontSize: 13 }} > 3</p>
                              </div>
                        </div>
                        <div style={{ position: "relative" }} >
                              <ContextMenuTrigger id={"profile"} mouseButton={0}  >
                                    <div role="button" className='d-flex justify-content-between align-items-center'>
                                          <div className='text-end pe-2 pe-md-3 ' >
                                                <p className={styles.name} >{userInfo?.firstName + " " + userInfo?.lastName}</p>
                                                <p className={styles.role} >{actOrg?.organization?.name || "No active Org"}</p>
                                          </div>
                                          <div>
                                                <img className='profile_image' src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="user" />
                                          </div>
                                    </div>
                              </ContextMenuTrigger>
                              <ContextMenu id={"profile"} rtl={true} >
                                    {/* <MenuItem preventClose onClick={()=>}  > */}
                                          <ProfileSlideDown actOrg={actOrg} userInfo={userInfo} />
                                    {/* </MenuItem> */}
                              </ContextMenu>
                              {/* <div role="button" className='d-flex justify-content-between align-items-center'>
                                    <div className='text-end pe-2 pe-md-3 ' >
                                          <p className={styles.name} >{userInfo?.firstName + " " + userInfo?.lastName}</p>
                                          <p className={styles.role} >{actOrg?.organization?.name || "No active Org"}</p>
                                    </div>
                                    <div>
                                          <img className='profile_image' src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="user" />
                                    </div>
                              </div> */}
                              {/* <ProfileSlideDown actOrg={actOrg} userInfo={userInfo} /> */}
                        </div>

                  </div>

            </div>
      )
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false }); 