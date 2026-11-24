import { site, beneficios } from "./site";
import { modelos } from "./modelos";

test("links e slogan batem com a spec", () => {
  expect(site.whatsapp).toBe("https://wa.me/message/43435QYQ5CMQJ1");
  expect(site.instagram).toBe("https://www.instagram.com/evoltmobilidade/");
  expect(site.slogan).toBe(
    "O futuro da mobilidade chegou! Economia, praticidade e liberdade.",
  );
});

test("contato e endereço vêm da fachada e do Instagram da loja", () => {
  expect(site.telefone).toBe("(89) 98111-7097");
  expect(site.endereco).toContain("Rua Tabelião Raimundo José Rocha");
});

test("há 4 benefícios", () => {
  expect(beneficios).toHaveLength(4);
});

test("X20 tem os dados exatos do anúncio oficial", () => {
  const x20 = modelos.find((m) => m.id === "x20")!;
  expect(x20.nome).toBe("X20");
  expect(x20.preco).toBe("R$ 9.900,00 à vista");
  expect(x20.parcelamento).toBe("12x de R$ 938,00 sem juros");
  expect(x20.foto).toBe("/fotos/x20.jpg");
  const specs = Object.fromEntries(x20.specs!.map((s) => [s.rotulo, s.valor]));
  expect(specs["Motor"]).toBe("1000W");
  expect(specs["Bateria de lítio"]).toBe("60V / 21Ah");
  expect(specs["Autonomia"]).toBe("55 a 63 km");
  expect(specs["Velocidade máxima"]).toBe("até 32 km/h");
  expect(specs["Capacidade"]).toBe("até 220 kg");
});

// Ficha oficial: nprimemotor.com.br/varejo/<modelo>/ (consultada em 24/11/2026).
const nprimeOficial: Record<string, Record<string, string>> = {
  brisa: { Motor: "500W", Autonomia: "até 40 km", "Velocidade máxima": "30 km/h", Capacidade: "até 120 kg", Bateria: "48 V · 12 Ah", Peso: "30 kg", Pneus: "Sem câmara · 2.5-10", Dimensões: "1.450 × 620 × 1.020 mm" },
  brutal: { Motor: "1000W", Autonomia: "até 90 km", "Velocidade máxima": "32 km/h", Capacidade: "até 150 kg", Bateria: "72 V · 35 Ah", Peso: "86 kg", Freios: "Disco dianteiro e traseiro", Pneus: "Sem câmara · 100/80-12", Dimensões: "1.920 × 770 × 1.160 mm", "Entre-eixos": "1.300 mm", Controlador: "12 MOSFETs" },
  fuling: { Motor: "1000W", Autonomia: "até 75 km", "Velocidade máxima": "32 km/h", Capacidade: "até 150 kg", Bateria: "Chumbo-ácido · 72 V 20 Ah", Peso: "55 kg", Freios: "Disco dianteiro e traseiro", Pneus: "Sem câmara · 3.0-10", Dimensões: "1.735 × 720 × 1.070 mm", "Entre-eixos": "1.260 mm", Controlador: "12 MOSFETs" },
  impacto: { Motor: "1000W", Autonomia: "até 75 km", "Velocidade máxima": "32 km/h", Capacidade: "até 150 kg", Bateria: "Chumbo-ácido · 72 V 20 Ah", Peso: "64 kg", Freios: "Disco dianteiro e traseiro", Pneus: "Sem câmara · 3.0-10", Dimensões: "1.830 × 780 × 1.130 mm", "Entre-eixos": "1.300 mm", Controlador: "12 MOSFETs" },
  "ling-yue": { Motor: "1000W", Autonomia: "até 75 km", "Velocidade máxima": "32 km/h", Capacidade: "até 150 kg", Bateria: "Chumbo-ácido · 72 V 20 Ah", Peso: "55 kg", Freios: "Tambor dianteiro e traseiro", Pneus: "Sem câmara · 3.0-10", Dimensões: "1.695 × 740 × 1.030 mm", "Entre-eixos": "1.190 mm", Controlador: "12 MOSFETs" },
  "q-star-ii": { Motor: "650W", Autonomia: "até 55 km", "Velocidade máxima": "30 km/h", Capacidade: "150 kg", Bateria: "Chumbo-ácido · 72 V 20 Ah", Peso: "70 kg", Freios: "Dianteiro a disco, traseiro a tambor / EBS", Pneus: "Sem câmara · 3.0-8", Dimensões: "1.570 × 750 × 1.050 mm", Controlador: "15 MOSFETs" },
  trovao: { Motor: "1000W", Autonomia: "até 75 km", "Velocidade máxima": "32 km/h", Capacidade: "até 150 kg", Bateria: "Chumbo-ácido · 72 V 20 Ah", Peso: "66 kg", Freios: "Disco dianteiro e traseiro", Pneus: "Sem câmara · 3.0-10", Dimensões: "1.780 × 810 × 1.090 mm", "Entre-eixos": "1.300 mm", Controlador: "12 MOSFETs" },
  "vast-universe": { Motor: "1000W", Autonomia: "até 75 km", "Velocidade máxima": "32 km/h", Capacidade: "150 kg", Bateria: "Chumbo-ácido · 72 V 20 Ah", Peso: "69 kg", Freios: "Disco dianteiro e traseiro", Pneus: "Sem câmara · 3.0-10", Dimensões: "1.790 × 740 × 1.090 mm", "Entre-eixos": "1.300 mm", Controlador: "12 MOSFETs" },
};

test.each(Object.entries(nprimeOficial))("NPrime %s: ficha técnica idêntica à do fabricante", (id, esperado) => {
  const m = modelos.find((x) => x.id === id)!;
  expect(m, id).toBeDefined();
  const todas = Object.fromEntries([...(m.specs ?? []), ...(m.fichaCompleta ?? [])].map((sp) => [sp.rotulo, sp.valor]));
  for (const [rotulo, valor] of Object.entries(esperado)) expect(todas[rotulo], `${id} ${rotulo}`).toBe(valor);
  expect(todas["Fabricante"]).toBe("NPrime Motor");
  expect(m.foto).toBe(`/nprime/${id}.jpg`);
  expect(m.preco).toBeUndefined();
});

test("New Bike 1000W: preço promocional vindo do story da loja", () => {
  const m = modelos.find((x) => x.id === "new-bike")!;
  expect(m.nome).toBe("New Bike 1000W");
  expect(m.preco).toBe("R$ 6.900,00 à vista (de R$ 7.200,00)");
  expect(m.specs).toEqual([{ rotulo: "Motor", valor: "1000W" }]);
  expect(m.foto).toBe("/fotos/new-bike-promo.jpg");
});
