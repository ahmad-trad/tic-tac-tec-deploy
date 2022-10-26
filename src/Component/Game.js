import React, { useContext } from 'react'
import { ContGame } from '../contextApi/Gamecontext';
import Gamecard from './icons/Gamecard';
import Oicon from './icons/Oicon'
import Xicon from './icons/Xicon'

function Game() {
  const {active, squer, xnext, ties, winner, linewinner , handleRestart, playMode} = useContext(ContGame);

  const checkNameUser = (user) =>{
    if(playMode === 'cpu'){
      if(active === user){
        return '(you)'
      }else{
        return '(cpu)'
      }
    }
  } 
  return (
    <div className='game'>
      <div className='game__header'>
        <div className='game__logo'>
          <Xicon />
          <Oicon />
        </div>
        <div className='game__ture'>
          {!xnext ? <Xicon color='light' size='sm' /> : <Oicon color='light' size='sm' />}
          ture
        </div>
        <div className='game__restart' onClick={handleRestart}>
          <button className='btn btn-sm btn__restart'>
          <svg 
            aria-hidden="true" 
            focusable="false" 
            data-prefix="fas" 
            data-icon="redo"  
            role="img" 
            viewBox="0 0 512 512"
            >
              <path fill="currentColor" d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z">
                </path>
          </svg>
          </button>
        </div>
      </div>
      <div className='game__body'>
        {squer.map((sq, ix) => (
          <Gamecard key={Math.random()} user={sq} index={ix} active={winner && linewinner && linewinner.includes(ix)} />
        ))}
      </div>
      <div className='game__footer'>
        <div className='card bg-blue'>
          <p className='text-light edit'>x {checkNameUser('x')}</p>
          <strong className='text-2xl'>{ties.x}</strong>
        </div>
        <div className='card bg-light'>
          <p className='text-light edit'>ties</p>
          <strong className='text-2xl'>{ties.x + ties.o}</strong>
        </div>
        <div className='card bg-yellow'>
          <p className='text-light edit'>o {checkNameUser('o')}</p>
          <strong className='text-2xl'>{ties.o}</strong>
        </div>
      </div>
    </div>
  )
}

export default Game