import React, { useEffect, useState } from "react";
import { PALETTE } from "../TsFiles/Palette";
import "../CssFiles/Opportunityhubhero.css";

/* Loops through three states automatically: search  -> selected  -> celebrate -> repeat */

type HeroState = "search" | "selected" | "celebrate";

const HERO_SEQUENCE: { state: HeroState; duration: number }[] = [
  { state: "search", duration: 4200 },
  { state: "selected", duration: 2200 },
  { state: "celebrate", duration: 4200 },
];

const CONFETTI_COLORS = [PALETTE.coral, PALETTE.peach, PALETTE.mint, "#5FBBEE", "#8367C7"];

function useHeroState() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const current = HERO_SEQUENCE[index];
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % HERO_SEQUENCE.length);
    }, current.duration);
    return () => clearTimeout(timer);
  }, [index]);

  return HERO_SEQUENCE[index].state;
}

const confettiPieces = Array.from({ length: 22 }).map((_, i) => ({
  id: i,
  left: Math.round(Math.random() * 94 + 2),
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  duration: (1.5 + Math.random() * 1.2).toFixed(2),
  delay: (Math.random() * 1.2).toFixed(2),
  round: Math.random() > 0.5,
}));

const OpportunityHubHero: React.FC = () => {
  const state = useHeroState();

  const statusCopy: Record<HeroState, string> = {
    search: "searching......",
    selected: "selected! ",
    celebrate: "time to celebrate!",
  };

  return (
    <div className="oh-hero-wrap">
      <div className={`oh-stage oh-state-${state}`}>
        <div className="oh-blob" />

        {/* vectors for drawing the animation */}

        {/* search-phase icons - section*/}
        <div className="oh-icon oh-icon-search">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <circle cx="10" cy="10" r="6.5" stroke="#1B1E2B" strokeWidth="2" />
            <line x1="15" y1="15" x2="20.5" y2="20.5" stroke="#1B1E2B" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="oh-icon oh-icon-bubble">
          <svg width="30" height="30" viewBox="0 0 40 40">
            <rect x="2" y="6" width="30" height="22" rx="8" fill="#1B1E2B" />
            <path d="M10 28 L10 34 L17 28 Z" fill="#1B1E2B" />
            <circle cx="11" cy="17" r="1.8" fill="#fff" />
            <circle cx="17" cy="17" r="1.8" fill="#fff" />
            <circle cx="23" cy="17" r="1.8" fill="#fff" />
          </svg>
        </div>
        <div className="oh-icon oh-icon-cube">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B1E2B" strokeWidth="1.6">
            <path d="M12 2 L21 7 L21 17 L12 22 L3 17 L3 7 Z" />
            <path d="M3 7 L12 12 L21 7" />
            <line x1="12" y1="12" x2="12" y2="22" />
          </svg>
        </div>

        {/* selected-phase icon - section */}
        <div className="oh-icon oh-icon-badge">
          <svg width="40" height="40" viewBox="0 0 52 52">
            <circle cx="26" cy="26" r="24" fill="#06D6A0" />
            <path d="M16 27 L22.5 33.5 L36 19" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>

        {/* celebrate-phase icon- section */}
        <div className="oh-icon oh-icon-spark">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#FFD166">
            <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
          </svg>
        </div>

        {/* character - section */}
        <div className="oh-character-wrap">
          <svg className="oh-character" viewBox="0 0 220 300" xmlns="http://www.w3.org/2000/svg">
            <g id="oh-leg-left" style={{ transformOrigin: "96px 190px" }}>
              <rect x="86" y="188" width="24" height="70" rx="12" fill="#F7B8D2" />
              <rect x="82" y="250" width="34" height="18" rx="9" fill="#262837" />
            </g>
            <g id="oh-leg-right" style={{ transformOrigin: "120px 190px" }}>
              <rect x="110" y="188" width="24" height="70" rx="12" fill="#F29EC4" />
              <rect x="104" y="250" width="34" height="18" rx="9" fill="#262837" />
            </g>

            {/* dress, same silhouette coordinates as the original robe - section */}
            <path d="M78 118 Q76 165 82 196 L138 196 Q144 165 142 118 Q110 100 78 118 Z" fill="#FF7FAE" />
            <path d="M118 118 Q140 122 142 150 L134 196 L118 196 Z" fill="#E85C93" opacity="0.6" />

            <g id="oh-arm-right" style={{ transformOrigin: "82px 128px" }}>
              <rect x="58" y="122" width="22" height="66" rx="11" fill="#FF7FAE" />
              <circle cx="69" cy="188" r="12" fill="#FBE4CE" />
              <g className="oh-phone">
                <rect x="56" y="178" width="24" height="38" rx="5" fill="#2B2B38" />
                <rect x="59" y="182" width="18" height="27" rx="2" fill="#8FD6FF" />
              </g>
            </g>

            <g id="oh-arm-left" style={{ transformOrigin: "138px 128px" }}>
              <rect x="138" y="122" width="22" height="62" rx="11" fill="#E85C93" />
              <circle cx="149" cy="182" r="12" fill="#FBE4CE" />
            </g>

            <g id="oh-head-group" style={{ transformOrigin: "110px 90px" }}>
              {/* ponytail, drawn behind the face - section*/}
              <path d="M144 70 Q166 78 160 110 Q156 128 144 122 Q152 96 138 76 Z" fill="#3B2A22" />

              <circle cx="110" cy="80" r="34" fill="#FBE4CE" />

              {/* hair — same outline shape/coordinates as the original hair path, recolored - section */}
              <path
                d="M78 76 Q74 40 110 40 Q148 38 144 74 Q140 58 122 58 Q128 68 118 66 Q104 62 100 70 Q92 60 82 66 Q78 70 78 76 Z"
                fill="#3B2A22"
              />

              {/* bow - section */}
              <path d="M132 48 L142 42 L142 54 Z" fill="#FF4F8B" />
              <path d="M132 48 L122 42 L122 54 Z" fill="#FF4F8B" />
              <circle cx="132" cy="48" r="3.5" fill="#E8397A" />

              <circle cx="98" cy="84" r="8" fill="none" stroke="#262837" strokeWidth="2.4" />
              <circle cx="122" cy="84" r="8" fill="none" stroke="#262837" strokeWidth="2.4" />

              {/* eyelashes */}
              <path d="M91 78 L88 74" stroke="#262837" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M129 78 L132 74" stroke="#262837" strokeWidth="1.6" strokeLinecap="round" />

              <line x1="106" y1="84" x2="114" y2="84" stroke="#262837" strokeWidth="2.4" />

              {/* blush */}
              <circle cx="90" cy="94" r="5" fill="#FF9CBB" opacity="0.5" />
              <circle cx="130" cy="94" r="5" fill="#FF9CBB" opacity="0.5" />

              <path d="M96 100 Q110 106 124 100" stroke="#C68A63" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            </g>
          </svg>
        </div>

        {/* confetti (mounted only during celebrate) - section */}
        {state === "celebrate" && (
          <div className="oh-confetti-field">
            {confettiPieces.map((p) => (
              <span
                key={p.id}
                className="oh-confetti-piece"
                style={
                  {
                    left: `${p.left}%`,
                    background: p.color,
                    borderRadius: p.round ? "50%" : "2px",
                    animationDuration: `${p.duration}s`,
                    animationDelay: `${p.delay}s`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        )}
      </div>

      <div className={`oh-status oh-status-${state}`}>
        <span className="oh-status-dot" />
        <span>{statusCopy[state]}</span>
      </div>
    </div>
  );
};

export default OpportunityHubHero;