import { site } from "@/content/site";

export function Rodape() {
  return (
    <footer className="border-t border-white/10 px-4 pb-24 pt-10 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-white/70">
          © {new Date().getFullYear()} {site.nome} · {site.cidade}
        </p>
        <nav className="flex gap-6" aria-label="Contato">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
            Instagram
          </a>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
            WhatsApp
          </a>
        </nav>
      </div>
    </footer>
  );
}
