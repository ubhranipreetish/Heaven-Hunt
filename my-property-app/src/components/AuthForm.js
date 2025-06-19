"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function AuthForm({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { login, signup } = useAuth();
  const router = useRouter();

  const handleSubmit = e => {
    e.preventDefault();
    let success = false;
    if (type === "login") {
      success = login(email, password);
      if (!success) setError("Invalid credentials");
    } else {
      if (!name) return setError("Name is required");
      success = signup(name, email, password);
      if (!success) setError("User already exists");
    }

    if (success) router.push("/"); 
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {type === "signup" && (
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">{type === "login" ? "Login" : "Sign Up"}</button>
    </form>
  );
}
