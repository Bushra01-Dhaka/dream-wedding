import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    //for register create user
    const createUser = (email,password) =>
    {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // for signin
    const signIn = (email,password) => 
    {
        return signInWithEmailAndPassword(auth,email,password);
    }

    //current user state observe korbo
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("User in the auth of current state", currentUser);
            setUser(currentUser);
        });
        return () => 
        {
            unSubscribe();
        }

    }, []);

    // for signOut
    const logOut = () =>
    {
        return signOut(auth);
    }


    const authInfo = {user, createUser, logOut, signIn};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
            
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;