'use client';

import { useState } from 'react';
import styles from './page.module.css';

interface FormData {
  companyName: string;
  contactName: string;
  phone: string;
  mealCount: string;
  breakfastPerWeek: string;
  lunchPerWeek: string;
  dinnerPerWeek: string;
  message: string;
}

const initialFormData: FormData = {
  companyName: '',
  contactName: '',
  phone: '',
  mealCount: '',
  breakfastPerWeek: '0',
  lunchPerWeek: '0',
  dinnerPerWeek: '0',
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
    } catch (err) {
      setSubmitError('臾몄쓽 ?묒닔 以??ㅻ쪟媛 諛쒖깮?덉뒿?덈떎. ?꾪솕濡?臾몄쓽??二쇱꽭??');
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
          <h1 className={styles.heroTitle}>臾몄쓽?섍린</h1>
          <p className={styles.breadcrumb}>??&gt; 臾몄쓽?섍린</p>
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
                  <span className={styles.successIcon}>??/span>
                  <h3 className={styles.successTitle}>臾몄쓽媛 ?묒닔?섏뿀?듬땲??</h3>
                  <p className={styles.successMessage}>
                    鍮좊Ⅸ ?쒖씪 ?댁뿉 ?곕씫?쒕━寃좎뒿?덈떎.
                  </p>
                  <button
                    type="button"
                    className={styles.submitButton}
                    onClick={handleReset}
                  >
                    ?덈줈??臾몄쓽
                  </button>
                </div>
              ) : (
                <>
                  <h2 className={styles.formTitle}>湲됱떇 ?꾪긽 ?곷떞 ?좎껌</h2>
                  <p className={styles.formSubtitle}>
                    ?꾨옒 ?묒떇???묒꽦??二쇱떆硫?鍮좊Ⅴ寃??곕씫?쒕━寃좎뒿?덈떎
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                      <label htmlFor="companyName" className={styles.label}>
                        ?뚯궗紐?<span className={styles.required}>*</span>
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
                        ?대떦?먮챸 <span className={styles.required}>*</span>
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
                        ?곕씫泥?<span className={styles.required}>*</span>
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
                        ?앹닔
                      </label>
                      <input
                        type="number"
                        id="mealCount"
                        name="mealCount"
                        className={styles.input}
                        placeholder="1???덉긽 ?앹궗 ?몄썝"
                        value={formData.mealCount}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label}>二쇨컙 ?앹궗 ?잛닔</label>
                      <div className={styles.mealRow}>
                        <div className={styles.mealSelect}>
                          <label htmlFor="breakfastPerWeek" className={styles.mealLabel}>
                            議곗떇
                          </label>
                          <select
                            id="breakfastPerWeek"
                            name="breakfastPerWeek"
                            className={styles.select}
                            value={formData.breakfastPerWeek}
                            onChange={handleChange}
                          >
                            {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
                              <option key={n} value={n}>
                                {n}??                              </option>
                            ))}
                          </select>
                        </div>
                        <div className={styles.mealSelect}>
                          <label htmlFor="lunchPerWeek" className={styles.mealLabel}>
                            以묒떇
                          </label>
                          <select
                            id="lunchPerWeek"
                            name="lunchPerWeek"
                            className={styles.select}
                            value={formData.lunchPerWeek}
                            onChange={handleChange}
                          >
                            {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
                              <option key={n} value={n}>
                                {n}??                              </option>
                            ))}
                          </select>
                        </div>
                        <div className={styles.mealSelect}>
                          <label htmlFor="dinnerPerWeek" className={styles.mealLabel}>
                            ?앹떇
                          </label>
                          <select
                            id="dinnerPerWeek"
                            name="dinnerPerWeek"
                            className={styles.select}
                            value={formData.dinnerPerWeek}
                            onChange={handleChange}
                          >
                            {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
                              <option key={n} value={n}>
                                {n}??                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.label}>
                        臾몄쓽 ?댁슜
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
                      {isSubmitting ? '?묒닔 以?..' : '?곷떞 ?좎껌?섍린'}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info */}
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>?곕씫泥??뺣낫</h2>
              <ul className={styles.infoList}>
                <li className={styles.infoItem}>
                  <div>
                    <strong>二쇱냼</strong>
                    <p>異⑸궓 泥쒖븞???숇궓援??듭젙8濡?48-55</p>
                  </div>
                </li>
                <li className={styles.infoItem}>
                  <div>
                    <strong>??쒖쟾??/strong>
                    <p>1899-1094</p>
                  </div>
                </li>
                <li className={styles.infoItem}>
                  <div>
                    <strong>?대???/strong>
                    <p>010-8812-1080</p>
                  </div>
                </li>
                <li className={styles.infoItem}>
                  <div>
                    <strong>?댁쁺?쒓컙</strong>
                    <p>365???곗쨷臾댄쑕</p>
                  </div>
                </li>
              </ul>
              <p className={styles.infoNote}>
                * 湲됱떇 愿???곷떞? ?꾪솕 ?먮뒗 ?묒떇???듯빐 臾몄쓽??二쇱꽭??
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

