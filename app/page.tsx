import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodService",
  name: "(주)우리푸드앤드서비스",
  alternateName: "Woori Food and Service Inc.",
  url: "https://www.woorifns.kr",
  telephone: "1899-1094",
  address: {
    "@type": "PostalAddress",
    streetAddress: "통정8로 48-55",
    addressLocality: "천안시 동남구",
    addressRegion: "충남",
    addressCountry: "KR",
  },
  description:
    "20년 전통 단체급식 전문기업. 위탁급식·단체급식·구내식당·사내식당 전문 운영. 기업체, 기숙사, 관공서, 요양원, 요양병원 급식을 HACCP 기준 위생관리와 영양사 식단관리로 제공합니다.",
  foundingDate: "2006",
  areaServed: [
    { "@type": "City", name: "천안시" },
    { "@type": "City", name: "아산시" },
    { "@type": "City", name: "세종시" },
    { "@type": "AdministrativeArea", name: "충청남도" },
  ],
  knowsAbout: [
    "위탁급식",
    "단체급식",
    "구내식당",
    "사내식당",
    "HACCP",
    "영양사 식단관리",
    "친환경 식재료",
  ],
};

export default function Home() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image
          src="/images/hero-bg.jpg"
          alt="초록 나뭇잎 배경"
          fill
          priority
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <span className={styles.heroLabel}>SINCE 2005</span>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleBold}>정직한 밥상,</span><br /><span className={styles.heroTitleBold}>건강한 내일</span>
          </h1>
          <span className={styles.heroDivider} />
          <p className={styles.heroSubtitle}>
            20년 전통 단체급식 전문기업<br />
            (주)우리푸드앤드서비스가 건강하고 맛있는 식사를 약속합니다
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.btnPrimaryHero}>
              무료 상담 신청
            </Link>
            <Link href="/services" className={styles.btnOutlineHero}>
              서비스 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Intro + Stats Section */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <p className={styles.introText}>
            2005년부터 한결같은 마음으로,<br />
            <strong>정직한 식재료</strong>와 <strong>정성 어린 조리</strong>로 매일의 한 끼를 책임집니다.
          </p>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>20</span>
              <span className={styles.statUnit}>년+</span>
              <p className={styles.statLabel}>급식 운영 경력</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100</span>
              <span className={styles.statUnit}>%</span>
              <p className={styles.statLabel}>직접 채용 원칙</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>365</span>
              <span className={styles.statUnit}>일</span>
              <p className={styles.statLabel}>연중 운영 체계</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>HACCP</span>
              <span className={styles.statUnit}></span>
              <p className={styles.statLabel}>위생관리 기준 준수</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className={styles.brand}>
        <div className={styles.brandGallery}>
          <div className={styles.brandCard}>
            <Image src="/images/gallery-industrial.jpg" alt="맞춤 영양 식단" fill className={styles.brandImage} />
            <div className={styles.brandOverlay}>
              <span className={styles.brandLabel}>NUTRITION</span>
              <h3 className={styles.brandTitle}>영양</h3>
              <p className={styles.brandDesc}>전문 영양사 · 맞춤 식단 설계</p>
            </div>
          </div>
          <div className={styles.brandCard}>
            <Image src="/images/gallery-hospital.jpg" alt="정성 담긴 요리" fill className={styles.brandImage} />
            <div className={styles.brandOverlay}>
              <span className={styles.brandLabel}>SINCERITY</span>
              <h3 className={styles.brandTitle}>정성</h3>
              <p className={styles.brandDesc}>숙련된 조리사 · 표준 레시피</p>
            </div>
          </div>
          <div className={styles.brandCard}>
            <Image src="/images/gallery-elderly.jpg" alt="신뢰의 파트너십" fill className={styles.brandImage} />
            <div className={styles.brandOverlay}>
              <span className={styles.brandLabel}>TRUST</span>
              <h3 className={styles.brandTitle}>신뢰</h3>
              <p className={styles.brandDesc}>투명한 운영 · 20년 파트너십</p>
            </div>
          </div>
          <div className={styles.brandCard}>
            <Image src="/images/gallery-school.jpg" alt="신선한 식재료" fill className={styles.brandImage} />
            <div className={styles.brandOverlay}>
              <span className={styles.brandLabel}>FRESHNESS</span>
              <h3 className={styles.brandTitle}>신선</h3>
              <p className={styles.brandDesc}>산지 직거래 · 당일 조리</p>
            </div>
          </div>
        </div>
        <div className={styles.brandCenter}>
          <p className={styles.brandSlogan}>정직한 밥상, 건강한 내일</p>
          <p className={styles.brandSub}>20년 전통 단체급식 전문기업 (주)우리푸드앤드서비스</p>
          <Link href="/services" className={styles.btnOutline}>
            서비스 보기
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>급식 위탁, 지금 상담하세요</h2>
          <p className={styles.ctaDescription}>
            맞춤 견적과 메뉴 구성을 무료로 상담해 드립니다
          </p>
          <Link href="/contact" className={styles.btnPrimary}>
            무료 상담 신청
          </Link>
        </div>
      </section>
    </div>
  );
}
