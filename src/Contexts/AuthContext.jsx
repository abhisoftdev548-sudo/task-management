import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  // 🔹 Load users from localStorage
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  // 🔹 Load currentUser from localStorage
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // 🔹 Save users when changed
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // 🔹 Save currentUser when changed
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  // 🔹 Login
  const login = (userData) => {
    setUsers((prev) => {
      const exists = prev.find((u) => u.email === userData.email);
      if (exists) return prev; // duplicate user avoid
      return [...prev, userData];
    });
    setCurrentUser(userData);
  };

  // 🔹 Logout
  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ users, currentUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
