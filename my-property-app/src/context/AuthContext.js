"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("heaven_user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("heaven_users")) || [];
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      setUser(found);
      localStorage.setItem("heaven_user", JSON.stringify(found));
      return true;
    }
    return false;
  };

  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("heaven_users")) || [];
    if (users.find(u => u.email === email)) return false;
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("heaven_users", JSON.stringify(users));
    localStorage.setItem("heaven_user", JSON.stringify(newUser));
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("heaven_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
