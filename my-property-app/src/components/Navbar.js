"use client";
import Link from "next/link";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">Heaven Hunt</span>

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
      </div>
    </nav>
  );
}
