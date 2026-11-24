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

test("modelos NPrime Motor têm a ficha oficial do site do fabricante", () => {
  const esperado: Record<string, [string, string, string]> = {
    brisa: ["500W", "até 40 km", "até 120 kg"],
    brutal: ["1000W", "até 90 km", "até 150 kg"],
    "q-star-ii": ["650W", "até 55 km", "até 150 kg"],
    "vast-universe": ["1000W", "até 75 km", "até 150 kg"],
  };
  for (const [id, [motor, autonomia, capacidade]] of Object.entries(esperado)) {
    const m = modelos.find((x) => x.id === id)!;
    expect(m, id).toBeDefined();
    const specs = Object.fromEntries(m.specs!.map((sp) => [sp.rotulo, sp.valor]));
    expect(specs["Motor"]).toBe(motor);
    expect(specs["Autonomia"]).toBe(autonomia);
    expect(specs["Capacidade"]).toBe(capacidade);
    expect(specs["Fabricante"]).toBe("NPrime Motor");
    expect(m.foto).toBe(`/nprime/${id}.jpg`);
    expect(m.preco).toBeUndefined();
  }
});
