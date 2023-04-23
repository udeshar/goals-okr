import React, { useState } from 'react'
import ModalWrapper from './ModalWrapper'
import { Modal } from 'react-bootstrap'
import styles from './okrModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import Custom_dropdown from '../CustomInput/custom_dropdown'
import CustomButton from '../CustomButton/customButton'
import { Row, Col } from 'react-bootstrap'
import styled from '@emotion/styled'
import { useQuery } from 'react-query'
import { deletePeopleFromKey, addPeopleFromKey } from '@/services/api'

const PeopleKr = ({ show, setShow, screen, onClick, data, cb, options }) => {
          const [users, setUsers] = useState(data?.user?.firstName && {
                    label: `${data?.user?.id} ${data?.user?.firstName} ${data?.user?.lastName}`,
                    value: data?.user?.id
          } || '')
          const [usersError, setUsersError] = useState('')
          const handleClose = () => setShow(false);

          const { refetch, isError, error } = useQuery('deletePeopleFromKey', () => deletePeopleFromKey(data?.id), {
                    enabled: false,
                    onSuccess: () => {
                              cb();
                              handleClose()
                    }
          })

          const { refetch: addRefetch, isError: addIsError, error: addError } = useQuery('addPeopleToKey', () => addPeopleFromKey({ keyresultid: data?.id, user: users?.value }), {
                    enabled: false,
                    onSuccess: () => {
                              cb();
                              handleClose()
                    }
          })

          return (
                    <ModalWrapper size={'lg'} show={show} setShow={setShow} >
                              <div className={styles.closeButton} >
                                        <AiOutlineClose size={25} role={"button"} onClick={handleClose} />
                              </div>
                              <div className="px-2 px-md-4 py-4" >
                                        <h4 className='mb-3' >People working on this key result</h4>
                                        <div className="mt-5" >
                                                  {data?.user?.firstName &&
                                                            <KrPeople className="py-3" >
                                                                      <div className="d-flex" >
                                                                                <p>{data?.user?.firstName + " " + data?.user?.lastName}</p>
                                                                                <p className="ms-5" >{data?.user?.email}</p>
                                                                      </div>
                                                                      <div>
                                                                                <MdDelete role="button" size={20} color='var(--red)' onClick={() => refetch()} />
                                                                      </div>
                                                            </KrPeople>
                                                  }
                                                  {isError &&
                                                            <p className="error mt-2" >{error?.response?.data?.message}</p>
                                                  }
                                                  <div className="d-flex align-items-center mt-4">
                                                            <div style={{ flex: 3 }} className='pe-5' >
                                                                      <Custom_dropdown
                                                                                title={"Select People"}
                                                                                value={users}
                                                                                setValue={setUsers}
                                                                                styleInside={{ borderRadius: '10px !important' }}
                                                                                error={usersError}
                                                                                setError={() => setUsersError('')}
                                                                                options={options}
                                                                      />
                                                            </div>
                                                            <div style={{ flex: 1, marginTop: 5 }}>
                                                                      <CustomButton className="px-5 mt-4" text={"Add People"} onClick={() => addRefetch()} loading={false} />
                                                            </div>
                                                  </div>
                                                  {addIsError &&
                                                            <p className="error mt-2" >{addError?.response?.data?.message}</p>
                                                  }
                                        </div>

                              </div>
                              <Modal.Footer className={styles.footer} >
                                        <div>
                                                  <CustomButton className="px-5" text={"Close"} onClick={() => handleClose()} loading={false} nofilled={true} />
                                        </div>
                                        <div></div>
                              </Modal.Footer>
                    </ModalWrapper >
          )
}

export default PeopleKr

const KrPeople = styled.div`
          display : flex;
          justify-content : space-between;
          align-items : center;
          flex-wrap  : wrap;
          border-bottom : 1px solid var(--border-color);

          .norounded{
                    width : 10% !important;
          }


`

