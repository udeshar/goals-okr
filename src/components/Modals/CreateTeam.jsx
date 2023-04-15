import React, { useState, useEffect } from 'react'
import ModalWrapper from './ModalWrapper'
import { Modal } from 'react-bootstrap'
import styles from './okrModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import Custom_dropdown from '../CustomInput/custom_dropdown'
import CustomButton from '../CustomButton/customButton'
import Custom_input from '../CustomInput/custom_input'
import {Row, Col} from 'react-bootstrap'
import { createTeam, editTeam } from '@/services/api'
import { useQuery } from 'react-query'

const options = [
     {
          label: "red",
          value: "red"
     },
     {
          label: "green",
          value: "green"
     },
     {
          label: "blue",
          value: "blue"
     },
     {
          label: "purple",
          value: "purple"
     },
     {
          label: "orange",
          value: "orange"
     }
]

const CreateTeam = ({ show, setShow, edit, orgid, cb, item }) => {

     const [name, setName] = useState(edit ? item?.name : '');
     const [description, setDescription] = useState(edit ? item?.description : '');
     const [color, setColor] = useState(edit ? item?.color : '');

     const [nameError, setNameError] = useState('');
     const [descriptionError, setDescriptionError] = useState('');
     const [colorError, setColorError] = useState('');

     const handleClose = () => setShow(false);

     const {isLoading, refetch} = useQuery('createTeam', ()=>createTeam(orgid, {name, description, color : color.value}),{
          enabled : false,
          cacheTime : 0,
          onSuccess : () => {
               cb();
          }
     })

     const {isLoading : editLoading, refetch : editRefetch} = useQuery('editTeam', ()=>editTeam(item?.id , orgid, {name, description, color : color.value}),{
          enabled : false,
          cacheTime : 0,
          onSuccess : () => {
               cb();
          }
     })

     function submitData(){
          let error = false;
          if(!name){
               setNameError("Name cannot be empty")
               error = true;
          }
          if(!color){
               setColorError("Color cannot be empty")
               error = true;
          }
          if(!error){
               edit ? editRefetch() :  refetch()
          }
     }

     return (
          <ModalWrapper size={'lg'} show={show} setShow={setShow} >
               <div className={styles.closeButton} >
                    <AiOutlineClose size={25} role={"button"} onClick={handleClose} />
               </div>
               <div className="px-2 px-md-4 py-4" >
                    <h4 className='mb-4' >{edit ? 'Edit ' : 'Create '}Team</h4>

                    <Row>
                         <Col lg={6} >
                              <Custom_input
                                   placeholder='Team name'
                                   className={"mb-3"}
                                   customClassName={"noRoundedInput"}
                                   value={name}
                                   setValue={setName}
                                   error={nameError}
                                   setError={setNameError}
                                   type={"text"}
                                   title={"Team Name"}
                                   required
                              />
                         </Col>
                         <Col lg={6} >
                              <Custom_dropdown
                                   title={"Select Color"}
                                   value={color}
                                   setValue={setColor}
                                   required
                                   placeholder={"Select color"}
                                   styleInside={{ borderRadius: '10px !important' }}
                                   error={colorError}
                                   setError={setColorError}
                                   options={options}
                              />
                         </Col>
                    </Row>

                    <label htmlFor="textarea" className='mb-1' style={{ fontWeight: 500, fontSize: 15 }} >Team Description</label>
                    <textarea
                         placeholder='eg. what this team is about'
                         name="textarea"
                         id="textarea"
                         rows="3"
                         value={description}
                         onChange={(e) => setDescription(e.target.value)}
                    ></textarea>

               </div>
               <Modal.Footer className={styles.footer} >
                    <div>
                         <CustomButton className="px-5" text={edit ? "Edit Team" : "Create Team"} onClick={submitData} loading={isLoading || editLoading} />
                    </div>
                    <div></div>
               </Modal.Footer>
          </ModalWrapper>
     )
}

export default CreateTeam

// const CreateTeamWrapper = styled.div`
//      noRounded
// `