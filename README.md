# resume

지정민 **Ji Jungmin** — Senior Backend Engineer 이력서.
Markdown 단일 소스에서 **웹이력서 + PDF**를 생성합니다.

| | |
| --- | --- |
| 🌐 **웹이력서** | https://kaos1025.github.io/resume/ |
| 📄 **PDF (한국어)** | [pdf/Ji_Jungmin_Resume_KO.pdf](pdf/Ji_Jungmin_Resume_KO.pdf) |
| 📄 **PDF (English)** | [pdf/Ji_Jungmin_Resume_EN.pdf](pdf/Ji_Jungmin_Resume_EN.pdf) |
| 📝 소스 (한국어) | [resume.ko.md](resume.ko.md) |
| 📝 소스 (English) | [resume.en.md](resume.en.md) |

> 18년 대규모 커머스 백엔드 + AI/풀스택 인디 프로덕트 6종. Java/Spring Boot 중심, 최근 Next.js·Flutter·Supabase·LLM 통합까지.

---

## 구성

```
resume/
├── resume.ko.md          # 이력서 본문 (한국어) — 단일 소스
├── resume.en.md          # 이력서 본문 (English)
├── index.html            # 웹이력서 (GitHub Pages, MD 렌더 + 한/영 토글 + PDF 인쇄)
├── pdf/                   # 자동 생성된 PDF (CI가 갱신)
├── scripts/build-pdf.mjs  # MD → A4 PDF 빌드 (Playwright/Chromium)
└── .github/workflows/build-pdf.yml  # push 시 PDF 자동 빌드·커밋
```

## 어떻게 동작하나

- **소스는 Markdown 하나.** `resume.ko.md` / `resume.en.md`만 고치면 됩니다.
- **웹이력서**는 그 MD를 브라우저에서 렌더링합니다. (별도 빌드 불필요)
- **PDF**는 `main`에 push될 때 GitHub Actions가 Chromium으로 인쇄해 `pdf/`에 자동 커밋합니다.
- 웹이력서 우상단 **⤓ PDF** 버튼으로 즉석에서 PDF 저장도 가능합니다.

## 수정 방법

```bash
# 내용 수정
vi resume.ko.md       # 또는 resume.en.md

# 커밋 & push → CI가 PDF 자동 갱신
git add resume.ko.md
git commit -m "update: 경력 보강"
git push
```

## GitHub Pages 설정 (최초 1회)

저장소 **Settings → Pages → Build and deployment → Source: `Deploy from a branch`**,
Branch는 **`main` / `(root)`** 선택 후 저장. 잠시 뒤 `https://kaos1025.github.io/resume/` 에서 열립니다.

---

## 프로젝트

| 프로젝트 | 한 줄 | 링크 |
| --- | --- | --- |
| **PetCut** | AI 사료+보충제 조합 분석기 (US, Edge Function 프록시 + 회로차단기) | [repo](https://github.com/kaos1025/PetCut) |
| **SuppleCut** | AI 영양제 스택 분석 앱 (멀티 LLM 라우팅, Google Play 베타) | — |
| **Jullyssy Mall** | 여성 패션 자사몰, 라이브 운영 (TossPayments + SEO 자동화) | [jullyssy.shop](https://jullyssy.shop) · [repo](https://github.com/kaos1025/jullyssy-mall) |
| **KronosStock** | AAAI 2026 Kronos-mini 기반 한국주식 예측 + dry-run 자동화 | [repo](https://github.com/kaos1025/KronosStock) |
| **Slack Webhook Hub** | 채널 라우팅 + 멱등 작업 큐 + 스왑형 실행 백엔드 | [repo](https://github.com/kaos1025/slack-webhook-hub) |
| **Pizza of Legend** | 호텔 5곳 납품 QR 주문 PWA (다국어 + Realtime) | [repo](https://github.com/kaos1025/Pizza-of-Legend-Express) |
