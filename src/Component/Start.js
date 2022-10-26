import React, {useContext} from 'react'
import { ContGame } from '../contextApi/Gamecontext'
import Oicon from './icons/Oicon'
import Xicon from './icons/Xicon'

function Start() {

  const {active, setActive, changePlayMode} = useContext(ContGame);
  return (
    <div className='start'>
      <div className='start__header'>
        <Xicon />
        <Oicon />
      </div>
      <div className='carde shadow-gray'>
        <h1 className='text-lg'>pink player 1'st mark</h1>
        <div className='start__players'>
          <span className={active === 'x' ? 'start__players--active' : ''} onClick={() => setActive('x')} >
            <Xicon color={active === 'x' ? 'dark' : 'light'}/>
          </span>
          <span className={active === 'o' ? 'start__players--active' : ''} onClick={() => setActive('o')}>
            <Oicon color={active === 'o' ? 'dark' : 'light'} />
          </span>

        </div>
        <p className='text-light'>remembr: x gose frist</p>
      </div>
      <div className='start__button'>
        <button className='btn btn__yellow' onClick={() => changePlayMode('cpu')} >new game (vs cpu)</button>
        <button className='btn btn__blue' onClick={() => changePlayMode('user')} >new game (vs player)</button>
      </div>
    </div>
  )
}

export default Start