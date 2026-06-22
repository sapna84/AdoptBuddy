import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("adoptbuddy_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Register / Login (simple merge logic for now)
  const loginOrRegister = (userData) => {
    localStorage.setItem("adoptbuddy_user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("adoptbuddy_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginOrRegister, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);