import * as React from "react";

/**
 * Original scene artwork, built from the site's own arch motif.
 *
 * Everything here is drawn rather than photographed, for three reasons: no
 * licensed photography ships with the project, generic campus stock is the
 * fastest way to make a site look templated, and arches let the illustrations
 * carry the same signature as the layout. Each scene fills its container and
 * crops like a photograph, so swapping one for a real image later is a single
 * element change.
 */

/** A semicircular topped arch: the shape the whole brand is built from. */
function arch(x: number, y: number, w: number, h: number) {
  const r = w / 2;
  return `M${x},${y + r} A${r},${r} 0 0 1 ${x + w},${y + r} L${x + w},${y + h} L${x},${y + h} Z`;
}

type SceneProps = { accent?: string; className?: string; id?: string };

const INK = "#101823";
const PAPER = "#f5f7fa";
const AMBER = "#f0a93c";

function Frame({
  id,
  accent = "#2b5f92",
  className,
  children,
  glow = { x: 392, y: 74, r: 36 },
}: SceneProps & { children: React.ReactNode; glow?: { x: number; y: number; r: number } | null }) {
  const uid = id ?? "sc";
  return (
    <svg
      viewBox="0 0 480 300"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor={INK} />
          <stop offset="58%" stopColor={accent} stopOpacity="0.92" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.62" />
        </linearGradient>
        <radialGradient id={`${uid}-glow`}>
          <stop offset="0%" stopColor={AMBER} stopOpacity="0.95" />
          <stop offset="45%" stopColor={AMBER} stopOpacity="0.32" />
          <stop offset="100%" stopColor={AMBER} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-fade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={INK} stopOpacity="0" />
          <stop offset="100%" stopColor={INK} stopOpacity="0.55" />
        </linearGradient>
      </defs>

      <rect width="480" height="300" fill={`url(#${uid}-sky)`} />

      {/* fine grid, the same one the layout uses */}
      <g stroke={PAPER} strokeOpacity="0.055" strokeWidth="1">
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="300" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="480" y2={i * 40} />
        ))}
      </g>

      {glow ? <circle cx={glow.x} cy={glow.y} r={glow.r * 3} fill={`url(#${uid}-glow)`} /> : null}
      {glow ? <circle cx={glow.x} cy={glow.y} r={glow.r} fill={AMBER} fillOpacity="0.85" /> : null}

      {children}

      <rect y="215" width="480" height="85" fill={`url(#${uid}-fade)`} />
    </svg>
  );
}

/* --------------------------------------------------------------- campus */

export function CampusScene({ accent = "#2b5f92", className, id = "campus" }: SceneProps) {
  const back = [
    [10, 150, 62, 150],
    [86, 120, 78, 180],
    [178, 138, 58, 162],
    [250, 104, 92, 196],
    [356, 146, 66, 154],
    [436, 128, 56, 172],
  ] as const;
  const front = [
    [-10, 186, 96, 114],
    [100, 168, 70, 132],
    [186, 196, 110, 104],
    [310, 176, 82, 124],
    [404, 200, 88, 100],
  ] as const;

  return (
    <Frame id={id} accent={accent} className={className}>
      <g fill={PAPER} fillOpacity="0.1">
        {back.map(([x, y, w, h], i) => (
          <path key={i} d={arch(x, y, w, h)} />
        ))}
      </g>
      <g fill={INK} fillOpacity="0.42">
        {front.map(([x, y, w, h], i) => (
          <path key={i} d={arch(x, y, w, h)} />
        ))}
      </g>
      {/* lit windows */}
      <g fill={AMBER} fillOpacity="0.72">
        {[
          [24, 224],
          [52, 224],
          [126, 210],
          [212, 232],
          [240, 232],
          [268, 232],
          [336, 214],
          [364, 214],
          [430, 236],
          [458, 236],
        ].map(([x, y], i) => (
          <path key={i} d={arch(x, y, 12, 26)} />
        ))}
      </g>
      {/* corvids */}
      <g stroke={PAPER} strokeOpacity="0.5" strokeWidth="2.2" fill="none" strokeLinecap="round">
        <path d="M78,58 q8,-7 16,0 q8,-7 16,0" />
        <path d="M120,38 q6,-5 12,0 q6,-5 12,0" />
        <path d="M150,70 q5,-4 10,0 q5,-4 10,0" />
      </g>
    </Frame>
  );
}

/* -------------------------------------------------------------- library */

