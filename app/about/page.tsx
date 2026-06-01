import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "회사소개 | 우리푸드앤드서비스",
  description:
    "㈜우리푸드앤드서비스는 2005년 설립 이래 산업체, 병원, 요양원, 학교 등 다양한 현장에서 정직한 급식 서비스를 제공하는 급식위탁 전문기업입니다.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Page Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>회사소개</h1>
          <p className={styles.heroBreadcrumb}>
            <Link href="/">홈</Link> &gt; 회사소개
          </p>
        </div>
      </section>

      {/* 인사말 Section */}
      <section className={styles.greeting}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            정직한 밥상, 건강한 내일
          </h2>
          <div className={styles.greetingLayout}>
            <div className={styles.greetingContent}>
              <p>
                저희 ㈜우리푸드앤드서비스는 2005년부터 단체급식 사업을 운영하며
                단 하나의 원칙을 지켜왔습니다.
              </p>
              <p>
                단순히 끼니를 해결하는 공간을 넘어, 직원들이 매일 기대하는
                식사 시간이 될 수 있도록 메뉴의 다양성과 품질에 끊임없이
                투자하고 있습니다.
              </p>
              <p>
                정직한 식재료, 정성 어린 조리, 진심을 담은 서비스.
              </p>
              <p>
                현재까지 축적해온 실 경험과 앞선 운영 능력으로 합리적인 운영을
                약속드리며, 집에서의 편안함과 어머니의 정성으로 감동 서비스를
                실현하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 회사 개요 Section */}
      <section className={styles.overview}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>회사 개요</h2>
          <div className={styles.overviewTable}>
            <div className={styles.overviewRow}>
              <span className={styles.overviewLabel}>회사명</span>
              <span className={styles.overviewValue}>
                ㈜우리푸드앤드서비스
              </span>
            </div>
            <div className={styles.overviewRow}>
              <span className={styles.overviewLabel}>설립연도</span>
              <span className={styles.overviewValue}>2005년 사업개시</span>
            </div>
            <div className={styles.overviewRow}>
              <span className={styles.overviewLabel}>소재지</span>
              <span className={styles.overviewValue}>
                충남 천안시 동남구 통정8로 48-55
              </span>
            </div>
            <div className={styles.overviewRow}>
              <span className={styles.overviewLabel}>대표전화</span>
              <span className={styles.overviewValue}>1899-1094</span>
            </div>
            <div className={styles.overviewRow}>
              <span className={styles.overviewLabel}>휴대폰</span>
              <span className={styles.overviewValue}>010-8812-1080</span>
            </div>
            <div className={styles.overviewRow}>
              <span className={styles.overviewLabel}>주요사업</span>
              <span className={styles.overviewValue}>
                단체급식 · 위탁경영 전문기업
              </span>
            </div>
            <div className={styles.overviewRow}>
              <span className={styles.overviewLabel}>고객사 업종</span>
              <span className={styles.overviewValue}>
                산업체 · 병원 · 요양원 · 학교
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 경영이념 Section */}
      <section className={styles.philosophy}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>경영이념 &amp; 비전</h2>
          <p className={styles.sectionSubtitle}>&ldquo;정직한 밥상, 건강한 내일&rdquo;</p>
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCard}>
              <div className={styles.philosophyImageWrap}>
                <Image src="/images/fresh-vegetables.jpg" alt="신선한 채소" fill className={styles.philosophyImage} />
              </div>
              <h3 className={styles.philosophyTitle}>신선 (FRESHNESS)</h3>
              <p className={styles.philosophyDescription}>
                엄격한 기준의 신선 식재료, 산지 직거래
              </p>
            </div>
            <div className={styles.philosophyCard}>
              <div className={styles.philosophyImageWrap}>
                <Image src="/images/chef-cooking.jpg" alt="정성스러운 조리" fill className={styles.philosophyImage} />
              </div>
              <h3 className={styles.philosophyTitle}>정성 (SINCERITY)</h3>
              <p className={styles.philosophyDescription}>
                표준 레시피와 숙련된 조리사의 정성
              </p>
            </div>
            <div className={styles.philosophyCard}>
              <div className={styles.philosophyImageWrap}>
                <Image src="/images/trust-handshake.jpg" alt="신뢰의 파트너십" fill className={styles.philosophyImage} />
              </div>
              <h3 className={styles.philosophyTitle}>신뢰 (TRUST)</h3>
              <p className={styles.philosophyDescription}>
                투명한 운영, 20년 파트너십
              </p>
            </div>
          </div>
          <div className={styles.visionBox}>
            <p><strong>미션:</strong> 매일 한 끼가 건강과 활력의 원천</p>
            <p><strong>비전:</strong> 신뢰받는 급식 전문기업으로 지역사회와 함께 성장합니다</p>
          </div>
        </div>
      </section>

      {/* 인력 관리 Section */}
      <section className={styles.personnel}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>인력 관리 &amp; 교육</h2>
          <p className={styles.sectionSubtitle}>
            100% 직접 채용으로 책임감과 소속감이 탁월한 우수 인재 보유
          </p>
          <div className={styles.personnelImageWrap}>
            <Image src="/images/about-team.jpg" alt="전문 조리팀" fill className={styles.personnelImage} />
          </div>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <span className={styles.featureDot} aria-hidden="true"></span>
              <div>
                <strong>100% 직접 채용</strong>
                <p>
                  창립 이후 예외 없이 직접 채용을 원칙으로 하여 안정적이고
                  책임감 있는 인력을 배치합니다 (용역 수수료 0원)
                </p>
              </div>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureDot} aria-hidden="true"></span>
              <div>
                <strong>입사 시 교육</strong>
                <p>위생 · 조리기본 · 서비스 마인드 교육</p>
              </div>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureDot} aria-hidden="true"></span>
              <div>
                <strong>월 1회 정기 교육</strong>
                <p>위생 · 안전 · 서비스 통합교육</p>
              </div>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureDot} aria-hidden="true"></span>
              <div>
                <strong>분기 1회 집합교육</strong>
                <p>교육센터 집합교육</p>
              </div>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureDot} aria-hidden="true"></span>
              <div>
                <strong>수시 교육</strong>
                <p>신메뉴 레시피, CS 마인드 특강</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 위생 안전 관리 Section */}
      <section className={styles.hygiene}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>위생 &middot; 안전 관리</h2>
          <p className={styles.sectionSubtitle}>
            HACCP 위생관리 및 정기점검으로 안전한 먹거리 제공
          </p>
          <div className={styles.hygieneImageWrap}>
            <Image src="/images/about-hygiene.jpg" alt="위생관리 현장" fill className={styles.hygieneImage} />
          </div>
          <div className={styles.hygieneGrid}>
            <div className={styles.hygieneCard}>
              <h3>매일 위생 점검</h3>
              <p>일일 정성조회, 개인위생 점검</p>
            </div>
            <div className={styles.hygieneCard}>
              <h3>주 1회 위생교육</h3>
              <p>책임자 주관 위생교육 실시</p>
            </div>
            <div className={styles.hygieneCard}>
              <h3>월 1회 불시 점검</h3>
              <p>불시 방문점검, 전문업체 정기소독</p>
            </div>
            <div className={styles.hygieneCard}>
              <h3>분기 1회 집합교육</h3>
              <p>교육센터 집합교육 실시</p>
            </div>
            <div className={styles.hygieneCard}>
              <h3>영업배상책임보험</h3>
              <p>영업 · 생산물 · 가스 배상책임보험 가입</p>
            </div>
            <div className={styles.hygieneCard}>
              <h3>HACCP 기준 관리</h3>
              <p>식품안전관리인증기준에 따른 체계적 위생 관리</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
