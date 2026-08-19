import { useCallback, useEffect, useState } from "react";

const FAVORITES_KEY = "oh_favorites";
// Custom event used to keep every useFavorites() instance in sync WITHIN
// the same tab. The native "storage" event only fires for OTHER tabs/
// windows -- it never fires for changes made in the same tab that wrote
// them, which is why toggling a heart on one card wasn't updating any
// other card, or the Dashboard's saved list, until enough clicks
// accidentally lined the stale state back up.
const FAVORITES_EVENT = "oh-favorites-changed";

function readFavorites(): number[] {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((n) => typeof n === "number") : [];
  } catch {
    return [];
  }
}

function writeFavorites(ids: number[]) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
  } catch {
    // localStorage unavailable (private browsing, etc.) -- fail silently
  }
  // tell every other useFavorites() instance in THIS tab to re-read
  window.dispatchEvent(new Event(FAVORITES_EVENT));
}

/**
 * useFavorites
 * ------------------------------------------------------------------
 * Persists bookmarked opportunity IDs to localStorage and keeps every
 * component using this hook in sync -- across every card, every page,
 * and every browser tab -- the instant a favorite is toggled anywhere.
 * ------------------------------------------------------------------
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>(() => readFavorites());

  useEffect(() => {
    const syncFromStorage = () => setFavorites(readFavorites());

    // same-tab updates: any other card/page toggling a favorite right now
    window.addEventListener(FAVORITES_EVENT, syncFromStorage);
    // cross-tab updates: this app open in another tab/window
    const handleStorage = (e: StorageEvent) => {
      if (e.key === FAVORITES_KEY) syncFromStorage();
    };
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener(FAVORITES_EVENT, syncFromStorage);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const isFavorite = useCallback((id: number) => favorites.includes(id), [favorites]);

  const toggleFavorite = useCallback((id: number) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id];
      writeFavorites(next);
      return next;
    });
  }, []);

  return { favorites, isFavorite, toggleFavorite };
}