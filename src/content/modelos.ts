export type Modelo = {
  id: string;
  nome: string;
  foto?: string;
  preco?: string;
  parcelamento?: string;
  specs?: { rotulo: string; valor: string }[];
  fichaCompleta?: { rotulo: string; valor: string }[];
  destaques?: string[];
  selo?: string; // indica imagem provisória (IA ou foto do fabricante), trocar pela foto real da loja
};

// Dados do X20 copiados do anúncio oficial da E-VOLT no Instagram (29/10/2026).
// Preços podem mudar: confirmar com o cliente antes de publicar. Novos modelos entram aqui.
type FichaNprime = {
  motor: string;
  autonomia: string;
  velocidade: string;
  capacidade: string;
  bateria: string;
  peso: string;
  freios?: string;
  pneus: string;
  dimensoes: string;
  entreEixos?: string;
  controlador?: string;
};

// Ficha oficial: nprimemotor.com.br/varejo/<modelo>/ (consultada em 24/11/2026).
// A autonomia é anunciada pelo fabricante e varia com percurso, carga e condições de uso.
function nprime(id: string, nome: string, f: FichaNprime): Modelo {
  const opcional = (rotulo: string, valor?: string) => (valor ? [{ rotulo, valor }] : []);
  return {
    id,
    nome,
    foto: `/nprime/${id}.jpg`,
    selo: "Foto do fabricante",
    specs: [
      { rotulo: "Motor", valor: f.motor },
      { rotulo: "Autonomia", valor: f.autonomia },
      { rotulo: "Velocidade máxima", valor: f.velocidade },
      { rotulo: "Capacidade", valor: f.capacidade },
      { rotulo: "Fabricante", valor: "NPrime Motor" },
    ],
    fichaCompleta: [
      { rotulo: "Bateria", valor: f.bateria },
      { rotulo: "Peso", valor: f.peso },
      ...opcional("Freios", f.freios),
      { rotulo: "Pneus", valor: f.pneus },
      { rotulo: "Dimensões", valor: f.dimensoes },
      ...opcional("Entre-eixos", f.entreEixos),
      ...opcional("Controlador", f.controlador),
      { rotulo: "Garantia", valor: "1 ano no motor e módulo" },
    ],
  };
}

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
  // New Bike 1000W: preço do story promocional da loja ("de R$ 7.200 por R$ 6.900 à vista"). Só o motor consta na legenda.
  {
    id: "new-bike",
    nome: "New Bike 1000W",
    foto: "/fotos/new-bike-promo.jpg",
    preco: "R$ 6.900,00 à vista (de R$ 7.200,00)",
    specs: [{ rotulo: "Motor", valor: "1000W" }],
  },
  // Espaço provisório: imagem gerada por IA só para dar vida ao site. Trocar pelos modelos reais da loja.
  {
    id: "scooter-retro",
    nome: "Scooter retrô",
    foto: "/ia/scooter-retro.jpg",
    selo: "Imagem ilustrativa (IA)",
  },
  // Linha NPrime Motor (fabricante visto nas fotos e reels da loja). Confirmar com a loja quais modelos estão disponíveis.
  nprime("brisa", "Brisa", { motor: "500W", autonomia: "até 40 km", velocidade: "30 km/h", capacidade: "até 120 kg", bateria: "48 V · 12 Ah", peso: "30 kg", pneus: "Sem câmara · 2.5-10", dimensoes: "1.450 × 620 × 1.020 mm" }),
  nprime("brutal", "Brutal", { motor: "1000W", autonomia: "até 90 km", velocidade: "32 km/h", capacidade: "até 150 kg", bateria: "72 V · 35 Ah", peso: "86 kg", freios: "Disco dianteiro e traseiro", pneus: "Sem câmara · 100/80-12", dimensoes: "1.920 × 770 × 1.160 mm", entreEixos: "1.300 mm", controlador: "12 MOSFETs" }),
  nprime("fuling", "Fuling", { motor: "1000W", autonomia: "até 75 km", velocidade: "32 km/h", capacidade: "até 150 kg", bateria: "Chumbo-ácido · 72 V 20 Ah", peso: "55 kg", freios: "Disco dianteiro e traseiro", pneus: "Sem câmara · 3.0-10", dimensoes: "1.735 × 720 × 1.070 mm", entreEixos: "1.260 mm", controlador: "12 MOSFETs" }),
  nprime("impacto", "Impacto", { motor: "1000W", autonomia: "até 75 km", velocidade: "32 km/h", capacidade: "até 150 kg", bateria: "Chumbo-ácido · 72 V 20 Ah", peso: "64 kg", freios: "Disco dianteiro e traseiro", pneus: "Sem câmara · 3.0-10", dimensoes: "1.830 × 780 × 1.130 mm", entreEixos: "1.300 mm", controlador: "12 MOSFETs" }),
  nprime("ling-yue", "Ling Yue", { motor: "1000W", autonomia: "até 75 km", velocidade: "32 km/h", capacidade: "até 150 kg", bateria: "Chumbo-ácido · 72 V 20 Ah", peso: "55 kg", freios: "Tambor dianteiro e traseiro", pneus: "Sem câmara · 3.0-10", dimensoes: "1.695 × 740 × 1.030 mm", entreEixos: "1.190 mm", controlador: "12 MOSFETs" }),
  nprime("q-star-ii", "Q-Star II", { motor: "650W", autonomia: "até 55 km", velocidade: "30 km/h", capacidade: "150 kg", bateria: "Chumbo-ácido · 72 V 20 Ah", peso: "70 kg", freios: "Dianteiro a disco, traseiro a tambor / EBS", pneus: "Sem câmara · 3.0-8", dimensoes: "1.570 × 750 × 1.050 mm", controlador: "15 MOSFETs" }),
  nprime("trovao", "Trovão", { motor: "1000W", autonomia: "até 75 km", velocidade: "32 km/h", capacidade: "até 150 kg", bateria: "Chumbo-ácido · 72 V 20 Ah", peso: "66 kg", freios: "Disco dianteiro e traseiro", pneus: "Sem câmara · 3.0-10", dimensoes: "1.780 × 810 × 1.090 mm", entreEixos: "1.300 mm", controlador: "12 MOSFETs" }),
  nprime("vast-universe", "Vast Universe", { motor: "1000W", autonomia: "até 75 km", velocidade: "32 km/h", capacidade: "150 kg", bateria: "Chumbo-ácido · 72 V 20 Ah", peso: "69 kg", freios: "Disco dianteiro e traseiro", pneus: "Sem câmara · 3.0-10", dimensoes: "1.790 × 740 × 1.090 mm", entreEixos: "1.300 mm", controlador: "12 MOSFETs" }),
];
