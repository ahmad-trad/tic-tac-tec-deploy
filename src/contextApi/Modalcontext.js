import React, { createContext, useState} from 'react'

const ContModal = createContext();


function Modalcontext(props) {

   const [show, setShow] = useState(false);
   const [mode, setMode] = useState('winner');

    const showModal = () => setShow(true);
    const hideModal = () => setShow(false);

    return (
    <ContModal.Provider value={{
        show,
        modalMode: mode,
        setModalMode: setMode,
        showModal,
        hideModal
    }}>
        {props.children}
        
    </ContModal.Provider>
  )
}

export  {Modalcontext, ContModal}