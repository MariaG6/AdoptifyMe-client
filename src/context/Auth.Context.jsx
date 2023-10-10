import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {};

  const signup = (userData) => {};

  return (
    <AuthContext.Provider value={{ user, login, signup }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
