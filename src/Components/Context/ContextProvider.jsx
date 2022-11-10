import React, { createContext, useState } from "react";

const UserContext = createContext()




export function UserContextProvider({ children }) {
    const [name, setName] = useState('Jahrulez');
    return (
        <UserContext.Provider value={{name, setName}}>
            {children}
        </UserContext.Provider>
    )
}



export default UserContext;