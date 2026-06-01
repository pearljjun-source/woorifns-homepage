import Link from "next/link";
import Logo from "./Logo";
import styles from "./Footer.module.css";

const quickLinks = [
  { href: "/", label: "홈" },
  { href: "/about", label: "회사소개" },
  { href: "/services", label: "서비스" },
  { href: "/contact", label: "문의하기" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.companyInfo}>
            <div className={styles.companyNameRow}>
              <Logo className={styles.logoIcon} />
              <h3 className={styles.companyName}>㈜우리푸드앤드서비스</h3>
            </div>
            <p className={styles.companyDesc}>급식위탁 전문기업</p>
            <address className={styles.address}>
              <p>충남 천안시 동남구 통정8로 48-55</p>
              <p>
                <span>대표전화: </span>
                <a href="tel:1899-1094" className={styles.contactLink}>
                  1899-1094
                </a>
              </p>
              <p>
                <span>휴대폰: </span>
                <a href="tel:010-8812-1080" className={styles.contactLink}>
                  010-8812-1080
                </a>
              </p>
            </address>
          </div>

          <div className={styles.quickLinks}>
            <h4 className={styles.quickLinksTitle}>바로가기</h4>
            <nav className={styles.quickLinksNav}>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={styles.quickLink}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; 2025 ㈜우리푸드앤드서비스. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
