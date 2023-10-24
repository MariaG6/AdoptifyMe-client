import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/Auth.Context";

const IsAnon = ({ children }) => {
  const { user } = useAuthContext();

  return !user ? children : <Navigate to={"/"} />;
};
export default IsAnon;
