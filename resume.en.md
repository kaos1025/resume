# Ji Jungmin

**Senior Backend Engineer | Java/Spring · 18 yrs in Large-Scale Commerce · MSA · Kafka · Sharding · 3 yrs Team Lead · Ships AI Full-Stack Products**

✉️ kaos1025@gmail.com · 🔗 [github.com/kaos1025](https://github.com/kaos1025)

---

## Summary

> Senior backend engineer with 18 years in large-scale commerce, now pairing that depth with AI/full-stack indie products. End-to-end ownership from architecture and technical decisions through team execution and production operations.

- **16 years** at Auction/Gmarket; **3 years** leading the Item Engineering team (up to 19 engineers)
- Full-lifecycle architecture, build, and operations of a product platform at **300M+ records · thousands of TPS**
- Legacy modernization specialist — MSA migration, MySQL sharding, MSSQL→MongoDB migration, and zero-downtime large-scale data migration
- **Personally designs, ships, and operates AI/full-stack indie products** — including a released Google Play app (SuppleCut), a live D2C commerce store (jullyssy.shop), and a B2B hotel QR-ordering PWA (Pizza of Legend)

---

## Skills

| Category | Technologies |
| --- | --- |
| **Backend** | Java 21 (primary), Spring Boot 3.x, C#.NET, Python 3.11 |
| **Frontend / Mobile** | Next.js 14 (App Router), Flutter / Dart |
| **DB / Storage** | MySQL (Sharding), MSSQL, MongoDB (WiredTiger), PostgreSQL, Redis, Supabase |
| **Messaging / Pipeline** | Apache Kafka, Apache Spark (Streaming), APScheduler |
| **Infra / Ops** | Kubernetes (Private Cloud), Prometheus, Grafana, DataDog ｜ GitHub Actions (CI/CD), Docker, Vercel, Cloudflare Pages, Supabase Edge Functions |
| **Middleware** | Apache ShardingSphere-JDBC |
| **AI / ML / LLM** | Gemini & Claude API integration, cost-tiered multi-model routing, LLM cost-control patterns (caching, rate limiting, spend-cap circuit breaker), AI-assisted development (Claude Code) |
| **Payments** | TossPayments, Google Play Billing (IAP) |
| **Collaboration / Testing** | Git, Jira, Postman, Playwright (E2E) |
| **Architecture** | MSA, CQRS, Event-Driven, Saga Pattern, DDD, BFF/Proxy, Idempotent Job Queue |

---

## Experience

### 🏢 Gmarket Inc.

**Item Engineering Team Lead** · Sep 2011 – Nov 2024 *(13 yrs 3 mos)*

> Led the core domain team owning the entire Gmarket/Auction product registration, edit, and query platform. Team of up to 19.

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

`2026 – ongoing` · **Solo Developer (Architect · Backend · Frontend)** · [github.com/kaos1025/PetCut](https://github.com/kaos1025/PetCut)

- **Combo-analysis engine design**: not single-product scanning but "food + supplement combo" analysis — simultaneously evaluates weight-based toxicity thresholds (D3, Iron, Ca), ingredient overlap, and mechanism conflicts, differentiating from single-scan services
- **LLM cost-control backend**: Supabase Edge Function (Deno/TS) proxy isolates API keys server-side + IP/device rate limiting + spend-cap circuit breaker + catalog cache pre-lookup to minimize LLM call cost
- **BM pivot decision**: live-validated a paid IAP report ($1.99) on the Android internal track, then pivoted to a web-only free model with Chewy/Amazon affiliate based on market data — owning product-strategy decisions solo
- **Stack**: Flutter, Supabase Edge Functions (Deno/TS), Supabase Postgres, Gemini Flash, Cloudflare Pages, Playwright E2E

### 🧪 SuppleCut — AI Supplement Stack Analyzer

`2026` · **Solo Developer (full-stack)** · [supplecut.com](https://supplecut.com) · [github.com/kaos1025/yak-biseo_mvp](https://github.com/kaos1025/yak-biseo_mvp) · Released on Google Play

- **Multi-LLM routing**: Gemini Flash (free, deterministic analysis — OCR, dedup, UL calculation) → Claude Sonnet (paid IAP $1.99, narrative explanation) — "Decisions by Engine, Explanations by AI" to separate cost from quality
- **Passed 20/20 pharmacist-reviewed test cases** (3–12 product cases, including edge cases like 7-product GABA pathway overlap)
- **Concept → Google Play closed beta in one month, now fully released** — Google Play Billing IAP integrated (verified on real devices)
- **Stack**: Flutter / Dart, Google Gemini API, Anthropic Claude API, Google Play Billing, Cloudflare Pages

### 🛒 Jullyssy Mall — Women's Fashion D2C Store (client project)

`2026 – ongoing` · **Solo Developer (full-stack)** · [jullyssy.shop](https://jullyssy.shop) (live; PG review in progress)

- **Concept → live in ~1 month** — a real client project migrating a Naver Smart Store into an independent D2C store; bulk-imported existing products via the Naver Commerce API
- **Payment/order reliability**: TossPayments integration (card, bank transfer, KakaoPay, NaverPay) + raw-response JSONB retention (for dispute handling); atomic stock decrement via RPC + Order Snapshot pattern for concurrency and order accuracy
- **Automated SEO backend pipeline**: Supabase Edge Function (seo-generate-worker) + pg_cron schedule + dead-letter queue + stuck-recover logic for automated metadata generation and an approval workflow
- **Full commerce operations**: Kakao OAuth login, coupons (fixed/percentage, minimum-order), reviews (rating + image + height/weight/size tag-summary RPC), returns/exchanges, event categories, admin (products, orders, tracking numbers, banners) — scaled progressively across 53 migrations
- **Operational hardening**: Sentry error monitoring, 8 passing Playwright E2E specs (auth, order, cancel, coupon, guest cart, admin), RLS + service-role separation
- **Stack**: Next.js 14 (App Router), Tailwind + shadcn/ui, Supabase (PostgreSQL + Auth + Storage + Edge Functions), TossPayments, Sentry, Vercel, Playwright E2E

### 📈 KronosStock — Korean Stock Prediction + Dry-Run Automation (AAAI 2026 Kronos-mini)

`2026` · **Solo Developer (Backend + ML Integration)** · [github.com/kaos1025/KronosStock](https://github.com/kaos1025/KronosStock)

- **Productionizing a research model**: vendored AAAI 2026 Kronos-mini directly into a KOSPI/KOSDAQ daily price-prediction pipeline — CPU inference with a once-per-process singleton load for resource efficiency
- **Safety-first automation design**: runs the full Forecast → Signal → Paper Order → Digest flow on FastAPI + Redis + APScheduler in **dry-run mode by default** — real broker order-API calls are blocked at the source
- **External-API ops + testing/CI-CD**: 3-tier data fallback (incl. a brokerage Open API) with rate-limit handling; network-free unit tests via model stubs + fakeredis; auto-deploy to a VPS via GitHub Actions
- **Stack**: Python 3.11, FastAPI, Redis, APScheduler, PyTorch CPU, Docker Compose, GitHub Actions

### 🍕 Pizza of Legend Express — B2B Hotel QR-Ordering PWA

`2026` · **Solo Developer (full-stack)** · [github.com/kaos1025/Pizza-of-Legend-Express](https://github.com/kaos1025/Pizza-of-Legend-Express) · **In real B2B operation**

- **Delivered to and operated by a real business client**: a QR-ordering system for a business serving foreign guests at 5 hotels in Yeongjong, Korea — no-sign-up, no-install QR-scan PWA, running on real users and real orders
- **Multilingual ordering + real-time operations**: EN / 中文 / 日本語 (next-intl), Supabase Realtime order monitoring + Telegram/push notifications (configurable from the owner's admin UI)
- **Stack**: Next.js 14, next-intl, Supabase (Realtime + Postgres), PWA

### 🧩 Other Projects

- **📨 Slack Webhook Hub** ([github.com/kaos1025/slack-webhook-hub](https://github.com/kaos1025/slack-webhook-hub)) — a retry-safe idempotent job queue + channel-routing Slack command hub. Next.js / TypeScript / Supabase.

---

## Education & Certifications

**Inha University** — B.S. in Computer Science · 1999 – 2006

- Engineer Information Processing (정보처리기사)
- 🏆 **Gmarket DNA Awards, H1 2023** — recognized for domain expertise and proactive problem-solving
