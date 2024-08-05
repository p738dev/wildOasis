import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../authentication/hooks/useUser";
import Spinner from "../styles/Spinner.css";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <Spinner />;

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
