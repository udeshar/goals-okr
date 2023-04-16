import React, { useState } from 'react'
import ModalWrapper from './ModalWrapper'
import { Modal } from 'react-bootstrap'
import styles from './okrModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import Custom_dropdown from '../CustomInput/custom_dropdown'
import CustomButton from '../CustomButton/customButton'
import {Row, Col} from 'react-bootstrap'
import Custom_input from '../CustomInput/custom_input'

const options = [
     {
          label: "Mayuresh",
          value: "Mayuresh"
     },
     {
          label: "Ranjana",
          value: "Ranjana"
     },
     {
          label: "Udesh",
          value: "Udesh"
     }
]

const CreateKeyResult = ({ show, setShow, kr, init, pr, tr, dt, edit, screen, onClick, isLoading, error, isError }) => {
     const [keyResult, setKeyResult] = useState(kr || '');
     const [keyResultError, setKeyResultError] = useState('');
     const [initial, setInitial] = useState(edit ? init : '');
     const [initialError, setInitialError] = useState('');
     const [progress, setProgress] = useState(edit ? pr : '');
     const [progressError, setProgressError] = useState('');
     const [target, setTarget] = useState(edit ? tr : '');
     const [targetError, setTargetError] = useState('');
     const [dateTime, setDateTime] = useState(edit ? dt : '');
     const [dateTimeError, setDateTimeError] = useState('');
     const handleClose = () => setShow(false);

     const submitData = ()=> {
          let err = false;
          if(keyResult == ''){
               err = true;
               setKeyResultError('Required')
          } if(initial == undefined || initial == ''){
               err = true;
               setInitialError('Required')
          } if(progress == undefined || progress == ''){
               err = true;
               setProgressError('Required')
          } if(target == 0){
               err = true;
               setTargetError('cannot be 0 or empty')
          } 
          if(dateTime == ''){
               err = true;
               setDateTimeError('Due Date is Required')
          } 
          if(!err){
               onClick({
                    title : keyResult,
                    initialProgress : initial,
                    currentProgress : progress,
                    totalProgress : target,
                    dueDate : new Date(dateTime).toISOString()
               })
          }
     }

     return (
          <ModalWrapper size={'lg'} show={show} setShow={setShow} >
               <div className={styles.closeButton} >
                    <AiOutlineClose size={25} role={"button"} onClick={handleClose} />
               </div>
               <div className="px-2 px-md-4 py-4" >
                    <h4 className='mb-3' >{edit ? 'Edit' : 'Add'} Key Result</h4>

                    <label htmlFor="textarea" style={{ fontWeight: 500, fontSize: 15 }} >Enter the key result</label>
                    <textarea
                         placeholder='eg. improve seo of website'
                         name="textarea"
                         id="textarea"
                         rows="3"
                         value={keyResult}
                         onChange={(e) => { setKeyResultError(''); setKeyResult(e.target.value)}}
                    ></textarea>
                    {
                         keyResultError &&
                         <p className="error" >{keyResultError}</p>
                    }

                    <div className={styles.keyResults} >
                         <div className="d-flex my-3" >
                              <div className="me-4" >
                                   <label htmlFor={"start"}>Initial</label>
                                   <input value={initial} onChange={(e) => {setInitialError(''); setInitial(e.target.value)}} type="number" name={"start"} id={"start"} />
                                   {
                                        initialError &&
                                        <p className="error" >{initialError}</p>
                                   }
                              </div>
                              <div className="me-4">
                                   <label htmlFor={"progress"}>Progress</label>
                                   <input value={progress} onChange={(e) => {setProgressError(''); setProgress(e.target.value)}} type="number" name={"progress"} id={"progress"} />
                                   {
                                        progressError &&
                                        <p className="error" >{progressError}</p>
                                   }
                              </div>
                              <div className="me-4">
                                   <label htmlFor={"target"}>Target</label>
                                   <input value={target} onChange={(e) => {setTargetError(''); setTarget(e.target.value)}} type="number" name={"target"} id={"target"} />
                                   {
                                        targetError &&
                                        <p className="error" >{targetError}</p>
                                   }
                              </div>
                         </div>
                    </div>
                    <Row>
                         {
                              screen != 'myObjectives' &&
                              <Col>
                                   <div  >
                                        <Custom_dropdown
                                             title={"Select People"}
                                             styleInside={{ borderRadius: '10px !important' }}
                                             error={''}
                                             setError={() => { }}
                                             options={options}
                                             isMulti={true}
                                        />
                                   </div>
                              </Col>
                         }
                         
                         <Col>
                              <Custom_input 
                              type={"datetime-local"}  
                              title="Select Due Date" 
                              error={dateTimeError} 
                              setError={setDateTimeError}
                              required
                              customClassName={styles.lessBorder}
                              placeholder={"Date and time"} 
                              value={dateTime}
                              setValue={setDateTime}
                              />
                              {
                                   (isError) &&
                                   <p className="error mt-2" >{error?.response?.data?.message}</p>
                              }
                         </Col>
                    </Row>


               </div>
               <Modal.Footer className={styles.footer} >
                    <div></div>
                    <div>
                         <CustomButton className="px-5" text={"Save Key Result"} onClick={submitData} loading={isLoading} />
                    </div>
               </Modal.Footer>
          </ModalWrapper>
     )
}

export default CreateKeyResult