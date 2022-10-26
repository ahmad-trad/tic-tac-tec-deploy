import React, { createContext, useContext, useEffect, useState } from 'react'
import { linesWinner , easyPlay} from '../helps/linewinner';
import { ContModal } from './Modalcontext';

const ContGame = createContext();

function Gamecontext(props) {
  const {setModalMode, showModal, hideModal} = useContext(ContModal);

   const [screen, setScreen] = useState('start'); // start || game
   const [active, setActive] = useState('x'); // x || o
   const [playMode, setPlayMode] = useState('user'); // user || cpu

   const [squer, setSquer] = useState(new Array(9).fill(""));
   const [xnext, setXnext] = useState(false);

   const [winner, setWinner] = useState(null);
   const [linewinner, setlinewinner] = useState(null);
   const [ties, setTies] = useState({x: 0, o: 0});

   const changeSquerClick = (ix) =>{

    if(squer[ix] || winner){
      return
    }
    const currentuser = xnext ? 'o' : 'x';
    if(playMode === 'cpu' && currentuser !== active){
        return
    }

    const ns = [...squer];
    ns[ix] = !xnext ? 'x' : 'o';

    setSquer(ns);
    setXnext(!xnext);

    //check function win
    calcWinner(ns);

   }

   const handelQuit = () =>{
    setSquer(new Array(9).fill(''));
    setActive('x');
    setXnext(false);
    setWinner(null);
    setlinewinner(null);
    setTies({x: 0, o: 0});
    hideModal();
    setScreen('start');
   }

   const handleRestart = () =>{
    setModalMode("restart");
    showModal();
   }

   const handleYesRestart = () =>{
    setSquer(new Array(9).fill(""));
    setTies({x: 0, o: 0});
    hideModal();
   }

   const handleNoRestart = () =>{
    hideModal();
   }

   const handleNextRound = () =>{
     setSquer(new Array(9).fill(''));
     setXnext(winner === 'x');
     setWinner(null);
     setlinewinner(null);
     hideModal();
   }

   const changePlayMode = (mode) =>{
    setPlayMode(mode);
    setScreen('game');
   } 

   //check wineer
   
   const calcWinner = (ns) =>{
    const isWinner = linesWinner(ns);
    if(isWinner){
      setWinner(isWinner.wineer);
      setlinewinner(isWinner.line);
      //set ties
      const ti = {...ties};
      ti[isWinner.wineer] += 1;

      setTies(ti);
      showModal();
      setModalMode('winner');
    }
   }

   //check not winner
   const checkNotWinner = () =>{
    const countes = squer.filter(sq => sq === "");
    if(countes.length === 0){
      setWinner('no');
      showModal();
      setModalMode('winner');
    }
   }

   useEffect(() =>{
    checkNotWinner();

    const currentsuser = xnext ? 'o' : 'x';
    if(playMode === 'cpu' && currentsuser !== active && !winner){
      cpuNextPlay(squer);
    }

   },[winner, xnext, screen]);
   
   const cpuNextPlay = (squres) =>{
     const cpuNext = easyPlay(squres, active === "x" ? "o" : "x");
     let arrs = [...squer];
     arrs[cpuNext] = !xnext ? 'x' : 'o';
     setSquer(arrs);
     setXnext(!xnext);
    calcWinner(arrs);
   }

  return (
    <ContGame.Provider value={{
        screen, 
        active, 
        squer, 
        xnext,
        ties,
        winner,
        linewinner,
        setActive,
        changePlayMode,
        changeSquerClick,
        handelQuit,
        handleNextRound,
        handleRestart,
        handleNoRestart,
        handleYesRestart
    }}>
        {props.children}
    </ContGame.Provider>
  )
}

export  {Gamecontext, ContGame}