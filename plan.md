# 우리푸드앤드서비스 홈페이지 구축 플랜

## Context
급식위탁 전문회사 ㈜우리푸드앤드서비스의 기업 웹사이트를 새로 구축합니다. 회사 소개서(PPTX)의 내용을 기반으로 4개 페이지(메인, 회사소개, 서비스/제품, 문의)를 만들고, 참고 이미지의 그린 톤 디자인을 적용합니다.

**1단계 납품 범위**: 문의 폼 → Supabase DB 저장 + 이메일 알림
**설계 방향**: 추후 관리자 페이지 확장을 고려한 스키마 설계 (이번 납품에는 미포함)

## 기술 스택
- **Next.js 14** + **TypeScript** (App Router, SSR/SSG로 SEO 지원)
- **CSS Modules** (컴포넌트별 스타일 격리)
- **Supabase** — DB (문의 저장) + Edge Function (이메일 알림)
- 별도 백엔드 서버 없음

## 색상 팔레트 (참고 이미지 기반)

| 용도 | 색상 | HEX |
|------|------|-----|
| Primary (메인 초록) | 딥 포레스트 그린 | `#2D5A27` |
| Primary Dark | 다크 그린 | `#1B3A18` |
| Secondary | 세이지 그린 | `#6B8E63` |
| Accent | 라이트 민트 | `#E8F5E1` |
| Background | 오프화이트 | `#F7FAF5` |
| Surface (카드 등) | 화이트 | `#FFFFFF` |
| Text Primary | 다크 | `#1A1A1A` |
| Text Secondary | 그레이 | `#5A5A5A` |
| Point (라임 그린) | 라임 옐로우 그린 | `#C8D94E` |
| Text on Primary | 화이트 | `#FFFFFF` |

## Supabase DB 스키마 (관리자 페이지 확장 고려)

### `inquiries` 테이블 — 문의 접수
```sql
CREATE TABLE inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,           -- 문의 회사명
  contact_name TEXT NOT NULL,           -- 담당자명
  phone TEXT NOT NULL,                  -- 연락처
  meal_count INTEGER,                   -- 식수 (1일 식사 인원)
  breakfast_per_week INTEGER DEFAULT 0, -- 조식 주 횟수 (0~7)
  lunch_per_week INTEGER DEFAULT 0,     -- 중식 주 횟수 (0~7)
  dinner_per_week INTEGER DEFAULT 0,    -- 석식 주 횟수 (0~7)
  message TEXT,                         -- 문의 내용
  status TEXT DEFAULT 'new',            -- 관리자용: new/in_progress/resolved/closed
  admin_notes TEXT,                     -- 관리자 메모 (추후 관리자 페이지용)
  is_read BOOLEAN DEFAULT FALSE,        -- 읽음 여부 (추후 관리자 페이지용)
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 관리자 페이지에서 상태별/날짜별 필터링 대비 인덱스
CREATE INDEX idx_inquiries_status ON inquiries(status);
CREATE INDEX idx_inquiries_created_at ON inquiries(created_at DESC);
```

### RLS (Row Level Security)
```sql
-- 누구나 문의 INSERT 가능 (anon 키)
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert inquiry" ON inquiries FOR INSERT WITH CHECK (true);
-- SELECT/UPDATE는 추후 관리자 인증 추가 시 정책 설정
```

### Edge Function — 이메일 알림
- 문의 INSERT 시 Database Webhook → Edge Function 트리거
- Edge Function에서 Resend/SMTP로 stormroller@hanmail.net에 이메일 발송
- 이메일 내용: 회사명, 담당자, 연락처, 문의내용 포함

## 프로젝트 구조
```
woorifns-homepage/
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # 루트 레이아웃 (Header/Footer 포함)
│   │   ├── page.tsx           # 메인 홈
│   │   ├── page.module.css
│   │   ├── globals.css
│   │   ├── about/
│   │   │   ├── page.tsx       # 회사 소개
│   │   │   └── page.module.css
│   │   ├── services/
│   │   │   ├── page.tsx       # 서비스/제품 소개
│   │   │   └── page.module.css
│   │   └── contact/
│   │       ├── page.tsx       # 문의하기
│   │       └── page.module.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Header.module.css
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   └── lib/
│       └── supabase.ts        # Supabase 클라이언트
├── supabase/
│   └── functions/
│       └── send-inquiry-email/
│           └── index.ts       # 이메일 알림 Edge Function
├── package.json
├── tsconfig.json
└── next.config.js
```

## 페이지별 구성

### 1. 메인 홈 (Home.tsx)
- **히어로 섹션**: 딥 그린 배경 + "정직한 밥상, 건강한 내일" + CTA 버튼
- **핵심 가치 3카드**: 신선 / 정성 / 신뢰
- **서비스 미리보기**: 산업체, 병원, 요양원, 학교
- (숫자 하이라이트는 회사소개 페이지에 배치)
- **CTA 섹션**: "문의하기" → Contact 페이지 이동

### 2. 회사 소개 (About.tsx)
- **인사말**: 대표 인사말
- **회사 개요**: 회사명, 설립(2005), 소재지, 연락처
- **경영이념 & 비전**: 미션/비전
- **인력 관리 & 교육**: 100% 직접 채용, 교육 체계
- **위생/안전 관리**: HACCP, 보험

### 3. 서비스/제품 소개 (Services.tsx)
- **운영 현황**: 업종별 서비스 카드
- **끼니별 운영안**: 조식/중식/석식
- **메뉴 품질관리**: 밥/국/김치
- **식재료 조달**: 프로세스 시각화
- **차별화 서비스**: 특식/후식/소스/이벤트
- **위탁 운영 효과**: 6가지 기대효과

### 4. 문의하기 (Contact.tsx)
- **문의 폼**: 회사명, 담당자명, 연락처, 식수(인원), 조식/중식/석식 주 횟수(드롭다운 0~7), 문의내용
- **Supabase 연동**: 폼 → DB 저장 → Edge Function → 이메일 알림
- **회사 연락처**: 주소, 전화번호
- 지도 미포함 (주소 텍스트만 표시)

### 공통: Header / Footer
- Header: 회사 로고 이미지(woori_v14.png) + 네비게이션 + 모바일 햄버거 메뉴
- Footer: 회사 정보 + 카피라이트 (딥 그린 배경)

## 구현 순서
1. Next.js + TypeScript 프로젝트 초기화
2. Supabase 프로젝트 새로 생성 + DB 마이그레이션 (inquiries 테이블)
3. 전역 CSS 변수 및 스타일 설정
4. Header / Footer 공통 컴포넌트
5. 루트 레이아웃 설정 (App Router)
6. Home 페이지
7. About 페이지
8. Services 페이지
9. Contact 페이지 (Supabase 문의 저장)
10. Edge Function (이메일 알림)
11. 반응형 디자인 적용
12. 최종 점검

## 검증 방법
1. `npm run dev` → 4개 페이지 정상 렌더링
2. 네비게이션 동작 확인
3. 반응형 레이아웃 확인
4. 문의 폼 제출 → Supabase DB 저장 확인
5. 이메일 수신 확인 (stormroller@hanmail.net)
6. `npm run build` 프로덕션 빌드 확인
