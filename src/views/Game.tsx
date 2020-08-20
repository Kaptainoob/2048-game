import React, { useContext, useState, useEffect } from 'react';
import './Game.css';
import { IsGameOnContext } from '../contexts/IsGameOnContext';
import GameBoard from '../components/GameBoard';
import { GameDirection, SnackbarType } from '../types';
import useGameData from '../hooks/UseGameData';
import { SnackbarContext } from '../contexts/SnackbarContext';

const Game = () => {

  const { setSnackbarMessage } = useContext(SnackbarContext);
  const { setIsGameOn } = useContext(IsGameOnContext);

  const [lastMove, setLastMove] = useState<{ direction: GameDirection } | null>(null);

  const gameData = useGameData(lastMove);

  useEffect(() => {
    if (gameData?.finished) {
      setSnackbarMessage({ message: 'Game is finished', type: SnackbarType.Warning });
    }
  }, [setSnackbarMessage, gameData])

  const handleNewMove = (direction: GameDirection) => {
    if (!gameData?.finished) {
      setLastMove({ direction });
    } 
  }

  if (!gameData) {
    return (
      <div className="Game">
        <button onClick={() => setIsGameOn(false)}>Go home</button>
        <div>No game data</div>
      </div>
    );
  }

  return (
    <div className="Game">
      <button onClick={() => setIsGameOn(false)}>Go home</button>
      <div className="game-data-container">
        <div className="game-score-container">
          <span className="game-score-label">Score:</span>
          <span className="game-score-value">{gameData.score}</span>
        </div>
        <GameBoard gameState={gameData.state} handleNewMove={handleNewMove} />
      </div>
    </div>
  );
};

export default Game;
