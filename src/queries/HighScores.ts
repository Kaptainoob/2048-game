import { gql } from "@apollo/client";

const HIGH_SCORES = gql`
  query GetHighScores {
    allScores(orderBy: "score_DESC") {
      player {
        name
      }
      score
    }
  }
`;

export default HIGH_SCORES;