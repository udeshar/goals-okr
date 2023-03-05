import React,{useState} from 'react'
import Image from 'next/image'
import styles from './navbar.module.css';
import {CiBellOn} from 'react-icons/ci'
import Switch from '../Switch/switch';

const Navbar = ({ screen }) => {
      return (
            <div className={styles.nav_wrapper +' d-flex justify-content-between w-100 align-items-center'} >
                  <div>
                        <p className={styles.screen_name} >{screen}</p>
                  </div>
                  <div className="d-flex align-items-center" >
                        <div className="me-4">
                              <Switch />
                        </div>
                        <div className="me-5 mt-1" style={{position : 'relative'}} >
                              <CiBellOn size={25} />
                              <div className={styles.noti +" allcenter"} >
                                    <p style={{fontSize : 13}} > 3</p>
                              </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                              <div className='text-end pe-3' >
                                    <p className={styles.name} >Udesh arlekar</p>
                                    <p className={styles.role} >Admin</p>
                              </div>
                              <div>
                                    <img className='profile_image' src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="user" />
                              </div>
                        </div>
                  </div>
                  
            </div>
      )
}

export default Navbar