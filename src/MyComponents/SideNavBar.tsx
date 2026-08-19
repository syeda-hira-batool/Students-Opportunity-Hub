import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../CssFiles/SideNavBar.css";



type NavItem = {
  label: string;
  path: string;
  icon: React.ReactNode;
};

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

{/* the number btw the svg all the properties are for making icons */}

const DASHBOARD_ITEM: NavItem = {
  label: "My Dashboard",
  path: "/ExplorePage",
  icon: (
    <svg {...iconProps}>
      <rect x="3" y="3" width="7" height="9" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" />
      <rect x="3" y="16" width="7" height="5" rx="1.5" />
    </svg>
  ),
};

const CATEGORY_ITEMS: NavItem[] = [
  {
    label: "Internships",
    path: "/InternshipsPage",
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
    path: "/ScholarshipsPage",
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
    path: "/FellowshipsPage",
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
    path: "/CompetitionsPage",
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
    path: "/HackathonPage",
    icon: (
      <svg {...iconProps}>
        <polyline points="8 6 3 12 8 18" />
        <polyline points="16 6 21 12 16 18" />
      </svg>
    ),
  },
  {
    label: "Conferences",
    path: "/ConferencesPage",
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
    path: "/ExchangeProgramsPage",
    icon: (
      <svg {...iconProps}>
        <path d="M7 7h12l-3.5-3.5" />
        <path d="M17 17H5l3.5 3.5" />
      </svg>
    ),
  },
  {
    label: "Summer Schools",
    path: "/SummerSchoolsPage",
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
    path: "/BootcampsPage",
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
    path: "/VolunteeringPage",
    icon: (
      <svg {...iconProps}>
        <path d="M12 20.5s-7-4.2-9.2-8.3C1.2 8.8 3.4 5.2 7 5.2c2 0 3.5 1 5 3 1.5-2 3-3 5-3 3.6 0 5.8 3.6 4.2 7-2.2 4.1-9.2 8.3-9.2 8.3z" />
      </svg>
    ),
  },
  {
    label: "Student Jobs",
    path: "/StudentJobsPage",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="4" width="20" height="12" rx="2" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
];

type SideNavBarProps = {
  /** Optional: only needed if you want to override route-based highlighting */
  onSelect?: (label: string) => void;
};

const SideNavBar: React.FC<SideNavBarProps> = ({ onSelect }) => {
  const [open, setOpen] = useState(false);

  // close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  const handleSelect = (label: string) => {
    onSelect?.(label);
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className={`snb-toggle ${open ? "snb-toggle-open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="side-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`snb-overlay ${open ? "snb-overlay-visible" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="side-nav-panel"
        className={`snb-panel ${open ? "snb-panel-open" : ""}`}
        aria-label="Explore navigation"
      >
        <div className="snb-header">
          <Link to="/" className="snb-brand" onClick={() => setOpen(false)}>
            Opportunity Hub
          </Link>
        </div>

        <ul className="snb-list">
          <li>
            <NavLink
              to={DASHBOARD_ITEM.path}
              className={({ isActive }) =>
                `snb-item snb-item-dashboard ${isActive ? "snb-item-active" : ""}`
              }
              onClick={() => handleSelect(DASHBOARD_ITEM.label)}
            >
              <span className="snb-item-icon">{DASHBOARD_ITEM.icon}</span>
              <span className="snb-item-label">{DASHBOARD_ITEM.label}</span>
            </NavLink>
          </li>
        </ul>

        <span className="snb-divider" />

        <ul className="snb-list snb-list-scroll">
          {CATEGORY_ITEMS.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `snb-item ${isActive ? "snb-item-active" : ""}`
                }
                onClick={() => handleSelect(item.label)}
              >
                <span className="snb-item-icon">{item.icon}</span>
                <span className="snb-item-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default SideNavBar;