import React, {createContext, useState, useContext} from "react";

export const AuthContext = createContext();

const initialState = {
    user: localStorage.getItem("user")
}

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(initialState)
    return(
        <AuthContext.Provider value={{...user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;