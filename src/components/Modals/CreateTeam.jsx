import React, { useState, useEffect } from 'react'
import ModalWrapper from './ModalWrapper'
import { Modal } from 'react-bootstrap'
import styles from './okrModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import Custom_dropdown from '../CustomInput/custom_dropdown'
import CustomButton from '../CustomButton/customButton'
import Custom_input from '../CustomInput/custom_input'

const options = [
     {
          label: "Ranjana",
          value: "Ranjana"
     },
     {
          label: "Udesh",
          value: "Udesh"
     },
     {
          label: "Management",
          value: "Management"
     }
]

const CreateTeam = ({ show, setShow, obj, edit, screen }) => {
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
                    <h4 className='mb-3' >{edit ? 'Edit ' : 'Add '}Team</h4>

                    <label htmlFor="textarea" style={{ fontWeight: 500, fontSize: 15 }} >Enter Team Name</label>
                    <Custom_input>
                         {/* placeholder='eg. Backend'
                         name="textarea"
                         id="textarea"
                         rows="3"
                         value={ojective}
                         onChange={(e) => setObjective(e.target.value)} */}
                    </Custom_input>
                    {
                         screen != 'myObjectives' &&
                         <div  >
                              <Custom_dropdown
                                   title={"Select Employee"}
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
                         <CustomButton className="px-5" text={"Save Team"} />
                    </div>
               </Modal.Footer>
          </ModalWrapper>
     )
}

export default CreateTeam