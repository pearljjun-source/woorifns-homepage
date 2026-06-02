"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/about", label: "회사소개" },
  { href: "/services", label: "서비스" },
  { href: "/contact", label: "문의하기" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);

  // A1: Escape 키로 모바일 메뉴 닫기
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, closeMenu]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink} onClick={closeMenu}>
          <span className={styles.logoText}>
            <span className={styles.logoBold}>(주)우리푸드앤드서비스</span>
          </span>
        </Link>

        {/* A1: 메뉴 열림 시 배경 오버레이 — 클릭하면 닫힘 */}
        {mobileMenuOpen && (
          <div className={styles.overlay} onClick={closeMenu} aria-hidden="true" />
        )}

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                pathname === link.href ? styles.navLinkActive : ""
              }`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerOpen : ""}`}
          onClick={toggleMenu}
          aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileMenuOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </div>
    </header>
  );
}
