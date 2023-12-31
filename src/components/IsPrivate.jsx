import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/Auth.Context";

const IsPrivate = ({ children }) => {
  const { user } = useAuthContext();

  return user ? children : <Navigate to={"/login"} />;
};
export default IsPrivate;