export function LibraryScene({ accent = "#0f7490", className, id = "library" }: SceneProps) {
  const books = [
    [0, 34, 9], [12, 44, 7], [22, 28, 11], [36, 40, 8], [47, 50, 6],
    [56, 32, 10], [69, 46, 9], [81, 36, 7],
  ] as const;

  return (
    <Frame id={id} accent={accent} className={className} glow={{ x: 240, y: 62, r: 26 }}>
      {/* the great arched window */}
      <path d={arch(150, 40, 180, 230)} fill={PAPER} fillOpacity="0.07" stroke={PAPER} strokeOpacity="0.2" strokeWidth="2" />
      <path d={arch(172, 62, 136, 186)} fill={AMBER} fillOpacity="0.08" />
      <g stroke={PAPER} strokeOpacity="0.16" strokeWidth="1.5">
        <line x1="240" y1="62" x2="240" y2="248" />
        <line x1="172" y1="150" x2="308" y2="150" />
        <line x1="172" y1="200" x2="308" y2="200" />
      </g>

      {/* shelves of books, left and right */}
      {[18, 366].map((ox, s) => (
        <g key={s} transform={`translate(${ox} 0)`}>
          {[150, 200, 250].map((shelfY, r) => (
            <g key={r}>
              <rect x="0" y={shelfY} width="96" height="4" fill={PAPER} fillOpacity="0.22" />
              {books.map(([bx, bh, bw], i) => (
                <rect
                  key={i}
                  x={bx}
                  y={shelfY - bh}
                  width={bw}
                  height={bh}
                  rx="1.5"
                  fill={i % 3 === 0 ? AMBER : PAPER}
                  fillOpacity={i % 3 === 0 ? 0.62 : 0.3}
                />
              ))}
            </g>
          ))}
        </g>
      ))}
    </Frame>
  );
}

/* ----------------------------------------------------------- graduation */

export function GraduationScene({ accent = "#2b5f92", className, id = "grad" }: SceneProps) {
  return (
    <Frame id={id} accent={accent} className={className} glow={{ x: 240, y: 118, r: 30 }}>
      {/* rays out of the doorway */}
      <g stroke={AMBER} strokeOpacity="0.22" strokeWidth="2">
        {Array.from({ length: 11 }).map((_, i) => {
          const a = (-90 + (i - 5) * 13) * (Math.PI / 180);
          return (
            <line
              key={i}
              x1="240"
              y1="170"
              x2={240 + Math.cos(a) * 200}
              y2={170 + Math.sin(a) * 200}
            />
          );
        })}
      </g>
      <path d={arch(176, 92, 128, 208)} fill={PAPER} fillOpacity="0.1" stroke={PAPER} strokeOpacity="0.28" strokeWidth="2.5" />
      <path d={arch(198, 116, 84, 184)} fill={AMBER} fillOpacity="0.16" />

      {/* mortarboard */}
      <g transform="translate(240 64)">
        <path d="M-44,0 L0,-19 L44,0 L0,19 Z" fill={PAPER} fillOpacity="0.9" />
        <path d="M-20,8 L-20,28 Q0,38 20,28 L20,8 L0,16 Z" fill={PAPER} fillOpacity="0.55" />
        <path d="M40,2 L40,30" stroke={AMBER} strokeWidth="3" strokeLinecap="round" />
        <circle cx="40" cy="33" r="4.5" fill={AMBER} />
      </g>
    </Frame>
  );
}

/* -------------------------------------------------------------- support */

export function SupportScene({ accent = "#b8442c", className, id = "support" }: SceneProps) {
  return (
    <Frame id={id} accent={accent} className={className} glow={{ x: 240, y: 70, r: 24 }}>
      <g stroke={PAPER} strokeOpacity="0.2" strokeWidth="2" strokeDasharray="6 8">
        <path d="M150,196 Q240,140 330,196" fill="none" />
      </g>
      <path d={arch(96, 132, 108, 168)} fill={PAPER} fillOpacity="0.1" stroke={PAPER} strokeOpacity="0.24" strokeWidth="2" />
      <path d={arch(276, 132, 108, 168)} fill={PAPER} fillOpacity="0.1" stroke={PAPER} strokeOpacity="0.24" strokeWidth="2" />
      <circle cx="150" cy="186" r="22" fill={AMBER} fillOpacity="0.8" />
      <circle cx="330" cy="186" r="22" fill={PAPER} fillOpacity="0.7" />
      {/* speech */}
      <g transform="translate(240 92)">
        <rect x="-46" y="-26" width="92" height="52" rx="18" fill={PAPER} fillOpacity="0.18" stroke={PAPER} strokeOpacity="0.3" strokeWidth="2" />
        <path d="M-8,26 L4,44 L14,26 Z" fill={PAPER} fillOpacity="0.18" />
        <g fill={AMBER} fillOpacity="0.85">
          <circle cx="-18" cy="0" r="5" />
          <circle cx="0" cy="0" r="5" />
          <circle cx="18" cy="0" r="5" />
        </g>
      </g>
    </Frame>
  );
}

/* -------------------------------------------------------------- funding */

