import React, { useEffect, useCallback } from 'react';
import './GameBoard.css';
import GameRow from './GameRow';
import { GameDirection } from '../types';

const parseGameDirection = (v: string): GameDirection | null => {
    switch (v) {
        case 'ArrowUp':
            return GameDirection.Up;
        case 'ArrowDown':
            return GameDirection.Down;
        case 'ArrowLeft':
            return GameDirection.Left;
        case 'ArrowRight':
            return GameDirection.Right;
        default:
            return null;
    }
}

export interface IGameBoardProps extends React.Props<any> {
    gameState: number[][];
    handleNewMove: (direction: GameDirection) => void;
}

const GameBoard = ({ gameState, handleNewMove }: IGameBoardProps) => {

    const gameRows = gameState.map((rowState, i) => {
        return <GameRow rowState={rowState} key={i} />
    });

    const handleKeyUp = useCallback((e: KeyboardEvent) => {
        const direction: GameDirection | null = parseGameDirection(e.key);
        direction && handleNewMove(direction);
    }, [handleNewMove]);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);
        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp]);

    return (
        <div className="GameBoard">
            { gameRows }
        </div>
    );
};

export default GameBoard;
