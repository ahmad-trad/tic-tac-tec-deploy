import React, { useContext } from 'react'
import { ContGame } from '../../contextApi/Gamecontext'
import Oicon from './Oicon'
import Xicon from './Xicon'

function Gamecard({user = "nouser", active, index}) {
  const {changeSquerClick} = useContext(ContGame);
  return (
    <div className={`card ${active && user === 'x' && `shadow-blue`} ${active && user === 'o' && `shadow-yellow`} ${!active ? `shadow-gray` : `active`}`} onClick={() => changeSquerClick(index)}>
        {user === "x" &&  <Xicon color={active && "dark"} size="lg" />}
        {user === "o" &&  <Oicon color={active && "dark"} size="lg" />}
    </div>
  )
}

export default Gamecard