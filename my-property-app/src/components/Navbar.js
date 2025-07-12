"use client";

import { useState } from "react";
import Link from "next/link";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link href="/home" passHref>
        <div className="logo">
          <img src="/images/HeavenHunt.png" />
        </div>
      </Link>

      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span /><span /><span />
      </button>

      <div className={`nav-items ${menuOpen ? "open" : ""}`}>
        <Link href="/home"      passHref><span>Home</span></Link>
        <Link href="/properties" passHref><span>Properties</span></Link>
        <Link href="/about"     passHref><span>About</span></Link>
        <Link href="/contact"   passHref><span>Contact</span></Link>
        <Link href="/profile"   passHref><span>Profile</span></Link>
      </div>
    </nav>
  );
}
