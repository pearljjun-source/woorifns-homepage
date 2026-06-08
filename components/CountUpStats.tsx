"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../app/page.module.css";

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();
    let raf: number;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * end));

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration]);

  return { count, ref };
}

export default function CountUpStats() {
  const years = useCountUp(20, 1800);
  const percent = useCountUp(100, 2000);
  const days = useCountUp(365, 2200);

  return (
    <div className={styles.statsGrid}>
      <div className={styles.statItem} ref={years.ref}>
        <span className={styles.statNumber}>{years.count}</span>
        <span className={styles.statUnit}>년+</span>
        <p className={styles.statLabel}>급식 운영 경력</p>
      </div>
      <div className={styles.statItem} ref={percent.ref}>
        <span className={styles.statNumber}>{percent.count}</span>
        <span className={styles.statUnit}>%</span>
        <p className={styles.statLabel}>직접 채용 원칙</p>
      </div>
      <div className={styles.statItem} ref={days.ref}>
        <span className={styles.statNumber}>{days.count}</span>
        <span className={styles.statUnit}>일</span>
        <p className={styles.statLabel}>연중 운영 체계</p>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>HACCP</span>
        <p className={styles.statLabel}>위생관리 기준 준수</p>
      </div>
    </div>
  );
}
