import { GameDirection, GameData } from "../types";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import NEW_GAME from "../queries/NewGame";
import PROCESS_GAME from "../mutations/ProcessGame";

const useGameData = (move: { direction: GameDirection } | null): GameData | null => {

    const [gameData, setGameData] = useState<GameData | null>(null);

    const newGameQuery = useQuery<{ newGame: GameData }>(NEW_GAME);

    useEffect(() => {
        newGameQuery.refetch();
    }, [newGameQuery])

    useEffect(() => {
        if (newGameQuery.data) {
            setGameData(newGameQuery.data.newGame)
        }
    }, [setGameData, newGameQuery.data]);

    const [processGame, processGameQuery] = useMutation<{ processGame: GameData }>(PROCESS_GAME);

    useEffect(() => {
        if (move) {
            processGame({
                variables: {
                    direction: move?.direction,
                    state: gameData?.state,
                    score: gameData?.score
                }
            });
        }
    }, [processGame, move, gameData]);

    useEffect(() => {
        if (processGameQuery.data) {
            setGameData(processGameQuery.data.processGame);
        }
    }, [setGameData, processGameQuery.data])

    return gameData;
}  

export default useGameData;