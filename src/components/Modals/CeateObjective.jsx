import React, { useState, useEffect } from 'react'
import ModalWrapper from './ModalWrapper'
import { Modal } from 'react-bootstrap'
import styles from './okrModal.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import Custom_dropdown from '../CustomInput/custom_dropdown'
import CustomButton from '../CustomButton/customButton'
import { useQuery } from 'react-query'
import { createObjective, updateMyObjectives, createTeamObjective, updateTemObjectives, getAllMyObjectives } from '@/services/api'
import { toast } from 'react-toastify'

const CreateObjective = ({ show, setShow, obj, edit, screen, cb, teamid }) => {
     const [ojective, setObjective] = useState(obj?.objective?.title || '');
     const handleClose = () => setShow(false);

     useEffect(() => {
          setObjective(obj?.objective?.title)
     }, [obj])

     const { refetch : refetch2 } = useQuery('getAllMyObjective', () => getAllMyObjectives(), {
          enabled: false
     })

     const { isLoading, isError, data, error, refetch, isFetched } = useQuery('createObjective', () => createObjective({ title: ojective, type: "personal" }), {
          enabled: false,
          cacheTime: 0,
          onSuccess : () => {
               refetch2()
               handleClose()
          }
     })

     const { isLoading : tIsLoading, refetch : tRefetch } = useQuery('createTeamObjective', () => createTeamObjective({ title: ojective, type: "team" }, teamid ), {
          enabled: false,
          cacheTime: 0,
          onSuccess : () => {
               cb()
          }
     })

     const {
          isLoading: e_isLoading,
          isError: e_isError,
          data: e_data,
          error: e_error,
          refetch: e_refetch} = useQuery('updateObjective', () => updateMyObjectives(obj?.id, { title: ojective, type: "personal" }), {
               enabled: false,
               cacheTime: 0,
               onSuccess : () => {
                    refetch2()
                    handleClose()
               }
          })

          const {
               isLoading: et_isLoading,
               isError: et_isError,
               data: et_data,
               error: et_error,
               refetch: et_refetch,
               isFetched: et_isFetched } = useQuery('updateTeamObjective', () => updateTemObjectives(obj?.id, { title: ojective, type: "team" }), {
                    enabled: false,
                    cacheTime: 0,
                    onSuccess : () => cb()
               })

          function performOnObj(){
               if(edit){
                    if(screen != 'myObjectives'){
                         et_refetch();
                    } else{
                         e_refetch();
                    }
               } else{
                    if(screen != 'myObjectives'){
                         tRefetch();
                    } else{
                         refetch();
                    }
               }
          }

     useEffect(() => {
          if (data) {
               handleClose();
          }
     }, [data])

     useEffect(() => {
          if(e_data){
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
                         className='mt-1'
                         value={ojective}
                         onChange={(e) => setObjective(e.target.value)}
                    ></textarea>
                    {
                         (isError || e_isError || et_isError) &&
                         <p className={styles.error} >{error?.response?.data?.message || e_error?.response?.data?.message || et_error?.response?.data?.message }</p>
                    }

                    {/* {
                         screen != 'myObjectives' &&
                         <div  >
                              <Custom_dropdown
                                   title={"Select Team"}
                                   value={selectedTeam}
                                   setValue={setSelectedTeam}
                                   styleInside={{ borderRadius: '10px !important' }}
                                   error={''}
                                   setError={() => { }}
                                   options={teams}
                              />
                         </div>
                    } */}


               </div>
               <Modal.Footer className={styles.footer} >
                    <div></div>
                    <div>
                         <CustomButton className="px-5" text={"Save Objective"} onClick={performOnObj} loading={isLoading || e_isLoading || et_isLoading} />
                    </div>
               </Modal.Footer>
          </ModalWrapper>
     )
}

export default CreateObjective