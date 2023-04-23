import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './okrModal.module.css'
import ModalWrapper from './ModalWrapper'
import CustomButton from '../CustomButton/customButton'

const EditProgress = ({ show, setShow, kr, init, pr, tr, dt, onClick }) => {

          const handleClose = () => setShow(false);

          const [initial, setInitial] = useState(init);
          const [initialError, setInitialError] = useState('');
          const [progress, setProgress] = useState(pr);
          const [progressError, setProgressError] = useState('');
          const [target, setTarget] = useState(tr);
          const [targetError, setTargetError] = useState('');

          const submitData = () => {
                    let err = false;
                    if (initial == undefined || initial == '') {
                              err = true;
                              setInitialError('Required')
                    } if (progress == undefined || progress == '') {
                              err = true;
                              setProgressError('Required')
                    } if (target == 0) {
                              err = true;
                              setTargetError('cannot be 0 or empty')
                    }
                    if (!err) {
                              onClick({
                                        title : kr,
                                        initialProgress: parseInt(initial),
                                        currentProgress: parseInt(progress),
                                        totalProgress: parseInt(target),
                              })
                    }
          }

          return (
                    <>
                              <ModalWrapper show={show} setShow={setShow} size={"lg"} >
                                        <div className={' px-2 px-md-4 pt-4'} >
                                                  <div className={styles.closeButton} >
                                                            <AiOutlineClose size={25} role={"button"} onClick={handleClose} />
                                                  </div>

                                                  <p className="heading" >Edit Progress</p>

                                                  <div className={styles.keyResults} >
                                                            <div className="d-flex my-3" >
                                                                      <div className="me-4" >
                                                                                <label htmlFor={"start"}>Initial</label>
                                                                                <input value={initial} onChange={(e) => { setInitialError(''); setInitial(e.target.value) }} type="number" name={"start"} id={"start"} />
                                                                                {
                                                                                          initialError &&
                                                                                          <p className="error" >{initialError}</p>
                                                                                }
                                                                      </div>
                                                                      <div className="me-4">
                                                                                <label htmlFor={"progress"}>Progress</label>
                                                                                <input value={progress} onChange={(e) => { setProgressError(''); setProgress(e.target.value) }} type="number" name={"progress"} id={"progress"} />
                                                                                {
                                                                                          progressError &&
                                                                                          <p className="error" >{progressError}</p>
                                                                                }
                                                                      </div>
                                                                      <div className="me-4">
                                                                                <label htmlFor={"target"}>Target</label>
                                                                                <input value={target} onChange={(e) => { setTargetError(''); setTarget(e.target.value) }} type="number" name={"target"} id={"target"} />
                                                                                {
                                                                                          targetError &&
                                                                                          <p className="error" >{targetError}</p>
                                                                                }
                                                                      </div>
                                                            </div>
                                                  </div>

                                        </div>
                                        <Modal.Footer className={styles.footer} >
                                                  <div className='d-flex' >
                                                            <CustomButton className="w-auto px-5 ms-4" text={"Cancel"} onClick={() => {
                                                                      setShow(false)
                                                            }} nofilled={true} />
                                                            <CustomButton className="w-auto px-5 ms-4" text={"Save"} onClick={() => submitData()} nofilled={false} />
                                                  </div>

                                        </Modal.Footer>
                              </ModalWrapper>
                    </>
          );
}

export default EditProgress