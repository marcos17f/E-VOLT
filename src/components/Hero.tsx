import { BotaoWhatsApp } from "./BotaoWhatsApp";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="/videos/inauguracao.mp4"
        poster="/videos/inauguracao.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/60 to-black/30" />
      <div className="mx-auto w-full max-w-5xl px-4 py-24 sm:px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
          {site.nome} · {site.cidade}
        </p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
          O futuro da mobilidade chegou!{" "}
          <span className="text-brand">
            Economia, praticidade e liberdade.
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80">
          Motos elétricas para o seu dia a dia, direto de Bom Jesus – PI.
        </p>
        <div className="mt-8">
          <BotaoWhatsApp />
        </div>
      </div>
    </section>
  );
}
