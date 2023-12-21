import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    
    const { user, loading } = useAuth();

    if (loading) {
        return <span> Loading... </span>
    }

    if (user) {
        return children
    }
    return <Navigate to="/login" />
}

export default PrivateRoute