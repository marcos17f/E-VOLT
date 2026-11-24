import Image from "next/image";
import { BotaoWhatsApp } from "./BotaoWhatsApp";

export function Parcelamento() {
  return (
    <section id="parcelamento" className="bg-surface">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Condições</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Parcelamento</h2>
          <p className="mt-4 text-lg text-white/70">
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
        <figure className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
          <Image
            src="/ia/lifestyle.jpg"
            alt="Jovem sorridente pilotando uma scooter elétrica retrô branca em uma rua de cidade do interior"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 384px, 100vw"
          />
          <figcaption className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium">
            Imagem ilustrativa (IA)
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
