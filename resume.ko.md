# 지정민 Ji Jungmin

**시니어 백엔드 엔지니어 | Java/Spring 대용량 커머스 백엔드 18년 · MSA·Kafka·샤딩 · 팀 리딩 3년 · AI 풀스택 제품 출시**

✉️ kaos1025@gmail.com · 🔗 [github.com/kaos1025](https://github.com/kaos1025)

---

## Summary

> 대규모 커머스 백엔드 18년 + AI/풀스택 인디 프로덕트를 병행하는 시니어 엔지니어. 설계 → 의사결정 → 팀 실행 → 운영까지 End-to-End 오너십.

- 옥션/지마켓 **16년**, Item Engineering팀 **팀장 3년** (최대 19명 리딩)
- **3억 건 · 수천 TPS** 규모 상품 플랫폼 아키텍처 설계·구축·운영 전 주기 경험
- 레거시 현대화 (MSA 전환, MySQL Sharding, MSSQL→MongoDB 이관) 및 무중단 대규모 마이그레이션 전문
- **AI·풀스택 인디 프로덕트 직접 설계·출시·운영** — Google Play 정식 출시 앱(SuppleCut), 라이브 커머스 자사몰(jullyssy.shop), B2B 호텔 QR 주문 PWA(Pizza of Legend) 포함

---

## Skills

| 구분 | 기술 |
| --- | --- |
| **Backend** | Java 21 (주력), Spring Boot 3.x, C#.NET, Python 3.11 |
| **Frontend / Mobile** | Next.js 14 (App Router), Flutter / Dart |
| **DB / Storage** | MySQL (Sharding), MSSQL, MongoDB (WiredTiger), PostgreSQL, Redis, Supabase |
| **Messaging / Pipeline** | Apache Kafka, Apache Spark (Streaming), APScheduler |
| **Infra / Ops** | Kubernetes (Private Cloud), Prometheus, Grafana, DataDog ｜ GitHub Actions (CI/CD), Docker, Vercel, Cloudflare Pages, Supabase Edge Functions |
| **Middleware** | Apache ShardingSphere-JDBC |
| **AI / ML / LLM 통합** | Gemini · Claude API 통합, 비용 티어 기반 멀티 모델 라우팅, LLM 비용 통제 패턴 (캐시·레이트리밋·지출 상한 서킷브레이커), AI 보조 개발 (Claude Code) |
| **Payments** | TossPayments, Google Play Billing (IAP) |
| **협업 / 테스트** | Git, Jira, Postman, Playwright (E2E) |
| **Architecture** | MSA, CQRS, Event-Driven, Saga Pattern, DDD, BFF/Proxy, 멱등 작업 큐(Idempotent Job Queue) |

---

## Experience

### 🏢 주식회사 지마켓

**Item Engineering팀 팀장** · 2011.09 – 2024.11 *(13년 3개월)*

> 지마켓·옥션 상품 등록/수정/조회 플랫폼 전체를 담당하는 핵심 도메인 팀 리딩. 팀 최대 19명.

#### 📦 상품 상세설명 MongoDB 이관 및 MSA 전환

`2023.10 – 2024.08` · **역할: 아키텍처 설계 · 기술 의사결정 · 프로젝트 리딩**

- **스토리지 90% 절감** (13TB → 1.33TB): MSSQL 2중 저장 → MongoDB BSON+Snappy/Zlib 압축 + MD5 중복 제거로 달성
- **10억 건 · 약 13TB** 규모 데이터를 무중단 5단계 Phase 전환으로 안전하게 이관
- Write **50~150 TPS / 평균 Latency 20ms**, Read **평시 5,500 TPS / 피크 16,000 TPS** 설계
- 5종 DB (PostgreSQL·Elasticsearch·Cassandra·Redis·MongoDB) 정량 비교 후 MongoDB 선정 — 팀 내 기술 의사결정 리딩
- `descriptionMeta / description / descriptionUpdateHistory` 3컬렉션 분리 설계로 업데이트 오버헤드 최소화
- MongoDB 장애 시 RDB Fallback 병행 운영 전략 수립, 서비스 연속성 확보

#### ⚙️ ESM+ 상품 등록/수정 Backend 아키텍처 개편

`2022 – 2024.06` · **역할: 프로젝트 리더 · 백엔드 아키텍트**

- **개발 생산성 추정 ~30% 향상**: 구/신버전 이중화 구조 → 단일 통합 시스템 전환, 공통 모듈 1회 개발로 지마켓·옥션 양 사이트 적용 (사이트별 중복 개발 공수 제거 기준 자체 추정)
- **QA 효율 추정 ~25% 단축**: 모듈별 독립 테스트 체계 구축으로 QA 대상 범위 축소
- **전체 3억 건 중 1억 건(30%) 무중단 마이그레이션** 완료 — Facade 패턴 + 점진적 3단계 전환 전략 설계
- 모놀리식 → 3개 도메인 모듈(상품주요정보·배송정보·옵션정보) 분해, Saga 패턴 + 보상 트랜잭션으로 데이터 정합성 보장
- 실시간 정합성 검증 배치 + 자동 복구 메커니즘 구축, Kafka 기반 이벤트 동기화
- 2년 반 장기 로드맵 수립·이해관계자 조율·개발 표준화 체계 (코드 리뷰·API 설계 가이드) 운영

#### 🗄️ Sharded MySQL Cluster 기반 상품 조회 플랫폼 구축

`2022` · **역할: 시스템 아키텍트 · 기술 리드**

- **이벤트 트래픽 8,000 TPS 안정 처리**: 단일 MSSQL 병목(이벤트 시 CPU/Memory 한계) → 4-Shard MySQL Cluster로 해소
- **SPOF 제거**: 개별 샤드 독립 운영으로 단일 장애점 차단, 전체 서비스 장애 전파 방지
- **약 3억 건** 상품 데이터 4개 샤드 균일 분산 (Modular Sharding 전략 설계)
- PostgreSQL vs MySQL 비교 분석 후 MySQL + ShardingSphere-JDBC 선정 — MSSQL 대비 라이선스 비용 절감
- 표준 CDC 적용 불가 환경에서 `MSSQL → Kafka → MySQL` 커스텀 준실시간 동기화 파이프라인 (Spark Job + Spring Boot Consumer) 설계
- **JVM Cold Start 3초 지연 → 20~40ms로 개선** (DataDog 계측 기반 원인 분석, Spring WarmUp 적용)

#### 🛍️ G마켓·옥션 상품 2.0 개발 (상품 DB 통합 및 등록 시스템 개편)

`2017` · **역할: 백엔드 리드 · DB 모델링 · 프로젝트 관리**

- G마켓·옥션 이원화된 상품 DB 및 등록/수정 시스템 통합 — 판매자 경험 및 내부 운영 효율 개선
- 전체 DB 모델링 및 서비스 아키텍처 설계 주도, 다중 채널·다양한 판매 방식(단일/복수/묶음상품) 대응 확장형 구조 설계
- **외부 개발자 8명 리딩**, 산출물 품질 검수 및 일정 관리 수행

#### 🔧 ESM+ 통합 판매자 도구 개발 TF

`2011 – 2012` · **역할: 백엔드 개발자**

- 옥션·지마켓 서비스 통합(ESM+) TF 참여, 옥션 상품 도메인 API 설계 및 연동 구현
- 서비스 간 데이터 호환성 확보 및 이중화 제거 기여

---

### 🏢 (주)이베이옥션

**Item팀** · 2008.05 – 2011.09 *(3년 5개월)*

- 옥션 상품 등록/수정/조회 백엔드·프론트엔드 개발 및 유지보수
- 상품 경매 시스템 개발, 판매자용 대량 연동 OpenAPI 개발
- `C# .Net / MSSQL / Windows Server`

---

### 🏢 (주)티맥스소프트

**사원** · 2006.10 – 2008.03 *(1년 6개월)*

- CITI은행 PNC 프로젝트: GIRO/CMS 자동이체 등록·변경·조회 개발, 월별 수수료 배치 Job 개발
- 대규모 커머스 도메인 경험을 위해 자발적 이직 (옥션 합류)

---

## Side Projects (Indie Product Development)

> 18년 백엔드 경력 + AI 보조 개발 (Claude Code) 로 풀스택·AI·자동화 프로덕트를 직접 설계·개발·배포·운영. 결제 PG 통합, 멀티 LLM 라우팅, 백엔드 프록시·서킷브레이커 패턴, 트레이딩 자동화까지 다양한 도메인에서 시니어 백엔드 깊이를 적용.

### 🐾 PetCut — AI 사료+보충제 조합 분석기 (미국 펫 시장)

`2026 – 진행 중` · **Solo Developer (Architect · Backend · Frontend)** · [github.com/kaos1025/PetCut](https://github.com/kaos1025/PetCut)

- **조합 분석 엔진 설계**: 단일 제품 스캔이 아닌 "사료+보충제 조합" 분석 — 체중별 독성 역치(D3·Iron·Ca)·성분 중복·기전 충돌 동시 평가로 단일 스캔 서비스와 차별화
- **LLM 비용 통제 백엔드**: Supabase Edge Function (Deno/TS) 프록시로 API 키 서버 격리 + IP/디바이스 레이트리밋 + 지출 상한 서킷브레이커 + 카탈로그 캐시 선조회로 호출 비용 최소화
- **BM 피벗 의사결정**: 유료 IAP 리포트($1.99)를 Android 내부 트랙에서 실검증한 뒤, 시장 데이터 기반으로 웹 단독 + Chewy/Amazon Affiliate 무료 모델로 전환 — 제품 전략 의사결정까지 솔로 수행
- **기술 스택**: Flutter, Supabase Edge Function (Deno/TS), Supabase Postgres, Gemini Flash, Cloudflare Pages, Playwright E2E

### 🧪 SuppleCut — AI 영양제 스택 분석 모바일 앱

`2026` · **Solo Developer (1인 풀스택)** · [supplecut.com](https://supplecut.com) · [github.com/kaos1025/yak-biseo_mvp](https://github.com/kaos1025/yak-biseo_mvp) · Google Play 정식 출시

- **멀티 LLM 라우팅**: Gemini Flash (무료, 결정적 분석 — OCR·중복·UL 계산) → Claude Sonnet (유료 IAP $1.99, narrative 설명) — "Decisions by Engine, Explanations by AI" 원칙으로 비용/품질 분리
- **20/20 약사 검수 테스트 케이스 통과** (3~12개 제품 케이스, 7-product GABA 경로 중첩 등 엣지 케이스 포함)
- **컨셉 → 1개월 만에 Google Play 비공개 베타, 이후 정식 출시** — Google Play Billing IAP 통합 (실기기 검증)
- **기술 스택**: Flutter / Dart, Google Gemini API, Anthropic Claude API, Google Play Billing, Cloudflare Pages

### 🛒 Jullyssy Mall — 여성 패션 자사몰 (클라이언트 프로젝트)

`2026 – 진행 중` · **Solo Developer (1인 풀스택)** · [jullyssy.shop](https://jullyssy.shop) (라이브 운영, PG 심사 진행 중)

- **컨셉 → 라이브 배포까지 약 1개월** 솔로 개발 — 네이버 스마트스토어를 독립 자사몰로 전환하는 실제 클라이언트 프로젝트. 네이버 Commerce API로 기존 상품 배치 임포트.
- **결제·주문 안정성**: TossPayments 통합 (카드·계좌이체·카카오페이·네이버페이) + raw response JSONB 보관(분쟁 대비), 재고 차감 RPC + Order Snapshot 패턴으로 동시성·주문 정확성 보장
- **SEO 자동 생성 백엔드 파이프라인**: Supabase Edge Function (seo-generate-worker) + pg_cron 스케줄 + dead-letter queue + stuck-recover 복구 로직으로 메타데이터 자동 생성·승인 워크플로우 구축
- **커머스 풀기능 운영**: 카카오 OAuth 로그인, 쿠폰(정액/정률·최소주문), 리뷰(별점+이미지+키/몸무게/사이즈 태그 요약 RPC), 반품/교환, 이벤트 카테고리, 어드민(상품·주문·송장·배너) — 53개 마이그레이션으로 점진적 확장
- **운영 안정화**: Sentry 에러 모니터링 연동, Playwright E2E 8개 스펙(인증·주문·취소·쿠폰·게스트 장바구니·어드민) 통과, RLS + service-role 분리
- **기술 스택**: Next.js 14 (App Router), Tailwind + shadcn/ui, Supabase (PostgreSQL + Auth + Storage + Edge Functions), TossPayments, Sentry, Vercel, Playwright E2E

### 📈 KronosStock — AAAI 2026 Kronos-mini 모델 기반 한국주식 예측 + dry-run 자동화

`2026` · **Solo Developer (Backend + ML Integration)** · [github.com/kaos1025/KronosStock](https://github.com/kaos1025/KronosStock)

- **ML 논문 모델의 프로덕션 통합**: AAAI 2026 Kronos-mini를 직접 vendoring하여 KOSPI/KOSDAQ 일봉 예측 파이프라인에 통합 — CPU 추론, 프로세스당 1회 싱글톤 로드로 리소스 최적화
- **안전장치 우선 자동화 설계**: FastAPI + Redis + APScheduler 기반 Forecast → Signal → Paper Order → Digest 자동화를 **dry-run 기본 모드**로 운영 — 실제 broker 주문 API 호출 원천 차단
- **외부 API 운영 + 테스트/CI-CD**: 증권 API 포함 3-tier 데이터 fallback + 레이트리밋 대응, 모델 stub + fakeredis로 네트워크 무의존 단위 테스트, GitHub Actions → VPS 자동 배포
- **기술 스택**: Python 3.11, FastAPI, Redis, APScheduler, PyTorch CPU, Docker Compose, GitHub Actions

### 🍕 Pizza of Legend Express — B2B 호텔 QR 주문 PWA

`2026` · **Solo Developer (1인 풀스택)** · [github.com/kaos1025/Pizza-of-Legend-Express](https://github.com/kaos1025/Pizza-of-Legend-Express) · **실제 B2B 납품 운영**

- **실제 업체 납품·운영 중**: 영종도 호텔 5곳의 외국인 투숙객을 고객으로 하는 업체에 QR 주문 시스템 납품 — 무가입·무설치 QR 스캔 주문 PWA, 실사용자·실주문 기반 운영
- **다국어 주문 경험 + 실시간 관제**: EN/中文/日本語 지원 (next-intl), Supabase Realtime 주문 관제 + 텔레그램/푸시 알림 (점주 Admin UI에서 직접 설정)
- **기술 스택**: Next.js 14, next-intl, Supabase (Realtime + Postgres), PWA

### 🧩 그 외 프로젝트

- **📨 Slack Webhook Hub** ([github.com/kaos1025/slack-webhook-hub](https://github.com/kaos1025/slack-webhook-hub)) — Slack 재시도에 안전한 멱등 작업 큐 + 채널 라우팅 명령 허브. Next.js / TypeScript / Supabase.

---

## Education & Certifications

**인하대학교** — 컴퓨터공학 학사 · 1999 – 2006

- 정보처리기사
- 🏆 **지마켓 DNA Awards 2023년 상반기 수상**: 도메인 전문성 및 적극적 문제 해결 역량 인정
