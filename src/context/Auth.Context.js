import React, { useState, useEffect, useContext } from "react";
import { apiConnect } from "../services/axios";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  //get the token
  //send the token to the verify route
  //set the user information inside of my global state
  const authenticateUser = () => {
    //  <==  ADD
    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // If the token exists in the localStorage
    if (storedToken) {
      // We must send the JWT token in the request's "Authorization" Headers
      apiConnect
        .verify()
        .then((response) => {
          // If the server verifies that the JWT token is valid
          const user = response.data;
          // Update state variables
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
          setErrorMessage(null);
        })
        .catch((error) => {
          // If the server sends an error response (invalid token)
          // Update state variables
          const { response } = error;
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
          setErrorMessage(response.data.error);
        });
    } else {
      // If the token is not available (or is removed)
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
      setErrorMessage("Please login!");
    }
  };

  function login(email, password) {
    apiConnect
      .login({ email, password })
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
      })
      .catch((error) => {
        const { response } = error;
        console.log(response.data);
        setErrorMessage(response.data.errorMessage);
      });
  }

  function signup(newUser) {
    apiConnect
      .createUser(newUser)
      .then((res) => {
        const { email, password } = newUser;
        login(email, password);
      })
      .catch((error) => {
        const { response } = error;
        console.log(response.data);
        setErrorMessage(response.data.errorMessage);
      });
  }

  function handleProfilePicture(file) {
    apiConnect.uploadImage(file);
  }

  function logOutUser() {
    localStorage.removeItem("authToken");
    authenticateUser();
  }

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
        login,
        signup,
        errorMessage,
        handleProfilePicture,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

// Define a custom hook to access the context
const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProviderWrapper, AuthContext, useAuthContext };
