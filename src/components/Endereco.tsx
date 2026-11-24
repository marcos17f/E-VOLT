import { site } from "@/content/site";

// Endereço exato e horário pendentes com o cliente: o mapa busca a cidade por enquanto.
export function Endereco() {
  return (
    <section id="endereco" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-bold sm:text-4xl">Onde estamos</h2>
      <p className="mt-3 text-white/70">{site.cidade}</p>
      <iframe
        title="Mapa da loja E-VOLT em Bom Jesus, PI"
        src="https://www.google.com/maps?q=Bom+Jesus,+PI&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="mt-8 h-80 w-full rounded-2xl border border-white/10"
      />
    </section>
  );
}
