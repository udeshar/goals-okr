import React from 'react'
import styles from './aboutus.module.css'
import logo from '@/assets/icons/logo.png'

const AboutUs = () => {
  return (
  
    <div className={styles.main}>
        <div className={styles.first}>
            <div className={styles.second}>ABOUT US</div>
        </div>
        <div className={styles.info}>
            <p>At Key Vision, we believe in setting clear objectives and key results to drive our organization towards success. <b>Our mission is to drive organizational success by setting clear objectives and key results. We believe that by aligning our goals and tracking progress, we can continuously improve and achieve our full potential. We are committed to transparency, collaboration, and accountability, and we believe that OKRs are an essential tool for empowering our team and achieving our mission </b>, and we believe that using OKRs is an essential tool to help us achieve our goals. <br/>
                <br />
                Our team is comprised of experienced professionals who are committed to excellence and continuous improvement. We value transparency, collaboration, and accountability, and we believe that OKRs help us to embody these values in everything we do. <br/>
                <br />
                Using OKRs has been a game-changer for our organization. By setting clear, measurable objectives and tracking our progress towards those objectives, we have been able to improve our performance, identify areas for growth, and achieve our goals faster than ever before. <br />
                <br />
                We are passionate about helping other organizations to achieve success with OKRs. Whether you're just getting started with OKRs or you're looking to take your implementation to the next level, we're here to help. Contact us today to learn more about our services and how we can help your organization achieve its goals. <br /> </p>
        </div>
    </div>
    
  )
}

export default AboutUs