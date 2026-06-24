# Ji Jungmin

**Senior Backend Engineer**

✉️ kaos1025@gmail.com · 🔗 [github.com/kaos1025](https://github.com/kaos1025)

---

## Summary

> Senior backend engineer with 18 years in large-scale commerce, now pairing that depth with AI/full-stack indie products. End-to-end ownership from architecture and technical decisions through team execution and production operations.

- **16 years** at Auction/Gmarket; **3 years** leading the Item Engineering team (up to 19 engineers)
- Full-lifecycle architecture, build, and operations of a product platform at **300M+ records · thousands of TPS**
- Legacy modernization specialist — MSA migration, MySQL sharding, MSSQL→MongoDB migration, and zero-downtime large-scale data migration
- Operating **6 indie products across AI / full-stack / backend automation**: pet (PetCut) & human (SuppleCut) AI supplement analysis, a live commerce store (jullyssy.shop), stock-prediction automation (KronosStock), a Slack job-queue hub, and a B2B hotel-ordering PWA (Pizza of Legend)

---

## Skills

| Category | Technologies |
| --- | --- |
| **Backend** | Java 21 (primary), Spring Boot 3.x, C#.NET, Python 3.11 |
| **Frontend / Mobile** | Next.js 14 (App Router), Flutter / Dart |
| **DB / Storage** | MySQL (Sharding), MSSQL, MongoDB (WiredTiger), PostgreSQL, Redis, Supabase |
| **Messaging / Pipeline** | Apache Kafka, Apache Spark (Streaming), APScheduler |
| **Infra / Ops** | Kubernetes (Private Cloud), Docker Compose, Vercel, Cloudflare Pages, Supabase Edge Functions (Deno/TS), GitHub Actions (CI/CD), Hetzner VPS, Grafana, Prometheus, DataDog |
| **Middleware** | Apache ShardingSphere-JDBC |
| **AI / ML / LLM** | Google Gemini API, Anthropic Claude API, cost-tiered multi-model routing, circuit-breaker & caching patterns, PyTorch CPU inference (Kronos-mini vendoring), AI-assisted development (Claude Code) |
| **Payments** | TossPayments, Google Play Billing (IAP) |
| **Collaboration / Testing** | Git, Jira, Postman, Playwright (E2E) |
| **Architecture** | MSA, CQRS, Event-Driven, Saga Pattern, DDD, BFF/Proxy, Idempotent Job Queue |

---

## Experience

### 🏢 Gmarket Inc.

**Item Engineering Team Lead** · Sep 2011 – Nov 2024 *(13 yrs 3 mos)*

> Led the core domain team owning the entire Gmarket/Auction product registration, edit, and query platform. Team of up to 19. Left via a voluntary retirement program prompted by changing business conditions.

#### 📦 Product Description MongoDB Migration & MSA Transition

`Oct 2023 – Aug 2024` · **Role: Architecture design · Technical decisions · Project lead**

- **90% storage reduction** (13TB → 1.33TB): MSSQL dual-write → MongoDB BSON + Snappy/Zlib compression + MD5 deduplication
- Migrated **1B+ records / ~13TB** safely via a **zero-downtime 5-phase transition**
- Designed for Write **50–150 TPS / ~20ms avg latency**, Read **5,500 TPS steady / 16,000 TPS peak**
- Selected MongoDB after a quantitative comparison of 5 databases (PostgreSQL, Elasticsearch, Cassandra, Redis, MongoDB) — led the team's technical decision
- Split into 3 collections (`descriptionMeta / description / descriptionUpdateHistory`) to minimize update overhead
- Established an RDB-fallback strategy during MongoDB outages to preserve service continuity

#### ⚙️ ESM+ Product Registration/Edit Backend Re-architecture

`2022 – Jun 2024` · **Role: Project lead · Backend architect**

- **~30% productivity gain (est.)**: consolidated dual legacy/new systems into a single unified system; one shared module deployed across both Gmarket and Auction (estimated from eliminated per-site duplicate development effort)
- **~25% QA-time reduction (est.)**: module-level independent testing narrowed QA scope
- Completed **zero-downtime migration of 100M of 300M total records (30%)** — Facade pattern + progressive 3-stage transition
- Decomposed a monolith into 3 domain modules (core product info / shipping / options); Saga pattern + compensating transactions for data consistency
- Built real-time consistency-validation batches + auto-recovery; Kafka-based event sync
- Ran a 2.5-year roadmap, stakeholder alignment, and dev standards (code review, API design guides)

#### 🗄️ Sharded MySQL Cluster Product Query Platform

`2022` · **Role: System architect · Tech lead**

- **Stable 8,000 TPS under event traffic**: resolved single-MSSQL bottleneck (CPU/Memory limits during events) with a 4-shard MySQL cluster
- **Eliminated SPOF**: independent per-shard operation blocks single points of failure and prevents service-wide cascading outages
- Evenly distributed **~300M product records** across 4 shards (Modular Sharding strategy)
- Chose MySQL + ShardingSphere-JDBC after a PostgreSQL vs MySQL analysis — license-cost savings vs MSSQL
- Designed a custom near-real-time sync pipeline (`MSSQL → Kafka → MySQL`, Spark Job + Spring Boot Consumer) where standard CDC was not viable
- **Improved JVM cold start from 3s → 20–40ms** (root-caused via DataDog instrumentation, applied Spring WarmUp)

#### 🛍️ Gmarket/Auction Product 2.0 (Product DB Integration & Registration Overhaul)

`2017` · **Role: Backend lead · DB modeling · Project management**

- Unified Gmarket/Auction's dual product DBs and registration/edit systems — improved seller experience and internal operational efficiency
- Led full DB modeling and service architecture; designed an extensible structure for multi-channel and varied sales types (single/multi/bundle)
- **Led 8 external developers**, reviewed deliverable quality, managed schedule

#### 🔧 ESM+ Unified Seller Tools TF

`2011 – 2012` · **Role: Backend developer**

- Joined the Auction/Gmarket service integration (ESM+) task force; designed and integrated Auction product-domain APIs
- Secured cross-service data compatibility and removed redundancy

---

### 🏢 eBay Auction Co.

**Item Team** · May 2008 – Sep 2011 *(3 yrs 5 mos)*

- Backend/frontend development and maintenance for Auction product registration/edit/query
- Built the product auction system and a bulk-integration OpenAPI for sellers
- `C# .Net / MSSQL / Windows Server`

---

### 🏢 TmaxSoft Co.

**Staff Engineer** · Oct 2006 – Mar 2008 *(1 yr 6 mos)*

- Citibank PNC project: GIRO/CMS auto-transfer registration/change/query development, monthly fee batch jobs
- Voluntarily moved on to gain large-scale commerce domain experience (joined Auction)

---

## Side Projects (Indie Product Development)

> Using 18 years of backend experience plus AI-assisted development (Claude Code) to personally design, build, ship, and operate full-stack / AI / automation products. Applies senior backend depth across many domains — payment PG integration, multi-LLM routing, backend proxy & circuit-breaker patterns, and trading automation.

### 🐾 PetCut — AI Pet Food + Supplement Combo Analyzer (US pet market)

`2025 – ongoing` · **Solo Developer (Architect · Backend · Frontend)** · [github.com/kaos1025/PetCut](https://github.com/kaos1025/PetCut)

- **Supabase Edge Function (Deno/TS) proxy backend**: fully removes LLM API keys from the client + IP/device rate limiting + an "S8" circuit breaker (spend cap) + catalog/cache pre-lookup to minimize LLM calls
- **Domain differentiation**: not single-product scanning but "food + supplement combo" analysis — simultaneous evaluation of weight-based toxicity thresholds (D3, Iron, Ca), ingredient overlap, and mechanism conflicts (zero direct competitors)
- **Strategic BM pivot**: the L1 era (Claude $1.99 IAP paid report; live-validated on the Android Internal Track at versionCode 7 with 321 tests) was intentionally deprecated → redefined V1 as web-only with a free Chewy/Amazon affiliate model (decided from objective market variables D1–D6)
- **Stack**: Flutter (V1.1 app), Supabase Edge Functions (Deno/TS), Supabase Postgres, Gemini Flash, Cloudflare Pages, Playwright E2E

### 🧪 SuppleCut — AI Supplement Stack Analyzer (sister product)

`2025` · **Solo Developer (full-stack)** · [supplecut.com](https://supplecut.com) · Google Play closed beta

- **Multi-LLM routing**: Gemini Flash (free, deterministic analysis — OCR, dedup, UL calculation) → Claude Sonnet (paid IAP $1.99, narrative explanation) — "Decisions by Engine, Explanations by AI" to separate cost from quality
- **Passed 20/20 pharmacist-reviewed test cases** (3–12 product cases, including edge cases like 7-product GABA pathway overlap)
- **Concept → Google Play closed beta in one month**, Google Play Billing IAP integrated (verified on real devices)
- **Stack**: Flutter / Dart, Google Gemini API, Anthropic Claude API, Google Play Billing, Cloudflare Pages

### 🛒 Jullyssy Mall — Women's Fashion D2C Store (client project)

`2025 – ongoing` · **Solo Developer (full-stack)** · [jullyssy.shop](https://jullyssy.shop) (live; PG review in progress)

- **Concept → live in ~1 month** — a real client project migrating a Naver Smart Store into an independent D2C store; bulk-imported existing products via the Naver Commerce API
- **Payment/order reliability**: TossPayments integration (card, bank transfer, KakaoPay, NaverPay) + raw-response JSONB retention (for dispute handling); atomic stock decrement via RPC + Order Snapshot pattern for concurrency and order accuracy
- **Automated SEO backend pipeline**: Supabase Edge Function (seo-generate-worker) + pg_cron schedule + dead-letter queue + stuck-recover logic for automated metadata generation and an approval workflow
- **Full commerce operations**: Kakao OAuth login, coupons (fixed/percentage, minimum-order), reviews (rating + image + height/weight/size tag-summary RPC), returns/exchanges, event categories, admin (products, orders, tracking numbers, banners) — scaled progressively across 53 migrations
- **Operational hardening**: Sentry error monitoring, 8 passing Playwright E2E specs (auth, order, cancel, coupon, guest cart, admin), RLS + service-role separation
- **Stack**: Next.js 14 (App Router), Tailwind + shadcn/ui, Supabase (PostgreSQL + Auth + Storage + Edge Functions), TossPayments, Sentry, Vercel, Playwright E2E

### 📈 KronosStock — Korean Stock Prediction + Dry-Run Automation (AAAI 2026 Kronos-mini)

**Solo Developer (Backend + ML Integration)** · [github.com/kaos1025/KronosStock](https://github.com/kaos1025/KronosStock)

- **Productionizing a research model**: vendors AAAI 2026 Kronos-mini directly (`inference/vendor_kronos.sh`) into a KOSPI/KOSDAQ daily price-prediction pipeline. Persistent HuggingFace Hub weight cache, KronosForecaster loaded once per process (singleton, for CPU performance), fixed model↔tokenizer mapping. A personal, non-commercial learning/experimentation tool.
- **Backend + safe automation design**: FastAPI dashboard + Redis OHLCV buffering + APScheduler 4-cron jobs (08:50 / 09:30 / 12:00 / 15:20 KST, with `exchange-calendars` XKRX holidays auto-applied). Runs the full Forecast → Signal → Paper Order → Digest flow in dry-run mode by default — blocks real broker order-API calls, updating only a paper portfolio snapshot.
- **External-API ops + testing/CI-CD**: 3-tier data fallback (Korea Investment & Securities Open API via python-kis + FinanceDataReader + pykrx), rate-limit aware (live 20 req/s · mock 5 req/s) + 24h token disk cache. Unit-testable without network via model stubs + fakeredis; auto-deploy to a Hetzner CX22 VPS via GitHub Actions (`deploy-vps.yml`).
- **Stack**: Python 3.11, FastAPI, Redis, APScheduler, PyTorch CPU, python-telegram-bot, python-kis, exchange-calendars (XKRX), Docker Compose, GitHub Actions, Hetzner VPS

### 🧩 Other Projects

- **📨 Slack Webhook Hub** ([github.com/kaos1025/slack-webhook-hub](https://github.com/kaos1025/slack-webhook-hub)) — a Slack command hub with channel-based routing and a swappable execution backend (routine/noop/worker). A retry-safe idempotent `command_jobs` queue (Supabase/PostgREST) plus a worker that runs agent jobs with worktree isolation and artifact logging. Next.js / TypeScript.
- **🍕 Pizza of Legend Express** — a **real B2B-delivered** QR-ordering PWA for foreign guests at 5 hotels in Yeongjong, Korea. No sign-up, no app install, order via QR scan; multilingual (EN / 中文 / 日本語); Supabase Realtime order operations + Telegram/push notifications (configurable directly from the owner's admin UI). Next.js 14 / next-intl / Supabase.

---

## Projects Summary

| Project | Highlights | Stack |
| --- | --- | --- |
| MongoDB Migration & MSA | 90% storage cut (13TB→1.33TB), 1B+ records migrated zero-downtime | Java 21, Spring Boot 3.2, MongoDB |
| Sharded MySQL Query Platform | Stable 8,000 TPS, SPOF removed, JVM 3s→40ms | MySQL Cluster, ShardingSphere, Kafka, Spark |
| ESM+ Re-architecture | ~30% productivity↑ (est.), ~25% QA-time↓ (est.), 100M records migrated zero-downtime | Java, Spring Boot, Kafka, MSSQL |
| Product 2.0 | Gmarket/Auction DB unification, led 8 external devs | C#.NET, MSSQL |
| **PetCut** (Indie) | Edge Function proxy + S8 circuit breaker + catalog cache, food+supplement combo analysis | Flutter, Supabase Edge Function, Gemini |
| **SuppleCut** (Indie) | Multi-LLM routing, Google Play beta, IAP $1.99 validated, 20/20 pharmacist review | Flutter, Gemini, Claude, Play Billing |
| **Jullyssy Mall** (Indie) | ~1-month solo full-stack, TossPayments + automated SEO Edge Function, 53 migrations, live | Next.js 14, Supabase, TossPayments, Sentry |
| **KronosStock** (Indie) | AAAI 2026 ML model vendoring + dry-run automation, Redis/APScheduler/VPS CI-CD | Python, FastAPI, PyTorch, Redis, GitHub Actions |
| **Slack Webhook Hub** (Indie) | Channel routing + idempotent job queue + swappable execution backend (worker) | Next.js, TypeScript, Supabase/PostgREST |
| **Pizza of Legend** (B2B) | QR-ordering PWA delivered to 5 hotels, multilingual + Realtime ops + notifications | Next.js 14, next-intl, Supabase Realtime |

---

## Education & Certifications

**Inha University** — B.S. in Computer Science · 1999 – 2006

- Engineer Information Processing (정보처리기사)
- 🏆 **Gmarket DNA Awards, H1 2023** — recognized for domain expertise and proactive problem-solving
