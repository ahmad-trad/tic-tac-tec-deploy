import React, { useContext } from "react";
import Game  from "./Component/Game";
import { ContGame } from "./contextApi/Gamecontext";
import Start from "./Component/Start";
import { ContModal } from "./contextApi/Modalcontext";
import Modal from "./Component/Modal/Modal";

function App() {

  const {screen} = useContext(ContGame);
  const {show} = useContext(ContModal);
  
  return (
    <div className="App">
      <div className="container">
        {screen === 'start' && <Start />}
        {screen === 'game' && <Game />}
      </div>
      {show && <Modal />}
    </div>
  );
}

export default App;
