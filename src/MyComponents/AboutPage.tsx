import React from "react";
import BackgroundPage from "./BackgroundPage";
import SideNavBar from "./SideNavBar";
import "../CssFiles/Background.css";
import "../CssFiles/AboutPage.css";

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type TechItem = {
  title: string;
  description: string;
};

type TechSection = {
  id: string;
  label: string;
  accent: string;
  icon: React.ReactNode;
  items: TechItem[];
};

const TECH_SECTIONS: TechSection[] = [
  {
    id: "react",
    label: "React",
    accent: "#8367C7",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="2.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      </svg>
    ),
    items: [
      {
        title: "Functional components",
        description:
          "Every piece of UI -- pages, the sidebar, the hero animation, opportunity cards -- is a function returning JSX, not a class.",
      },
      {
        title: "useState",
        description:
          "Powers the small pieces of local UI memory: the saved name, whether the sidebar drawer or favorites panel is open, the search query.",
      },
      {
        title: "useEffect",
        description:
          "Handles side effects tied to a component's lifetime -- loading a name from localStorage on mount, listening for the Escape key while the sidebar is open, and locking/unlocking page scroll only while HomePage is mounted.",
      },
      {
        title: "useMemo",
        description:
          "Recomputes filtered opportunity lists (search + deadline filtering) only when the query, filter, or data actually change, instead of on every render.",
      },
      {
        title: "Custom hooks",
        description:
          "useFavorites() wraps localStorage read/write logic for bookmarked opportunities into one reusable hook shared by every card and the dashboard.",
      },
      {
        title: "Props & composition",
        description:
          "CategoryPageLayout is one shared layout that every category page (Internships, Hackathons, etc.) configures via props, instead of 11 near-duplicate files.",
      },
      {
        title: "Conditional rendering & lists",
        description:
          "Empty states, search results, and favorites all render conditionally; every mapped list (offerings, nav items, opportunity cards) uses a stable key.",
      },
      {
        title: "React Router",
        description:
          "BrowserRouter + Routes/Route define every page's URL; NavLink auto-highlights the active sidebar item by route, and Link handles in-app navigation without full page reloads.",
      },
    ],
  },
  {
    id: "typescript",
    label: "TypeScript",
    accent: "#5FBBEE",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 9h5" />
        <path d="M10.5 9v7" />
        <path d="M14.5 13c0 1.5 1.2 2 2.2 2 1 0 2-.5 2-1.6 0-2.4-4-1.4-4-3.8 0-1.1.9-1.6 1.9-1.6.9 0 1.7.4 2 1.2" />
      </svg>
    ),
    items: [
      {
        title: "Typed props",
        description:
          "Every component defines a Props type (e.g. { category, title, subtitle, accent }) so mismatched or missing data is caught while writing code, not at runtime.",
      },
      {
        title: "Union types",
        description:
          "OpportunityCategory and DeadlineFilter are string-literal unions (\"internships\" | \"scholarships\" | ...), so only valid values are ever accepted.",
      },
      {
        title: "Record<>",
        description:
          "CATEGORY_ACCENTS is typed as Record<OpportunityCategory, string>, guaranteeing every category has a color -- TypeScript errors if one is missing.",
      },
      {
        title: "Optional properties",
        description:
          "Opportunity.deadline is typed deadline?: string, since not every listing has a confirmed date yet -- the UI branches on whether it's present.",
      },
      {
        title: "Type-only imports",
        description:
          "import type { OpportunityCategory } keeps type-only imports separate from real function/value imports like getOpportunitiesByCategory.",
      },
      {
        title: "Typed CSS variables",
        description:
          "Custom properties like --accent are set via style={{ '--accent': accent } as React.CSSProperties}, since CSS variables aren't part of the standard style typings.",
      },
    ],
  },
  {
    id: "css",
    label: "CSS",
    accent: "#FF9D9D",
    icon: (
      <svg {...iconProps}>
        <path d="M3 2h18l-1.6 18L12 22l-7.4-2L3 2z" />
        <path d="M7 7h10l-.4 4.5H8.8" />
        <path d="M8.6 15.5l3.4 1 3.4-1 .3-3" />
      </svg>
    ),
    items: [
      {
        title: "Flexbox & Grid",
        description:
          "Flexbox handles one-dimensional layouts (the hero row, the nav list); CSS Grid handles the responsive opportunity card grids that reflow by screen width.",
      },
      {
        title: "Custom properties",
        description:
          "--accent, --rotate, --dx, --dy are set inline per element and read inside animations/gradients, letting one shared stylesheet render differently per card or shape.",
      },
      {
        title: "Keyframe animation",
        description:
          "Powers the floating hero character, the ambient background shapes drifting on individual paths, and the confetti fall during the 'celebrating' state.",
      },
      {
        title: "Scroll-snap",
        description:
          "HomePage's sections (hero, offerings, explore, footer) use scroll-snap-type/align so one scroll gesture advances exactly one full-screen section.",
      },
      {
        title: "backdrop-filter",
        description:
          "Used for the frosted-glass look on opportunity cards and the sidebar's dimmed overlay, blurring whatever sits behind them.",
      },
      {
        title: "color-mix()",
        description:
          "Blends a category's accent color with white on the fly (e.g. type pills, empty-state badges) instead of hand-picking a tint for every color.",
      },
      {
        title: "Gradients & pseudo-elements",
        description:
          "linear-gradient powers the Explore button and profile card; ::before/::after add the button's shine sweep and card's top accent stripe without extra markup.",
      },
      {
        title: "Responsive media queries",
        description:
          "Layouts collapse from side-by-side to stacked below ~780px, so the same components work on both desktop and mobile.",
      },
      {
        title: "Accessibility touches",
        description:
          "prefers-reduced-motion disables non-essential animation for users who've asked for it; :focus-visible outlines keep keyboard navigation visible.",
      },
    ],
  },
  {
    id: "tooling",
    label: "Data & Tooling",
    accent: "#7fd9a8",
    icon: (
      <svg {...iconProps}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a4 4 0 0 1-5.3 5.3L6.4 20.6a2 2 0 0 1-2.8-2.8L12.7 8.7a4 4 0 0 1 5.3-5.3l-3.1 3.1z" />
      </svg>
    ),
    items: [
      {
        title: "localStorage",
        description:
          "Persists the visitor's name and their bookmarked opportunities directly in the browser -- no backend required for either feature to work.",
      },
      {
        title: "Real-data pipeline",
        description:
          "The opportunity listings were parsed from an Excel sheet, categorized, and compiled into a typed opportunitiesData.ts file rather than hand-typed.",
      },
      {
        title: "Inline SVG icons",
        description:
          "Every icon in the app (nav, cards, this page) is hand-written SVG using currentColor, so icons inherit color and scale crisply at any size.",
      },
      {
        title: "Vite + React + TypeScript",
        description:
          "The project is built on Vite for fast dev/build tooling, with React for UI and TypeScript for type safety across the whole codebase.",
      },
    ],
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <BackgroundPage />
      <SideNavBar />

      <main className="about-main">
        {/* ABOUT ME */}
        <section className="about-me-card">
          <div className="about-me-avatar">SHB</div>
          <div className="about-me-content">
            <span className="about-me-eyebrow">About Me</span>
            <h1 className="about-me-name">Syeda Hira Batool</h1>
            <p className="about-me-bio">
              Hello! I
              built this Student Opportunity Hub to make it easier for
              students to find internships, scholarships, and every
              opportunity in between, all in one place.
            </p>
            <div className="about-me-links">
              <a
                href="https://www.linkedin.com/in/syeda-hira-batool-759419371/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-me-link about-me-link-linkedin"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21H9z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/syeda-hira-batool"
                target="_blank"
                rel="noopener noreferrer"
                className="about-me-link about-me-link-github"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* TECH BREAKDOWN */}
        <section className="about-tech">
          <div className="about-tech-header">
            <span className="about-tech-eyebrow">How this was built</span>
            <h2 className="about-tech-title">Every concept used in this project</h2>
            <p className="about-tech-subtitle">
              A breakdown of the React, TypeScript, and CSS techniques behind
              the Student Opportunity Hub -- for anyone curious how it works
              under the hood.
            </p>
          </div>

          {TECH_SECTIONS.map((section) => (
            <div
              className="about-tech-section"
              key={section.id}
              style={{ "--section-accent": section.accent } as React.CSSProperties}
            >
              <div className="about-tech-section-heading">
                <span className="about-tech-section-icon">{section.icon}</span>
                <h3>{section.label}</h3>
              </div>
              <div className="about-tech-grid">
                {section.items.map((item) => (
                  <div className="about-tech-item" key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default AboutPage;