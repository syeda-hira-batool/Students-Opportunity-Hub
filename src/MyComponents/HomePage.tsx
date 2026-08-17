import React from "react";
import { Link } from "react-router-dom";
import BackgroundPage from "./BackgroundPage";
import OpportunityHubHero from "./Opportunityhubhero";
import Footer from "./Footer";
import "../CssFiles/Background.css";
import "../CssFiles/OpportunityHubHero.css";
import "../CssFiles/HomePage.css";

type Offering = {
  label: string;
  color: string;
  icon: React.ReactNode;
};

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// these weird numbers are for the logo icons

const OFFERINGS: Offering[] = [
  {
    label: "Internships",
    color: "#7fd9a8",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <line x1="3" y1="13" x2="21" y2="13" />
      </svg>
    ),
  },
  {
    label: "Scholarships",
    color: "#F9B2D7",
    icon: (
      <svg {...iconProps}>
        <path d="M2 9l10-5 10 5-10 5-10-5z" />
        <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
        <line x1="22" y1="9" x2="22" y2="15" />
      </svg>
    ),
  },
  {
    label: "Fellowships",
    color: "#CFECF3",
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="8" r="3" />
        <path d="M2 20c0-3.2 3-5.5 7-5.5" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M13.5 20c0-2.4 1.8-4.2 4.5-4.2 2.2 0 4 1.4 4 3.4" />
      </svg>
    ),
  },
  {
    label: "Competitions",
    color: "#FFD166",
    icon: (
      <svg {...iconProps}>
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 4h10v4a5 5 0 0 1-10 0V4z" />
        <path d="M7 5H4a3 3 0 0 0 3 3.5" />
        <path d="M17 5h3a3 3 0 0 1-3 3.5" />
      </svg>
    ),
  },
  {
    label: "Hackathons",
    color: "#8367C7",
    icon: (
      <svg {...iconProps}>
        <polyline points="8 6 3 12 8 18" />
        <polyline points="16 6 21 12 16 18" />
      </svg>
    ),
  },
  {
    label: "Conferences",
    color: "#5FBBEE",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="4" width="20" height="12" rx="2" />
        <line x1="8" y1="20" x2="16" y2="20" />
        <line x1="12" y1="16" x2="12" y2="20" />
      </svg>
    ),
  },
  {
    label: "Exchange Programs",
    color: "#C5B3D3",
    icon: (
      <svg {...iconProps}>
        <path d="M7 7h12l-3.5-3.5" />
        <path d="M17 17H5l3.5 3.5" />
      </svg>
    ),
  },
  {
    label: "Summer Schools",
    color: "#F0AE1E",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
        <line x1="4.5" y1="4.5" x2="6.5" y2="6.5" />
        <line x1="17.5" y1="17.5" x2="19.5" y2="19.5" />
        <line x1="4.5" y1="19.5" x2="6.5" y2="17.5" />
        <line x1="17.5" y1="6.5" x2="19.5" y2="4.5" />
      </svg>
    ),
  },
  {
    label: "Bootcamps",
    color: "#FF7FAE",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2c2.5 2 4 5.2 4 8.5 0 2-.6 3.8-1.6 5.3L12 22l-2.4-6.2A9.6 9.6 0 0 1 8 10.5C8 7.2 9.5 4 12 2z" />
        <circle cx="12" cy="9.5" r="1.6" />
        <path d="M8.5 15.5 6 18" />
        <path d="M15.5 15.5 18 18" />
      </svg>
    ),
  },
  {
    label: "Volunteering",
    color: "#F5CBCB",
    icon: (
      <svg {...iconProps}>
        <path d="M12 20.5s-7-4.2-9.2-8.3C1.2 8.8 3.4 5.2 7 5.2c2 0 3.5 1 5 3 1.5-2 3-3 5-3 3.6 0 5.8 3.6 4.2 7-2.2 4.1-9.2 8.3-9.2 8.3z" />
      </svg>
    ),
  },
  {
    label: "Student Jobs",
    color: "#DAF9DE",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="4" width="20" height="12" rx="2" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="my-page">
      <BackgroundPage />

      {/* HERO  - section*/}
      <section className="my-hero-section" id="home">
        <div className="my-row">
          <div className="my-left">
            <h1 className="my-heading">Student Opportunity Hub </h1>
            <span className="my-underline" />
            <p className="my-name">Syeda Hira Batool</p>
            <p className="my-quote">“Best among you is the one who is beneficial to others.”</p>
          </div>

          <div className="my-right">
            <OpportunityHubHero />
            <p className="my-caption">up to date opportunities</p>
          </div>
        </div>
      </section>

      {/* WHAT WE HAVE - section */}
      <section className="my-offerings-section" id="opportunities">
        <div className="my-offerings-inner">
          <h2 className="my-hook-heading">
            Great opportunities don't wait, neither should you.
          </h2>
          <p className="my-section-label">What we have</p>

          <div className="my-offerings-grid">
            {OFFERINGS.map((item) => (
              <div className="my-offering-card" key={item.label}>
                <span
                  className="my-offering-icon-wrap"
                  style={
                    {
                      background: `${item.color}33`,
                      color: "#1B1E2B",
                    } as React.CSSProperties
                  }
                >
                  {item.icon}
                </span>
                <span className="my-offering-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE CTA  - section */}
      <section className="my-explore-section" id="explore">
        <div className="my-explore-row">
          <h2 className="my-explore-heading">
            Click the explore button to explore opportunities
          </h2>

          <Link to="/ExplorePage" className="my-explore-btn">
            <span>Explore</span>
          </Link>
        </div>
      </section>

      <section className="my-footer-section" id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;