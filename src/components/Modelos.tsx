import Image from "next/image";
import { modelos, type Modelo } from "@/content/modelos";
import { BotaoWhatsApp } from "./BotaoWhatsApp";

const reservados: Modelo[] = [1, 2, 3].map((n) => ({
  id: `em-breve-${n}`,
  nome: "Em breve",
}));

export function Modelos({ itens = modelos }: { itens?: Modelo[] }) {
  const lista = itens.length > 0 ? itens : reservados;
  return (
    <section id="modelos" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-bold sm:text-4xl">Nossos modelos</h2>
      <p className="mt-3 text-white/70">
        Consulte modelos, cores e disponibilidade direto com a nossa equipe.
      </p>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lista.map((m) => (
          <li key={m.id} className="overflow-hidden rounded-2xl border border-white/10 bg-surface">
            <div className="relative flex aspect-[4/3] items-center justify-center bg-white/5">
              {m.foto ? (
                <Image src={m.foto} alt={m.nome} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
              ) : (
                <span className="text-4xl" aria-hidden="true">⚡</span>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-semibold">{m.nome}</h3>
              {m.preco && <p className="mt-1 text-brand">{m.preco}</p>}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <BotaoWhatsApp>Pedir informações no WhatsApp</BotaoWhatsApp>
      </div>
    </section>
  );
}
