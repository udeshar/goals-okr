import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import useBoundStore from '@/store';

const ModalWrapper = ({ show, setShow, size, className, children }) => {

          const handleClose = () => setShow(false);

          const theme = useBoundStore((state) => state.theme)
          const [myTheme, setMyTheme] = useState('');
          useEffect(() => {
                setMyTheme(theme)
          }, [theme])
          
          return (
                    <Modal 
                              size={size}
                              className={myTheme}
                              aria-labelledby="contained-modal-title-vcenter"
                              centered
                              show={show} 
                              onHide={handleClose}
                    >
                              <Modal.Body>
                                        {children}
                              </Modal.Body>
                    </Modal>
          );
}

export default ModalWrapper