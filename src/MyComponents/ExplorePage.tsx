import React, { useEffect, useMemo, useState } from "react";
import BackgroundPage from "./BackgroundPage";
import SideNavBar from "./SideNavBar";
import OpportunityCard from "./OpportunityCard";
import { OPPORTUNITIES } from "../TsFiles/Opportunitiesdata.ts";
import { CATEGORY_ACCENTS } from "../TsFiles/Categoryaccents.ts";
import { useFavorites } from "../TsFiles/Usefavorites.ts";
import "../CssFiles/Background.css";
import "../CssFiles/ExplorePage.css";

const NAME_KEY = "oh_user_name";

type DeadlineFilter = "all" | "dated" | "rolling";

const ExplorePage: React.FC = () => {
  const [name, setName] = useState("");
  const [savedFlash, setSavedFlash] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const [query, setQuery] = useState("");
  const [deadlineFilter, setDeadlineFilter] = useState<DeadlineFilter>("all");

  const { favorites } = useFavorites();

  // load saved name on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(NAME_KEY);
      if (stored) setName(stored);
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  const handleSaveName = () => {
    if (name.trim().length === 0) {
      alert("Please enter your name before saving.");
      return;
    }
    try {
      localStorage.setItem(NAME_KEY, name.trim());
    } catch {
      /* localStorage unavailable */
    }
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 1800);
  };

  const favoriteItems = useMemo(
    () => OPPORTUNITIES.filter((o) => favorites.includes(o.id)),
    [favorites]
  );

  // search + deadline filter now scoped to the saved list, not all opportunities
  const filteredFavorites = useMemo(() => {
    let results = favoriteItems;

    const q = query.trim().toLowerCase();
    if (q.length > 0) {
      results = results.filter((o) =>
        [o.title, o.organization, o.type, o.category, o.country]
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
  }, [favoriteItems, query, deadlineFilter]);

  const handleToggleFavoritesView = () => {
    setShowFavorites((v) => {
      const next = !v;
      if (!next) {
        // reset search/filter state when the panel closes
        setQuery("");
        setDeadlineFilter("all");
      }
      return next;
    });
  };

  return (
    <div className="dash-page">
      <BackgroundPage />
      <SideNavBar />

      <main className="dash-main">
        <div className={`dash-stage ${showFavorites ? "dash-stage-split" : ""}`}>
          {showFavorites && (
            <section className="dash-favorites">
              <h2 className="dash-favorites-title">Saved Opportunities</h2>

              {favoriteItems.length > 0 && (
                <div className="dash-search-row dash-search-row-compact">
                  <div className="dash-search-input-wrap">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search your saved opportunities..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>

                  <select
                    className="dash-deadline-filter"
                    value={deadlineFilter}
                    onChange={(e) => setDeadlineFilter(e.target.value as DeadlineFilter)}
                    aria-label="Filter saved opportunities by deadline"
                  >
                    <option value="all">All deadlines</option>
                    <option value="dated">Has a set deadline</option>
                    <option value="rolling">Rolling / not specified</option>
                  </select>
                </div>
              )}

              {favoriteItems.length > 0 ? (
                filteredFavorites.length > 0 ? (
                  <div className="dash-favorites-grid">
                    {filteredFavorites.map((item) => (
                      <OpportunityCard
                        key={item.id}
                        opportunity={item}
                        accent={CATEGORY_ACCENTS[item.category]}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="dash-search-empty">
                    No saved opportunities match that search or filter.
                  </p>
                )
              ) : (
                <div className="dash-favorites-empty">
                  <div className="dash-favorites-empty-icon">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
                    </svg>
                  </div>
                  <p>
                    Nothing saved yet. Tap the heart on any opportunity card to
                    bookmark it here.
                  </p>
                </div>
              )}
            </section>
          )}

          <div className="dash-profile-wrap">
            <div className="dash-profile-card">
              <span className="dash-profile-eyebrow">Welcome</span>
              <label htmlFor="dash-name-input" className="dash-profile-label">
                What should we call you?
              </label>
              <input
                id="dash-name-input"
                type="text"
                className="dash-profile-input"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSaveName()}
              />
              <button type="button" className="dash-profile-save" onClick={handleSaveName}>
                {savedFlash ? "Saved ✓" : "Save"}
              </button>
            </div>

            <button
              type="button"
              className={`dash-heart-toggle ${showFavorites ? "dash-heart-toggle-active" : ""}`}
              onClick={handleToggleFavoritesView}
              aria-pressed={showFavorites}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill={showFavorites ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
              </svg>
              <span>{showFavorites ? "Hide saved" : `View saved (${favorites.length})`}</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExplorePage;