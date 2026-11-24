import { BotaoWhatsApp } from "./BotaoWhatsApp";

export function Parcelamento() {
  return (
    <section id="parcelamento" className="bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">Condições</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Parcelamento</h2>
        <p className="mt-4 max-w-2xl text-lg text-white/70">
          Realize o sonho da sua moto elétrica sem pesar no bolso. Exemplo no X20:
        </p>
        <p className="mt-4 text-3xl font-extrabold text-brand sm:text-4xl">
          12x de R$ 938,00 sem juros
        </p>
        <p className="mt-2 text-white/70">
          ou R$ 9.900,00 à vista. Fale com a gente para conhecer as condições atuais dos demais modelos.
        </p>
        <div className="mt-8">
          <BotaoWhatsApp>Simular no WhatsApp</BotaoWhatsApp>
        </div>
      </div>
    </section>
  );
}
