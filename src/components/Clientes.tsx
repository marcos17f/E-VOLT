import Image from "next/image";

const entregas = [
  { src: "/fotos/cliente-paris.jpg", alt: "Cliente recebendo a scooter elétrica Paris na loja E-VOLT" },
  { src: "/fotos/cliente-nprime.jpg", alt: "Cliente recebendo as chaves da moto elétrica na loja E-VOLT" },
];

// Fotos de clientes: confirmar autorização de uso de imagem com o cliente (loja) antes de publicar.
export function Clientes() {
  return (
    <section id="clientes" className="bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">Clientes</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Cada entrega, um sonho realizado</h2>
        <p className="mt-3 text-white/70">
          Clientes que já escolheram a mobilidade elétrica com a E-VOLT.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {entregas.map((e) => (
            <div key={e.src} className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
              <Image src={e.src} alt={e.alt} fill className="object-cover" sizes="(min-width: 640px) 33vw, 100vw" />
            </div>
          ))}
          <video
            className="aspect-[3/4] w-full rounded-2xl border border-white/10 object-cover"
            src="/videos/clientes.mp4"
            poster="/videos/clientes.jpg"
            controls
            playsInline
            preload="none"
          />
        </div>
      </div>
    </section>
  );
}
