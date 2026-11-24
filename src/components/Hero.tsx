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

function CartaoOferta({
  foto,
  nome,
  de,
  por,
  selo,
  inclinacao,
}: {
  foto: Foto;
  nome: string;
  de?: string;
  por: string;
  selo?: string;
  inclinacao: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border-2 border-brand/60 bg-black shadow-[0_20px_50px_-10px_rgba(34,197,94,0.35)] ${inclinacao}`}
    >
      <div className="relative aspect-[4/5] sm:aspect-square">
        <Image src={foto.src} alt={foto.alt} fill className="object-cover" sizes="(min-width: 768px) 240px, 45vw" />
        {selo && <Selo>{selo}</Selo>}
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent px-3 pb-3 pt-10 text-center">
        <p className="text-xs font-bold uppercase tracking-wider text-white/80">{nome}</p>
        {de && <p className="text-xs text-white/60 line-through">de {de}</p>}
        <p className="text-2xl font-black text-brand sm:text-3xl">{por}</p>
        <p className="text-[11px] font-semibold uppercase text-white/70">à vista</p>
      </div>
    </div>
  );
}

/** Banner de campanha, no estilo das promoções de loja: palco escuro, título grande e duas motos com preço. */
function SlideBlack() {
  return (
    <div className="grid items-center gap-8 md:grid-cols-[1.05fr_1fr]">
      <div>
        <span className="inline-block -skew-x-12 border border-brand bg-black px-4 py-1 text-sm font-extrabold uppercase tracking-widest text-brand">
          Já começou
        </span>
        <h1 className="mt-4 font-black uppercase italic leading-[0.88] tracking-tight [filter:drop-shadow(0_4px_0_#14532d)_drop-shadow(0_0_26px_rgba(34,197,94,0.3))]">
          <span className="block bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-6xl text-transparent sm:text-7xl lg:text-8xl">Black</span>{" "}
          <span className="block text-3xl text-brand sm:text-5xl lg:text-6xl">da E-VOLT</span>
        </h1>
        <p className="mt-5 max-w-md text-lg text-white/80">
          Ofertas especiais em motos elétricas. Garanta a sua antes que acabe o estoque.
        </p>
        <div className="mt-6">
          <BotaoWhatsApp>Aproveitar no WhatsApp</BotaoWhatsApp>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 px-1 sm:gap-6">
        <CartaoOferta
          foto={{ src: "/fotos/new-bike-promo.jpg", alt: "Duas New Bike 1000W, uma vermelha e uma verde, na loja E-VOLT" }}
          nome="New Bike 1000W"
          de="R$ 7.200"
          por="R$ 6.900"
          inclinacao="-rotate-2"
        />
        <CartaoOferta
          foto={{ src: "/ia/x20-citycoco.jpg", alt: "Moto elétrica X20 estilo citycoco vinho" }}
          nome="X20 · 1000W"
          por="R$ 9.900"
          selo="Imagem ilustrativa (IA)"
          inclinacao="mt-6 rotate-2"
        />
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
