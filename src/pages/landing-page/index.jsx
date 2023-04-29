import React from 'react'
import styles from './Landing.module.css'
import CustomButton from '@/components/CustomButton/customButton'
import logo from '@/assets/icons/logo.png'
import Image from 'next/image'
import Footer from '@/components/Footer/footer'
import { useRouter } from 'next/router'
import {GiGears} from 'react-icons/gi'
import {FaHandsHelping} from 'react-icons/fa'
import {BsGraphUpArrow} from 'react-icons/bs'

const mypage = () => {
    const router = useRouter()
    return (
        <>
            <header className={styles.full}>
                <navbar className={styles.nav}>
                    <div className={styles.navleft}>
                        <div className={styles.logowrapper + " d-flex align-items-center justify-content-between"}>
                            <div className='d-flex align-items-center' >
                                <Image
                                    src={logo}
                                    alt="logo"
                                    className={styles.logo}
                                />
                                <img src="" alt="" />
                                <p className={styles.okr + ' ms-2'} >KeyVision</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.navright}>
                        <h4>
                            <a className={styles.styllink} href="#">About Us</a>
                        </h4>
                        <h4>
                            <a className={styles.styllink} href="#">Need Help?</a>
                        </h4>
                        <h4>
                            <CustomButton text={"Login"} onClick={() => router.push('/login')} className={styles.butn} />
                        </h4>
                    </div>
                </navbar>
            </header>
            <main className={styles.maincontent}>
                <div className={styles.maintitle}>
                    <h1 className={styles.h1tag}>
                        Managerial Optimization for your Company
                    </h1>
                    <h4 className={styles.h4tag}>
                        Choose efficency or flexibility for your organization, reconstruction of your team will lead to improved productivity, collaboration and higher business results
                    </h4>
                </div>
            </main>
            <div className={styles.prmycontent}>
            <div className={styles.seccontent}>
                    <GiGears size={50} />
                    <h2>
                        3x Your Performance
                    </h2>
                </div>
                <div className={styles.seccontent}>
                    <FaHandsHelping size={50} />
                    <h2>
                        Better Co-Ordination
                    </h2>
                </div>
                <div className={styles.seccontent}>
                    <BsGraphUpArrow size={50} />
                    <h2>
                       Faster Growth
                    </h2>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default mypage
