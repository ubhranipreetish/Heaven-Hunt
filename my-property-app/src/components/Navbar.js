"use client";
import Link from "next/link";
import "../styles/Navbar.css";

export default function Navbar() {

  return (
    <nav className="navbar">
      <Link href="/home" passHref>
        <span className="logo">Heaven Hunt</span>
      </Link>

      <div className="navbar-middle"></div>

      <div className="nav-items">
        <Link href="/home" passHref>
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
