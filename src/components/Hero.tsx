"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { BotaoWhatsApp } from "./BotaoWhatsApp";
import { site } from "@/content/site";

const INTERVALO_MS = 6000;

type Foto = { src: string; alt: string; selo?: string };

function Selo({ children }: { children: ReactNode }) {
  return (
    <span className="absolute left-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-xs font-medium backdrop-blur">
      {children}
    </span>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{children}</p>;
}

function Botao({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:border-brand hover:text-brand"
    >
      {children}
    </a>
  );
}

/** Slide padrão: texto à esquerda, foto em moldura à direita. */
function SlideFoto({
  kicker,
  titulo,
  texto,
  foto,
  acoes,
}: {
  kicker: string;
  titulo: string;
  texto: string;
  foto: Foto;
  acoes: ReactNode;
}) {
  return (
    <div className="grid items-center gap-8 md:grid-cols-2">
      <div className="order-2 md:order-1">
        <Kicker>{kicker}</Kicker>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">{titulo}</h2>
        <p className="mt-4 max-w-md text-lg text-white/75">{texto}</p>
        <div className="mt-6 flex flex-wrap gap-3">{acoes}</div>
      </div>
      <figure className="relative order-1 mx-auto aspect-[4/3] w-full max-w-md overflow-hidden md:max-w-[21rem] rounded-3xl border border-white/10 shadow-2xl shadow-black/60 md:order-2 md:aspect-[4/5]">
        <Image src={foto.src} alt={foto.alt} fill priority={false} className="object-cover" sizes="(min-width: 768px) 336px, 100vw" />
        {foto.selo && <Selo>{foto.selo}</Selo>}
      </figure>
    </div>
  );
}

function Etiqueta({ nome, de, por, className }: { nome: string; de?: string; por: string; className: string }) {
  return (
    <div
      className={`absolute z-10 -skew-x-6 rounded-lg border-2 border-brand/70 bg-gradient-to-b from-[#0b2a16] to-black px-3 py-2 text-center shadow-[0_10px_30px_-6px_rgba(34,197,94,0.45)] sm:px-4 ${className}`}
    >
      <p className="text-[11px] font-extrabold uppercase tracking-wide text-white/85 sm:text-xs">{nome}</p>
      {de && <p className="text-[11px] text-white/60 line-through">de {de}</p>}
      <p className="text-2xl font-black italic leading-none text-brand sm:text-3xl">{por}</p>
      <p className="text-[10px] font-semibold uppercase text-white/70">à vista</p>
    </div>
  );
}

/** Banner de campanha: título em relevo, motos recortadas sobre o cenário e etiquetas de preço, como nas promoções de loja. */
function SlideBlack() {
  return (
    <div className="grid items-center gap-6 md:grid-cols-[0.9fr_1.1fr]">
      <div>
        <h1 className="font-black uppercase italic leading-[0.88] tracking-tight">
          <span className="block bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-6xl text-transparent [filter:drop-shadow(0_2px_0_#9ca3af)_drop-shadow(0_4px_0_#6b7280)_drop-shadow(0_6px_0_#374151)_drop-shadow(0_16px_18px_rgba(0,0,0,0.7))] sm:text-7xl lg:text-8xl">
            Black
          </span>{" "}
          <span className="block bg-gradient-to-b from-lime-300 to-brand bg-clip-text text-4xl text-transparent [filter:drop-shadow(0_2px_0_#15803d)_drop-shadow(0_4px_0_#166534)_drop-shadow(0_6px_0_#14532d)_drop-shadow(0_0_24px_rgba(34,197,94,0.55))] sm:text-6xl lg:text-7xl">
            da E-VOLT
          </span>
        </h1>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-xl border border-white/15 bg-black/85 px-5 py-3 shadow-xl transition hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <span className="block text-2xl font-black uppercase italic text-white">Já começou</span>
          <span className="block text-xs font-medium text-white/80">
            Quero aproveitar a Black da E-VOLT <span className="font-bold text-brand">&gt;&gt;&gt;&gt;&gt;</span>
          </span>
        </a>
      </div>

      <div className="relative mx-auto h-[20rem] w-full max-w-xl sm:h-[25rem] md:max-w-none lg:h-[28rem]">
        <Image
          src="/fotos/new-bike-recorte.webp"
          alt="Duas New Bike 1000W, uma vermelha e uma verde, na loja E-VOLT"
          width={738}
          height={623}
          className="absolute bottom-6 left-0 h-auto w-[50%] drop-shadow-[0_18px_22px_rgba(0,0,0,0.65)]"
          sizes="(min-width: 768px) 280px, 45vw"
        />
        <Image
          src="/ia/x20-recorte.webp"
          alt="Moto elétrica X20 estilo citycoco vinho"
          width={907}
          height={835}
          className="absolute bottom-10 right-0 h-auto w-[56%] drop-shadow-[0_18px_22px_rgba(0,0,0,0.65)]"
          sizes="(min-width: 768px) 320px, 50vw"
        />
        <Etiqueta nome="New Bike 1000W" de="R$ 7.200" por="R$ 6.900" className="bottom-0 left-[4%]" />
        <Etiqueta nome="X20 · 1000W" por="R$ 9.900" className="bottom-0 right-[6%]" />
        <span className="absolute right-0 top-0 z-10 rounded-full bg-black/70 px-3 py-1 text-xs font-medium backdrop-blur">
          Imagem ilustrativa (IA) · X20
        </span>
      </div>
    </div>
  );
}

const slides: { chave: string; conteudo: ReactNode }[] = [
  { chave: "black", conteudo: <SlideBlack /> },
  {
    chave: "nprime",
    conteudo: (
      <SlideFoto
        kicker="Ficha técnica completa"
        titulo="Linha NPrime Motor: 8 modelos para o seu dia a dia"
        texto="De 500W a 1000W e autonomia de até 90 km (Brutal). Confira motor, bateria, peso e dimensões de cada modelo."
        foto={{ src: "/nprime/brutal.jpg", alt: "NPrime Brutal vermelha e preta em showroom", selo: "Foto do fabricante" }}
        acoes={
          <>
            <BotaoWhatsApp>Falar no WhatsApp</BotaoWhatsApp>
            <Botao href="#modelos">Ver modelos</Botao>
          </>
        }
      />
    ),
  },
  {
    chave: "parcelamento",
    conteudo: (
      <SlideFoto
        kicker="O futuro da mobilidade chegou!"
        titulo="Economia, praticidade e liberdade."
        texto="Troque o posto de gasolina pela tomada e parcele a sua moto elétrica."
        foto={{
          src: "/ia/lifestyle.jpg",
          alt: "Jovem sorridente pilotando uma scooter elétrica retrô branca em uma rua de cidade do interior",
          selo: "Imagem ilustrativa (IA)",
        }}
        acoes={
          <>
            <BotaoWhatsApp>Simular no WhatsApp</BotaoWhatsApp>
            <Botao href="#parcelamento">Ver condições</Botao>
          </>
        }
      />
    ),
  },
  {
    chave: "loja",
    conteudo: (
      <SlideFoto
        kicker="Visite a loja"
        titulo="Venha conhecer a E-VOLT em Bom Jesus"
        texto={`${site.endereco} · ${site.referencia}.`}
        foto={{ src: "/ia/scooter-retro.jpg", alt: "Scooter elétrica retrô branca em loja moderna", selo: "Imagem ilustrativa (IA)" }}
        acoes={
          <>
            <Botao href="#endereco">Como chegar</Botao>
            <BotaoWhatsApp>Falar no WhatsApp</BotaoWhatsApp>
          </>
        }
      />
    ),
  },
];

export function Hero() {
  const total = slides.length;
  const [atual, setAtual] = useState(0);
  const [pausado, setPausado] = useState(false);

  const mover = (delta: number) => setAtual((a) => (((a + delta) % total) + total) % total);
  const ir = (i: number) => setAtual(((i % total) + total) % total);

  useEffect(() => {
    const menosMovimento = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (pausado || menosMovimento) return;
    const id = setInterval(() => mover(1), INTERVALO_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pausado, atual]);

  return (
    <section
      aria-roledescription="carrossel"
      aria-label="Banners promocionais"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(false)}
      className="relative isolate overflow-hidden bg-[#070707] bg-[radial-gradient(ellipse_70%_60%_at_75%_40%,rgba(34,197,94,0.16),transparent_65%)]"
    >
      <div
        data-fundo-black
        data-ativo={atual === 0 ? "true" : "false"}
        aria-hidden="true"
        className={`absolute inset-0 -z-10 transition-opacity duration-700 ${atual === 0 ? "opacity-100" : "opacity-0"}`}
      >
        <Image src="/ia/fundo-black.jpg" alt="" fill priority className="object-cover opacity-70" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/60" />
      </div>
      <div className="grid">
        {slides.map((s, i) => (
          <div
            key={s.chave}
            data-slide
            role="group"
            aria-roledescription="slide"
            aria-label={`Banner ${i + 1} de ${total}`}
            aria-hidden={i !== atual ? "true" : "false"}
            inert={i !== atual}
            className={`col-start-1 row-start-1 mx-auto flex w-full max-w-6xl items-center px-4 pb-16 pt-28 transition-all duration-700 sm:px-6 ${
              i === atual ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-6 opacity-0"
            }`}
          >
            <div className="w-full">{s.conteudo}</div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-5 z-30 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => mover(-1)}
          aria-label="Banner anterior"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl backdrop-blur transition hover:bg-brand hover:text-black"
        >
          ‹
        </button>
        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.chave}
              type="button"
              onClick={() => ir(i)}
              aria-label={`Ir para o banner ${i + 1}`}
              aria-current={i === atual ? "true" : undefined}
              className={`h-2 rounded-full transition-all ${i === atual ? "w-8 bg-brand" : "w-2 bg-white/35 hover:bg-white/70"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => mover(1)}
          aria-label="Próximo banner"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl backdrop-blur transition hover:bg-brand hover:text-black"
        >
          ›
        </button>
      </div>
    </section>
  );
}
