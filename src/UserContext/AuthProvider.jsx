import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //for register create user
    const createUser = (email,password) =>
    {   
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // for signin
    const signIn = (email,password) => 
    {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    //current user state observe korbo
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("User in the auth of current state", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => 
        {
            unSubscribe();
        }

    }, []);

    // for signOut
    const logOut = () =>
    {
        setLoading(true);
        return signOut(auth);
    }


    const authInfo = {user, createUser, logOut, signIn, loading};
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