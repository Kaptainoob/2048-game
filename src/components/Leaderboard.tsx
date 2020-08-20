import React from 'react';
import './Leaderboard.css';
import { useQuery } from '@apollo/client';
import { TScore } from '../types';
import HIGH_SCORES from '../queries/HighScores';

const Leaderboard = () => {

  const { loading, error, data } = useQuery(HIGH_SCORES);
  
  if (error) {
    console.error(error);
  }
  
  return (
    <div className="Leaderboard">
              {loading ? (
        <p>Loading data...</p>
      ) : (
        <pre>{data.allScores.map((score: TScore) => `${score.player.name} : ${score.score}\n`)}</pre>
      )}
    </div>
  );
};

export default Leaderboard;
