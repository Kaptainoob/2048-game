import React from 'react';
import './GameRow.css';
import GameCell from './GameCell';

export interface IGameRowProps extends React.Props<any> {
    rowState: number[]
}

const GameRow = ({ rowState }: IGameRowProps) => {

    const gameCells = rowState.map((cellState, i) => {
        return <GameCell gameCellState={cellState} key={i} />;
    });

  return (
    <div className="GameRow">
        { gameCells }
    </div>
  );
};

export default GameRow;
