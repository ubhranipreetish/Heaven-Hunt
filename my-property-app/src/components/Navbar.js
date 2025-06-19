"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import "../styles/Navbar.css";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link href="/" passHref>
        <span className="logo">Heaven Hunt</span>
      </Link>

      <div className="navbar-middle"></div>

      <div className="nav-items">
        <Link href="/" passHref>
          <span className="home">Home</span>
        </Link>
        <Link href="/properties" passHref>
          <span className="properties-navbar">Properties</span>
        </Link>
        <Link href="/about" passHref>
          <span className="about">About</span>
        </Link>
        <Link href="/contact" passHref>
          <span className="about">Contact</span>
        </Link>
        <Link href="/profile" passHref>
          <span className="about">👤</span>
        </Link>
      </div>
    </nav>
  );
}
