import Link from "next/link";
import styles from "./page.module.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodService",
  name: "우리푸드앤드서비스",
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
    "20년 전통 급식위탁 전문기업. 위탁급식·단체급식·구내식당·사내식당 전문 운영. 기업체, 기숙사, 관공서, 요양원, 요양병원 급식을 HACCP 기준 위생관리와 영양사 식단관리로 제공합니다.",
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
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>정직한 밥상, 건강한 내일</h1>
          <p className={styles.heroSubtitle}>
            20년 전통 급식위탁 전문기업 우리푸드앤드서비스가 건강하고 맛있는 식사를 약속합니다
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.btnPrimary}>
              문의하기
            </Link>
            <Link href="/services" className={styles.btnSecondary}>
              서비스 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>우리의 핵심 가치</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueAccent} />
              <h3 className={styles.valueTitle}>신선 (FRESHNESS)</h3>
              <p className={styles.valueDescription}>
                엄격한 기준의 신선 식재료, 산지 직거래로 당일 조리합니다
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueAccent} />
              <h3 className={styles.valueTitle}>정성 (SINCERITY)</h3>
              <p className={styles.valueDescription}>
                표준 레시피와 숙련된 조리사의 정성으로 한 끼를 준비합니다
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueAccent} />
              <h3 className={styles.valueTitle}>신뢰 (TRUST)</h3>
              <p className={styles.valueDescription}>
                투명한 운영과 20년 파트너십으로 고객과 함께합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className={styles.services}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>맞춤형 급식 서비스</h2>
          <p className={styles.sectionSubtitle}>
            다양한 업종에 최적화된 급식 솔루션을 제공합니다
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>산업체 급식</h3>
              <p className={styles.serviceDescription}>
                근무 패턴 맞춤 탄력적 메뉴 운영 · 365일 연중 운영
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>병원 · 의료기관 급식</h3>
              <p className={styles.serviceDescription}>
                환자식 · 직원식 동시 운영, 영양 균형 식단
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>노인요양원 · 복지시설 급식</h3>
              <p className={styles.serviceDescription}>
                어르신 맞춤 식단, 저작 편의성 중심 운영
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>학교 · 기숙사 급식</h3>
              <p className={styles.serviceDescription}>
                성장기 맞춤 영양식단, 알레르기 정보 공개
              </p>
            </div>
          </div>
          <div className={styles.servicesLink}>
            <Link href="/services" className={styles.btnOutline}>
              자세히 보기
            </Link>
          </div>
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
