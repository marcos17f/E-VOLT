"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { linkWhatsApp } from "@/content/site";

const opcoes = [
  {
    titulo: "Falar com atendente",
    detalhe: "Tire dúvidas sobre modelos, preços e parcelamento.",
    mensagem: "Olá! Vim pelo site da E-VOLT e quero falar com um atendente.",
  },
  {
    titulo: "Agendar test ride",
    detalhe: "Marque um horário para experimentar uma moto elétrica.",
    mensagem: "Olá! Vim pelo site da E-VOLT e quero agendar um test ride.",
  },
];

function IconeWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.22-8.23 8.22Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

export function WhatsAppFlutuante() {
  const [aberto, setAberto] = useState(false);
  const raiz = useRef<HTMLDivElement>(null);
  const gatilho = useRef<HTMLButtonElement>(null);
  const primeiro = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!aberto) return;
    primeiro.current?.focus();
    const fechar = () => setAberto(false);
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        fechar();
        gatilho.current?.focus();
      }
    };
    const aoClicarFora = (e: MouseEvent) => {
      if (raiz.current && !raiz.current.contains(e.target as Node)) fechar();
    };
    document.addEventListener("keydown", aoTeclar);
    document.addEventListener("mousedown", aoClicarFora);
    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.removeEventListener("mousedown", aoClicarFora);
    };
  }, [aberto]);

  return (
    <div ref={raiz} className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {aberto && (
        <div
          id="menu-whatsapp"
          role="dialog"
          aria-label="Opções de atendimento por WhatsApp"
          className="w-[min(92vw,20rem)] overflow-hidden rounded-2xl border border-white/10 bg-[#111] text-white shadow-2xl shadow-black/70"
        >
          <div className="flex items-center gap-3 bg-brand px-4 py-3 text-black">
            <Image src="/fotos/logo.jpg" alt="" width={36} height={36} className="rounded-full" />
            <div className="flex-1">
              <p className="font-bold leading-tight">E-VOLT Mobilidade</p>
              <p className="text-xs">Como podemos ajudar?</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setAberto(false);
                gatilho.current?.focus();
              }}
              aria-label="Fechar menu de WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded-full text-xl hover:bg-black/10"
            >
              ×
            </button>
          </div>
          <ul className="space-y-2 p-3">
            {opcoes.map((o, i) => (
              <li key={o.titulo}>
                <a
                  ref={i === 0 ? primeiro : undefined}
                  href={linkWhatsApp(o.mensagem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-white/10 px-4 py-3 transition hover:border-brand hover:bg-brand/10"
                >
                  <span className="block font-semibold">{o.titulo}</span>
                  <span className="block text-sm text-white/60">{o.detalhe}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        ref={gatilho}
        type="button"
        onClick={() => setAberto((a) => !a)}
        aria-expanded={aberto}
        aria-controls="menu-whatsapp"
        aria-label="Abrir opções de WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-black shadow-lg shadow-brand/40 transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <IconeWhatsApp />
      </button>
    </div>
  );
}
