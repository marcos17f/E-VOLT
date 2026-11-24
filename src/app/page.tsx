import { Hero } from "@/components/Hero";
import { Beneficios } from "@/components/Beneficios";
import { Modelos } from "@/components/Modelos";
import { Parcelamento } from "@/components/Parcelamento";
import { Clientes } from "@/components/Clientes";
import { Endereco } from "@/components/Endereco";
import { Rodape } from "@/components/Rodape";
import { BotaoWhatsApp } from "@/components/BotaoWhatsApp";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Beneficios />
        <Modelos />
        <Parcelamento />
        <Clientes />
        <Endereco />
      </main>
      <Rodape />
      <BotaoWhatsApp fixo />
    </>
  );
}
