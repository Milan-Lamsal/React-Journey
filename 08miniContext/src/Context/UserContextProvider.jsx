import React from "react";
import UserContext from "./UserContext";



// JSX element 'UserContext.Provider' has no corresponding closing tag.ts(17008)

const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )

}
export default UserContextProvider;
