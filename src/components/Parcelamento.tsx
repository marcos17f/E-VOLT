import { BotaoWhatsApp } from "./BotaoWhatsApp";

export function Parcelamento() {
  return (
    <section id="parcelamento" className="bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Parcelamento</h2>
        <p className="mt-4 max-w-2xl text-lg text-white/70">
          Trabalhamos com opções de parcelamento para você realizar o sonho da
          sua moto elétrica. Fale com a gente para conhecer as condições.
        </p>
        <div className="mt-8">
          <BotaoWhatsApp>Simular no WhatsApp</BotaoWhatsApp>
        </div>
      </div>
    </section>
  );
}
