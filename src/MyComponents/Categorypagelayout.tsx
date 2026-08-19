import React, { useMemo, useState } from "react";
import BackgroundPage from "./BackgroundPage";
import SideNavBar from "./SideNavBar";
import OpportunityCard from "./OpportunityCard";
import  type {OpportunityCategory} from "../TsFiles/Opportunitiesdata.ts";
import {getOpportunitiesByCategory}  from "../TsFiles/Opportunitiesdata.ts";
import "../CssFiles/CategoryPage.css";

type Props = {
  category: OpportunityCategory;
  title: string;
  subtitle: string;
  accent: string;
  /** extra className hook so each page's own .css file can add a small
   *  unique touch without duplicating the whole layout */
  pageClassName?: string;
};

type DeadlineFilter = "all" | "dated" | "rolling";

const CategoryPageLayout: React.FC<Props> = ({
  category,
  title,
  subtitle,
  accent,
  pageClassName = "",
}) => {
  const items = getOpportunitiesByCategory(category);

  const [query, setQuery] = useState("");
  const [deadlineFilter, setDeadlineFilter] = useState<DeadlineFilter>("all");

  const filteredItems = useMemo(() => {
    let results = items;

    const q = query.trim().toLowerCase();
    if (q.length > 0) {
      results = results.filter((o) =>
        [o.title, o.organization, o.type, o.eligibility, o.country]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }

    if (deadlineFilter === "dated") {
      results = results
        .filter((o) => !!o.deadline)
        .sort((a, b) => (a.deadline! < b.deadline! ? -1 : 1));
    } else if (deadlineFilter === "rolling") {
      results = results.filter((o) => !o.deadline);
    }

    return results;
  }, [items, query, deadlineFilter]);

  return (
    <div className={`cat-page ${pageClassName}`} style={{ "--accent": accent } as React.CSSProperties}>
      <BackgroundPage />
      <SideNavBar />

      <main className="cat-main">
        <header className="cat-header">
          <span className="cat-eyebrow">Opportunity Hub</span>
          <h1 className="cat-title">{title}</h1>
          <p className="cat-subtitle">{subtitle}</p>
          <span className="cat-count">
            {items.length} {items.length === 1 ? "opportunity" : "opportunities"} listed
          </span>
        </header>

        {items.length > 0 && (
          <div className="cat-search-row">
            <div className="cat-search-input-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder={`Search ${title.toLowerCase()} -- try a field, org, or country...`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <select
              className="cat-deadline-filter"
              value={deadlineFilter}
              onChange={(e) => setDeadlineFilter(e.target.value as DeadlineFilter)}
              aria-label={`Filter ${title} by deadline`}
            >
              <option value="all">All deadlines</option>
              <option value="dated">Has a set deadline</option>
              <option value="rolling">Rolling / not specified</option>
            </select>
          </div>
        )}

        {items.length > 0 ? (
          filteredItems.length > 0 ? (
            <div className="cat-grid">
              {filteredItems.map((item) => (
                <OpportunityCard key={item.id} opportunity={item} accent={accent} />
              ))}
            </div>
          ) : (
            <div className="cat-empty">
              <div className="cat-empty-badge">✦</div>
              <h2>No matches</h2>
              <p>
                Nothing in {title.toLowerCase()} matches that search or filter. Try a
                different keyword, or clear the deadline filter.
              </p>
            </div>
          )
        ) : (
          <div className="cat-empty">
            <div className="cat-empty-badge">✦</div>
            <h2>New {title.toLowerCase()} are on the way</h2>
            <p>
              We&rsquo;re still gathering the best {title.toLowerCase()} for students. Check back
              soon, or explore another category from the menu.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CategoryPageLayout;