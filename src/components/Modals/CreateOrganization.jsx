import React, { useState, useEffect } from 'react'
import ModalWrapper from './ModalWrapper'
import { Modal } from 'react-bootstrap'
import styles from './okrModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import Custom_dropdown from '../CustomInput/custom_dropdown'
import Custom_input from '../CustomInput/custom_input'
import CustomButton from '../CustomButton/customButton'
import { useQuery } from 'react-query'
import { createObjective, updateMyObjectives } from '@/services/api'
import { toast } from 'react-toastify'
import { Row, Col } from 'react-bootstrap'

const options = [
          {
               label: "Technology",
               value: "Technology"
          },
          {
               label: "Education",
               value: "Education"
          },
          {
               label: "Infrastructure",
               value: "Infrastructure"
          },
          {
                    label: "Hospitality",
                    value: "Hospitality"
          },
          {
                    label: "Others",
                    value: "Others"
          },
     ]

const CreateOrganization = ({ show, setShow, edit }) => {
          const handleClose = () => setShow(false);

          const [name, setName] = useState('');
          const [nameError, setNameError] = useState('')
          const [type, setType] = useState('');
          const [typeError, setTypeError] = useState('')
          const [city, setCity] = useState('');
          const [cityError, setCityError] = useState('')
          const [state, setState] = useState('');
          const [stateError, setStateError] = useState('')
          const [country, setCountry] = useState('');
          const [countryError, setCountryError] = useState('')
          const [website, setWebsite] = useState('');
          const [websiteError, setWebsiteError] = useState('')

          const submitData = () => {
                    let error = false;
                    if(!name){
                              error = true;
                              setNameError('Organization name cannot be empty');
                    } 
                    if(!type){
                              error = true;
                              setTypeError('Type cannot be empty');
                    }
                    if(!city){
                              error = true;
                              setCityError('City cannot be empty');
                    }
                    if(!state){
                              error = true;
                              setStateError('State cannot be empty');
                    }
                    if(!country){
                              error = true;
                              setCountryError('Country cannot be empty');
                    }
                    if(!error){
                              console.log("Success")
                    }
          }

          return (
                    <ModalWrapper size={'xl'} show={show} setShow={setShow} >
                              <div className={styles.closeButton} >
                                        <AiOutlineClose size={25} role={"button"} onClick={handleClose} />
                              </div>
                              <div className="px-2 px-md-4 py-4" >
                                        <h4 className='mb-3' >{edit ? 'Edit' : 'Create'} Organization</h4>

                                        <div className="my-5" >
                                                  <Row>
                                                            <Col lg={"6"}>
                                                                      <Custom_input
                                                                                title={'Name of Organization'}
                                                                                className={"my-2"}
                                                                                customClassName={"noRoundedInput"}
                                                                                placeholder={"Name"}
                                                                                value={name}
                                                                                setValue={setName}
                                                                                error={nameError}
                                                                                setError={setNameError}
                                                                                required
                                                                                type={"text"}
                                                                      />
                                                            </Col>
                                                            <Col lg={"6"}>
                                                                      <Custom_dropdown 
                                                                                required
                                                                                title={"Type of Organization"}
                                                                                styleInside={{borderRadius : '5px !important'}}
                                                                                className={"my-2"}
                                                                                value={type}
                                                                                setValue={setType}
                                                                                placeholder={"Technology"}
                                                                                options={options}
                                                                                error={typeError}
                                                                                setError={setTypeError}
                                                                      />
                                                            </Col>
                                                            <Col lg={"6"}>
                                                                      <Custom_input
                                                                                title={'Website URL'}
                                                                                className={"my-2"}
                                                                                customClassName={"noRoundedInput"}
                                                                                placeholder={"Name"}
                                                                                value={website}
                                                                                setValue={setWebsite}
                                                                                type={"text"}
                                                                                setError={()=>{}}
                                                                      />
                                                            </Col>
                                                            <Col lg={"3"}>
                                                                      <Custom_input
                                                                                title={'City'}
                                                                                placeholder={"Panaji"}
                                                                                customClassName={"noRoundedInput"}
                                                                                className={"my-2"}
                                                                                value={city}
                                                                                setValue={setCity}
                                                                                type={"text"}
                                                                                required
                                                                                error={cityError}
                                                                                setError={setCityError}
                                                                      />
                                                            </Col>
                                                            <Col lg={"3"}>
                                                                      <Custom_input
                                                                                title={'State'}
                                                                                placeholder={"Goa"}
                                                                                customClassName={"noRoundedInput"}
                                                                                className={"my-2"}
                                                                                value={state}
                                                                                setValue={setState}
                                                                                type={"text"}
                                                                                error={stateError}
                                                                                setError={setStateError}
                                                                      />
                                                            </Col>
                                                            <Col lg={"3"}>
                                                                      <Custom_input
                                                                                title={'Country'}
                                                                                placeholder={"India"}
                                                                                customClassName={"noRoundedInput"}
                                                                                className={"my-2"}
                                                                                value={country}
                                                                                setValue={setCountry}
                                                                                type={"text"}
                                                                                error={countryError}
                                                                                setError={setCountryError}
                                                                      />
                                                            </Col>
                                                  </Row>
                                        </div>

                              </div>
                              <Modal.Footer className={styles.footer} >
                                        <div>
                                                  <CustomButton className="px-5" text={"Save Organization"} onClick={() => submitData()} loading={false} />
                                        </div>
                                        <div></div>
                              </Modal.Footer>
                    </ModalWrapper>
          )
}

export default CreateOrganization