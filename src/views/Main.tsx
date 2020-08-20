import React, { useContext } from 'react';
import './Main.css';
import Home from './Home';
import { IsGameOnContext } from '../contexts/IsGameOnContext';
import Game from './Game';

const Main = () => {

const { isGameOn } = useContext(IsGameOnContext)

  return (
    <div className="Main">
        { isGameOn ? <Game /> : <Home /> }
    </div>
  );
};

export default Main;