// import Container from 'react-bootstrap/Container';
import React from 'react'
import Modal from 'react-bootstrap/Modal';

export default function CenteredModal(props) {
  return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
      <Modal.Header closeButton>
        </Modal.Header>
          <Modal.Body className='my-5'>
            <h3 className='text-center'>
              Modal contant
            </h3>
          </Modal.Body>
        </Modal>
      );
    }
    

