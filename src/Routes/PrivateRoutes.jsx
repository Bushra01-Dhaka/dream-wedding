import { useContext } from "react";
import { AuthContext } from "../UserContext/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    if(loading)
    {
        return <div className="h-screen flex justify-center items-center"><RotatingLines
        strokeColor="#99627A"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      /></div>
    }
    if(user) 
    {
        return children ;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;