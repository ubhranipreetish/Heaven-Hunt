"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import '../styles/Welcome_Component.css';

const Welcome_Component = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [type,setType] = useState('signup')
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

  function changeType(){
    if (type == 'signup'){
      setType('login')
    } else {
      setType('signup')
    }
  }
  let heading = (type == 'signup' ? 'Create Your Account' : 'Welcome Back')
  let btn_txt = (type == 'signup' ? 'Sign Up' : 'Login')
  let span_txt = (type == 'signup' ? 'Login' : 'Sign Up')
  let acc_txt = (type == 'signup' ? 'Already have an account? ' : "Don't have an account? ")

  return (
    <div className="signup-container">
      <div className="left-panel">
        <div className="overlay"></div>
        <div className='left-panel-content'>
                <h2>Welcome to <span>Heaven Hunt</span></h2>
                <div className='left-panel-c2'>
                    <p>
                    Discover dream homes, explore verified listings, and save your favorite properties with ease. 
                    Join Heaven Hunt and take the first step toward your perfect space.
                    </p>
                </div>
        </div>
      </div>
      <div className="right-panel">
        <h2>{heading}</h2>
        <form className="signup-form"  onSubmit={handleSubmit}>
          {type === "signup" && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
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
          <button type="submit" className="signup-btn">{btn_txt}</button>
        </form>
        <p className="login-text">{acc_txt}<span onClick={changeType}>{span_txt}</span></p>
      </div>
    </div>
  );
};

export default Welcome_Component;
