import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useGlobalContext } from '../context'

export default function ResultModal() {
  const {questions, correct, closeModal} = useGlobalContext ()
  return (
    <section className='modalSection'>
    <Modal
    aria-labelledby="contained-modal-title-vcenter"
    centered
    show= {true}
    >
    <Modal.Body>
          <h2>{correct > 0 ? 'Congrats! :)' : 'Unfortunately! :('}</h2>
          <p>You answerd {((correct / questions.length)*100).toFixed(0)}% of questions correctly</p>
          <button className='closeBtn' onClick={closeModal}>play again</button>
    </Modal.Body>
  </Modal>
    </section>

  )
}
