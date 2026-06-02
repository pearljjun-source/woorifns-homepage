import Link from "next/link";
import Logo from "./Logo";
import styles from "./Footer.module.css";

const quickLinks = [
  { href: "/", label: "?? },
  { href: "/about", label: "?뚯궗?뚭컻" },
  { href: "/services", label: "?쒕퉬?? },
  { href: "/contact", label: "臾몄쓽?섍린" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.companyInfo}>
            <div className={styles.companyNameRow}>
              <Logo className={styles.logoIcon} />
              <h3 className={styles.companyName}>?쒖슦由ы뫖?쒖븻?쒖꽌鍮꾩뒪</h3>
            </div>
            <p className={styles.companyDesc}>湲됱떇?꾪긽 ?꾨Ц湲곗뾽</p>
            <address className={styles.address}>
              <p>異⑸궓 泥쒖븞???숇궓援??듭젙8濡?48-55</p>
              <p>
                <span>??쒖쟾?? </span>
                <a href="tel:1899-1094" className={styles.contactLink}>
                  1899-1094
                </a>
              </p>
              <p>
                <span>?대??? </span>
                <a href="tel:010-8812-1080" className={styles.contactLink}>
                  010-8812-1080
                </a>
              </p>
            </address>
          </div>

          <div className={styles.quickLinks}>
            <h4 className={styles.quickLinksTitle}>諛붾줈媛湲?/h4>
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
          <p>&copy; 2025 ?쒖슦由ы뫖?쒖븻?쒖꽌鍮꾩뒪. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

