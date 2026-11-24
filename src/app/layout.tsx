import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const titulo = "E-VOLT | Motos Elétricas em Bom Jesus – PI";
const descricao =
  "Motos elétricas com economia, praticidade e liberdade. Conheça os modelos, parcelamento e fale com a E-VOLT pelo WhatsApp em Bom Jesus – PI.";

export const metadata: Metadata = {
  title: titulo,
  description: descricao,
  openGraph: {
    title: titulo,
    description: descricao,
    locale: "pt_BR",
    type: "website",
    siteName: site.nome,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.nome,
  description: descricao,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bom Jesus",
    addressRegion: "PI",
    addressCountry: "BR",
  },
  sameAs: [site.instagram, site.whatsapp],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
