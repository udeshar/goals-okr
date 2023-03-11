import React, {useState} from 'react'
import ModalWrapper from './ModalWrapper'
import { Modal } from 'react-bootstrap'
import styles from './okrModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import Custom_dropdown from '../CustomInput/custom_dropdown'
import CustomButton from '../CustomButton/customButton'

const options = [
	{
		label : "Mayuresh",
		value : "Mayuresh"
	},
	{
		label : "Ranjana",
		value : "Ranjana"
	},
          {
		label : "Udesh",
		value : "Udesh"
	}
]

const CreateKeyResult = ({show, setShow, kr, init, pr, tr, edit}) => {
          const [keyResult, setKeyResult] = useState(kr || '');
          const [initial, setInitial] = useState(init || 0);
          const [progress, setProgress] = useState(pr || 0);
          const [target, setTarget] = useState(tr || 0);
          const handleClose = () => setShow(false);
          return (
                    <ModalWrapper size={'lg'} show={show} setShow={setShow} >
                              <div className={styles.closeButton} >
                                        <AiOutlineClose size={25} role={"button"} onClick={handleClose} />
                              </div>
                              <div className="px-2 px-md-4 py-4" >
                                        <h4 className='mb-3' >Add Key Result</h4>

                                        <label htmlFor="textarea" style={{fontWeight : 500, fontSize : 15}} >Enter the key result</label>
                                        <textarea 
                                        placeholder='eg. improve seo of website' 
                                        name="textarea" 
                                        id="textarea" 
                                        rows="3" 
                                        value={keyResult} 
                                        onChange={(e)=>setKeyResult(e.target.value)} 
                                        ></textarea>
                                        
                                        <div className={styles.keyResults} >
                                                  <div className="d-flex my-3" >
                                                            <div className="me-4" >
                                                                      <label htmlFor={"start"}>Initial</label>
                                                                      <input value={initial} onChange={(e) => setInitial(e.target.value)} type="number" name={"start"} id={"start"} />
                                                            </div>
                                                            <div className="me-4">
                                                                      <label htmlFor={"progress"}>Progress</label>
                                                                      <input value={progress} onChange={(e) => setProgress(e.target.value)} type="number" name={"progress"} id={"progress"} />
                                                            </div>
                                                            <div className="me-4">
                                                                      <label htmlFor={"target"}>Target</label>
                                                                      <input value={target} onChange={(e) => setTarget(e.target.value)} type="number" name={"target"} id={"target"} />
                                                            </div>
                                                  </div>
                                        </div>

                                        <div  >
                                                  <Custom_dropdown 
                                                  title={"Select People"} 
                                                  styleInside={{borderRadius : '10px !important'}} 
                                                  error={''}
                                                  setError={()=>{}}
                                                  options={options}
                                                  isMulti={true}
                                                  />
                                        </div>
                                        
                              </div>
                              <Modal.Footer className={styles.footer} >
                                        <div></div>
                                        <div>
                                                  <CustomButton className="px-5" text={"Save Key Result"} />
                                        </div>
                              </Modal.Footer>
                    </ModalWrapper>
          )
}

export default CreateKeyResult