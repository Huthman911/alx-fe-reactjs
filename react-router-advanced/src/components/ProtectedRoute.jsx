import { Navigate } from "react-router-dom";

const isAuthenticated = false; // Simulate authentication state

const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
