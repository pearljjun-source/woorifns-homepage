import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodService",
  name: "?곕━?몃뱶?ㅻ뱶?쒕퉬??,
  alternateName: "Woori Food and Service Inc.",
  url: "https://www.woorifns.kr",
  telephone: "1899-1094",
  address: {
    "@type": "PostalAddress",
    streetAddress: "?듭젙8濡?48-55",
    addressLocality: "泥쒖븞???숇궓援?,
    addressRegion: "異⑸궓",
    addressCountry: "KR",
  },
  description:
    "20???꾪넻 湲됱떇?꾪긽 ?꾨Ц湲곗뾽. ?꾪긽湲됱떇쨌?⑥껜湲됱떇쨌援щ궡?앸떦쨌?щ궡?앸떦 ?꾨Ц ?댁쁺. 湲곗뾽泥? 湲곗닕?? 愿怨듭꽌, ?붿뼇?? ?붿뼇蹂묒썝 湲됱떇??HACCP 湲곗? ?꾩깮愿由ъ? ?곸뼇???앸떒愿由щ줈 ?쒓났?⑸땲??",
  foundingDate: "2006",
  areaServed: [
    { "@type": "City", name: "泥쒖븞?? },
    { "@type": "City", name: "?꾩궛?? },
    { "@type": "City", name: "?몄쥌?? },
    { "@type": "AdministrativeArea", name: "異⑹껌?⑤룄" },
  ],
  knowsAbout: [
    "?꾪긽湲됱떇",
    "?⑥껜湲됱떇",
    "援щ궡?앸떦",
    "?щ궡?앸떦",
    "HACCP",
    "?곸뼇???앸떒愿由?,
    "移쒗솚寃??앹옱猷?,
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
          alt="珥덈줉 ?섎춪??諛곌꼍"
          fill
          priority
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <span className={styles.heroLabel}>SINCE 2005</span>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleBold}>?뺤쭅??諛μ긽,</span><br /><span className={styles.heroTitleBold}>嫄닿컯???댁씪</span>
          </h1>
          <span className={styles.heroDivider} />
          <p className={styles.heroSubtitle}>
            20???꾪넻 湲됱떇?꾪긽 ?꾨Ц湲곗뾽<br />
            ?곕━?몃뱶?ㅻ뱶?쒕퉬?ㅺ? 嫄닿컯?섍퀬 留쏆엳???앹궗瑜??쎌냽?⑸땲??          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.btnPrimaryHero}>
              臾대즺 ?곷떞 ?좎껌
            </Link>
            <Link href="/services" className={styles.btnOutlineHero}>
              ?쒕퉬??蹂닿린
            </Link>
          </div>
        </div>
      </section>

      {/* Intro + Stats Section */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <p className={styles.introText}>
            2005?꾨????쒓껐媛숈? 留덉쓬?쇰줈,<br />
            <strong>?뺤쭅???앹옱猷?/strong>? <strong>?뺤꽦 ?대┛ 議곕━</strong>濡?留ㅼ씪?????쇰? 梨낆엫吏묐땲??
          </p>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>20</span>
              <span className={styles.statUnit}>??</span>
              <p className={styles.statLabel}>湲됱떇 ?댁쁺 寃쎈젰</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100</span>
              <span className={styles.statUnit}>%</span>
              <p className={styles.statLabel}>吏곸젒 梨꾩슜 ?먯튃</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>365</span>
              <span className={styles.statUnit}>??/span>
              <p className={styles.statLabel}>?곗쨷 ?댁쁺 泥닿퀎</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>HACCP</span>
              <span className={styles.statUnit}></span>
              <p className={styles.statLabel}>?꾩깮愿由?湲곗? 以??/p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className={styles.brand}>
        <div className={styles.brandGallery}>
          <div className={styles.brandCard}>
            <Image src="/images/gallery-industrial.jpg" alt="留욎땄 ?곸뼇 ?앸떒" fill className={styles.brandImage} />
            <div className={styles.brandOverlay}>
              <span className={styles.brandLabel}>NUTRITION</span>
              <h3 className={styles.brandTitle}>?곸뼇</h3>
              <p className={styles.brandDesc}>?꾨Ц ?곸뼇??쨌 留욎땄 ?앸떒 ?ㅺ퀎</p>
            </div>
          </div>
          <div className={styles.brandCard}>
            <Image src="/images/gallery-hospital.jpg" alt="?뺤꽦 ?닿릿 ?붾━" fill className={styles.brandImage} />
            <div className={styles.brandOverlay}>
              <span className={styles.brandLabel}>SINCERITY</span>
              <h3 className={styles.brandTitle}>?뺤꽦</h3>
              <p className={styles.brandDesc}>?숇젴??議곕━??쨌 ?쒖? ?덉떆??/p>
            </div>
          </div>
          <div className={styles.brandCard}>
            <Image src="/images/gallery-elderly.jpg" alt="?좊ː???뚰듃?덉떗" fill className={styles.brandImage} />
            <div className={styles.brandOverlay}>
              <span className={styles.brandLabel}>TRUST</span>
              <h3 className={styles.brandTitle}>?좊ː</h3>
              <p className={styles.brandDesc}>?щ챸???댁쁺 쨌 20???뚰듃?덉떗</p>
            </div>
          </div>
          <div className={styles.brandCard}>
            <Image src="/images/gallery-school.jpg" alt="?좎꽑???앹옱猷? fill className={styles.brandImage} />
            <div className={styles.brandOverlay}>
              <span className={styles.brandLabel}>FRESHNESS</span>
              <h3 className={styles.brandTitle}>?좎꽑</h3>
              <p className={styles.brandDesc}>?곗? 吏곴굅??쨌 ?뱀씪 議곕━</p>
            </div>
          </div>
        </div>
        <div className={styles.brandCenter}>
          <p className={styles.brandSlogan}>?뺤쭅??諛μ긽, 嫄닿컯???댁씪</p>
          <p className={styles.brandSub}>20???꾪넻 湲됱떇 ?꾨Ц湲곗뾽 ?곕━?몃뱶?ㅻ뱶?쒕퉬??/p>
          <Link href="/services" className={styles.btnOutline}>
            ?쒕퉬??蹂닿린
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>湲됱떇 ?꾪긽, 吏湲??곷떞?섏꽭??/h2>
          <p className={styles.ctaDescription}>
            留욎땄 寃ъ쟻怨?硫붾돱 援ъ꽦??臾대즺濡??곷떞???쒕┰?덈떎
          </p>
          <Link href="/contact" className={styles.btnPrimary}>
            臾대즺 ?곷떞 ?좎껌
          </Link>
        </div>
      </section>
    </div>
  );
}

