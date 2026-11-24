import { beneficios } from "@/content/site";

export function Beneficios() {
  return (
    <section id="beneficios" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-bold sm:text-4xl">Por que moto elétrica?</h2>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {beneficios.map((b) => (
          <li key={b.titulo} className="rounded-2xl border border-white/10 bg-surface p-6">
            <h3 className="text-lg font-semibold text-brand">{b.titulo}</h3>
            <p className="mt-2 text-white/70">{b.texto}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
