import { BotaoWhatsApp } from "./BotaoWhatsApp";
import { site } from "@/content/site";

const particulas = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37 + 11) % 100}%`,
  size: 3 + (i % 4) * 2,
  delay: `${(i * 0.9) % 7}s`,
  duration: `${7 + (i % 5) * 1.6}s`,
}));

const rastros = [
  { top: "26%", width: "220px", delay: "0s", duration: "2.6s" },
  { top: "38%", width: "150px", delay: "0.9s", duration: "2.1s" },
  { top: "52%", width: "260px", delay: "0.4s", duration: "3s" },
  { top: "64%", width: "180px", delay: "1.4s", duration: "2.4s" },
  { top: "72%", width: "120px", delay: "0.2s", duration: "1.9s" },
];

const raios = [0, 60, 120, 180, 240, 300];

function Roda({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="62" fill="#0b0b0b" stroke="#1f1f1f" strokeWidth="14" />
      <circle cx={cx} cy={cy} r="50" fill="none" stroke="#22c55e" strokeWidth="3" opacity=".8" />
      <g className="ev-spin" style={{ transformOrigin: `${cx}px ${cy}px` }}>
        {raios.map((a) => (
          <line
            key={a}
            x1={cx}
            y1={cy}
            x2={cx + 46 * Math.cos((a * Math.PI) / 180)}
            y2={cy + 46 * Math.sin((a * Math.PI) / 180)}
            stroke="#22c55e"
            strokeWidth="3"
            strokeLinecap="round"
            opacity=".7"
          />
        ))}
      </g>
      <circle cx={cx} cy={cy} r="9" fill="#22c55e" />
    </g>
  );
}

function Scooter() {
  return (
    <svg
      viewBox="0 0 520 340"
      role="img"
      aria-label="Ilustração de uma scooter elétrica em movimento"
      className="ev-bob relative z-10 w-full max-w-xl drop-shadow-[0_0_30px_rgba(34,197,94,0.35)]"
    >
      <defs>
        <radialGradient id="ev-luz" cx="0" cy="0.5" r="1">
          <stop offset="0" stopColor="#22c55e" stopOpacity=".65" />
          <stop offset="1" stopColor="#22c55e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ev-corpo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#262626" />
          <stop offset="1" stopColor="#101010" />
        </linearGradient>
      </defs>
      <polygon className="ev-pulse" points="410,108 520,40 520,190" fill="url(#ev-luz)" />
      <ellipse cx="260" cy="318" rx="210" ry="12" fill="#22c55e" opacity=".18" />
      <Roda cx={120} cy={250} />
      <Roda cx={400} cy={250} />
      <path d="M62 205 C70 140 150 118 212 140 L238 218 L122 218 C88 218 62 214 62 205 Z" fill="url(#ev-corpo)" stroke="#22c55e" strokeOpacity=".7" strokeWidth="2" />
      <rect x="168" y="214" width="172" height="26" rx="13" fill="#161616" stroke="#22c55e" strokeOpacity=".7" strokeWidth="2" />
      <path d="M112 134 C148 112 222 112 248 134 L244 152 L120 152 Z" fill="#2c2c2c" stroke="#22c55e" strokeOpacity=".5" strokeWidth="2" />
      <path d="M336 218 L372 100 L394 106 L362 222 Z" fill="url(#ev-corpo)" stroke="#22c55e" strokeOpacity=".7" strokeWidth="2" />
      <path d="M338 84 L398 92" stroke="#e5e5e5" strokeWidth="8" strokeLinecap="round" />
      <path d="M338 218 C352 172 444 172 458 218" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" />
      <circle className="ev-pulse" cx="399" cy="112" r="14" fill="#22c55e" />
      <polygon className="ev-bolt" points="168,168 190,168 178,188 198,188 160,230 170,196 150,196" fill="#22c55e" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="ev-hero relative isolate min-h-[100svh] overflow-hidden bg-black">
      <div className="ev-aurora absolute inset-0 -z-30" aria-hidden="true" />

      <div className="ev-particles absolute inset-0 -z-20" aria-hidden="true">
        {particulas.map((p, i) => (
          <span
            key={i}
            className="ev-particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="ev-road absolute inset-x-0 bottom-0 -z-10 h-[42%]" aria-hidden="true" />

      <div className="relative z-20 mx-auto grid min-h-[100svh] w-full max-w-6xl items-center gap-10 px-4 pb-16 pt-32 sm:px-6 md:grid-cols-2">
        <div>
          <p className="ev-in mb-4 text-sm font-semibold uppercase tracking-widest text-brand" style={{ animationDelay: "0.1s" }}>
            {site.nome} · {site.cidade}
          </p>
          <h1 className="ev-in text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl" style={{ animationDelay: "0.25s" }}>
            O futuro da mobilidade chegou!{" "}
            <span className="text-brand">Economia, praticidade e liberdade.</span>
          </h1>
          <p className="ev-in mt-4 max-w-xl text-lg text-white/80" style={{ animationDelay: "0.45s" }}>
            Motos elétricas para o seu dia a dia, direto de Bom Jesus – PI.
          </p>
          <ul className="ev-in mt-4 flex flex-wrap gap-2" style={{ animationDelay: "0.6s" }}>
            {["Economia", "Praticidade", "Liberdade"].map((t) => (
              <li key={t} className="rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand">
                {t}
              </li>
            ))}
          </ul>
          <div className="ev-in mt-6" style={{ animationDelay: "0.75s" }}>
            <BotaoWhatsApp />
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="ev-rings absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <span className="ev-ring" style={{ animationDelay: "0s" }} />
            <span className="ev-ring" style={{ animationDelay: "1.4s" }} />
            <span className="ev-ring" style={{ animationDelay: "2.8s" }} />
          </div>
          <div className="ev-streaks absolute inset-0 overflow-hidden" aria-hidden="true">
            {rastros.map((r, i) => (
              <span
                key={i}
                className="ev-streak"
                style={{ top: r.top, width: r.width, animationDelay: r.delay, animationDuration: r.duration }}
              />
            ))}
          </div>
          <Scooter />
        </div>
      </div>
    </section>
  );
}
