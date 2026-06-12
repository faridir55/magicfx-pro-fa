"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "چگونه کار می‌کند", href: "/#how-it-works" },
    { name: "عملکرد", href: "/#performance" },
    { name: "آموزش‌ها", href: "/tutorials" },
    { name: "وبلاگ", href: "/blog" },
    { name: "درباره ما", href: "/about" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-bg-color/90 backdrop-blur-md border-b border-glass-border py-4"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center flex-row-reverse">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center">
            <img
              src="/MagicFX_pro.png"
              alt="MagicFX Pro Logo"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest text-text-muted hover:text-accent-color transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text-color relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 bg-bg-color flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out z-40 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-xl font-medium uppercase tracking-widest text-text-color hover:text-accent-color transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}
