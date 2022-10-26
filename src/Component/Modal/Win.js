import React, { useContext } from 'react'
import { ContGame } from '../../contextApi/Gamecontext'
import Oicon from '../icons/Oicon';
import Xicon from '../icons/Xicon'

function Win() {

    const {winner, handelQuit, handleNextRound} = useContext(ContGame);

    return (
        <div className='score'>
        {winner && winner !== 'no' ? (
            <>
            <p>you Win</p>
            <h3 className={`score__title ${winner === 'x' ? 'text-blue' : 'text-yellow' }`}>
                {winner === 'x' ? <Xicon /> : <Oicon />}
                Takes the round
            </h3>
            </>
        ) : (  
            <h3 className={`score__title ${winner === 'x' ? 'text-blue' : 'text-yellow' }`}>this not winner</h3>
        )}  
            <div className='score__btn'>
                <button className='btn btn-sm' onClick={handelQuit}>
                    Quit
                </button>
                <button className={`btn btn-sm ${winner === 'x' ? 'btn__blue' : 'btn__yellow'}`} onClick={handleNextRound}>
                    next round
                </button>
            </div>
    
        </div>
  )
}

export default Win