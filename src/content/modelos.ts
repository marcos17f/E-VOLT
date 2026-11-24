export type Modelo = {
  id: string;
  nome: string;
  foto?: string;
  preco?: string;
  parcelamento?: string;
  specs?: { rotulo: string; valor: string }[];
  destaques?: string[];
  ilustrativa?: boolean; // foto provisória de catálogo, trocar pela foto real da loja
};

// Dados do X20 copiados do anúncio oficial da E-VOLT no Instagram (29/10/2026).
// Preços podem mudar: confirmar com o cliente antes de publicar. Novos modelos entram aqui.
export const modelos: Modelo[] = [
  {
    id: "x20",
    nome: "X20",
    foto: "/fotos/x20.jpg",
    preco: "R$ 9.900,00 à vista",
    parcelamento: "12x de R$ 938,00 sem juros",
    specs: [
      { rotulo: "Motor", valor: "1000W" },
      { rotulo: "Bateria de lítio", valor: "60V / 21Ah" },
      { rotulo: "Autonomia", valor: "55 a 63 km" },
      { rotulo: "Velocidade máxima", valor: "até 32 km/h" },
      { rotulo: "Capacidade", valor: "até 220 kg" },
      { rotulo: "Extras", valor: "Som via Bluetooth e entrada USB" },
    ],
    destaques: ["Não paga IPVA", "Não gasta gasolina", "Não precisa de CNH"],
  },
  // Espaço provisório: foto de catálogo de terceiros só para dar vida ao site. Trocar pelos modelos reais da loja.
  {
    id: "scooter-urbana",
    nome: "Scooter urbana",
    foto: "/ilustrativas/ph-vespa-1.jpg",
    ilustrativa: true,
  },
];