export function FundingScene({ accent = "#8a5f14", className, id = "funding" }: SceneProps) {
  const steps = [
    [120, 232, 68],
    [200, 196, 68],
    [280, 156, 68],
  ] as const;

  return (
    <Frame id={id} accent={accent} className={className} glow={{ x: 356, y: 88, r: 28 }}>
      <path d={arch(64, 96, 120, 204)} fill={PAPER} fillOpacity="0.07" stroke={PAPER} strokeOpacity="0.16" strokeWidth="2" />
      {steps.map(([x, y, w], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={300 - y} rx="6" fill={PAPER} fillOpacity={0.14 + i * 0.07} />
          <circle cx={x + w / 2} cy={y - 24} r={15} fill={AMBER} fillOpacity={0.55 + i * 0.16} />
          <path
            d={`M${x + w / 2 - 5},${y - 24} h10 M${x + w / 2},${y - 30} v12`}
            stroke={INK}
            strokeOpacity="0.5"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
      ))}
      <path d="M130,150 Q240,90 350,120" stroke={AMBER} strokeOpacity="0.5" strokeWidth="2.5" fill="none" strokeDasharray="5 7" />
    </Frame>
  );
}

/* ------------------------------------------------------------ interview */

export function InterviewScene({ accent = "#0f7490", className, id = "interview" }: SceneProps) {
  return (
    <Frame id={id} accent={accent} className={className} glow={{ x: 96, y: 66, r: 24 }}>
      <path d={arch(150, 76, 180, 224)} fill={PAPER} fillOpacity="0.08" stroke={PAPER} strokeOpacity="0.22" strokeWidth="2.5" />
      {/* two people across a table, reduced to shapes */}
      <g fill={PAPER} fillOpacity="0.55">
        <circle cx="196" cy="168" r="20" />
        <path d={arch(168, 196, 56, 48)} />
      </g>
      <g fill={AMBER} fillOpacity="0.75">
        <circle cx="286" cy="168" r="20" />
        <path d={arch(258, 196, 56, 48)} />
      </g>
      <rect x="150" y="244" width="180" height="8" rx="4" fill={PAPER} fillOpacity="0.4" />
      {/* quote marks */}
      <g fill={PAPER} fillOpacity="0.3">
        <path d="M356,104 q0,-22 22,-26 l0,10 q-12,3 -12,16 l12,0 l0,24 l-22,0 Z" />
        <path d="M392,104 q0,-22 22,-26 l0,10 q-12,3 -12,16 l12,0 l0,24 l-22,0 Z" />
      </g>
    </Frame>
  );
}

/* --------------------------------------------------------------- career */

export function CareerScene({ accent = "#b8442c", className, id = "career" }: SceneProps) {
  const nodes = [
    [70, 236],
    [160, 194],
    [250, 208],
    [336, 140],
    [420, 108],
  ] as const;

  return (
    <Frame id={id} accent={accent} className={className} glow={{ x: 420, y: 76, r: 26 }}>
      <path d={arch(30, 150, 96, 150)} fill={PAPER} fillOpacity="0.07" />
      <path d={arch(354, 116, 96, 184)} fill={PAPER} fillOpacity="0.07" />
      <polyline
        points={nodes.map(([x, y]) => `${x},${y}`).join(" ")}
        fill="none"
        stroke={AMBER}
        strokeOpacity="0.6"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === nodes.length - 1 ? 13 : 8}
          fill={i === nodes.length - 1 ? AMBER : PAPER}
          fillOpacity={i === nodes.length - 1 ? 0.95 : 0.6}
        />
      ))}
    </Frame>
  );
}

/* ----------------------------------------------------------------- city */

export function CityScene({ accent = "#2b5f92", className, id = "city" }: SceneProps) {
  const towers = [
    [12, 170, 54, 130],
    [78, 128, 46, 172],
    [136, 190, 62, 110],
    [210, 142, 50, 158],
    [272, 176, 70, 124],
    [354, 120, 44, 180],
    [410, 184, 66, 116],
  ] as const;

  return (
    <Frame id={id} accent={accent} className={className} glow={{ x: 72, y: 62, r: 28 }}>
      <g fill={INK} fillOpacity="0.4">
        {towers.map(([x, y, w, h], i) => (
          <path key={i} d={arch(x, y, w, h)} />
        ))}
      </g>
      <g fill={AMBER} fillOpacity="0.6">
        {towers.map(([x, y, w], i) => (
          <rect key={i} x={x + w / 2 - 4} y={y + w / 2 + 14} width="8" height="8" rx="1" />
        ))}
      </g>
      {/* river */}
      <path d="M0,268 Q120,252 240,268 T480,262 L480,300 L0,300 Z" fill={PAPER} fillOpacity="0.1" />
    </Frame>
  );
}

export const SCENES = {
  campus: CampusScene,
  library: LibraryScene,
  graduation: GraduationScene,
  support: SupportScene,
  funding: FundingScene,
  interview: InterviewScene,
  career: CareerScene,
  city: CityScene,
} as const;

export type SceneName = keyof typeof SCENES;

export function Scene({
  name,
  accent,
  className,
  id,
}: { name: SceneName } & SceneProps) {
  const Comp = SCENES[name];
  return <Comp accent={accent} className={className} id={id ?? name} />;
}
