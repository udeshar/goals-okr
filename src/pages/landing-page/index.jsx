import React from 'react'
import styles from './Landing.module.css'


const mypage = () => {
    return (
        <>
    <header>
        <navbar>
            <div className={styles.nav-left}>
                <img src="./logo.png" alt="logo" style="height: 40px;"/>
                <h3>
                    <a href="#">KeyVision</a>
                </h3>
            </div>
            <div className={styles.nav-right}>
                <h4>
                    <a href="#">About Us</a>
                </h4>
                <h4> 
                    <a href="#">Need Help?</a>
                </h4>
                <h4>
                    <a href="#">Login</a>
                </h4>
            </div>
        </navbar>
    </header>
    <main>

    </main>
    <footer>

    </footer>
        </>
    )
}

export default mypage
