import React, { useState, useMemo, FormEvent } from "react";
import { INITIAL_BLS_JOBS, INITIAL_LIVE_JOBS, LiveJob } from "./jobData";
import Logo from "./components/Logo";
import Intro from "./components/Intro";

export default function App() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [activeSearch, setActiveSearch] = useState<string>("");
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [filterMode, setFilterMode] = useState<"none" | "search" | "bls">(
    "none",
  );
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
    if (searchInput.trim()) {
      setActiveSearch(searchInput);
      setFilterMode("search");
    }
  };

  const handleApplyBlsFilter = () => {
    setFilterMode("bls");
    setActiveSearch("");
    setSearchInput("");
  };

  const handleResetFilters = () => {
    setFilterMode("none");
    setActiveSearch("");
    setSearchInput("");
  };

  // Filter live jobs by active mode
  const filteredJobs = useMemo(() => {
    let result = INITIAL_LIVE_JOBS;

    if (filterMode === "bls") {
      return result.filter((job) => job.matchedRole === currentBlsJob.title);
    }

    if (filterMode === "search" && activeSearch.trim()) {
      const query = activeSearch.toLowerCase();
      return result.filter(
        (job) =>
          job.title.toLowerCase().includes(query) ||
          job.company.toLowerCase().includes(query) ||
          job.location.toLowerCase().includes(query) ||
          job.matchedRole.toLowerCase().includes(query) ||
          job.requiredSkills.some((skill) =>
            skill.toLowerCase().includes(query),
          ),
      );
    }

    return result;
  }, [filterMode, activeSearch, currentBlsJob.title]);

  return (
    <div className="app-container">
      {/* HEADER */}
      <header className="app-header">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Logo />
          <p className="tagline">
            Connecting displaced workers to real-world career transitions using
            U.S. BLS labor insights.
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
        {/* LEFT COLUMN - SEARCH PANEL */}
        <div className={`left-column ${filterMode === "bls" ? "faded" : ""}`}>
          <div className="card">
            <div className="card-label">
              <span className="indicator-dot"></span>
              Career Transition Guide
            </div>
            <h2 className="card-heading">Navigating Role Changes</h2>
            <Intro />
          </div>

          <div className="card">
            <h3 className="card-heading">Find Jobs Matching Your Experience</h3>
            <p className="card-text">
              Search by job title, everyday skills, or industry keywords:
            </p>

            <form onSubmit={handleSearchSubmit} className="search-form">
              <div className="input-group">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="e.g., Driving, Customer Care, Safety..."
                  className="text-input"
                />
                {searchInput && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="clear-btn"
                  >
                    ✕ Clear
                  </button>
                )}
              </div>

              <div className="button-group">
                <button type="submit" className="btn-primary btn-compact">
                  Filter
                </button>
                {filterMode !== "none" && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="btn-secondary"
                  >
                    Show All
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
                {[
                  "Customer Care",
                  "Patient Care",
                  "Logistics",
                  "Troubleshooting",
                  "Safety",
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSearchInput(tag);
                      setActiveSearch(tag);
                      setFilterMode("search");
                    }}
                    className="tag-btn"
                  >
                    + {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - BLS CAROUSEL PANEL */}
        <div
          className={`carousel-card ${filterMode === "search" ? "faded" : ""}`}
        >
          <div className="carousel-header">
            <div>
              <div className="card-label">High-Growth Sector Explorer</div>
              <h2 className="card-heading">
                Top Growing Resilient Occupations
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
                <span className="metric-title">Median Annual Pay</span>
                <span className="metric-value">{currentBlsJob.medianPay}</span>
              </div>
              <div>
                <span className="metric-title">National Job Demand</span>
                <span className="metric-value" style={{ color: "#ea580c" }}>
                  {currentBlsJob.demandLevel}
                </span>
              </div>
            </div>

            <div>
              <span className="metric-title" style={{ marginBottom: "0.5rem" }}>
                Core Transferable Skills:
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
            <button
              onClick={handleApplyBlsFilter}
              className="btn-primary btn-compact"
              style={{ maxWidth: "300px" }}
            >
              Filter
            </button>

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
              {filterMode === "bls" ? (
                <span>
                  Showing positions matching BLS sector:{" "}
                  <strong className="highlight">{currentBlsJob.title}</strong>
                </span>
              ) : filterMode === "search" ? (
                <span>
                  Showing results for search:{" "}
                  <strong className="highlight">"{activeSearch}"</strong>
                </span>
              ) : (
                "Open opportunities from community partners cross-referenced against growth sectors."
              )}
            </p>
          </div>

          {filterMode !== "none" && (
            <button
              onClick={handleResetFilters}
              className="btn-secondary"
              style={{ fontSize: "0.75rem" }}
            >
              Reset Filters
            </button>
          )}
        </div>

        <div className="listings-scroll">
          {filteredJobs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <p className="card-text">
                No live listings found for this specific filter.
              </p>
              <button
                onClick={handleResetFilters}
                className="btn-secondary"
                style={{ marginTop: "0.5rem" }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-card-info">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <h3
                      className="card-heading"
                      style={{ margin: 0, fontSize: "1rem" }}
                    >
                      {job.title}
                    </h3>
                    <span
                      className="badge-skill"
                      style={{
                        fontSize: "0.65rem",
                        background: "#fff7ed",
                        color: "#ea580c",
                        borderColor: "#fed7aa",
                      }}
                    >
                      Matched to: {job.matchedRole}
                    </span>
                  </div>

                  <div className="job-card-meta">
                    <span>
                      <strong>{job.company}</strong>
                    </span>
                    <span>📍 {job.location}</span>
                    <span className="salary">💰 {job.salary}</span>
                    <span>🕒 {job.posted}</span>
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
                    Skill Roadmap
                  </button>
                  <a
                    href="#apply"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(
                        `Redirecting to direct application for ${job.title} at ${job.company}`,
                      );
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

            <div className="card-label">Transition & Skill Plan</div>
            <h3 className="card-heading">{selectedJobForSkills.title}</h3>
            <p className="card-text" style={{ marginBottom: "1rem" }}>
              {selectedJobForSkills.company} • {selectedJobForSkills.location}
            </p>

            <div className="job-details-box">
              <span
                className="metric-title"
                style={{
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                  color: "#0f172a",
                }}
              >
                Recommended 1-to-2 Week Micro-Steps:
              </span>
              <ul className="roadmap-list">
                {selectedJobForSkills.requiredSkills.map(
                  (skill: string, index: number) => (
                    <li key={skill} className="roadmap-item">
                      <span>
                        Step {index + 1}: Build competency in{" "}
                        <strong>{skill}</strong>
                      </span>
                      <span className="course-pill">Free Community Course</span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <p
              className="card-text"
              style={{ marginTop: "1rem", fontSize: "0.75rem" }}
            >
              💡 <strong>Career Tip:</strong> Highlighting these core
              competencies on your resume increases callback rates for displaced
              workers transitioning across adjacent sectors.
            </p>

            <div
              style={{
                marginTop: "1.25rem",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={() => setSelectedJobForSkills(null)}
                className="btn-primary"
              >
                Close Plan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
