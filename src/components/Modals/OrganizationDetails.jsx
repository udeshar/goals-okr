import React, { useState, useEffect } from 'react'
import ModalWrapper from './ModalWrapper'
import styles from './okrModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import styled from '@emotion/styled'
import CustomButton from '../CustomButton/customButton'
import { Row, Col } from 'react-bootstrap'
import { BsFillBuildingsFill } from 'react-icons/bs'
import Link from 'next/link'
import CreateOrganization from './CreateOrganization'

const OrganizationDetails = ({ show, setShow }) => {
          const handleClose = () => setShow(false);
          const [showEditModal, setShowEditModal] = useState(false);

          return (
                    <ModalWrapper size={'lg'} show={show} setShow={setShow} >
                              <CreateOrganization show={showEditModal} setShow={(e)=>setShowEditModal(e)} edit />
                              <div className={styles.closeButton} >
                                        <AiOutlineClose size={25} role={"button"} onClick={handleClose} />
                              </div>
                              <ModalBody className="px-2 px-md-4 py-4" >
                                        <h4 className='mb-3' >Organization Name</h4>

                                        <Row className="my-2" >
                                                  <Col lg={4} className="my-2" >
                                                            <div className='orgIconWrap' >
                                                                      <BsFillBuildingsFill fontSize={55} />
                                                            </div>
                                                  </Col>
                                                  <Col lg={8} className="my-2" >
                                                            <div className='infoBox' >
                                                                      <p>Type</p>
                                                                      <p>Technology</p>
                                                            </div>
                                                            <div className="d-flex mt-4">
                                                                      <div className='infoBox' >
                                                                                <p>City</p>
                                                                                <p>Taligao, Panaji</p>
                                                                      </div>
                                                                      <div className='infoBox' >
                                                                                <p>State</p>
                                                                                <p>Goa</p>
                                                                      </div>
                                                                      <div className='infoBox' >
                                                                                <p>Country</p>
                                                                                <p>India</p>
                                                                      </div>
                                                            </div>
                                                            <div className='infoBox mt-4' >
                                                                      <p>Type</p>
                                                                      <p>Technology</p>
                                                            </div>
                                                            <div className="d-flex mt-4" >
                                                                      <CustomButton text={"Edit"} className={"noRoundedInput w-25 me-2"} onClick={() => setShowEditModal(true)} loading={false} nofilled />
                                                                      <CustomButton text={"Delete"} className={"noRoundedInput w-25"} onClick={() => {}} loading={false} nofilled />
                                                            </div>
                                                            <div className="d-flex mt-4"><p>To Invite or manage people </p><Link  href="/people" >Click Here</Link></div>
                                                            <CustomButton className="mt-4 px-5" text={"Set As Active"} onClick={() => {}} loading={false} />
                                                  </Col>
                                        </Row>

                              </ModalBody>
                              {/* <Modal.Footer className={styles.footer} >
                                        <div>
                                                  <CustomButton className="px-5" text={"Save Objective"} onClick={() => submitData()} loading={false} />
                                        </div>
                                        <div></div>
                              </Modal.Footer> */}
                    </ModalWrapper>
          )
}

export default OrganizationDetails

const ModalBody = styled.div`

          .orgIconWrap{
                    background-color : var(--accent_light);
                    border-radius : 15px;
                    padding : 15px;
                    display : flex;
                    justify-content : center;
                    align-items : center;
                    color : var(--lightGreyText);
                    height : 200px;
          }

          .infoBox{
                    margin-right : 40px;
                    p:first-of-type{
                              font-size : 14px;
                              color : var(--lightGreyText);
                    }
          }
`