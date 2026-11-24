export function Loja() {
  return (
    <section id="loja" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Conheça a loja</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Mobilidade elétrica em Bom Jesus</h2>
          <p className="mt-4 text-lg text-white/70">
            Venha conhecer os modelos de perto. Na E-VOLT você encontra:
          </p>
          <ul className="mt-6 space-y-3">
            {["Motos e scooters elétricas", "Bicicletas elétricas", "Acessórios"].map((i) => (
              <li key={i} className="flex items-center gap-3 text-lg">
                <span className="text-brand" aria-hidden="true">⚡</span>
                {i}
              </li>
            ))}
          </ul>
        </div>
        <video
          className="mx-auto w-full max-w-sm rounded-3xl border border-white/10"
          src="/videos/loja.mp4"
          poster="/videos/loja.jpg"
          controls
          playsInline
          preload="none"
        />
      </div>
    </section>
  );
}
