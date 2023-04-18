import React from 'react'
import styles from './Landing.module.css'
import CustomButton from '@/components/CustomButton/customButton'
import logo from '@/assets/icons/logo.png'
import Image from 'next/image'

const mypage = () => {
    return (
        <>
            <header>
                <navbar className={styles.nav}>
                    <div className={styles.navleft}>
                        <div className={styles.logowrapper + " d-flex align-items-center justify-content-between"}>
                            <div className='d-flex align-items-center' >
                                <Image
                                    src={logo}
                                    alt="logo"
                                    className={styles.logo}
                                />
                                <p className={styles.okr + ' ms-2'} >KeyVision</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.navright}>
                        <h4>
                            <a className={'link'} href="#">About Us</a>
                        </h4>
                        <h4>
                            <a className={'link'} href="#">Need Help?</a>
                        </h4>
                        <h4>
                            <CustomButton text={"Login"} onClick={() => submitForm()} className={styles.butn} />
                        </h4>
                    </div>
                </navbar>
            </header>
            <main className={styles.maincontent}>

            </main>
            <footer>

            </footer>
        </>
    )
}

export default mypage
