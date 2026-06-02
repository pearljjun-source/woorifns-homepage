import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "서비스 소개",
  description:
    "산업체, 병원, 요양원, 학교 등 업종별 맞춤 단체급식 서비스. HACCP 위생관리와 영양사 식단관리로 안전하고 건강한 급식을 제공합니다.",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://www.woorifns.kr" },
    { "@type": "ListItem", position: 2, name: "서비스 소개", item: "https://www.woorifns.kr/services" },
  ],
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Page Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>서비스 소개</h1>
          <p className={styles.breadcrumb}><Link href="/">홈</Link> &gt; 서비스</p>
        </div>
      </section>

      {/* 운영 현황 - Service Areas */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>업종별 맞춤 급식 서비스</h2>
          <div className={styles.serviceAreasGrid}>
            <div className={styles.serviceAreaCard}>
              <div className={styles.serviceAreaImageWrap}>
                <Image src="/images/industrial-cafeteria.png" alt="산업체 급식 구내식당" fill className={styles.serviceAreaImage} />
              </div>
              <div className={styles.serviceAreaBody}>
                <h3 className={styles.cardTitle}>산업체 급식</h3>
                <p className={styles.cardDescription}>
                  근무 패턴 맞춤 탄력적 메뉴 운영 · 365일 연중 운영.
                  사업장별 맞춤 식단 운영으로 임직원 만족도를 높입니다.
                </p>
              </div>
            </div>
            <div className={styles.serviceAreaCard}>
              <div className={styles.serviceAreaImageWrap}>
                <Image src="/images/hospital-meal.png" alt="병원 급식 환자식 직원식" fill className={styles.serviceAreaImage} />
              </div>
              <div className={styles.serviceAreaBody}>
                <h3 className={styles.cardTitle}>병원 · 의료기관 급식</h3>
                <p className={styles.cardDescription}>
                  환자식 · 직원식 동시 운영, 영양 균형 식단.
                  의료진과 협력하여 최적의 식단을 구성합니다.
                </p>
              </div>
            </div>
            <div className={styles.serviceAreaCard}>
              <div className={styles.serviceAreaImageWrap}>
                <Image src="/images/elderly-care.png" alt="요양원 급식 어르신 식사" fill className={styles.serviceAreaImage} />
              </div>
              <div className={styles.serviceAreaBody}>
                <h3 className={styles.cardTitle}>노인요양원 · 복지시설 급식</h3>
                <p className={styles.cardDescription}>
                  어르신 맞춤 식단, 저작 편의성 중심 운영.
                  체험형 쿠킹 클래스도 함께 운영합니다.
                </p>
              </div>
            </div>
            <div className={styles.serviceAreaCard}>
              <div className={styles.serviceAreaImageWrap}>
                <Image src="/images/school-lunch.png" alt="학교 급식 배식대" fill className={styles.serviceAreaImage} />
              </div>
              <div className={styles.serviceAreaBody}>
                <h3 className={styles.cardTitle}>학교 · 기숙사 급식</h3>
                <p className={styles.cardDescription}>
                  성장기 맞춤 영양식단, 알레르기 정보 공개.
                  정기 만족도 조사로 지속적으로 개선합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 끼니별 운영안 - Meal Plans */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>끼니별 운영 계획</h2>
          <div className={styles.mealGrid}>
            <div className={styles.mealCard}>
              <h3 className={styles.cardTitle}>조식 — 위에 부담 없는 탕</h3>
              <p className={styles.cardDescription}>
                아침 공복 상태의 부담을 덜어주는 건강한 메뉴로,
                위에 부담 없는 탕 · 죽 중심의 웰빙 한식을 지향합니다.
                (황태해장국, 호박두부된장국, 모시조개국 등)
              </p>
            </div>
            <div className={styles.mealCard}>
              <h3 className={styles.cardTitle}>중식 — 탕 · 볶음 · 구이</h3>
              <p className={styles.cardDescription}>
                하루 중 가장 많은 칼로리가 필요한 때, 고단백 육류 중심의 식사로
                선호도 높은 다양한 메뉴를 구성합니다.
                (버섯불고기, 고추장삼겹볶음, 사골설렁탕 등)
              </p>
            </div>
            <div className={styles.mealCard}>
              <h3 className={styles.cardTitle}>석식 — 정성 어린 국물 맛</h3>
              <p className={styles.cardDescription}>
                천연조미료와 깊은 맛의 육수로 본연의 맛을 구현한,
                기본에 충실한 고선호 메뉴입니다.
                (전통대파육개장, 차돌박이된장찌개, 남원추어탕 등)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 메뉴 품질관리 */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>메뉴 품질 관리</h2>
          <p className={styles.sectionSubtitle}>
            기본에 충실한 품질 관리로 매일 맛있는 식사를 제공합니다
          </p>
          <div className={styles.qualityGrid}>
            <div className={styles.qualityCard}>
              <div className={styles.qualityImageWrap}>
                <Image src="/images/rice-quality.jpg" alt="밥 품질관리" fill className={styles.qualityImage} />
              </div>
              <div className={styles.qualityBody}>
                <h3 className={styles.cardTitle}>밥 품질관리</h3>
                <p className={styles.cardDescription}>
                  도정 후 14일 이내 사용 · 보관온도 15℃ 유지 ·
                  취반 후 30분 이상 보관 금지 · 싸리기 5% 이내 관리
                </p>
              </div>
            </div>
            <div className={styles.qualityCard}>
              <div className={styles.qualityImageWrap}>
                <Image src="/images/soup-quality.jpg" alt="국 탕 품질관리" fill className={styles.qualityImage} />
              </div>
              <div className={styles.qualityBody}>
                <h3 className={styles.cardTitle}>국 · 탕 품질관리</h3>
                <p className={styles.cardDescription}>
                  육수는 하루 전 진하게 준비 · 재료에 밑간해 양념이 배게 ·
                  약불에서 오래 끓여 제 맛 · 천연조미료 사용
                </p>
              </div>
            </div>
            <div className={styles.qualityCard}>
              <div className={styles.qualityImageWrap}>
                <Image src="/images/kimchi-quality.jpg" alt="김치 품질관리" fill className={styles.qualityImage} />
              </div>
              <div className={styles.qualityBody}>
                <h3 className={styles.cardTitle}>김치 품질관리</h3>
                <p className={styles.cardDescription}>
                  국내산 무 · 배추 사용 · 계절별 숙성도 차별화 관리 ·
                  맛 · 질감 · 색상 · 냄새 검사 · 포장상태 · 유통기한 확인
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 식재료 조달 프로세스 */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>신선한 식재료 조달</h2>
          <div className={styles.processFlow}>
            <div className={styles.processStep}>
              <div className={styles.processCircle}>
                <span className={styles.processNumber}>01</span>
              </div>
              <p className={styles.processLabel}>산지 직거래<br/>검증된 공급업체 계약 · 국내산 우선</p>
            </div>
            <div className={styles.processArrow} aria-hidden="true" />
            <div className={styles.processStep}>
              <div className={styles.processCircle}>
                <span className={styles.processNumber}>02</span>
              </div>
              <p className={styles.processLabel}>입고 &amp; 검수<br/>원산지 · 유통기한 · 품질상태 확인</p>
            </div>
            <div className={styles.processArrow} aria-hidden="true" />
            <div className={styles.processStep}>
              <div className={styles.processCircle}>
                <span className={styles.processNumber}>03</span>
              </div>
              <p className={styles.processLabel}>냉장 보관<br/>3℃ 이하 온도 관리 · 콜드체인 유지</p>
            </div>
            <div className={styles.processArrow} aria-hidden="true" />
            <div className={styles.processStep}>
              <div className={styles.processCircle}>
                <span className={styles.processNumber}>04</span>
              </div>
              <p className={styles.processLabel}>계절 식재료 활용<br/>제철 식재료로 신선도 · 영양 극대화</p>
            </div>
            <div className={styles.processArrow} aria-hidden="true" />
            <div className={styles.processStep}>
              <div className={styles.processCircle}>
                <span className={styles.processNumber}>05</span>
              </div>
              <p className={styles.processLabel}>조리 투입<br/>당일 사용 원칙 · 잔여 식재료 폐기</p>
            </div>
          </div>
        </div>
      </section>

      {/* 차별화 서비스 */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>차별화된 부가 서비스</h2>
          <div className={styles.extraGrid}>
            <div className={styles.extraCard}>
              <div className={styles.extraImageWrap}>
                <Image src="/images/extra-special-meal.jpg" alt="특식 서비스" fill className={styles.extraImage} />
              </div>
              <div className={styles.extraBody}>
                <h3 className={styles.cardTitle}>월 1회 이상 특식</h3>
                <p className={styles.cardDescription}>
                  삼겹살구이 · 모듬쌈, 불낙전골, 월남쌈 등
                  고품위 특별식 제공
                </p>
              </div>
            </div>
            <div className={styles.extraCard}>
              <div className={styles.extraImageWrap}>
                <Image src="/images/extra-dessert.jpg" alt="후식 서비스" fill className={styles.extraImage} />
              </div>
              <div className={styles.extraBody}>
                <h3 className={styles.cardTitle}>매주 후식 서비스</h3>
                <p className={styles.cardDescription}>
                  매주 1회 이상 후식을 제공하여 식사 만족도를 높입니다
                </p>
              </div>
            </div>
            <div className={styles.extraCard}>
              <div className={styles.extraImageWrap}>
                <Image src="/images/extra-sauce.jpg" alt="소스류 서비스" fill className={styles.extraImage} />
              </div>
              <div className={styles.extraBody}>
                <h3 className={styles.cardTitle}>소스류 PLUS (주 1회)</h3>
                <p className={styles.cardDescription}>
                  카레 · 짜장 · 마파두부 등 다양한 소스로
                  즐거운 선택의 재미 제공
                </p>
              </div>
            </div>
            <div className={styles.extraCard}>
              <div className={styles.extraImageWrap}>
                <Image src="/images/extra-event.jpg" alt="시즌 이벤트" fill className={styles.extraImage} />
              </div>
              <div className={styles.extraBody}>
                <h3 className={styles.cardTitle}>시즌 이벤트</h3>
                <p className={styles.cardDescription}>
                  빼빼로데이 · 발렌타인데이 · 삼겹살데이 등
                  기념일 이벤트로 식단에 활력
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 위탁 운영 효과 */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>급식 위탁의 기대효과</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3 className={styles.cardTitle}>즉시 운영 안정화</h3>
              <p className={styles.cardDescription}>
                전문 급식인력 즉시 투입 · 20년 급식 전문업체 노하우
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.cardTitle}>고객 만족도 상승</h3>
              <p className={styles.cardDescription}>
                20년 노하우 적용 · VOC 24시간 피드백
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.cardTitle}>예산 예측 가능</h3>
              <p className={styles.cardDescription}>
                투명한 비용 구조, 낭비 최소화 · 고정비 증가 위험 없음
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.cardTitle}>식품 안전 사고 예방</h3>
              <p className={styles.cardDescription}>
                HACCP 체계적 위생관리 · 자체 관리 부담 해소
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.cardTitle}>식단 다양성 확보</h3>
              <p className={styles.cardDescription}>
                전문 영양사 · 레시피 DB 활용 · 정기 신메뉴 개발
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.cardTitle}>인력관리 안정화</h3>
              <p className={styles.cardDescription}>
                전문 인력 안정적 공급 · 채용 · 교육 부담 없음
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>
            급식 위탁 상담이 필요하신가요?
          </h2>
          <Link href="/contact" className={styles.btnPrimary}>
            무료 상담 신청
          </Link>
        </div>
      </section>
    </div>
  );
}
