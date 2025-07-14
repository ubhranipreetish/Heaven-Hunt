"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "./firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser]   = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  const login  = (email, pw) =>
    signInWithEmailAndPassword(auth, email, pw);

  const signup = (name, email, pw) =>
    createUserWithEmailAndPassword(auth, email, pw).then(({ user }) => {
      return user.updateProfile({ displayName: name });
    });

  const googleSignin = () => signInWithPopup(auth, googleProvider);

  const logout = () => signOut(auth).then(() => router.push("/"));

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, googleSignin, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
