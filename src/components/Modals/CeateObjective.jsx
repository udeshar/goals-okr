import React, { useState, useEffect } from 'react'
import ModalWrapper from './ModalWrapper'
import { Modal } from 'react-bootstrap'
import styles from './okrModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import Custom_dropdown from '../CustomInput/custom_dropdown'
import CustomButton from '../CustomButton/customButton'

const options = [
     {
          label: "Operations",
          value: "Operations"
     },
     {
          label: "Development",
          value: "Development"
     },
     {
          label: "Management",
          value: "Management"
     }
]

const CreateObjective = ({ show, setShow, obj, edit, screen }) => {
     const [ojective, setObjective] = useState(obj || '');
     const handleClose = () => setShow(false);

     useEffect(() => {
          console.log(obj);
          setObjective(obj)
     }, [obj])

     return (
          <ModalWrapper size={'lg'} show={show} setShow={setShow} >
               <div className={styles.closeButton} >
                    <AiOutlineClose size={25} role={"button"} onClick={handleClose} />
               </div>
               <div className="px-2 px-md-4 py-4" >
                    <h4 className='mb-3' >{edit ? 'Edit ' : 'Add '}Objective</h4>

                    <label htmlFor="textarea" style={{ fontWeight: 500, fontSize: 15 }} >Enter the objective</label>
                    <textarea
                         placeholder='eg. website performance improvement'
                         name="textarea"
                         id="textarea"
                         rows="3"
                         value={ojective}
                         onChange={(e) => setObjective(e.target.value)}
                    ></textarea>

                    {
                         screen != 'myObjectives' &&
                         <div  >
                              <Custom_dropdown
                                   title={"Select Team"}
                                   styleInside={{ borderRadius: '10px !important' }}
                                   error={''}
                                   setError={() => { }}
                                   options={options}
                              />
                         </div>
                    }
                    

               </div>
               <Modal.Footer className={styles.footer} >
                    <div></div>
                    <div>
                         <CustomButton className="px-5" text={"Save Objective"} />
                    </div>
               </Modal.Footer>
          </ModalWrapper>
     )
}

export default CreateObjective