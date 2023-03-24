import React, {useState} from 'react'
import Link from 'next/link'
import styles from './sidebar.module.css'
import Image from 'next/image'
import logo from '@/assets/icons/logo.png'
import clsx from 'clsx'
import {CiHome, CiHeart, CiBoxList, CiSettings, CiCreditCard2, CiMenuFries, CiLogout, CiViewTable} from 'react-icons/ci'
import { IoPeopleOutline } from 'react-icons/io5'
import {HiOutlineBuildingOffice} from 'react-icons/hi2'
import Switch from '../Switch/switch'
import useBoundStore from '@/store'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

const Sidebar = ({className, screen}) => {
          const router = useRouter();
          const {toggleMenu,menuCollapsed} = useBoundStore((state) => ({
                    toggleMenu : state.toggleMenu,
                    menuCollapsed : state.menuCollapsed
          }))

          const logout = () => {
                    Cookies.remove('accessToken');
                    router.replace('/login');
          }

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
                                                  <Link href="/" className='linkWithNoStyles' >
                                                            <div className={clsx(screen == 'home' && styles.active, styles.sd_btn ,' align-items-center d-flex')} role="button" >
                                                                      <CiHome size={23} />
                                                                      <p className="ms-3" >Home</p>
                                                            </div>
                                                  </Link>
                                                  <Link href="/objectives" className='linkWithNoStyles' >
                                                            <div className={clsx(screen == 'objectives' && styles.active, styles.sd_btn ,' align-items-center d-flex')} role="button" >
                                                                      <CiBoxList size={23} />
                                                                      <p className="ms-3" >Objectives</p>
                                                            </div>
                                                  </Link>
                                                  <Link href="/my-objectives" className='linkWithNoStyles' >
                                                            <div className={clsx(screen == 'my objectives' && styles.active, styles.sd_btn ,' align-items-center d-flex')} role="button" >
                                                                      <CiCreditCard2 size={23} />
                                                                      <p className="ms-3" >My Objectives</p>
                                                            </div>
                                                  </Link>
                                                  <Link href="/teams" className='linkWithNoStyles' >
                                                            <div className={clsx(screen == 'teams' && styles.active, styles.sd_btn ,' align-items-center d-flex')} role="button" >
                                                                      <CiViewTable size={23} />
                                                                      <p className="ms-3" >Teams</p>
                                                            </div>
                                                  </Link>
                                                  <Link href="/peoples" className='linkWithNoStyles' >
                                                            <div className={clsx(screen == 'peoples' && styles.active, styles.sd_btn ,' align-items-center d-flex')} role="button" >
                                                                      <IoPeopleOutline size={23} />
                                                                      <p className="ms-3" >Peoples</p>
                                                            </div>
                                                  </Link>
                                                  <Link href="/organization" className='linkWithNoStyles' >
                                                            <div className={clsx(screen == 'organization' && styles.active, styles.sd_btn ,' align-items-center d-flex')} role="button" >
                                                                      <HiOutlineBuildingOffice size={23} />
                                                                      <p className="ms-3" >Organization</p>
                                                            </div>
                                                  </Link>
                                                  <Link href="/settings" className='linkWithNoStyles' >
                                                            <div className={clsx(screen == 'settings' && styles.active, styles.sd_btn ,' align-items-center d-flex')} role="button" >
                                                                      <CiSettings size={23} />
                                                                      <p className="ms-3" >Settings</p>
                                                            </div>
                                                  </Link>
                                        </div>
                              </div>
                              
                              <div className={'mb-3 mt-5'} >
                                        <div className={clsx(styles.sd_btn ,' align-items-center d-flex')} role="button" onClick={logout}  >
                                                  <CiLogout size={23} />
                                                  <p className="ms-3" >Logout</p>
                                        </div>
                              </div>

                    </div>
          )
}

export default Sidebar