import React from "react";
import BackgroundPage from "./BackgroundPage";
import SideNavBar from "./SideNavBar";
import OpportunityCard from "./OpportunityCard";
import type { OpportunityCategory } from "../TsFiles/Opportunitiesdata.ts";
import { getOpportunitiesByCategory } from "../TsFiles/Opportunitiesdata.ts";
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

const CategoryPageLayout: React.FC<Props> = ({
  category,
  title,
  subtitle,
  accent,
  pageClassName = "",
}) => {
  const items = getOpportunitiesByCategory(category);

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

        {items.length > 0 ? (
          <div className="cat-grid">
            {items.map((item) => (
              <OpportunityCard key={item.id} opportunity={item} accent={accent} />
            ))}
          </div>
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