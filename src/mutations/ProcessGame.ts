import { gql } from "@apollo/client";

const PROCESS_GAME = gql`
    mutation ProcesGame($direction: Direction!, $state: [[Int!]!]!, $score: Int!) {
        processGame(game: {
            direction: $direction,
            state: $state,
            score: $score
        }) {
            state, score, finished
        }
    }
`;

export default PROCESS_GAME;