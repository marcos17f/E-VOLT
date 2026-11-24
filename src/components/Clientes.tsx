export function Clientes() {
  return (
    <section id="clientes" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-bold sm:text-4xl">Nossos clientes</h2>
      <p className="mt-3 text-white/70">
        Cada entrega é a realização de um sonho. Veja como é a experiência.
      </p>
      <div className="mt-10 flex justify-center">
        <video
          className="w-full max-w-sm rounded-2xl border border-white/10"
          src="/videos/clientes.mp4"
          poster="/videos/clientes.jpg"
          controls
          playsInline
          preload="none"
        />
      </div>
    </section>
  );
}
