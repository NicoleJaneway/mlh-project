import { useState, useMemo, FormEvent } from "react";
import { INITIAL_BLS_JOBS, INITIAL_LIVE_JOBS, LiveJob } from "./jobData";

import Logo from "./components/Logo";

export default function App() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [activeSearch, setActiveSearch] = useState<string>("");
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [selectedJobForSkills, setSelectedJobForSkills] =
    useState<LiveJob | null>(null);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const currentBlsJob = INITIAL_BLS_JOBS[carouselIndex];

  const handleNextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % INITIAL_BLS_JOBS.length);
  };

  const handlePrevCarousel = () => {
    setCarouselIndex(
      (prev) => (prev - 1 + INITIAL_BLS_JOBS.length) % INITIAL_BLS_JOBS.length,
    );
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    setActiveSearch(searchInput);
  };

  const filteredJobs = useMemo(() => {
    if (!activeSearch.trim()) return INITIAL_LIVE_JOBS;
    const query = activeSearch.toLowerCase();
    return INITIAL_LIVE_JOBS.filter(
      (job) =>
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.requiredSkills.some((skill) => skill.toLowerCase().includes(query)),
    );
  }, [activeSearch]);

  return (
    <div className="app-container">
      {/* HEADER */}
      <header className="app-header">
        <div>
          <Logo />
          <p className="tagline">
            Translating Macro Bureau of Labor Statistics into Immediate
            Real-World Career Pathways
          </p>
        </div>

        <button onClick={handleRefresh} className="btn-refresh">
          <svg
            className={`refresh-icon ${isRefreshing ? "spinning" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Refresh Data
        </button>
      </header>

      {/* TOP SECTION */}
      <div className="top-grid">
        {/* LEFT COLUMN */}
        <div className="left-column">
          <div className="card">
            <div className="card-label">
              <span className="indicator-dot"></span>
              Career Transition Guide
            </div>
            <h2 className="card-heading">Navigating Job Displacement</h2>
            <p className="card-text">
              When facing layoff or industry displacement, macroeconomic data
              can feel abstract. This platform bridges{" "}
              <strong className="highlight">
                Bureau of Labor Statistics (BLS)
              </strong>{" "}
              10-year outlooks with{" "}
              <strong className="highlight">real-time open positions</strong> to
              give you a clear, actionable transition route.
            </p>
          </div>

          <div className="card">
            <h3 className="card-heading">Enter Your Experience or Target</h3>
            <p className="card-text">
              Input your previous title or target skills to filter live
              opportunities.
            </p>

            <form onSubmit={handleSearchSubmit} className="search-form">
              <div className="input-group">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="e.g., Python, Developer, Analyst..."
                  className="text-input"
                />
                {searchInput && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchInput("");
                      setActiveSearch("");
                    }}
                    className="clear-btn"
                  >
                    ✕ Clear
                  </button>
                )}
              </div>

              <div className="button-group">
                <button type="submit" className="btn-primary">
                  Search Opportunities
                </button>
                {activeSearch && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchInput("");
                      setActiveSearch("");
                    }}
                    className="btn-secondary"
                  >
                    Reset
                  </button>
                )}
              </div>
            </form>

            <div
              style={{
                marginTop: "1rem",
                paddingTop: "0.75rem",
                borderTop: "1px solid #f1f5f9",
              }}
            >
              <span className="metric-title">Quick Skill Filters:</span>
              <div className="skill-tags">
                {["React", "SQL", "Python", "Healthcare", "Cybersecurity"].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setSearchInput(tag);
                        setActiveSearch(tag);
                      }}
                      className="tag-btn"
                    >
                      + {tag}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="carousel-card">
          <div className="carousel-header">
            <div>
              <div className="card-label">BLS Data Viewer</div>
              <h2 className="card-heading">
                Fastest Growing National Occupations
              </h2>
            </div>

            <div className="nav-buttons">
              <button onClick={handlePrevCarousel} className="nav-btn">
                ◀
              </button>
              <span className="page-indicator">
                {carouselIndex + 1} / {INITIAL_BLS_JOBS.length}
              </span>
              <button onClick={handleNextCarousel} className="nav-btn">
                ▶
              </button>
            </div>
          </div>

          <div className="job-details-box">
            <div className="job-title-row">
              <div>
                <span className="soc-code">
                  SOC Code: {currentBlsJob.socCode}
                </span>
                <h3 className="job-title">{currentBlsJob.title}</h3>
              </div>
              <span className="badge-growth">
                {currentBlsJob.growthRate} Growth
              </span>
            </div>

            <p className="card-text">{currentBlsJob.description}</p>

            <div className="metrics-grid">
              <div>
                <span className="metric-title">Median Annual Salary</span>
                <span className="metric-value">{currentBlsJob.medianPay}</span>
              </div>
              <div>
                <span className="metric-title">National Demand Tier</span>
                <span className="metric-value" style={{ color: "#ea580c" }}>
                  {currentBlsJob.demandLevel}
                </span>
              </div>
            </div>

            <div>
              <span className="metric-title" style={{ marginBottom: "0.5rem" }}>
                Core Skills & Competencies (O*NET Crosswalk):
              </span>
              <div className="skill-tags">
                {currentBlsJob.topSkills.map((skill) => (
                  <span key={skill} className="badge-skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="carousel-footer">
            <span>
              Source: U.S. Bureau of Labor Statistics (OEWS Projections)
            </span>
            <div className="dot-nav">
              {INITIAL_BLS_JOBS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIndex(idx)}
                  className={`dot ${idx === carouselIndex ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="listings-container">
        <div className="listings-header">
          <div>
            <h2 className="card-heading">
              Live Opportunities
              <span className="count-badge">
                {filteredJobs.length} Available
              </span>
            </h2>
            <p className="card-text">
              Active postings aggregated from partner boards matched against
              target BLS sectors.
            </p>
          </div>
        </div>

        <div className="listings-scroll">
          {filteredJobs.length === 0 ? (
            <p
              className="card-text"
              style={{ textAlign: "center", padding: "2rem" }}
            >
              No live listings matched your search criteria.
            </p>
          ) : (
            filteredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-card-info">
                  <h3
                    className="card-heading"
                    style={{ margin: 0, fontSize: "1rem" }}
                  >
                    {job.title}
                  </h3>
                  <div className="job-card-meta">
                    <span>{job.company}</span>
                    <span>📍 {job.location}</span>
                    <span className="salary">💰 {job.salary}</span>
                  </div>
                  <div className="skill-tags">
                    {job.requiredSkills.map((sk) => (
                      <span key={sk} className="badge-skill">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="job-card-actions">
                  <button
                    onClick={() => setSelectedJobForSkills(job)}
                    className="btn-secondary"
                  >
                    Suggest Skill Plan
                  </button>
                  <a
                    href="#apply"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Applying to ${job.title}`);
                    }}
                    className="btn-primary"
                    style={{
                      textDecoration: "none",
                      fontSize: "0.75rem",
                      padding: "0.5rem 0.75rem",
                    }}
                  >
                    Apply Direct ↗
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* MODAL */}
      {selectedJobForSkills && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              onClick={() => setSelectedJobForSkills(null)}
              className="modal-close"
            >
              ✕
            </button>

            <div className="card-label">Skill Gap & Recommendations</div>
            <h3 className="card-heading">{selectedJobForSkills.title}</h3>
            <p className="card-text" style={{ marginBottom: "1rem" }}>
              {selectedJobForSkills.company} • {selectedJobForSkills.location}
            </p>

            <div className="job-details-box">
              <span
                className="metric-title"
                style={{ fontWeight: 700, marginBottom: "0.5rem" }}
              >
                Recommended Learning Roadmap:
              </span>
              <ul className="roadmap-list">
                {selectedJobForSkills.requiredSkills.map(
                  (skill: string, index: number) => (
                    <li key={skill} className="roadmap-item">
                      <span>
                        Step {index + 1}: Master <strong>{skill}</strong>
                      </span>
                      <span className="course-pill">1-2 Wk Micro-Course</span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={() => setSelectedJobForSkills(null)}
                className="btn-primary"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
