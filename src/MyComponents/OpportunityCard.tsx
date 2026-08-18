import React from "react";
import type { Opportunity } from "../TsFiles/Opportunitiesdata.ts";
import  { useFavorites } from "../TsFiles/Usefavorites.ts";
import "../CssFiles/OpportunityCard.css";

type Props = {
  opportunity: Opportunity;
  accent: string;
};

const OpportunityCard: React.FC<Props> = ({ opportunity, accent }) => {
  const { id, title, organization, type, eligibility, country, remote, funding, link, deadline } = opportunity;
  const { isFavorite, toggleFavorite } = useFavorites();
  const saved = isFavorite(id);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(id);
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="oc-card"
      style={{ "--accent": accent } as React.CSSProperties}
    >
      <div className="oc-top">
        <span className="oc-type-pill">{type}</span>
        <div className="oc-top-actions">
          <button
            type="button"
            className={`oc-heart ${saved ? "oc-heart-active" : ""}`}
            onClick={handleHeartClick}
            aria-pressed={saved}
            aria-label={saved ? "Remove from saved opportunities" : "Save this opportunity"}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
            </svg>
          </button>
          <span className="oc-arrow" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </div>

      <h3 className="oc-title">{title}</h3>
      <p className="oc-org">{organization}</p>

      <div className="oc-meta">
        <span className="oc-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20z" />
          </svg>
          {country}
        </span>
        <span className="oc-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 7h-9" />
            <path d="M14 17H5" />
            <circle cx="17" cy="17" r="3" />
            <circle cx="7" cy="7" r="3" />
          </svg>
          {remote}
        </span>
        <span className="oc-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          {funding}
        </span>
        <span className="oc-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {deadline ? new Date(deadline).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) : "Rolling / TBA"}
        </span>
      </div>

      <p className="oc-eligibility">Eligibility: {eligibility}</p>
    </a>
  );
};

export default OpportunityCard;