// 문의 API의 순수 로직 — app/api/contact/route.ts에서 분리
// (route.ts는 POST 외의 export가 허용되지 않아 단위 테스트를 위해 별도 모듈로 둠)

// [S1] HTML 특수문자 이스케이프 — XSS 방지
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// [S3] 간단한 인메모리 Rate Limiter (IP 기반)
export function createRateLimiter(windowMs: number, max: number) {
  const requestCounts = new Map<string, { count: number; resetAt: number }>();

  return function isRateLimited(ip: string, now: number = Date.now()): boolean {
    const entry = requestCounts.get(ip);

    if (!entry || now > entry.resetAt) {
      requestCounts.set(ip, { count: 1, resetAt: now + windowMs });
      return false;
    }

    entry.count++;
    return entry.count > max;
  };
}

export interface ContactData {
  companyName: string;
  contactName: string;
  phone: string;
  mealCount: string;
  message: string;
}

// [S2] 입력값 검증 — 타입 체크, 필수값 확인, 길이 제한
export function validateInput(body: unknown): {
  valid: boolean;
  error?: string;
  data?: ContactData;
} {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "잘못된 요청 형식입니다." };
  }

  const b = body as Record<string, unknown>;

  // 필수값: 타입 체크 + 빈 값 거부
  const companyName = typeof b.companyName === "string" ? b.companyName.trim() : "";
  const contactName = typeof b.contactName === "string" ? b.contactName.trim() : "";
  const phone = typeof b.phone === "string" ? b.phone.trim() : "";

  if (!companyName) return { valid: false, error: "회사명은 필수 입력입니다." };
  if (!contactName) return { valid: false, error: "담당자명은 필수 입력입니다." };
  if (!phone) return { valid: false, error: "연락처는 필수 입력입니다." };

  // 길이 제한
  if (companyName.length > 100) return { valid: false, error: "회사명은 100자 이내로 입력해주세요." };
  if (contactName.length > 50) return { valid: false, error: "담당자명은 50자 이내로 입력해주세요." };
  if (phone.length > 20) return { valid: false, error: "연락처는 20자 이내로 입력해주세요." };

  // 선택값: 타입이 다르면 기본값 사용
  const mealCount = typeof b.mealCount === "string" ? b.mealCount.trim().slice(0, 10) : "";
  const message = typeof b.message === "string" ? b.message.trim().slice(0, 2000) : "";

  return {
    valid: true,
    data: { companyName, contactName, phone, mealCount, message },
  };
}
