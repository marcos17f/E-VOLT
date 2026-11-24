import type { ReactNode } from "react";
import { site } from "@/content/site";

export function BotaoWhatsApp({
  fixo = false,
  children = "Falar no WhatsApp",
}: {
  fixo?: boolean;
  children?: ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 font-semibold text-black shadow-lg shadow-brand/30 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={fixo ? `${base} fixed bottom-4 right-4 z-50` : base}
    >
      {children}
    </a>
  );
}
