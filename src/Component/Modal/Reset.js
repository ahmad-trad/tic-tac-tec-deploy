import React, { useContext } from 'react'
import { ContGame } from '../../contextApi/Gamecontext'

function Reset() {
  const {handleYesRestart , handleNoRestart} = useContext(ContGame);
  return (
    <div className='reset'>
        <h3 className='reset__title'>Restart Game?</h3>
        <div className='reset__btn'>
            <button className='btn btn-sm' onClick={handleNoRestart}>no</button>
            <button className='btn btn-sm btn__green' onClick={handleYesRestart}>yes</button>
        </div>
    </div>
  )
}

export default Reset