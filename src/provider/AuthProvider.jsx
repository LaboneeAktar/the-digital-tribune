import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authInfo = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
