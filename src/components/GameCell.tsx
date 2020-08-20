import React from 'react';
import './GameCell.css';

const getCellBackgroundColor = (val: number): string => {
  switch (val) {
    case 0:
      return 'E6E67B';
    case 2:
      return 'A6E67B';
    case 4:
      return '7BE6A9';
    case 8:
      return '7BE6D8';
    case 16:
      return '7BA6E6';
    case 32:
      return '8D7BE6';
    case 64:
      return 'CA7BE6';
    case 128:
      return 'E67BB1';
    case 256:
      return 'E67B7B';
    case 512:
      return 'B34E4E';
    case 1024:
      return '812E2E';
    case 2048:
      return '511414';
    default:
      return 'D0D0D0'
  }
}

export interface IGameCellProps extends React.Props<any> {
  gameCellState: number;
}

const GameCell = ({ gameCellState }: IGameCellProps) => {

  const style: Object = {
    backgroundColor: `#${getCellBackgroundColor(gameCellState)}`
  };

  return (
    <div className="GameCell" style={style}>
      {gameCellState}
    </div>
  );
};

export default GameCell;
