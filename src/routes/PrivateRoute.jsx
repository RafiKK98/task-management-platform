import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"

const PrivateRoute = ({ children }) => {
    
    const { user, loading } = useAuth();

    if (loading) {
        return <span> Loading... </span>
    }

    if (user) {
        return children
    }
    <Navigate to="/login" />
}

export default PrivateRoute