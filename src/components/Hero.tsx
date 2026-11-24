"use client";

import { useEffect, useRef, useState } from "react";
import { BotaoWhatsApp } from "./BotaoWhatsApp";
import { site } from "@/content/site";
import { videosHero } from "@/content/videos";

// Os vídeos são verticais (9:16). No celular o slide ocupa a tela toda; no desktop
// o vídeo aparece inteiro em moldura vertical sobre o próprio poster desfocado.
export function Hero() {
  const total = videosHero.length;
  const [atual, setAtual] = useState(0);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  const ir = (i: number) => setAtual(((i % total) + total) % total);
  const mover = (delta: number) =>
    setAtual((a) => (((a + delta) % total) + total) % total);

  useEffect(() => {
    refs.current.forEach((v, i) => {
      if (!v) return;
      if (i === atual) {
        v.currentTime = 0;
        v.play()?.catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [atual]);

  return (
    <section
      className="relative isolate min-h-[100svh] overflow-hidden bg-black"
      aria-roledescription="carrossel"
      aria-label="Vídeos da E-VOLT"
    >
      {videosHero.map((v, i) => (
        <div
          key={v.src}
          aria-hidden={i !== atual}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === atual ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 hidden scale-110 bg-cover bg-center blur-3xl md:block"
            style={{ backgroundImage: `url(${v.poster})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 md:inset-auto md:left-[calc(50%+18rem)] md:top-1/2 md:aspect-[9/16] md:h-[76vh] md:-translate-x-1/2 md:-translate-y-1/2 md:overflow-hidden md:rounded-3xl md:border md:border-white/10 md:shadow-2xl md:shadow-black/60">
            <video
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="h-full w-full object-cover"
              src={v.src}
              poster={v.poster}
              autoPlay={i === 0}
              muted
              loop={total === 1}
              playsInline
              preload={i === 0 ? "auto" : "none"}
              onEnded={() => mover(1)}
              aria-label={v.legenda}
            />
          </div>
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black via-black/55 to-black/30 md:bg-gradient-to-r md:from-black/85 md:via-black/45 md:to-transparent" />

      <div className="relative z-20 mx-auto flex min-h-[100svh] w-full max-w-6xl items-center px-4 pb-28 pt-32 sm:px-6">
        <div className="md:w-1/2">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
            {site.nome} · {site.cidade}
          </p>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            O futuro da mobilidade chegou!{" "}
            <span className="text-brand">Economia, praticidade e liberdade.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Motos elétricas para o seu dia a dia, direto de Bom Jesus – PI.
          </p>
          <div className="mt-8">
            <BotaoWhatsApp />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-30 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => mover(-1)}
          aria-label="Vídeo anterior"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-xl backdrop-blur hover:bg-brand hover:text-black"
        >
          ‹
        </button>
        <div className="flex items-center gap-2">
          {videosHero.map((v, i) => (
            <button
              key={v.src}
              type="button"
              onClick={() => ir(i)}
              aria-label={`Ir para o vídeo ${i + 1}: ${v.legenda}`}
              aria-current={i === atual ? "true" : undefined}
              className={`h-2 rounded-full transition-all ${
                i === atual ? "w-8 bg-brand" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => mover(1)}
          aria-label="Próximo vídeo"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-xl backdrop-blur hover:bg-brand hover:text-black"
        >
          ›
        </button>
      </div>
    </section>
  );
}
