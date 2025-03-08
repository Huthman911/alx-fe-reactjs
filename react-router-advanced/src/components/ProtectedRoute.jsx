import { Navigate } from "react-router-dom";
import { useAuth } from " ../contexts/authContext";
const isAuthenticated = false; // Simulate authentication state

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
