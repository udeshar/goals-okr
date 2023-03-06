import React, {useState} from 'react'
import styles from './sidebar.module.css'
import Image from 'next/image'
import logo from '@/assets/icons/logo.png'
import clsx from 'clsx'
import {CiHome, CiHeart, CiBoxList, CiSettings, CiCreditCard2, CiMenuFries, CiLogout} from 'react-icons/ci'
import {HiOutlineBuildingOffice} from 'react-icons/hi2'
import Switch from '../Switch/switch'
import useBoundStore from '@/store'

const Sidebar = ({className}) => {
          const {toggleMenu,menuCollapsed} = useBoundStore((state) => ({
                    toggleMenu : state.toggleMenu,
                    menuCollapsed : state.menuCollapsed
          }))
          return (
                    <div className={clsx(className,styles.sidebar, menuCollapsed && styles.okr_collapse)} >
                              <div>
                                        <div className={styles.logowrapper + " d-flex align-items-center justify-content-between"}>
                                                  <div className='d-flex align-items-center' >
                                                            <Image 
                                                                      src={logo}
                                                                      alt="logo"
                                                                      className={styles.logo}
                                                            />
                                                            <p className={styles.okr + ' ms-2'} >KeyVision</p>
                                                  </div>
                                                  <div>
                                                            <CiMenuFries onClick={()=> toggleMenu()} className={styles.menu} size={18} role="button" />
                                                            <div className={styles.okr_switch} >
                                                                      <Switch  /> 
                                                            </div>
                                                  </div>
                                        </div>

                                        <div className='mt-3' >
                                                  <p className={ styles.btn_head + '  font-regular py-2 mb-2'}>Menu</p>
                                                  <div className={clsx(styles.sd_btn ,' align-items-center d-flex')} role="button" >
                                                            <CiHome size={23} />
                                                            <p className="ms-3" >Home</p>
                                                  </div>
                                                  <div className={clsx(styles.sd_btn ,' align-items-center d-flex')} role="button" >
                                                            <CiBoxList size={23} />
                                                            <p className="ms-3" >Objectives</p>
                                                  </div>
                                                  <div className={clsx(styles.sd_btn ,' align-items-center d-flex')} role="button" >
                                                            <CiCreditCard2 size={23} />
                                                            <p className="ms-3" >My Tasks</p>
                                                  </div>
                                                  <div className={clsx(styles.sd_btn ,' align-items-center d-flex')} role="button" >
                                                            <CiHeart size={23} />
                                                            <p className="ms-3" >Favorites</p>
                                                  </div>
                                                  <div className={clsx(styles.sd_btn , styles.active,' align-items-center d-flex')} role="button" >
                                                            <HiOutlineBuildingOffice size={23} />
                                                            <p className="ms-3" >Organization</p>
                                                  </div>
                                                  <div className={clsx(styles.sd_btn ,' align-items-center d-flex')} role="button" >
                                                            <CiSettings size={23} />
                                                            <p className="ms-3" >Settings</p>
                                                  </div>
                                        </div>
                              </div>
                              
                              <div className={'mb-3 mt-5'} >
                                        <div className={clsx(styles.sd_btn ,' align-items-center d-flex')} role="button" >
                                                  <CiLogout size={23} />
                                                  <p className="ms-3" >Logout</p>
                                        </div>
                              </div>

                    </div>
          )
}

export default Sidebar