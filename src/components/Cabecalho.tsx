import Image from "next/image";
import { site } from "@/content/site";
import { BotaoWhatsApp } from "./BotaoWhatsApp";

const links = [
  { href: "#modelos", rotulo: "Modelos" },
  { href: "#parcelamento", rotulo: "Parcelamento" },
  { href: "#clientes", rotulo: "Clientes" },
  { href: "#endereco", rotulo: "Onde estamos" },
];

export function Cabecalho() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-3" aria-label={site.nome}>
          <Image
            src="/fotos/logo.jpg"
            alt=""
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="font-extrabold tracking-wide">
            E-<span className="text-brand">VOLT</span>
          </span>
        </a>
        <nav aria-label="Principal" className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-brand">
              {l.rotulo}
            </a>
          ))}
        </nav>
        <BotaoWhatsApp>WhatsApp</BotaoWhatsApp>
      </div>
    </header>
  );
}
