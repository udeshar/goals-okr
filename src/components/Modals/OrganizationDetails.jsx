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
import { leaveOrganization, editOrganization, changeOrgStatus, deleteOrganization } from '@/services/api'
import { useQuery } from 'react-query'

const OrganizationDetails = ({ show, setShow, item, cb }) => {
      const handleClose = () => setShow(false);
      const [showEditModal, setShowEditModal] = useState(false);
      const [editData, setEditData] = useState({});

      const { data: leavedata, refetch: leaveRefetch, isLoading: leaveLoading } = useQuery('leaveOrganization', () => leaveOrganization(item?.id), {
            enabled: false,
            cacheTime: 0,
            onSuccess: () => {
                  cb();
                  handleClose()
            }
      })

      const { data: deletedata, refetch: deleteRefetch, isLoading: deleteLoading } = useQuery('deleteOrganization', () => deleteOrganization(item?.organization?.id), {
            enabled: false,
            cacheTime: 0,
            onSuccess: () => {
                  cb();
                  handleClose()
            }
      })

      const { data: editdata, refetch: editRefetch, isLoading: editLoading } = useQuery('editOrganization', () => editOrganization(item?.id, editData), {
            enabled: false,
            cacheTime: 0,
            onSuccess: () => {
                  cb();
                  setShowEditModal()
            }
      })

      const { data: statusdata, refetch: statusRefetch, isLoading: statusLoading } = useQuery('updateOrgStatus', () => changeOrgStatus(item?.id, {status : !item?.status}), {
            enabled: false,
            cacheTime: 0,
            onSuccess: () => {
                  cb();
                  handleClose()
            }
      })

      useEffect(() => {
            if (editData && editData?.name != undefined) {
                  editRefetch();
            }
      }, [editData])


      return (
            <ModalWrapper size={'lg'} show={show} setShow={setShow} >
                  <CreateOrganization show={showEditModal} setShow={(e) => setShowEditModal(e)} edit item={item} onSubmit={(e) => setEditData(e)} />
                  <div className={styles.closeButton} >
                        <AiOutlineClose size={25} role={"button"} onClick={handleClose} />
                  </div>
                  <ModalBody className="px-2 px-md-4 py-4" >
                        <h4 className='mb-3' >{item?.organization?.name}</h4>

                        <Row className="my-2" >
                              <Col lg={4} className="my-2" >
                                    <div className='orgIconWrap' >
                                          <BsFillBuildingsFill fontSize={55} />
                                    </div>
                              </Col>
                              <Col lg={8} className="my-2" >
                                    <div className='infoBox' >
                                          <p>Type</p>
                                          <p>{item?.organization?.type}</p>
                                    </div>
                                    <div className="d-flex mt-4">
                                          <div className='infoBox' >
                                                <p>City</p>
                                                <p>{item?.organization?.city}</p>
                                          </div>
                                          <div className='infoBox' >
                                                <p>State</p>
                                                <p>{item?.organization?.state}</p>
                                          </div>
                                          <div className='infoBox' >
                                                <p>Country</p>
                                                <p>{item?.organization?.country}</p>
                                          </div>
                                    </div>
                                    <div className='infoBox mt-4' >
                                          <p>website</p>
                                          <p>{item?.organization?.website || '-'}</p>
                                    </div>
                                    <div className="d-flex mt-4" >
                                          {
                                                item?.role == "Owner" &&
                                                <>
                                                      <CustomButton text={"Edit"} className={"noRoundedInput w-25 me-2"} onClick={(e) => setShowEditModal(true)} loading={editLoading} nofilled />
                                                      <CustomButton text={"Delete"} className={"noRoundedInput w-25"} onClick={() => deleteRefetch()} loading={deleteLoading} nofilled />
                                                </> || <CustomButton text={"Leave"} className={"noRoundedInput w-25"} onClick={() => leaveRefetch()} loading={leaveLoading} nofilled />
                                          }

                                    </div>
                                    <div className="d-flex mt-4"><p>To Invite or manage people </p><Link href="/people" >Click Here</Link></div>
                                    <CustomButton className="mt-4 px-5" text={ item?.status ? "Set As InActive" : "Set As Active"} onClick={() => statusRefetch()} loading={statusLoading} />
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