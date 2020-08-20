import React, { createContext, useState } from "react";

export interface IIsGameOnContext {
    isGameOn: boolean;
    setIsGameOn: (val: boolean) => void;
}

export const IsGameOnContext = createContext<IIsGameOnContext>({
    isGameOn: false,
    setIsGameOn: () => null
});

export const IsGameOnProvider = (props: React.Props<any>) => {

    const [isGameOn, setIsGameOn] = useState<boolean>(false);

    return (
        <IsGameOnContext.Provider value={{isGameOn, setIsGameOn}}>
            { props.children }
        </IsGameOnContext.Provider>
    );
}

export default IsGameOnProvider;