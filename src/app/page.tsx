import { Cabecalho } from "@/components/Cabecalho";
import { Hero } from "@/components/Hero";
import { Beneficios } from "@/components/Beneficios";
import { Modelos } from "@/components/Modelos";
import { Parcelamento } from "@/components/Parcelamento";
import { Loja } from "@/components/Loja";
import { Clientes } from "@/components/Clientes";
import { Endereco } from "@/components/Endereco";
import { Rodape } from "@/components/Rodape";
import { BotaoWhatsApp } from "@/components/BotaoWhatsApp";

export default function Home() {
  return (
    <>
      <Cabecalho />
      <main>
        <Hero />
        <Beneficios />
        <Modelos />
        <Parcelamento />
        <Loja />
        <Clientes />
        <Endereco />
      </main>
      <Rodape />
      <BotaoWhatsApp fixo />
    </>
  );
}
