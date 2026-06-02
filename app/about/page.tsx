import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "?뚯궗?뚭컻 | ?곕━?몃뱶?ㅻ뱶?쒕퉬??,
  description:
    "?쒖슦由ы뫖?쒖븻?쒖꽌鍮꾩뒪??2005???ㅻ┰ ?대옒 ?곗뾽泥? 蹂묒썝, ?붿뼇?? ?숆탳 ???ㅼ뼇???꾩옣?먯꽌 ?뺤쭅??湲됱떇 ?쒕퉬?ㅻ? ?쒓났?섎뒗 湲됱떇?꾪긽 ?꾨Ц湲곗뾽?낅땲??",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Page Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>?뚯궗?뚭컻</h1>
          <p className={styles.heroBreadcrumb}>
            <Link href="/">??/Link> &gt; ?뚯궗?뚭컻
          </p>
        </div>
      </section>

      {/* ?몄궗留?Section */}
      <section className={styles.greeting}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            ?뺤쭅??諛μ긽, 嫄닿컯???댁씪
          </h2>
          <div className={styles.greetingLayout}>
            <div className={styles.greetingContent}>
              <p>
                ????쒖슦由ы뫖?쒖븻?쒖꽌鍮꾩뒪??2005?꾨????⑥껜湲됱떇 ?ъ뾽???댁쁺?섎ŉ
                ???섎굹???먯튃??吏耳쒖솕?듬땲??
              </p>
              <p>
                ?⑥닚???쇰땲瑜??닿껐?섎뒗 怨듦컙???섏뼱, 吏곸썝?ㅼ씠 留ㅼ씪 湲곕??섎뒗
                ?앹궗 ?쒓컙???????덈룄濡?硫붾돱???ㅼ뼇?깃낵 ?덉쭏???딆엫?놁씠
                ?ъ옄?섍퀬 ?덉뒿?덈떎.
              </p>
              <p>
                ?뺤쭅???앹옱猷? ?뺤꽦 ?대┛ 議곕━, 吏꾩떖???댁? ?쒕퉬??
              </p>
              <p>
                ?꾩옱源뚯? 異뺤쟻?댁삩 ??寃쏀뿕怨??욎꽑 ?댁쁺 ?λ젰?쇰줈 ?⑸━?곸씤 ?댁쁺??                ?쎌냽?쒕━硫? 吏묒뿉?쒖쓽 ?몄븞?④낵 ?대㉧?덉쓽 ?뺤꽦?쇰줈 媛먮룞 ?쒕퉬?ㅻ?
                ?ㅽ쁽?섍쿋?듬땲??
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ?뚯궗 媛쒖슂 Section */}
      <section className={styles.overview}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>?뚯궗 媛쒖슂</h2>
          <div className={styles.overviewTable}>
            <div className={styles.overviewRow}>
              <span className={styles.overviewLabel}>?뚯궗紐?/span>
              <span className={styles.overviewValue}>
                ?쒖슦由ы뫖?쒖븻?쒖꽌鍮꾩뒪
              </span>
            </div>
            <div className={styles.overviewRow}>
              <span className={styles.overviewLabel}>?ㅻ┰?곕룄</span>
              <span className={styles.overviewValue}>2005???ъ뾽媛쒖떆</span>
            </div>
            <div className={styles.overviewRow}>
              <span className={styles.overviewLabel}>?뚯옱吏</span>
              <span className={styles.overviewValue}>
                異⑸궓 泥쒖븞???숇궓援??듭젙8濡?48-55
              </span>
            </div>
            <div className={styles.overviewRow}>
              <span className={styles.overviewLabel}>??쒖쟾??/span>
              <span className={styles.overviewValue}>1899-1094</span>
            </div>
            <div className={styles.overviewRow}>
              <span className={styles.overviewLabel}>?대???/span>
              <span className={styles.overviewValue}>010-8812-1080</span>
            </div>
            <div className={styles.overviewRow}>
              <span className={styles.overviewLabel}>二쇱슂?ъ뾽</span>
              <span className={styles.overviewValue}>
                ?⑥껜湲됱떇 쨌 ?꾪긽寃쎌쁺 ?꾨Ц湲곗뾽
              </span>
            </div>
            <div className={styles.overviewRow}>
              <span className={styles.overviewLabel}>怨좉컼???낆쥌</span>
              <span className={styles.overviewValue}>
                ?곗뾽泥?쨌 蹂묒썝 쨌 ?붿뼇??쨌 ?숆탳
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 寃쎌쁺?대뀗 Section */}
      <section className={styles.philosophy}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>寃쎌쁺?대뀗 &amp; 鍮꾩쟾</h2>
          <p className={styles.sectionSubtitle}>&ldquo;?뺤쭅??諛μ긽, 嫄닿컯???댁씪&rdquo;</p>
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCard}>
              <div className={styles.philosophyImageWrap}>
                <Image src="/images/fresh-vegetables.jpg" alt="?좎꽑??梨꾩냼" fill className={styles.philosophyImage} />
              </div>
              <h3 className={styles.philosophyTitle}>?좎꽑 (FRESHNESS)</h3>
              <p className={styles.philosophyDescription}>
                ?꾧꺽??湲곗????좎꽑 ?앹옱猷? ?곗? 吏곴굅??              </p>
            </div>
            <div className={styles.philosophyCard}>
              <div className={styles.philosophyImageWrap}>
                <Image src="/images/chef-cooking.jpg" alt="?뺤꽦?ㅻ윭??議곕━" fill className={styles.philosophyImage} />
              </div>
              <h3 className={styles.philosophyTitle}>?뺤꽦 (SINCERITY)</h3>
              <p className={styles.philosophyDescription}>
                ?쒖? ?덉떆?쇱? ?숇젴??議곕━?ъ쓽 ?뺤꽦
              </p>
            </div>
            <div className={styles.philosophyCard}>
              <div className={styles.philosophyImageWrap}>
                <Image src="/images/trust-handshake.jpg" alt="?좊ː???뚰듃?덉떗" fill className={styles.philosophyImage} />
              </div>
              <h3 className={styles.philosophyTitle}>?좊ː (TRUST)</h3>
              <p className={styles.philosophyDescription}>
                ?щ챸???댁쁺, 20???뚰듃?덉떗
              </p>
            </div>
          </div>
          <div className={styles.visionBox}>
            <p><strong>誘몄뀡:</strong> 留ㅼ씪 ???쇨? 嫄닿컯怨??쒕젰???먯쿇</p>
            <p><strong>鍮꾩쟾:</strong> ?좊ː諛쏅뒗 湲됱떇 ?꾨Ц湲곗뾽?쇰줈 吏??궗?뚯? ?④퍡 ?깆옣?⑸땲??/p>
          </div>
        </div>
      </section>

      {/* ?몃젰 愿由?Section */}
      <section className={styles.personnel}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>?몃젰 愿由?&amp; 援먯쑁</h2>
          <p className={styles.sectionSubtitle}>
            100% 吏곸젒 梨꾩슜?쇰줈 梨낆엫媛먭낵 ?뚯냽媛먯씠 ?곸썡???곗닔 ?몄옱 蹂댁쑀
          </p>
          <div className={styles.personnelImageWrap}>
            <Image src="/images/about-team.jpg" alt="?꾨Ц 議곕━?" fill className={styles.personnelImage} />
          </div>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <span className={styles.featureDot} aria-hidden="true"></span>
              <div>
                <strong>100% 吏곸젒 梨꾩슜</strong>
                <p>
                  李쎈┰ ?댄썑 ?덉쇅 ?놁씠 吏곸젒 梨꾩슜???먯튃?쇰줈 ?섏뿬 ?덉젙?곸씠怨?                  梨낆엫媛??덈뒗 ?몃젰??諛곗튂?⑸땲??(?⑹뿭 ?섏닔猷?0??
                </p>
              </div>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureDot} aria-hidden="true"></span>
              <div>
                <strong>?낆궗 ??援먯쑁</strong>
                <p>?꾩깮 쨌 議곕━湲곕낯 쨌 ?쒕퉬??留덉씤??援먯쑁</p>
              </div>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureDot} aria-hidden="true"></span>
              <div>
                <strong>??1???뺢린 援먯쑁</strong>
                <p>?꾩깮 쨌 ?덉쟾 쨌 ?쒕퉬???듯빀援먯쑁</p>
              </div>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureDot} aria-hidden="true"></span>
              <div>
                <strong>遺꾧린 1??吏묓빀援먯쑁</strong>
                <p>援먯쑁?쇳꽣 吏묓빀援먯쑁</p>
              </div>
            </li>
            <li className={styles.featureItem}>
              <span className={styles.featureDot} aria-hidden="true"></span>
              <div>
                <strong>?섏떆 援먯쑁</strong>
                <p>?좊찓???덉떆?? CS 留덉씤???밴컯</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ?꾩깮 ?덉쟾 愿由?Section */}
      <section className={styles.hygiene}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>?꾩깮 &middot; ?덉쟾 愿由?/h2>
          <p className={styles.sectionSubtitle}>
            HACCP ?꾩깮愿由?諛??뺢린?먭??쇰줈 ?덉쟾??癒밴굅由??쒓났
          </p>
          <div className={styles.hygieneImageWrap}>
            <Image src="/images/about-hygiene.jpg" alt="?꾩깮愿由??꾩옣" fill className={styles.hygieneImage} />
          </div>
          <div className={styles.hygieneGrid}>
            <div className={styles.hygieneCard}>
              <h3>留ㅼ씪 ?꾩깮 ?먭?</h3>
              <p>?쇱씪 ?뺤꽦議고쉶, 媛쒖씤?꾩깮 ?먭?</p>
            </div>
            <div className={styles.hygieneCard}>
              <h3>二?1???꾩깮援먯쑁</h3>
              <p>梨낆엫??二쇨? ?꾩깮援먯쑁 ?ㅼ떆</p>
            </div>
            <div className={styles.hygieneCard}>
              <h3>??1??遺덉떆 ?먭?</h3>
              <p>遺덉떆 諛⑸Ц?먭?, ?꾨Ц?낆껜 ?뺢린?뚮룆</p>
            </div>
            <div className={styles.hygieneCard}>
              <h3>遺꾧린 1??吏묓빀援먯쑁</h3>
              <p>援먯쑁?쇳꽣 吏묓빀援먯쑁 ?ㅼ떆</p>
            </div>
            <div className={styles.hygieneCard}>
              <h3>?곸뾽諛곗긽梨낆엫蹂댄뿕</h3>
              <p>?곸뾽 쨌 ?앹궛臾?쨌 媛??諛곗긽梨낆엫蹂댄뿕 媛??/p>
            </div>
            <div className={styles.hygieneCard}>
              <h3>HACCP 湲곗? 愿由?/h3>
              <p>?앺뭹?덉쟾愿由ъ씤利앷린以???곕Ⅸ 泥닿퀎???꾩깮 愿由?/p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

