import React, { useState, useEffect } from 'react'
import ModalWrapper from './ModalWrapper'
import { Modal } from 'react-bootstrap'
import styles from './okrModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import Custom_dropdown from '../CustomInput/custom_dropdown'
import CustomButton from '../CustomButton/customButton'
import { useQuery } from 'react-query'
import { createObjective, updateMyObjectives } from '@/services/api'
import { toast } from 'react-toastify'

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
     const [ojective, setObjective] = useState(obj?.objective?.title || '');
     const handleClose = () => setShow(false);
     // const callback = () => cb();

     useEffect(() => {
          setObjective(obj?.objective?.title)
     }, [obj])

     const { isLoading, isError, data, error, refetch, isFetched } = useQuery('createObjective', () => createObjective({ title: ojective, type: "personal" }), {
          enabled: false,
          cacheTime: 0
     })

     const {
          isLoading: e_isLoading,
          isError: e_isError,
          data: e_data,
          error: e_error,
          refetch: e_refetch,
          isFetched: e_isFetched } = useQuery('updateObjective', () => updateMyObjectives(obj?.id, { title: ojective, type: "personal" }), {
               enabled: false,
               cacheTime: 0
          })

          function performOnObj(){
               if(edit){
                    e_refetch();
               } else{
                    refetch();
               }
          }

     useEffect(() => {
          if (data) {
               toast.success('Objective Successfully created')
               handleClose();
          }
     }, [data])

     useEffect(() => {
          if(e_data){
               toast.success('Objective Updated created')
               handleClose();
          }
     }, [e_data])
     

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
                         (isError || e_isError) &&
                         <p className={styles.error} >{error?.response?.data?.message || e_error?.response?.data?.message }</p>
                    }

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
                         <CustomButton className="px-5" text={"Save Objective"} onClick={performOnObj} loading={isLoading || e_isLoading} />
                    </div>
               </Modal.Footer>
          </ModalWrapper>
     )
}

export default CreateObjective