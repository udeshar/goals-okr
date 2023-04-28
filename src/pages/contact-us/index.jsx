import React from "react";
import styles from "./contactus.module.css";
import logo from "@/assets/icons/logo.png";
import { Row,Col } from "react-bootstrap";
import CustomButton from "@/components/CustomButton/customButton";

const ContactUs = () => {
  return (
    <div className={styles.main}>
      <div className={styles.smain}>
        <div className={styles.title}>Contact Us</div>
        <div className={styles.form}>
          <form action="">
            <Row className={styles.bottomspace}>
            <Col className={styles.leftspace}>
              <label htmlFor="first name">First Name: </label>
              <input type="text" className={styles.txtbox} required/>
            </Col>
            <Col className={styles.leftspace}>
              <label htmlFor="last name">Last Name: </label>
              <input type="text" className={styles.txtbox} required/>
            </Col>
            </Row>
            <Row className={styles.bottomspace}>
            <Col className={styles.leftspace}>
              <label htmlFor="email">Email ID: </label>
              <input type="text" className={styles.txtbox} required/>
            </Col>
            <Col className={styles.leftspace}>
              <label htmlFor="phone no">Phone No: </label>
              <input type="text" className={styles.txtbox} required/>
            </Col>
            </Row>
            <Row className={styles.bottomspace}>
            <Col className={styles.leftspace}>
              <label htmlFor="phone no">Write Your Message: </label>
              <input type="text" className={styles.txtbox1} required/>
            </Col>
            </Row>
            <div className="text-center d-flex justify-content-center" >
              <CustomButton text={'Submit'} className={styles.submit}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
