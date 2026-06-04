'use client';

import { useState } from 'react';
import styles from './page.module.css';

interface FormData {
  companyName: string;
  contactName: string;
  phone: string;
  mealCount: string;
  message: string;
}

const initialFormData: FormData = {
  companyName: '',
  contactName: '',
  phone: '',
  mealCount: '',
  message: '',
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('API error');
      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch {
      setSubmitError('문의 접수 중 오류가 발생했습니다. 전화로 문의해 주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmitError('');
  };

  return (
    <div className={styles.page}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>문의하기</h1>
          <p className={styles.breadcrumb}>홈 &gt; 문의하기</p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Form */}
            <div className={styles.formCard}>
              {isSubmitted ? (
                <div className={styles.successState}>
                  <span className={styles.successIcon}>✔</span>
                  <h3 className={styles.successTitle}>문의가 접수되었습니다!</h3>
                  <p className={styles.successMessage}>
                    빠른 시일 내에 연락드리겠습니다.
                  </p>
                  <button
                    type="button"
                    className={styles.submitButton}
                    onClick={handleReset}
                  >
                    새로운 문의
                  </button>
                </div>
              ) : (
                <>
                  <h2 className={styles.formTitle}>급식 위탁 상담 신청</h2>
                  <p className={styles.formSubtitle}>
                    아래 양식을 작성해 주시면 빠르게 연락드리겠습니다
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                      <label htmlFor="companyName" className={styles.label}>
                        회사명 <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        className={styles.input}
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="contactName" className={styles.label}>
                        담당자명 <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="text"
                        id="contactName"
                        name="contactName"
                        className={styles.input}
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.label}>
                        연락처 <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className={styles.input}
                        placeholder="010-0000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="mealCount" className={styles.label}>
                        식수
                      </label>
                      <input
                        type="number"
                        id="mealCount"
                        name="mealCount"
                        className={styles.input}
                        placeholder="1일 예상 식사 인원"
                        value={formData.mealCount}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.label}>
                        문의 내용
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className={styles.textarea}
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    {submitError && (
                      <p className={styles.errorMessage}>{submitError}</p>
                    )}

                    <button
                      type="submit"
                      className={styles.submitButton}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? '접수 중...' : '상담 신청하기'}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>연락처 정보</h2>
              <ul className={styles.infoList}>
                <li className={styles.infoItem}>
                  <div>
                    <strong>주소</strong>
                    <p>충남 천안시 동남구 통정8로 48-55</p>
                  </div>
                </li>
                <li className={styles.infoItem}>
                  <div>
                    <strong>대표전화</strong>
                    <p>1899-1094</p>
                  </div>
                </li>
                <li className={styles.infoItem}>
                  <div>
                    <strong>휴대폰</strong>
                    <p>010-8812-1080</p>
                  </div>
                </li>
                <li className={styles.infoItem}>
                  <div>
                    <strong>운영시간</strong>
                    <p>365일 연중무휴</p>
                  </div>
                </li>
              </ul>
              <p className={styles.infoNote}>
                * 급식 관련 상담은 전화 또는 양식을 통해 문의해 주세요.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
