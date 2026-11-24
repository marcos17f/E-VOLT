import { site } from "@/content/site";

export function Endereco() {
  return (
    <section id="endereco" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">Visite a loja</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Onde estamos</h2>
      <div className="mt-6 grid gap-6 text-lg sm:grid-cols-2">
        <address className="not-italic text-white/80">
          {site.endereco}
          <br />
          <span className="text-white/60">{site.referencia}</span>
        </address>
        <p className="text-white/80">
          <span className="text-white/60">WhatsApp: </span>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:underline">
            {site.telefone}
          </a>
        </p>
      </div>
      <iframe
        title="Mapa da loja E-VOLT em Bom Jesus, PI"
        src={`https://www.google.com/maps?q=${encodeURIComponent(site.endereco)}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="mt-8 h-80 w-full rounded-2xl border border-white/10"
      />
    </section>
  );
}
