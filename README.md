# 🌉 The AI Collective Jobs Navigator
> **Live Demo:** [https://mlh-project.bnicolebills.workers.dev](https://mlh-project.bnicolebills.workers.dev)
> **Track:** Job Displacement (Navigating changing roles, skills, and economic security)  
> **Event:** Hack for Humanity Atlanta — The AI Collective x Major League Hacking (MLH)  
> **License:** MIT Open Source  

---

## 🎯 Problem Statement
In the age of rapid technological acceleration, job displacement leaves workers overwhelmed by macro-level statistics and disconnected from concrete career transitions[cite: 7]. Bureau of Labor Statistics (BLS) datasets offer vital projections on high-growth sectors, but raw spreadsheets are abstract and difficult for individuals to turn into actionable job searches or skill development plans.

---

## 🚀 The Solution: BridgePath Navigator
**The AI Collective Jobs Navigator** transforms macroeconomic BLS projections into immediate, actionable career paths for displaced workers:

1. **Macro-to-Micro Data Alignment:** Connects BLS Standard Occupational Classification (SOC) codes and 10-year growth data to live job board listings.
2. **Interactive BLS Explorer:** A carousel viewer highlighting top-growing national occupations, median salaries, and O*NET skill crosswalks.
3. **Skill Gap Roadmaps:** A built-in learning recommendation engine that breaks down targeted skills required for transitioning into adjacent, high-demand roles.
4. **Accessible Search & Filtering:** Quick skill pills and instant search filtering to help workers explore adjacent industries seamlessly.

---

## 📊 Judging Criteria Alignment

| Criteria | Score Focus | How We Addressed It |
| :--- | :--- | :--- |
| **Social Impact (25%)** | High | Directly assists displaced workers by bridging economic displacement with actionable high-growth employment routes. |
| **Technology (25%)** | High | Built with React, TypeScript, and structured SOC-to-job matching crosswalk algorithms. |
| **Polish & Accessibility (25%)** | High | Clean cream-and-orange human-centric UI aligned with The AI Collective brand guidelines; high contrast text, scrollable containers, and intuitive navigation. |
| **Innovation (25%)** | High | Uniquely pairs macroeconomic government growth statistics (BLS) directly with live application feeds and micro-learning roadmaps. |

---

## 🛠️ Tech Stack & Architecture

- **Frontend:** React, TypeScript
- **Styling:** Custom CSS with BEM architecture & The AI Collective design tokens
- **Deployment:** Cloudflare Pages
- **Datasets & APIs:** 
  - U.S. Bureau of Labor Statistics (OEWS projections)
  - O*NET OnLine Competency Crosswalk
  - Aggregate Live Job Listings API crosswalk

---

## 🚦 Quick Start (Local Setup)

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/ai-collective-jobs-navigator.git](https://github.com/your-username/ai-collective-jobs-navigator.git)
   cd ai-collective-jobs-navigator