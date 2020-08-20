import React, { createContext, useState } from "react";
import { User } from "../types";

export interface IUserContext {
    user: User | null;
    setUser: (user: User | null) => void;
}

export const UserContext = createContext<IUserContext>({
    user: null,
    setUser: () => null
});

export const UserProvider = (props: React.Props<any>) => {

    const [user, setUser] = useState<User | null>(null);
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            { props.children }
        </UserContext.Provider>
    );
}

export default UserProvider;