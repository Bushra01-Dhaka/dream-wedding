import { createContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const authInfo = {name: "Murtasim"}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;