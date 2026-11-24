import { site } from "@/content/site";

const perguntas = [
  {
    p: "Preciso de CNH ou de emplacamento?",
    r: "O X20 é anunciado como moto que não precisa de CNH. Para os demais modelos, confirme com a nossa equipe pelo WhatsApp.",
  },
  {
    p: "Qual a autonomia do X20?",
    r: "De 55 a 63 km, com velocidade máxima de até 32 km/h e bateria de lítio 60V / 21Ah.",
  },
  {
    p: "Posso parcelar?",
    r: "Sim. O X20 sai em 12x de R$ 938,00 sem juros, ou R$ 9.900,00 à vista. Para os outros modelos, consulte as condições no WhatsApp.",
  },
  {
    p: "O que a loja vende?",
    r: "Motos e scooters elétricas, bicicletas elétricas e acessórios.",
  },
  {
    p: "Onde fica a loja?",
    r: `${site.endereco} (${site.referencia.toLowerCase()}).`,
  },
];

export function Duvidas() {
  return (
    <section id="duvidas" className="bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">FAQ</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Dúvidas frequentes</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-black/30">
          {perguntas.map((q) => (
            <details key={q.p} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {q.p}
                <span className="text-brand transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-white/70">{q.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
