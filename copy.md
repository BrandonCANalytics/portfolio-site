# Brandon Cantrell

Analytics Engineer • BI Systems Builder • Dallas, Texas

[Work](#featured-work)
[How I Build](#how-i-build)
[About](#about-me)
[Contact](#lets-build-something-useful)

---

# I build systems that help people make better decisions.

I work across analytics engineering, business intelligence, and AI automation.

That usually means taking a messy business problem, figuring out what people actually need, and building the data models, workflows, and interfaces that make the next decision easier.

I care about the technical work. I also care whether anyone trusts it, understands it, or changes what they do because of it.

[View my work](#featured-work)
[Contact me](#lets-build-something-useful)

---

## Data → Model → Product → Decision

Raw data is not the finished product.

The finished product is a person understanding what happened, deciding what to do next, and trusting the system enough to act.

---

# Featured work

## Canonical Paid Media Mart

### One governed model for fragmented media performance

Paid media data rarely arrives clean.

Every platform has its own naming conventions, attribution rules, metric definitions, grain, and creative interpretation of what a “conversion” means. Reporting becomes brittle when every dashboard rebuilds that logic independently.

I built a canonical paid media model that standardizes campaign performance across seven advertising platforms and gives downstream reporting one governed source of truth.

### What I built

- Automated ingestion into BigQuery
- Staging models that clean and normalize platform data
- A canonical daily campaign mart built in dbt
- Shared dimensions and KPI definitions
- Data-quality tests for critical fields
- Reporting models designed for reuse across dashboards

### Why it mattered

The goal was not another dashboard.

The goal was to stop rebuilding the same business logic in different places and give analysts, media teams, and leadership a system they could actually trust.

**Stack:** BigQuery, dbt, SQL, Google Ads, Meta, TikTok, Reddit, Snapchat, CM360, GA4

[View the data model]

---

## Resource Insights

### Turning timesheets into an operating system for agency capacity

Timesheet data is usually treated like administrative exhaust.

But underneath it is a live picture of workload, utilization, staffing pressure, project health, and whether the agency is using its people the way it planned to.

I built a resource analytics system that transforms raw time-entry data into governed workforce metrics and actionable workflows for finance and operations.

### What I built

- Automated ingestion and transformation of employee time data
- Standard definitions for capacity, utilization, pacing, and allocation
- Validation rules for incomplete or inconsistent entries
- Employee-level alerts that turn reporting into action
- Executive views for monitoring staffing and operating performance

### Why it mattered

A report can tell leadership that utilization is off.

A useful system helps the right person understand why, identify what needs attention, and do something about it.

**Stack:** BigQuery, SQL, Python, Looker Studio, email automation

[View the system]

---

## Media-attributed donor reporting

### Connecting advertising activity to fundraising outcomes

Media reporting and donor reporting often live in different worlds.

One system knows what ads ran. Another knows who donated. Neither tells the full story by itself.

I have worked across paid media, web analytics, offline conversion uploads, and donor data to help build a more reliable view of how marketing activity connects to fundraising performance.

### What I worked through

- Paid media and GA4 data integration
- Offline conversion processes for Meta and Snapchat
- Recurring versus newly acquired donor attribution
- Donation and constituent data in Snowflake
- Cross-system metric definitions and source-of-truth decisions
- Reporting caveats where platform attribution and financial reality diverge

### Why it mattered

Attribution is not valuable because it produces a cleaner chart.

It is valuable when teams understand which conclusions are defensible, which are directional, and where they should invest the next dollar.

**Stack:** Snowflake, BigQuery, GA4, Meta, Snapchat, SQL, dbt, Looker Studio

[View the case study]

---

# I build systems, not reports.

A dashboard is not successful because it looks good or refreshes every morning.

It is successful when someone can open it and quickly answer:

1. What happened?
2. Why did it happen?
3. What should I do next?

That requires more than visualization.

It requires trustworthy definitions, usable data models, thoughtful interaction design, and a clear understanding of how the business actually works.

---

# How I build

## 1. Start with the behavior

Before I model anything, I want to understand who will use it and what decision they are trying to make.

A technically correct system that nobody uses is still a failed system.

---

## 2. Translate the business problem

Stakeholders rarely walk in with a clean technical requirement.

They walk in with questions, frustrations, spreadsheets, conflicting definitions, and some version of “Can we see this in a dashboard?”

My job is to turn that into a system that can be built, tested, and maintained.

---

## 3. Model the messy parts

Business logic is usually where analytics systems become brittle.

I try to move that logic upstream into governed, reusable models instead of burying it inside dashboards, calculated fields, and one-off reports.

---

## 4. Ship something useful

I would rather put a focused, working product in front of users than spend six months designing the theoretically perfect platform.

Shipping creates feedback. Feedback creates a better system.

---

## 5. Stay close to the humans

I talk to users.

I ask what they do after opening the dashboard. I watch for the spreadsheet they still maintain on the side. I pay attention when the technically “correct” answer does not match how the business understands itself.

That is usually where the real work starts.

---

# Technology is the multiplier. People are the point.

I use AI constantly.

It helps me research unfamiliar systems, write and debug code, prototype interfaces, pressure-test ideas, and move faster than I could on my own.

But I am increasingly human-pilled.

The bottleneck is rarely access to more generated code. It is understanding what people need, earning their trust, explaining tradeoffs, and building something that fits the way they actually work.

I like working hands on keyboard.

I also like getting in a room with people, asking questions, writing the recommendation in my own words, and taking responsibility for whether the finished product is useful.

AI can supersize the work.

It cannot care whether the work makes sense to the humans using it.

---

# More systems I have built

## Analytics engineering foundations

Reusable staging and mart models, data-quality tests, documentation, environment separation, and governed KPI logic designed to support reporting and future analytical products.

**BigQuery • dbt • SQL • Git • Cloud Storage**

---

## Reporting automation

Automated pipelines and workflows that replace recurring spreadsheet work, reduce manual handling, and make reporting more consistent.

**Python • BigQuery • APIs • Cloud Run • Email automation**

---

## Executive and operational dashboards

Decision-oriented dashboards for paid media, fundraising, capacity planning, utilization, pacing, web performance, and campaign reporting.

**Looker Studio • Salesforce Marketing Intelligence • Power BI • Tableau**

---

## Data discovery and measurement strategy

Source-of-truth mapping, metric definitions, warehouse discovery, attribution analysis, data dictionaries, and modernization roadmaps.

**Snowflake • GA4 • BigQuery • SQL • Stakeholder workshops**

---

# About me

## I enjoy becoming competent at things.

My career has moved from insurance claims and fraud investigations to risk management, business intelligence, analytics engineering, and data leadership.

That path was not planned from the beginning.

I kept finding work that required me to learn something new, solve a harder problem, and build something more useful than I had built before.

That same instinct shows up outside work.

I write. I woodwork. I train. I experiment with AI. I get interested in a new subject and usually end up buying tools for it.

I do not think the common thread is data.

The common thread is building.

I enjoy taking disconnected pieces, learning how they work, and turning them into something that did not exist before.

I feel most useful when that creation changes human behavior for the better, whether I am optimizing for campaign performance, healthier operations, a clearer decision, or simply building something my wife will enjoy.

---

# A few things I try to stay consistent on

## Build for use

The value of a system is not what it can technically do. It is what people consistently use it to do.

## Tell the truth about the data

Every model has assumptions. Every attribution system has limitations. Good analytics makes those constraints visible instead of hiding them behind confidence.

## Own the whole problem

I am comfortable moving between stakeholder conversations, business definitions, architecture, SQL, QA, visualization, and rollout.

## Prefer governed logic

Important business rules should not be scattered across spreadsheets, dashboards, and individual analysts’ heads.

## Move with intent

Speed matters. So does knowing why you are building something and what should change when it ships.

## Stay human

Clear communication, judgment, curiosity, and trust are not soft extras. They are part of the technical system.

---

# Experience

## Senior Manager, Business Intelligence

### LERMA/

I lead the development of business intelligence and analytics systems across paid media, fundraising, agency operations, and client reporting.

My work includes data architecture, analytics engineering, dashboard product design, technical strategy, stakeholder leadership, and the operating processes required to make those systems dependable.

[View résumé]

---

# Let’s build something useful.

I am interested in senior and staff-level analytics engineering, business intelligence, data product, and technical analytics roles.

The best fit is a team that needs someone who can own the system end to end while staying close to the people and decisions it exists to support.

I can work through the business problem, build the technical foundation, ship the product, and explain the result without hiding behind jargon.

[Email me]
[LinkedIn]
[GitHub]
[Download résumé]

---

© Brandon Cantrell
