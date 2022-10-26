import React, { useContext } from 'react'
import Win from './Win'
import Reset from './Reset';
import { ContModal } from '../../contextApi/Modalcontext';


function Modal() {
  const {show, modalMode} = useContext(ContModal);
  return (
    <>
    {show && (
    <div className='modal'>
      <div className='content__modal'>
        <div className='container'>
          {modalMode === 'winner' && <Win />}
          {modalMode === 'restart' && <Reset />}
        </div>
      </div>
    </div>
    )}
    </>
  )
}

export default Modal