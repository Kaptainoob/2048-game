import React, { createContext, useState } from "react";
import { SnackbarMessage } from "../types";

export interface ISnackbarContext {
    snackbarMessage: SnackbarMessage | null;
    setSnackbarMessage: (message: SnackbarMessage | null) => void;
}

export const SnackbarContext = createContext<ISnackbarContext>({
    snackbarMessage: null,
    setSnackbarMessage: () => null
});

export const SnackbarProvider = (props: React.Props<any>) => {

    const [snackbarMessage, setSnackbarMessage] = useState<SnackbarMessage | null>(null);
    
    return (
        <SnackbarContext.Provider value={{snackbarMessage, setSnackbarMessage}}>
            { props.children }
        </SnackbarContext.Provider>
    );
}

export default SnackbarProvider;