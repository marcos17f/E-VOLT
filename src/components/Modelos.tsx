import Image from "next/image";
import { modelos, type Modelo } from "@/content/modelos";
import { BotaoWhatsApp } from "./BotaoWhatsApp";

const reservados: Modelo[] = [1, 2, 3].map((n) => ({
  id: `em-breve-${n}`,
  nome: "Em breve",
}));

function CardModelo({ m }: { m: Modelo }) {
  const completo = Boolean(m.specs?.length);
  return (
    <li
      className={`overflow-hidden rounded-3xl border border-white/10 bg-surface ${
        completo ? "md:col-span-2 lg:col-span-3" : ""
      }`}
    >
      <div className={completo ? "grid md:grid-cols-2" : ""}>
        <div className="relative flex aspect-square items-center justify-center bg-white/5">
          {m.foto ? (
            <Image
              src={m.foto}
              alt={`Moto elétrica ${m.nome}`}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          ) : (
            <span className="text-4xl" aria-hidden="true">⚡</span>
          )}
          {m.ilustrativa && (
            <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium">
              Foto ilustrativa
            </span>
          )}
        </div>
        <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
          <h3 className="text-3xl font-extrabold">{m.nome}</h3>
          {m.destaques && (
            <ul className="flex flex-wrap gap-2">
              {m.destaques.map((d) => (
                <li key={d} className="rounded-full bg-brand/15 px-3 py-1 text-sm font-medium text-brand">
                  {d}
                </li>
              ))}
            </ul>
          )}
          {m.specs && (
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {m.specs.map((s) => (
                <div key={s.rotulo}>
                  <dt className="text-white/50">{s.rotulo}</dt>
                  <dd className="font-semibold">{s.valor}</dd>
                </div>
              ))}
            </dl>
          )}
          {(m.parcelamento || m.preco) && (
            <div className="rounded-2xl border border-brand/30 bg-black/40 p-4">
              {m.parcelamento && <p className="text-xl font-bold text-brand">{m.parcelamento}</p>}
              {m.preco && <p className="mt-1 text-white/80">{m.preco}</p>}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export function Modelos({ itens = modelos }: { itens?: Modelo[] }) {
  const lista = itens.length > 0 ? itens : reservados;
  return (
    <section id="modelos" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">Catálogo</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Nossos modelos</h2>
      <p className="mt-3 text-white/70">
        Consulte modelos, cores e disponibilidade direto com a nossa equipe. Valores sujeitos a alteração.
      </p>
      <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lista.map((m) => (
          <CardModelo key={m.id} m={m} />
        ))}
      </ul>
      <div className="mt-10">
        <BotaoWhatsApp>Pedir informações no WhatsApp</BotaoWhatsApp>
      </div>
    </section>
  );
}
