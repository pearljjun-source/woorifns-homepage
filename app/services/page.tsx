import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "?쒕퉬???뚭컻 | ?곕━?몃뱶?ㅻ뱶?쒕퉬??,
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      {/* Page Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>?쒕퉬???뚭컻</h1>
          <p className={styles.breadcrumb}>??&gt; ?쒕퉬??/p>
        </div>
      </section>

      {/* ?댁쁺 ?꾪솴 - Service Areas */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>?낆쥌蹂?留욎땄 湲됱떇 ?쒕퉬??/h2>
          <div className={styles.serviceAreasGrid}>
            <div className={styles.serviceAreaCard}>
              <div className={styles.serviceAreaImageWrap}>
                <Image src="/images/industrial-cafeteria.png" alt="?곗뾽泥?湲됱떇 援щ궡?앸떦" fill className={styles.serviceAreaImage} />
              </div>
              <div className={styles.serviceAreaBody}>
                <h3 className={styles.cardTitle}>?곗뾽泥?湲됱떇</h3>
                <p className={styles.cardDescription}>
                  洹쇰Т ?⑦꽩 留욎땄 ?꾨젰??硫붾돱 ?댁쁺 쨌 365???곗쨷 ?댁쁺.
                  ?ъ뾽?λ퀎 留욎땄 ?앸떒 ?댁쁺?쇰줈 ?꾩쭅??留뚯”?꾨? ?믪엯?덈떎.
                </p>
              </div>
            </div>
            <div className={styles.serviceAreaCard}>
              <div className={styles.serviceAreaImageWrap}>
                <Image src="/images/hospital-meal.png" alt="蹂묒썝 湲됱떇 ?섏옄??吏곸썝?? fill className={styles.serviceAreaImage} />
              </div>
              <div className={styles.serviceAreaBody}>
                <h3 className={styles.cardTitle}>蹂묒썝 쨌 ?섎즺湲곌? 湲됱떇</h3>
                <p className={styles.cardDescription}>
                  ?섏옄??쨌 吏곸썝???숈떆 ?댁쁺, ?곸뼇 洹좏삎 ?앸떒.
                  ?섎즺吏꾧낵 ?묐젰?섏뿬 理쒖쟻???앸떒??援ъ꽦?⑸땲??
                </p>
              </div>
            </div>
            <div className={styles.serviceAreaCard}>
              <div className={styles.serviceAreaImageWrap}>
                <Image src="/images/elderly-care.png" alt="?붿뼇??湲됱떇 ?대Ⅴ???앹궗" fill className={styles.serviceAreaImage} />
              </div>
              <div className={styles.serviceAreaBody}>
                <h3 className={styles.cardTitle}>?몄씤?붿뼇??쨌 蹂듭??쒖꽕 湲됱떇</h3>
                <p className={styles.cardDescription}>
                  ?대Ⅴ??留욎땄 ?앸떒, ????몄쓽??以묒떖 ?댁쁺.
                  泥댄뿕??荑좏궧 ?대옒?ㅻ룄 ?④퍡 ?댁쁺?⑸땲??
                </p>
              </div>
            </div>
            <div className={styles.serviceAreaCard}>
              <div className={styles.serviceAreaImageWrap}>
                <Image src="/images/school-lunch.png" alt="?숆탳 湲됱떇 諛곗떇?" fill className={styles.serviceAreaImage} />
              </div>
              <div className={styles.serviceAreaBody}>
                <h3 className={styles.cardTitle}>?숆탳 쨌 湲곗닕??湲됱떇</h3>
                <p className={styles.cardDescription}>
                  ?깆옣湲?留욎땄 ?곸뼇?앸떒, ?뚮젅瑜닿린 ?뺣낫 怨듦컻.
                  ?뺢린 留뚯”??議곗궗濡?吏?띿쟻?쇰줈 媛쒖꽑?⑸땲??
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ?쇰땲蹂??댁쁺??- Meal Plans */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>?쇰땲蹂??댁쁺 怨꾪쉷</h2>
          <div className={styles.mealGrid}>
            <div className={styles.mealCard}>
              <h3 className={styles.cardTitle}>議곗떇 ???꾩뿉 遺???녿뒗 ??/h3>
              <p className={styles.cardDescription}>
                ?꾩묠 怨듬났 ?곹깭??遺?댁쓣 ?쒖뼱二쇰뒗 嫄닿컯??硫붾돱濡?
                ?꾩뿉 遺???녿뒗 ??쨌 二?以묒떖???곕튃 ?쒖떇??吏?ν빀?덈떎.
                (?⑺깭?댁옣援? ?몃컯?먮??쒖옣援? 紐⑥떆議곌컻援???
              </p>
            </div>
            <div className={styles.mealCard}>
              <h3 className={styles.cardTitle}>以묒떇 ????쨌 蹂띠쓬 쨌 援ъ씠</h3>
              <p className={styles.cardDescription}>
                ?섎（ 以?媛??留롮? 移쇰줈由ш? ?꾩슂???? 怨좊떒諛??〓쪟 以묒떖???앹궗濡?                ?좏샇???믪? ?ㅼ뼇??硫붾돱瑜?援ъ꽦?⑸땲??
                (踰꾩꽢遺덇퀬湲? 怨좎텛?μ궪寃밸낭?? ?ш낏?ㅻ쟻????
              </p>
            </div>
            <div className={styles.mealCard}>
              <h3 className={styles.cardTitle}>?앹떇 ???뺤꽦 ?대┛ 援?Ъ 留?/h3>
              <p className={styles.cardDescription}>
                泥쒖뿰議곕?猷뚯? 源딆? 留쏆쓽 ?≪닔濡?蹂몄뿰??留쏆쓣 援ы쁽??
                湲곕낯??異⑹떎??怨좎꽑??硫붾돱?낅땲??
                (?꾪넻??뚯쑁媛쒖옣, 李⑤룎諛뺤씠?쒖옣李뚭컻, ?⑥썝異붿뼱????
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 硫붾돱 ?덉쭏愿由?*/}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>硫붾돱 ?덉쭏 愿由?/h2>
          <p className={styles.sectionSubtitle}>
            湲곕낯??異⑹떎???덉쭏 愿由щ줈 留ㅼ씪 留쏆엳???앹궗瑜??쒓났?⑸땲??          </p>
          <div className={styles.qualityGrid}>
            <div className={styles.qualityCard}>
              <div className={styles.qualityImageWrap}>
                <Image src="/images/rice-quality.jpg" alt="諛??덉쭏愿由? fill className={styles.qualityImage} />
              </div>
              <div className={styles.qualityBody}>
                <h3 className={styles.cardTitle}>諛??덉쭏愿由?/h3>
                <p className={styles.cardDescription}>
                  ?꾩젙 ??14???대궡 ?ъ슜 쨌 蹂닿??⑤룄 15???좎? 쨌
                  痍⑤컲 ??30遺??댁긽 蹂닿? 湲덉? 쨌 ?몃━湲?5% ?대궡 愿由?                </p>
              </div>
            </div>
            <div className={styles.qualityCard}>
              <div className={styles.qualityImageWrap}>
                <Image src="/images/soup-quality.jpg" alt="援????덉쭏愿由? fill className={styles.qualityImage} />
              </div>
              <div className={styles.qualityBody}>
                <h3 className={styles.cardTitle}>援?쨌 ???덉쭏愿由?/h3>
                <p className={styles.cardDescription}>
                  ?≪닔???섎（ ??吏꾪븯寃?以鍮?쨌 ?щ즺??諛묎컙???묐뀗??諛곌쾶 쨌
                  ?쎈텋?먯꽌 ?ㅻ옒 ?볦뿬 ??留?쨌 泥쒖뿰議곕?猷??ъ슜
                </p>
              </div>
            </div>
            <div className={styles.qualityCard}>
              <div className={styles.qualityImageWrap}>
                <Image src="/images/kimchi-quality.jpg" alt="源移??덉쭏愿由? fill className={styles.qualityImage} />
              </div>
              <div className={styles.qualityBody}>
                <h3 className={styles.cardTitle}>源移??덉쭏愿由?/h3>
                <p className={styles.cardDescription}>
                  援?궡??臾?쨌 諛곗텛 ?ъ슜 쨌 怨꾩젅蹂??숈꽦??李⑤퀎??愿由?쨌
                  留?쨌 吏덇컧 쨌 ?됱긽 쨌 ?꾩깉 寃??쨌 ?ъ옣?곹깭 쨌 ?좏넻湲고븳 ?뺤씤
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ?앹옱猷?議곕떖 ?꾨줈?몄뒪 */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>?좎꽑???앹옱猷?議곕떖</h2>
          <div className={styles.processFlow}>
            <div className={styles.processStep}>
              <div className={styles.processCircle}>
                <span className={styles.processNumber}>01</span>
              </div>
              <p className={styles.processLabel}>?곗? 吏곴굅??br/>寃利앸맂 怨듦툒?낆껜 怨꾩빟 쨌 援?궡???곗꽑</p>
            </div>
            <div className={styles.processArrow} aria-hidden="true" />
            <div className={styles.processStep}>
              <div className={styles.processCircle}>
                <span className={styles.processNumber}>02</span>
              </div>
              <p className={styles.processLabel}>?낃퀬 &amp; 寃??br/>?먯궛吏 쨌 ?좏넻湲고븳 쨌 ?덉쭏?곹깭 ?뺤씤</p>
            </div>
            <div className={styles.processArrow} aria-hidden="true" />
            <div className={styles.processStep}>
              <div className={styles.processCircle}>
                <span className={styles.processNumber}>03</span>
              </div>
              <p className={styles.processLabel}>?됱옣 蹂닿?<br/>3???댄븯 ?⑤룄 愿由?쨌 肄쒕뱶泥댁씤 ?좎?</p>
            </div>
            <div className={styles.processArrow} aria-hidden="true" />
            <div className={styles.processStep}>
              <div className={styles.processCircle}>
                <span className={styles.processNumber}>04</span>
              </div>
              <p className={styles.processLabel}>怨꾩젅 ?앹옱猷??쒖슜<br/>?쒖쿋 ?앹옱猷뚮줈 ?좎꽑??쨌 ?곸뼇 洹밸???/p>
            </div>
            <div className={styles.processArrow} aria-hidden="true" />
            <div className={styles.processStep}>
              <div className={styles.processCircle}>
                <span className={styles.processNumber}>05</span>
              </div>
              <p className={styles.processLabel}>議곕━ ?ъ엯<br/>?뱀씪 ?ъ슜 ?먯튃 쨌 ?붿뿬 ?앹옱猷??먭린</p>
            </div>
          </div>
        </div>
      </section>

      {/* 李⑤퀎???쒕퉬??*/}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>李⑤퀎?붾맂 遺媛 ?쒕퉬??/h2>
          <div className={styles.extraGrid}>
            <div className={styles.extraCard}>
              <div className={styles.extraImageWrap}>
                <Image src="/images/extra-special-meal.jpg" alt="?뱀떇 ?쒕퉬?? fill className={styles.extraImage} />
              </div>
              <div className={styles.extraBody}>
                <h3 className={styles.cardTitle}>??1???댁긽 ?뱀떇</h3>
                <p className={styles.cardDescription}>
                  ?쇨껸?닿뎄??쨌 紐⑤벉?? 遺덈굺?꾧낏, ?붾궓????                  怨좏뭹???밸퀎???쒓났
                </p>
              </div>
            </div>
            <div className={styles.extraCard}>
              <div className={styles.extraImageWrap}>
                <Image src="/images/extra-dessert.jpg" alt="?꾩떇 ?쒕퉬?? fill className={styles.extraImage} />
              </div>
              <div className={styles.extraBody}>
                <h3 className={styles.cardTitle}>留ㅼ＜ ?꾩떇 ?쒕퉬??/h3>
                <p className={styles.cardDescription}>
                  留ㅼ＜ 1???댁긽 ?꾩떇???쒓났?섏뿬 ?앹궗 留뚯”?꾨? ?믪엯?덈떎
                </p>
              </div>
            </div>
            <div className={styles.extraCard}>
              <div className={styles.extraImageWrap}>
                <Image src="/images/extra-sauce.jpg" alt="?뚯뒪瑜??쒕퉬?? fill className={styles.extraImage} />
              </div>
              <div className={styles.extraBody}>
                <h3 className={styles.cardTitle}>?뚯뒪瑜?PLUS (二?1??</h3>
                <p className={styles.cardDescription}>
                  移대젅 쨌 吏쒖옣 쨌 留덊뙆?먮? ???ㅼ뼇???뚯뒪濡?                  利먭굅???좏깮???щ? ?쒓났
                </p>
              </div>
            </div>
            <div className={styles.extraCard}>
              <div className={styles.extraImageWrap}>
                <Image src="/images/extra-event.jpg" alt="?쒖쫵 ?대깽?? fill className={styles.extraImage} />
              </div>
              <div className={styles.extraBody}>
                <h3 className={styles.cardTitle}>?쒖쫵 ?대깽??/h3>
                <p className={styles.cardDescription}>
                  鍮쇰뭡濡쒕뜲??쨌 諛쒕젋??몃뜲??쨌 ?쇨껸?대뜲????                  湲곕뀗???대깽?몃줈 ?앸떒???쒕젰
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ?꾪긽 ?댁쁺 ?④낵 */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>湲됱떇 ?꾪긽??湲곕??④낵</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3 className={styles.cardTitle}>利됱떆 ?댁쁺 ?덉젙??/h3>
              <p className={styles.cardDescription}>
                ?꾨Ц 湲됱떇?몃젰 利됱떆 ?ъ엯 쨌 20??湲됱떇 ?꾨Ц?낆껜 ?명븯??              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.cardTitle}>怨좉컼 留뚯”???곸듅</h3>
              <p className={styles.cardDescription}>
                20???명븯???곸슜 쨌 VOC 24?쒓컙 ?쇰뱶諛?              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.cardTitle}>?덉궛 ?덉륫 媛??/h3>
              <p className={styles.cardDescription}>
                ?щ챸??鍮꾩슜 援ъ“, ??퉬 理쒖냼??쨌 怨좎젙鍮?利앷? ?꾪뿕 ?놁쓬
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.cardTitle}>?앺뭹 ?덉쟾 ?ш퀬 ?덈갑</h3>
              <p className={styles.cardDescription}>
                HACCP 泥닿퀎???꾩깮愿由?쨌 ?먯껜 愿由?遺???댁냼
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.cardTitle}>?앸떒 ?ㅼ뼇???뺣낫</h3>
              <p className={styles.cardDescription}>
                ?꾨Ц ?곸뼇??쨌 ?덉떆??DB ?쒖슜 쨌 ?뺢린 ?좊찓??媛쒕컻
              </p>
            </div>
            <div className={styles.benefitCard}>
              <h3 className={styles.cardTitle}>?몃젰愿由??덉젙??/h3>
              <p className={styles.cardDescription}>
                ?꾨Ц ?몃젰 ?덉젙??怨듦툒 쨌 梨꾩슜 쨌 援먯쑁 遺???놁쓬
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>
            湲됱떇 ?꾪긽 ?곷떞???꾩슂?섏떊媛??
          </h2>
          <Link href="/contact" className={styles.btnPrimary}>
            臾대즺 ?곷떞 ?좎껌
          </Link>
        </div>
      </section>
    </div>
  );
}

