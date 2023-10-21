import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/Auth.Context";

const IsPrivate = ({ children }) => {
  const { user, isLoading } = useAuthContext();

  if (isLoading) {
    return <h3>Loading...</h3>;
  } else {
    return user ? children : <Navigate to={"/login"} />;
  }
};
export default IsPrivate;
